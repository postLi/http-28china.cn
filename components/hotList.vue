<template>
  <div class="list-box-r-hot">

    <div class="zx_sx"><span class="biaozhi"/>企业月人气榜</div>
    <div
      v-if="!lineHots.length"
      class="hot_none">
      <span>没有相关企业月人气榜</span>
    </div>
    <div
      v-else
      class="hot-ul">
      <ul

      >
        <li><a
          :href="'/member/'+lineHots[0].id"
          style="display: flex;"><span class="hot-num">1</span><img
            src="/line/images/touxiang1.png"
            alt=""
            width="50"
            height="50">
          <p>{{ lineHots[0].companyName }}</p>
          <span 
            v-if="!gongsi"
            class="hot-peonum">人气值:<i>{{ lineHots[0].popularity }}</i></span></a></li>
        <li><a
          :href="'/member/'+lineHots[1].id"
          style="display: flex;"><span class="hot-num">2</span><img
            src="/line/images/touxiang2.png"
            alt=""
            width="50"
            height="50">
          <p>{{ lineHots[1].companyName }}</p><span 
            v-if="!gongsi"
            class="hot-peonum">人气值:<i>{{ lineHots[1].popularity }}</i></span></a></li>
        <li><a
          :href="'/member/'+lineHots[2].id"
          style="display: flex;"
          target="_blank"><span class="hot-num">3</span><img
            src="/line/images/touxiang3.png"
            alt=""
            width="50"
            height="50">
          <p>{{ lineHots[2].companyName }}</p><span 
            v-if="!gongsi"
            class="hot-peonum">人气值:<i>{{ lineHots[2].popularity }}</i></span></a></li>
      </ul>
      <ul
        v-if="gongsi"
        class="lastul">
        <li
          v-for="(item, index) in lineHots"
          :key="index"><a
            :href="'/member/'+item.id"
            style="display: flex;"
            target="_blank"><span class="hot-num">{{ index + 4 }}</span>
        <p>{{ item.companyName }}</p></a></li>
      </ul>
      <ul
        v-else
        class="lastul">
        <li
          v-for="(item, index) in lineHots.slice(-12)"
          :key="index"><a
            :href="'/member/'+item.id"
            style="display: flex;"
            target="_blank"><span class="hot-num">{{ index + 4 }}</span>
            <p>{{ item.companyName }}</p><span 
              class="hot-peonum"
        >人气值:<i>{{ item.popularity }}</i></span></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotList',
  props: {
    lines: {
      type: [Object, Array],
      default: () => {}
    },
    gongsi: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      lineHots: {}
    }
  },
  watch: {
    lines(n, o) {
      console.log(n, 'nnnnnnnn')
    },
    gongsi(n, o) {
      console.log(n, 'gongsi')
    }
  },
  mounted() {
    this.lineHots = this.lines
  },
  methods: {}
}
</script>

<style lang="scss">
.list-box-r-hot {
  /*min-height: 246px;*/
  /*height: auto !important;*/
  /*width: 344px;*/
  /*margin: 0px 0px 0 16px;*/
  /*float: left;*/
  margin-top: 20px;
  background: #fff;
  padding-bottom: 10px;

  .zx_sx {
    border-bottom: 2px solid #2577e3;
    margin-bottom: 1px;
    color: #2577e3;
  }
  .hot-ul {
    ul:first-of-type,
    ul:last-of-type {
      li {
        display: flex;
        padding: 20px 14px 0px 16px;
        font-size: 14px;
        .hot-num {
          width: 20px;
          height: 20px;
          background: #f65050;
          text-align: center;
          line-height: 20px;
          color: #fff;
          margin-top: 20px;
        }
        img {
          margin: 0 8px 0 15px;
        }
        p {
          margin-top: 20px;
          color: #333;
          /*padding-right: 10px;*/
          width: 138px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        span.hot-peonum {
          margin-top: 20px;
          font-size: 12px;
          padding-left: 10px;
          color: #666;
          i {
            color: #f14747;
            padding-left: 5px;
          }
        }
      }
      li:nth-child(2) {
        .hot-num {
          background: #ff8547;
        }
      }
      li:nth-child(3) {
        .hot-num {
          background: #ffac38;
        }
      }
    }
    ul.lastul {
      li {
        padding: 0px 14px 0px 16px;
        span.hot-num {
          background: #8eb9f5 !important;
        }
        p {
          /*width: 62%;*/
          padding-left: 16px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .hot-peonum {
          margin-left: 55px;
        }
      }
    }
  }
}
</style>
