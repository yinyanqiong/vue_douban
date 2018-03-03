<template>
  <div class="star">
    <div :class="starType">
      <span v-for="item in classes" :class="item" class="item_star"></span>
    </div>
  </div>
</template>
<script>
  const LENGTH = 5;
  const CLS_ON = 'on';
  const CLS_HALF = 'half';
  const CLS_OFF = 'off';
  export default {
    props:{
      size:{
        type:Number,
        default:24
      },
      score:{
        type:Number,
        default:8.5
      }
    },
    components: {},
    computed:{
      starType:function() {
        return 'star-' + this.size;
      },
      classes:function(){
        let result = [];
        let score = Math.floor(this.score * 2) / 4;
        let hasDecimal = score % 1 !== 0;
        let integer = Math.floor(score);
        for (let i = 0; i < integer; i++) {
          result.push(CLS_ON);
        }
        if (hasDecimal) {
          result.push(CLS_HALF);
        }
        while (result.length < LENGTH) {
          result.push(CLS_OFF);
        }
        return result;
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .star-48
    .item_star
      display: inline-block;
      background-repeat: no-repeat;
      width: 20px;
      height: 20px;
      margin-right: 22px;
      background-size: 20px 20px;
    .item_star
      &:last-child
        margin-right: 0;
    .on
      background-image: url('../../../static/star/star48_on@2x.png');
    .half
      background-image: url('../../../static/star/star48_half@2x.png');
    .off
      background-image: url('../../../static/star/star48_off@2x.png');

  .star-36
    .item_star
      display: inline-block;
      background-repeat: no-repeat;
      width: 15px;
      height: 15px;
      margin-right: 6px;
      background-size: 15px 15px;
      &:last-child
        margin-right: 0;
    .on
      background-image: url('../../../static/star/star36_on@2x.png');
    .half
      background-image: url('../../../static/star/star36_half@2x.png');
    .off
      background-image: url('../../../static/star/star36_off@2x.png');


  .star-24
    .item_star
      display: inline-block;
      background-repeat: no-repeat;
      width: 10px;
      height: 10px;
      margin-right: 6px;
      background-size: 10px 10px;
    &:last-child
      margin-right: 0;
    .on
      background-image: url('../../../static/star/star24_on@2x.png');
    .half
      background-image: url('../../../static/star/star24_half@2x.png');
    .off
      background-image: url('../../../static/star/star24_off@2x.png');
</style>
