import * as XLSX from 'xlsx';
import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
import { stringify } from 'querystring';

dayjs.extend(customParseFormat);

class FormatError extends Error {
  constructor(message: string) {
    super('FormatError: ' + message);
  }
}

export type TimeRange = {
  start: dayjs.Dayjs,
  end: dayjs.Dayjs
}

export type TimeLine = {
  name: string,
  timeString: string,
  time: TimeRange
}[];

type CoursePart = {
  id: string,
  duration: number[]
}

type CourseInfo = {
  id: string,
  teacher: string,
  description: string,
  href: Record<string, string|undefined>;
}

export type Course = CoursePart & {
  start: dayjs.Dayjs
  end: dayjs.Dayjs
  info?: CourseInfo
}

export type Schedule = {
  timeline: TimeLine,
  courses: Course[][]
  info: CourseInfo[]
}

const posToName = (pos: XLSX.CellAddress): string => `${String.fromCharCode(65 + pos.c)}${pos.r + 1}`;
const isInRange = (pos: XLSX.CellAddress, range: XLSX.Range): boolean =>
  range.s.c <= pos.c && range.s.r <= pos.r &&
  range.e.c >= pos.c && range.e.r >= pos.r;


function getCell(sheet: XLSX.WorkSheet, pos: XLSX.CellAddress): XLSX.CellObject|null {
  const name = posToName(pos);
  let res = null;
  if (sheet[name])
    res = sheet[name];
  const range = sheet['!merges']?.find(r => isInRange(pos, r));
  if (range)
    res = sheet[posToName(range.s)];
  return res;
}

export function castTime(t: string): TimeRange|null {
  const s = t.split('-').map(s => s.trim());
  if (s.length !== 2)
    return null;
  const res = {
    start: dayjs(s[0], 'H:mm'),
    end: dayjs(s[1], 'H:mm')
  };
  if (res.start.toString() === 'Invalid Date')
    return null;
  if (res.end.toString() === 'Invalid Date')
    return null;
  return res;
}

function parseTime(sheet: XLSX.WorkSheet): TimeLine {
  let i = 0;
  const res: TimeLine = [];
  // eslint-disable-next-line no-constant-condition
  while (true) {
    i++;
    const c = getCell(sheet, { c: 0, r: i });
    if (!c||!c.w)
      break;
    const t = getCell(sheet, { c: 1, r: i });
    if (!t||!t.w)
      throw new FormatError('Missing time in ' + posToName({ c: 1, r: i }));
    const time = castTime(t.w);
    if (!time)
      throw new FormatError('Wrong time in ' + posToName({ c: 1, r: i }));
    res.push({  
      name: c.w,
      timeString: t.w,
      time: time
    });
  }
  return res;
}

function parseCourse(sheet: XLSX.WorkSheet, day?: number): CoursePart[] {
  if (!day)
    day = new Date().getDay();
  if (day <= 0 || day >= 7)
    return [];
  let i = 0;
  const course:CoursePart = {
    id: '',
    duration: new Array<number>()
  }
  const res: CoursePart[] = [];
  // eslint-disable-next-line no-constant-condition
  while (true) {
    i++;
    if (!getCell(sheet, { c: 0, r: i }))
      break;
    const c = getCell(sheet, { c: day, r: i });
    if (!c)
      continue;
    if (c.w === course.id) {
      course.duration.push(i-1);
    } else {
      if(course.id)
        res.push(Object.assign({}, course));
      course.id = c.w || i.toString();
      course.duration = [i-1];
    }
  }
  res.push(course);
  return res;
}

function parseInfo(sheet: XLSX.WorkSheet): CourseInfo[] {
  let i = 0;
  const res: CourseInfo[] = [];
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const r: CourseInfo = {
      id: '',
      teacher: '',
      description: '',
      href: {}
    };
    i++;
    let c = getCell(sheet, { c: 7, r: i });
    if (!c || !c.w)
      break;
    r.id = c.w;
    c = getCell(sheet, { c: 8, r: i });
    if (!c || !c.w)
      continue;
    r.teacher = c.w;
    c = getCell(sheet, { c: 9, r: i });
    if (!c || !c.w)
      continue;
    r.description = c.w;
    r.href = {};
    for (let j = 10;c; j += 2) {
      c = getCell(sheet, { c: j, r: i });
      if (!c || !c.w)
        break;
      const c0 = getCell(sheet, { c: j+1, r: i });
      if (!c0 || !c0.w)
        break
      r.href[c.w] = c0.w;
    }
    res.push(r);
  }
  return res;
}

export default function parseSchedule(sheet: XLSX.WorkSheet): Schedule {
  const schedule: Schedule = {
    timeline: parseTime(sheet),
    courses: [],
    info: parseInfo(sheet)
  };
  for (let i = 2; i < 7; i++) {
    const courses: Course[] = parseCourse(sheet, i).map(i => Object.assign({
      start: schedule.timeline[i.duration[0]].time.start,
      end: schedule.timeline[i.duration[i.duration.length - 1]].time.end,
      info: schedule.info.find(info => info.id === i.id)
    }, i));
    schedule.courses.push(courses);
  }
  return schedule;
}