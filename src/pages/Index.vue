<template>
  <q-page class="flex flex-center">
    <div class="row q-col-gutter-md" style="min-width: 40%; margin: 10px auto; max-width: 90%">
      <div class="col-12 col-sm q-gutter-y-md" ref="left">
        <q-card style="width: 100%">
          <q-card-section>
            选择你的课表
            <a href="/statics/课表.xlsx">(样例)</a>
            <q-file v-model="tab" label="课表" dense filled @input="upload" accept=".xls, .xlsx" />或者从链接导入(需要支持跨域且为https)
            <q-input label="链接" filled dense v-model="tabLink">
              <template v-slot:after>
                <q-btn icon="done" round flat @click="uploadLink"/>
              </template>
            </q-input>
          </q-card-section>
        </q-card>
        <q-card style="width: 100%">
          <q-card-section>
            <Clock :dark="$q.dark.isActive" :size="clockSize" format="HH:MM" style="height: 100% font-size: 2px"/>
          </q-card-section>
        </q-card>
        <q-table
          style="width: 100%"
          v-if="data.length"
          dense
          separator="vertical"
          title="课表"
          :rows-per-page-options="[0, 5]"
          :data="data"
          :columns="columns"
          row-key="name"
        >
          <template v-slot:header-cell="props">
            <q-th
              :props="props"
              @click="switchTo(props)"
              :style="getStyle(props)"
            >{{ props.col.label }}</q-th>
          </template>
          <template v-slot:body-cell="props">
            <q-td :props="props" @click="switchTo(props)" :style="getStyle(props)">{{props.value}}</q-td>
          </template>
        </q-table>
      </div>
      <div
        class="col-12 col-sm-4"
        v-if="schedule.courses.length"
        style="min-height: calc(100vh - 50px - 40px)"
      >
        <q-card class="row">
          <q-card-section>
            <q-timeline color="primary" layout="dense">
              <q-timeline-entry heading>{{customName}}课程</q-timeline-entry>
              <q-timeline-entry
                v-for="course in schedule.courses[day]"
                :title="course.id"
                :subtitle="course.start.format('H:mm')+'-'+course.end.format('H:mm')"
                :key="course.name"
                :color="getColor(course)"
                :icon="getIcon(course)"
              >
                <q-list v-if="course.info" dense>
                  <q-item>
                    <q-item-section>
                      <q-item-label>教师</q-item-label>
                      <q-item-label caption>{{course.info.teacher}}</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label>内容</q-item-label>
                      <q-item-label caption>{{course.info.description}}</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item v-if="Object.keys(course.info.href).length">
                    <q-item-section>
                      <q-item-label>相关链接</q-item-label>
                      <q-item-label caption>
                        <div v-for="(v, k) in course.info.href" :key="k">
                          <a :href="v">{{k}}</a>
                        </div>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-timeline-entry>
            </q-timeline>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import * as XLSX from 'xlsx';
import parseSchedule, { Schedule, TimeRange } from '../utils/parseSchedule';
import dayjs from 'dayjs';
import defaultSchedule from '../utils/def';
import Clock from '../components/Clock.vue';

const chi2Num = (s: string) => ['一','二','三','四','五'].indexOf(s)+1;
const num2Chi = (n: number) => ['一','二','三','四','五'][n-1];

type TableData = {
  id: string,
  time: string,
  timeRange: TimeRange,
  [k: number]: string,
}
type Column = {
  name: string,
  align?: string,
  label: string,
  field: string
}

type Props = {
  row?: TableData,
  col: Column,
  cols?: Column[]
}

@Component({
  components:{Clock}
})
export default class Index extends Vue {
  tab = new File([], '');
  tabLink = '/statics/课表.xlsx';
  columns = [
    { name: 'id', align: 'center', label: '节次', field: 'id' },
    { name: 'time', align: 'center', label: '时间', field: 'time' },
    { name: 'mon', align: 'center', label: '周一', field: '1' },
    { name: 'tue', align: 'center', label: '周二', field: '2' },
    { name: 'wed', align: 'center', label: '周三', field: '3' },
    { name: 'thu', align: 'center', label: '周四', field: '4' },
    { name: 'fri', align: 'center', label: '周五', field: '5' },
  ];
  data: TableData[] = [];
  day = new Date().getDay() - 1;

  currentTime = dayjs();

  schedule: Schedule = defaultSchedule;

  async uploadLink() {
    const file = await (await fetch(this.tabLink)).blob();
    await this.upload(file);
  }

  async upload(file: Blob) {
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    const e = await (new Promise<ProgressEvent<FileReader>>(res => {
      reader.onload = e => res(e);
    }));
    if(!e.target)
      throw Error('Cannot read file.');
    const data = e.target.result;
    const wb = XLSX.read(data, {
      type: 'binary'
    });
    this.schedule = parseSchedule(wb.Sheets[wb.SheetNames[0]]);
    this.parse();
  }

  clockSize = 60;

  mounted() {
    this.uploadLink();
    setInterval(() => {
      this.currentTime = dayjs();
    },1000);
    document.addEventListener('resize', () => this.resize());
    this.resize();
  }

  resize() {
    this.clockSize = parseInt(getComputedStyle(this.$refs.left as Element).width.slice(0, -2)) * 0.6 / 5;
  }

  parse() {
    const d: TableData[] = this.schedule.timeline.map(v => ({
      id: v.name,
      time: v.timeString,
      timeRange: v.time
    }));
    this.schedule.courses.forEach((v, i) => {
      v.forEach(c => {
        c.duration.forEach(du => {
          d[du][i+1] = c.id;
        })
      })
    });
    this.data = d;
  }

  getColor(course: TimeRange) {
    const time = dayjs();
    console.log(time.valueOf(),course.start.valueOf(),course.end.valueOf());
    if(time < course.start)
      return 'blue';
    if(time > course.end)
      return 'green';
    return 'red';
  }
  getIcon(course: TimeRange) {
    const time = dayjs();
    if(time < course.start)
      return 'check_box_outline_blank';
    if(time > course.end)
      return 'check_box';
    return 'play_circle_outline';
  }
  getStyle(props: Props) {
    const color = this.$q.dark.isActive ? 'rgb(50, 50, 50)' : 'rgb(230, 230, 230)';
    return {
      cursor: 'pointer',
      color: props.row ? this.getColor(props.row.timeRange) : undefined,
      'background-color': this.day === chi2Num(props.col.label.slice(-1))-1 ? color : undefined
    }
  }
  get customName(): string {
    if(this.day === new Date().getDay()-1)
      return '今日'
    return '周'+num2Chi(this.day+1);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  switchTo(props: any) {
    const n = chi2Num(props.col.label.slice(-1));
    if(n>0)
      this.day = chi2Num(props.col.label.slice(-1))-1;
  }
}
</script>

<style lang="sass" scoped>
</style>
