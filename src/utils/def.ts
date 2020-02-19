import * as dayjs from 'dayjs';

const defaultSchedule = {
  'timeline': [
    {
      'name': '第一节',
      'timeString': '8:00 - 8:45',
      'time': {
        'start': dayjs('2020-02-18T00:00:00.000Z'),
        'end': dayjs('2020-02-18T00:45:00.000Z')
      }
    },
    {
      'name': '第二节',
      'timeString': '8:55 - 9:40',
      'time': {
        'start': dayjs('2020-02-18T00:55:00.000Z'),
        'end': dayjs('2020-02-18T01:40:00.000Z')
      }
    },
    {
      'name': '第三节',
      'timeString': '10:00 - 10:45',
      'time': {
        'start': dayjs('2020-02-18T02:00:00.000Z'),
        'end': dayjs('2020-02-18T02:45:00.000Z')
      }
    },
    {
      'name': '第四节',
      'timeString': '10:55 - 11:40',
      'time': {
        'start': dayjs('2020-02-18T02:55:00.000Z'),
        'end': dayjs('2020-02-18T03:40:00.000Z')
      }
    },
    {
      'name': '第五节',
      'timeString': '13:00 - 13:45',
      'time': {
        'start': dayjs('2020-02-18T05:00:00.000Z'),
        'end': dayjs('2020-02-18T05:45:00.000Z')
      }
    },
    {
      'name': '第六节',
      'timeString': '13:55 - 14:40',
      'time': {
        'start': dayjs('2020-02-18T05:55:00.000Z'),
        'end': dayjs('2020-02-18T06:40:00.000Z')
      }
    },
    {
      'name': '第七节',
      'timeString': '15:00 - 15:45',
      'time': {
        'start': dayjs('2020-02-18T07:00:00.000Z'),
        'end': dayjs('2020-02-18T07:45:00.000Z')
      }
    },
    {
      'name': '第八节',
      'timeString': '15:55 - 16:40',
      'time': {
        'start': dayjs('2020-02-18T07:55:00.000Z'),
        'end': dayjs('2020-02-18T08:40:00.000Z')
      }
    },
    {
      'name': '第九节',
      'timeString': '18:00 - 18:45',
      'time': {
        'start': dayjs('2020-02-18T10:00:00.000Z'),
        'end': dayjs('2020-02-18T10:45:00.000Z')
      }
    },
    {
      'name': '第十节',
      'timeString': '18:55 - 19:40',
      'time': {
        'start': dayjs('2020-02-18T10:55:00.000Z'),
        'end': dayjs('2020-02-18T11:40:00.000Z')
      }
    },
    {
      'name': '第十一节',
      'timeString': '20:00 - 20:45',
      'time': {
        'start': dayjs('2020-02-18T12:00:00.000Z'),
        'end': dayjs('2020-02-18T12:45:00.000Z')
      }
    }
  ],
  'courses': [
    [
      {
        'start': dayjs('2020-02-18T00:00:00.000Z'),
        'end': dayjs('2020-02-18T01:40:00.000Z'),
        'info': {
          'id': '高数',
          'teacher': '赵涌鑫',
          'description': '微信群组功能 PPT音频',
          'href': {
            '大夏学堂': 'https://elearning.ecnu.edu.cn/webapps/blackboard/execute/modulepage/view?course_id=_6135_1&cmp_tab_id=_22693_1&mode=view'
          }
        },
        'id': '高数',
        'duration': [
          0,
          1
        ]
      },
      {
        'start': dayjs('2020-02-18T02:00:00.000Z'),
        'end': dayjs('2020-02-18T03:40:00.000Z'),
        'info': {
          'id': '算法',
          'teacher': '杜育根',
          'description': 'QQ群，直播',
          'href': {
            'QQ群': 'https://shang.qq.com/wpa/qunwpa?idkey=389d14b45b148fa44ff7cb4128407c903f93c8a3b5f604049035c9012c422e4a',
            '超星': 'https://mooc1-1.chaoxing.com/mycourse/studentcourse?courseId=206811702&clazzid=13717618&vc=1&cpi=115386427&enc=44b8ed891d69fe189b4b58e852a58bdc'
          }
        },
        'id': '算法',
        'duration': [
          2,
          3
        ]
      },
      {
        'start': dayjs('2020-02-18T05:00:00.000Z'),
        'end': dayjs('2020-02-18T06:40:00.000Z'),
        'info': {
          'id': '网球',
          'teacher': '张勇',
          'description': '大夏学堂 录播',
          'href': {}
        },
        'id': '网球',
        'duration': [
          4,
          5
        ]
      },
      {
        'start': dayjs('2020-02-18T10:00:00.000Z'),
        'end': dayjs('2020-02-18T11:40:00.000Z'),
        'info': {
          'id': '语文',
          'teacher': '陶霞波',
          'description': '大夏学堂 PPT录课+大夏学堂互动',
          'href': {}
        },
        'id': '语文',
        'duration': [
          8,
          9
        ]
      }
    ],
    [
      {
        'start': dayjs('2020-02-18T02:00:00.000Z'),
        'end': dayjs('2020-02-18T03:40:00.000Z'),
        'info': {
          'id': '离散',
          'teacher': '朱惠彪',
          'description': '爱课程 交大离散数学 并通过微信等开展学习指导',
          'href': {}
        },
        'id': '离散',
        'duration': [
          2,
          3
        ]
      },
      {
        'start': dayjs('2020-02-18T05:00:00.000Z'),
        'end': dayjs('2020-02-18T07:45:00.000Z'),
        'info': {
          'id': '近代史',
          'teacher': '吴原元',
          'description': '爱课程 录播',
          'href': {}
        },
        'id': '近代史',
        'duration': [
          4,
          5,
          6
        ]
      }
    ],
    [
      {
        'start': dayjs('2020-02-18T00:00:00.000Z'),
        'end': dayjs('2020-02-18T01:40:00.000Z'),
        'info': {
          'id': '算法实践',
          'teacher': '杜育根',
          'description': 'QQ群，直播',
          'href': {
            'QQ群': 'https://shang.qq.com/wpa/qunwpa?idkey=389d14b45b148fa44ff7cb4128407c903f93c8a3b5f604049035c9012c422e4a',
            '超星': 'https://mooc1-1.chaoxing.com/mycourse/studentcourse?courseId=206811616&clazzid=13717459&vc=1&cpi=115386427&enc=14e6c2244988dd6203434a7182e0b5b2'
          }
        },
        'id': '算法实践',
        'duration': [
          0,
          1
        ]
      },
      {
        'start': dayjs('2020-02-18T02:00:00.000Z'),
        'end': dayjs('2020-02-18T03:40:00.000Z'),
        'id': '计组/高数',
        'duration': [
          2,
          3
        ]
      },
      {
        'start': dayjs('2020-02-18T10:00:00.000Z'),
        'end': dayjs('2020-02-18T12:45:00.000Z'),
        'info': {
          'id': 'Linux',
          'teacher': '叶健',
          'description': '超星泛雅 ppt音频',
          'href': {}
        },
        'id': 'Linux',
        'duration': [
          8,
          9,
          10
        ]
      }
    ],
    [
      {
        'start': dayjs('2020-02-18T02:00:00.000Z'),
        'end': dayjs('2020-02-18T03:40:00.000Z'),
        'info': {
          'id': '高数',
          'teacher': '赵涌鑫',
          'description': '微信群组功能 PPT音频',
          'href': {
            '大夏学堂': 'https://elearning.ecnu.edu.cn/webapps/blackboard/execute/modulepage/view?course_id=_6135_1&cmp_tab_id=_22693_1&mode=view'
          }
        },
        'id': '高数',
        'duration': [
          2,
          3
        ]
      },
      {
        'start': dayjs('2020-02-18T05:00:00.000Z'),
        'end': dayjs('2020-02-18T06:40:00.000Z'),
        'info': {
          'id': '算法',
          'teacher': '杜育根',
          'description': 'QQ群，直播',
          'href': {
            'QQ群': 'https://shang.qq.com/wpa/qunwpa?idkey=389d14b45b148fa44ff7cb4128407c903f93c8a3b5f604049035c9012c422e4a',
            '超星': 'https://mooc1-1.chaoxing.com/mycourse/studentcourse?courseId=206811702&clazzid=13717618&vc=1&cpi=115386427&enc=44b8ed891d69fe189b4b58e852a58bdc'
          }
        },
        'id': '算法',
        'duration': [
          4,
          5
        ]
      },
      {
        'start': dayjs('2020-02-18T07:00:00.000Z'),
        'end': dayjs('2020-02-18T08:40:00.000Z'),
        'info': {
          'id': '实训',
          'teacher': '张民',
          'description': '大夏学堂上以反转课堂的方式 ppt音频',
          'href': {
            '大夏学堂': 'https://elearning.ecnu.edu.cn/webapps/blackboard/execute/modulepage/view?course_id=_7585_1&cmp_tab_id=_24945_1&mode=view'
          }
        },
        'id': '实训',
        'duration': [
          6,
          7
        ]
      }
    ],
    [
      {
        'start': dayjs('2020-02-18T00:00:00.000Z'),
        'end': dayjs('2020-02-18T01:40:00.000Z'),
        'info': {
          'id': '英语',
          'teacher': '朱正',
          'description': '大夏学堂，批改网 PPT等教学材料阅读、在线作文提交批改、在线讨论交流指导',
          'href': {
            '大夏学堂': 'https://elearning.ecnu.edu.cn/webapps/blackboard/execute/modulepage/view?course_id=_7282_1&cmp_tab_id=_24358_1&mode=view'
          }
        },
        'id': '英语',
        'duration': [
          0,
          1
        ]
      },
      {
        'start': dayjs('2020-02-18T02:00:00.000Z'),
        'end': dayjs('2020-02-18T03:40:00.000Z'),
        'info': {
          'id': '离散',
          'teacher': '朱惠彪',
          'description': '爱课程 交大离散数学 并通过微信等开展学习指导',
          'href': {}
        },
        'id': '离散',
        'duration': [
          2,
          3
        ]
      },
      {
        'start': dayjs('2020-02-18T05:00:00.000Z'),
        'end': dayjs('2020-02-18T06:40:00.000Z'),
        'info': {
          'id': '计组',
          'teacher': '刘献忠',
          'description': '大夏学堂 ppt音频，录播',
          'href': {
            '大夏学堂': 'https://elearning.ecnu.edu.cn/webapps/blackboard/execute/modulepage/view?course_id=_7621_1&cmp_tab_id=_25003_1&mode=view'
          }
        },
        'id': '计组',
        'duration': [
          4,
          5
        ]
      },
      {
        'start': dayjs('2020-02-18T07:00:00.000Z'),
        'end': dayjs('2020-02-18T08:40:00.000Z'),
        'info': {
          'id': '服务器',
          'teacher': '金健',
          'description': '超星泛雅 录播、PPT和在线操作辅导相结合',
          'href': {
            '超星': 'https://mooc1-1.chaoxing.com/mycourse/studentcourse?courseId=206450526&clazzid=12999545&vc=1&cpi=115386427&enc=cc26e148a757ae0b1e79b742c08ccc90'
          }
        },
        'id': '服务器',
        'duration': [
          6,
          7
        ]
      }
    ]
  ],
  'info': [
    {
      'id': '高数',
      'teacher': '赵涌鑫',
      'description': '微信群组功能 PPT音频',
      'href': {
        '大夏学堂': 'https://elearning.ecnu.edu.cn/webapps/blackboard/execute/modulepage/view?course_id=_6135_1&cmp_tab_id=_22693_1&mode=view'
      }
    },
    {
      'id': '语文',
      'teacher': '陶霞波',
      'description': '大夏学堂 PPT录课+大夏学堂互动',
      'href': {}
    },
    {
      'id': '网球',
      'teacher': '张勇',
      'description': '大夏学堂 录播',
      'href': {}
    },
    {
      'id': '英语',
      'teacher': '朱正',
      'description': '大夏学堂，批改网 PPT等教学材料阅读、在线作文提交批改、在线讨论交流指导',
      'href': {
        '大夏学堂': 'https://elearning.ecnu.edu.cn/webapps/blackboard/execute/modulepage/view?course_id=_7282_1&cmp_tab_id=_24358_1&mode=view'
      }
    },
    {
      'id': 'Linux',
      'teacher': '叶健',
      'description': '超星泛雅 ppt音频',
      'href': {}
    },
    {
      'id': '实训',
      'teacher': '张民',
      'description': '大夏学堂上以反转课堂的方式 ppt音频',
      'href': {
        '大夏学堂': 'https://elearning.ecnu.edu.cn/webapps/blackboard/execute/modulepage/view?course_id=_7585_1&cmp_tab_id=_24945_1&mode=view'
      }
    },
    {
      'id': '服务器',
      'teacher': '金健',
      'description': '超星泛雅 录播、PPT和在线操作辅导相结合',
      'href': {
        '超星': 'https://mooc1-1.chaoxing.com/mycourse/studentcourse?courseId=206450526&clazzid=12999545&vc=1&cpi=115386427&enc=cc26e148a757ae0b1e79b742c08ccc90'
      }
    },
    {
      'id': '近代史',
      'teacher': '吴原元',
      'description': '爱课程 录播',
      'href': {}
    },
    {
      'id': '离散',
      'teacher': '朱惠彪',
      'description': '爱课程 交大离散数学 并通过微信等开展学习指导',
      'href': {}
    },
    {
      'id': '算法实践',
      'teacher': '杜育根',
      'description': 'QQ群，直播',
      'href': {
        'QQ群': 'https://shang.qq.com/wpa/qunwpa?idkey=389d14b45b148fa44ff7cb4128407c903f93c8a3b5f604049035c9012c422e4a',
        '超星': 'https://mooc1-1.chaoxing.com/mycourse/studentcourse?courseId=206811616&clazzid=13717459&vc=1&cpi=115386427&enc=14e6c2244988dd6203434a7182e0b5b2'
      }
    },
    {
      'id': '算法',
      'teacher': '杜育根',
      'description': 'QQ群，直播',
      'href': {
        'QQ群': 'https://shang.qq.com/wpa/qunwpa?idkey=389d14b45b148fa44ff7cb4128407c903f93c8a3b5f604049035c9012c422e4a',
        '超星': 'https://mooc1-1.chaoxing.com/mycourse/studentcourse?courseId=206811702&clazzid=13717618&vc=1&cpi=115386427&enc=44b8ed891d69fe189b4b58e852a58bdc'
      }
    },
    {
      'id': '计组',
      'teacher': '刘献忠',
      'description': '大夏学堂 ppt音频，录播',
      'href': {
        '大夏学堂': 'https://elearning.ecnu.edu.cn/webapps/blackboard/execute/modulepage/view?course_id=_7621_1&cmp_tab_id=_25003_1&mode=view'
      }
    }
  ]
};

export default defaultSchedule;