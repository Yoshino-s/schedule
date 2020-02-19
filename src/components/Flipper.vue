<template>
  <br v-if="char==='\n'"/>
  <em :style="style" v-else-if="sign" class="flip-char var">{{char}}</em>
  <div :style="style" v-else :class="`var flip ${direction} ${isFlipping?'go':''}`" >
    <div :class="`digital front number${numb}`"></div>
    <div :class="`digital back number${numa}`"></div>
  </div>
</template>

<script lang="ts">
import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';

@Component
export default class Flipper extends Vue {
  @Prop() private char!: string;

  @Prop() private sign!: boolean;

  @Prop() private size?: number;

  @Prop() private dark?: boolean;

  get style() {
    return {
      '--size': `${this.size||50}px`,
      '--bg-color': this.dark ? '#383838' : '#121212',
      '--tx-color': 'white',
      '--splitter-color': 'grey'
    }
  }

  private get num(): number {
    return this.sign ? 0 : parseInt(this.char, 10);
  }
  
  @Watch('num')
  numChanged(newVal: number, oldVal: number) {
    if (oldVal % 10 > newVal % 10 && newVal !== 0) {
      this.flipUp(newVal % 10);
    } else {
      this.flipDown(newVal % 10);
    }
  }

  private numb: number = this.num;

  private numa: number = this.num;

  private direction: 'up' | 'down' = 'down';

  private isFlipping = false;

  flipDown(number: number) {
    if (this.isFlipping) return;
    this.numa = number;
    this.direction = 'down';
    this.isFlipping = true;
    setTimeout(() => {
      this.numb = number;
      this.isFlipping = false;
    }, 600);
  }

  flipUp(number: number) {
    if (this.isFlipping) return;
    this.numa = number;
    this.direction = 'up';
    this.isFlipping = true;
    setTimeout(() => {
      this.isFlipping = false;
      this.numb = number;
      this.$emit('changed');
    }, 600);
  }
}
</script>
<style lang="sass">
.var
  --radius: calc( var(--size) * 0.2 )
  --height: calc( var(--size) * 2)
  --width: var(--size)

  --duration: .6s

.flip-char 
  display: inline-block
  line-height: var(--height)
  font-size: var(--height)
  font-style: normal
  vertical-align: top

.flip
  display: inline-block
  position: relative
  width: var(--width)
  height: var(--height)
  line-height: var(--height)
  font-size: calc( var(--height) * 0.7)
  color: var(--tx-color)
  text-align: center;
  font-family: "Helvetica Neua"
  &.shadow
    box-shadow: 0 0 calc( var(--size) * 0.2 ) var(--bg-color)
  &.down
    .front:before
      z-index: 3
    .back:after
      z-index: 2
      transform-origin: 50% 0%;
      transform: perspective(calc( var(--size) * 3 )) rotateX(180deg);
    .front:after,
    .back:before
      z-index: 1
    &.go
      .front:before
        transform-origin: 50% 100%;
        animation: frontFlipDown var(--duration) ease-in-out both;
        backface-visibility: hidden;
      .back:after 
        animation: backFlipDown var(--duration) ease-in-out both;
      @keyframes frontFlipDown
        0%
          transform: perspective(calc( var(--size) * 3 )) rotateX(0deg);
        100%
          transform: perspective(calc( var(--size) * 3 )) rotateX(-180deg);
      @keyframes backFlipDown 
        0%
          transform: perspective(calc( var(--size) * 3 )) rotateX(180deg);
        100%
          transform: perspective(calc( var(--size) * 3 )) rotateX(0deg);
  &.up
    .front:after
      z-index: 3
    .back:before
      z-index: 2
      transform-origin: 50% 100%
      transform: perspective(calc( var(--size) * 3 )) rotateX(-180deg)
    .front:before,
    .back::after
      z-index: 1
    &.go
      .front:after
        transform-origin: 50% 0%
        animation: frontFlipUp var(--duration) ease-in-out both
        backface-visibility: hidden
      .back:before
        animation: backFlipUp var(--duration) ease-in-out both;
      @keyframes frontFlipUp
        0%
          transform: perspective(calc( var(--size) * 3 )) rotateX(0deg);
        100%
          transform: perspective(calc( var(--size) * 3 )) rotateX(180deg);
      @keyframes backFlipUp
        0%
          transform: perspective(calc( var(--size) * 3 )) rotateX(-180deg);
        100%
          transform: perspective(calc( var(--size) * 3 )) rotateX(0deg);
  .digital
    &:before,
    &:after
      background-color: var(--tx-color)
      height: var(--width)
      width: var(--width)
      content: ""
      position: absolute
      left: 0;
      right: 0;
      background-color: var(--bg-color);
      overflow: hidden;
      box-sizing: border-box;
    &:before
      top: 0;
      bottom: var(--width);
      border-radius: var(--radius) var(--radius) 0 0;
      border-bottom: solid calc( var(--size) * 0.01 ) var(--splitter-color);
    &:after
      top: var(--width);
      bottom: 0;
      border-radius: 0 0 var(--radius) var(--radius);
      border-top: solid calc( var(--size) * 0.01 ) var(--splitter-color);
      line-height: 0;
  .number0
    &:before,
    &:after
      content: "0"
  .number1
    &:before,
    &:after 
      content: "1"
  .number2
    &:before,
    &:after
      content: "2"
  .number3
    &:before,
    &:after
      content: "3"
  .number4 
    &:before,
    &:after 
      content: "4"
  .number5
    &:before,
    &:after
      content: "5"
  .number6
    &:before,
    &:after
      content: "6"
  .number7 
    &:before,
    &:after 
      content: "7"
  .number8
    &:before,
    &:after
      content: "8"
  .number9
    &:before,
    &:after
      content: "9"
</style>
