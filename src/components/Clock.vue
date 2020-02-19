<template>
  <div class="clock">
    <Flipper :dark="dark" :size="size" v-for="(c,i) in str" :key="i" :char="c" :sign="'0'>c||c>'9'"/>
  </div>
</template>

<script lang="ts">
import {
  Component, Prop, Vue,
} from 'vue-property-decorator';
import Flipper from './Flipper.vue';

function dateFormat(fmt: string, date: Date):string {
  let res = fmt;
  let ret;
  const opt = {
    'Y+': date.getFullYear().toString(),
    'm+': (date.getMonth() + 1).toString(),
    'd+': date.getDate().toString(),
    'H+': date.getHours().toString(),
    'M+': date.getMinutes().toString(),
    'S+': date.getSeconds().toString(),
    's+': date.getMilliseconds().toString(),
  };
  Object.keys(opt).forEach((k) => {
    const key = k as keyof typeof opt;
    ret = new RegExp(`(${k})`).exec(fmt);
    if (ret) {
      res = res.replace(ret[1], (ret[1].length === 1) ? (opt[key]) : (opt[key].padStart(ret[1].length, '0')));
    }
  });
  return res;
}

@Component({ components: { Flipper } })
export default class Clock extends Vue {
  @Prop() format!: string;
  @Prop() size?: number;
  @Prop() dark?: boolean;

  num = 6;

  date = new Date();

  get str(): Array<string> {
    return Array.from(dateFormat(this.format, this.date));
  }

  mounted() {
    setInterval(() => { this.date = new Date(); }, 1);
  }
}
</script>
<style lang="sass" scoped>
.clock
  text-align: center;
  font-size: 20px;
  >*
    margin: 0 0.5rem;
</style>
