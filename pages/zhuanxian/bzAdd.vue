<template>
  <LllDialog
    :is-show="showDiv"
    @close="closeDialog"

    class="showechart">

    <div
      slot="header"
      style="font-size:20px;color:red;padding:20px 0"><span/></div>
    <div
      class="dialog_publish_main"
      slot="main">
      <div
        style="text-align:center;display: inline-block;    margin: 20px 210px;"
        class="firstShow"
        v-if="showEchartDiv==false">
        <p style="font-size:30px;margin-bottom:30px">稍等。。。</p>
        <div style="font-size:18px">
          <p>28平台智能运输大数据中心正在为您核算</p>
          <p>从<span style="color:red">广州</span>至<span style="color:red">深圳</span></p>
          <p>全网优质承运商的最新报价</p>
        </div>
   
        <div style="margin-top: 15px; width:300px">
          <div class="layui-progress">
            <div 
              class="layui-progress-bar" 
              lay-percent="100%"/>
          </div>
        </div>
  
  
  
 

        <div style="text-align: center;">
          <span style="border: 1px solid #3333;width: 50px;height: 50px;display: inline-block;line-height: 50px;text-align: center;border-radius: 30px;margin-top:20px">{{ seconds }}s</span>
        </div>
        <!-- <ShowEchart :info="LineeEchartInfo"/> -->
      </div>
      <div
        v-else
      >
        <div class="showEchart">
          <span>价格参考</span><span>大数据智能模型精准定价，28智能平台指导定价</span>
          <p>广州→深圳专线</p>
          <!-- <ShowEchart :info="LineeEchartInfo"/> -->
          <p>江苏大本赢物流有限公司的报价低于92.6%的承运商，承运价格低于行业均价低点，此数据源于平台用户提报的历史数据统计，仅供参考！</p>
        </div>
      </div>
    </div>
    <div slot="footer"/>
  </LllDialog>
</template>
<script>
import LllDialog from '../../components/lllDialog'
// import ShowEchart from './lllshowEchart'
export default {
  name: 'Add',
  components: {
    LllDialog
    // ShowEchart
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    types: {
      type: Number,
      default: 1
    },
    info: {
      type: [Array, Object],
      default: () => {}
    },
    infopj: {
      type: [Array, Object],
      default: () => {}
    },
    infopjs: {
      type: [Array, Object],
      default: () => {}
    }
  },
  head: {
    link: [
      { rel: 'stylesheet', href: '/line/css/article_wlzx.css' },
      { rel: 'stylesheet', href: '/line/css/price.css' },
      // { rel: 'stylesheet', href: '/gongsi/css/jquery.pagination.css' },
      { rel: 'stylesheet', href: '/css/WTMap.css' },
      { rel: 'stylesheet', href: '/layer/dist/css/layui.css' }
    ],
    script: [
      // { src: '../js/jquery.pagination.min.js' },
      // { src: 'https://echarts.baidu.com/dist/echarts.min.js' }
    ]
  },
  data() {
    return {
      assessLevel: '',
      indexPl: 3,
      list: [],
      seconds: 5,
      stopTimer: '',
      LineeEchartInfo: [],
      showEchartDiv: false
    }
  },

  computed: {
    showDiv(n) {
      return this.show
    }
  },
  watch: {
    showDiv(n) {
      if (n == true) {
        layui.use('element', function() {
          var $ = layui.jquery,
            element = layui.element //Tab的切换功能，切换事件监听等，需要依赖element模块

          //触发事件
          var active = {
            setPercent: function() {
              //设置50%进度
              element.progress('demo', '50%')
            },
            loading: function(othis) {
              var DISABLED = 'layui-btn-disabled'
              if (othis.hasClass(DISABLED)) return

              //模拟loading
              var n = 0,
                timer = setInterval(function() {
                  n = (n + Math.random() * 10) | 0
                  if (n > 100) {
                    n = 100
                    clearInterval(timer)
                    othis.removeClass(DISABLED)
                  }
                  element.progress('demo', n + '%')
                }, 300 + Math.random() * 300)

              othis.addClass(DISABLED)
            }
          }

          $('.site-demo-active').on('click', function() {
            var othis = $(this),
              type = $(this).data('type')
            active[type] ? active[type].call(this, othis) : ''
          })
        })
        this.seconds = 5
        this.LineeEchartInfo = this.info
        console.log(this.LineeEchartInfo, 'LineeEchartInfo')
        clearInterval(this.stopTimer)
        this.stopTimer = setInterval(() => {
          this.seconds--
          if (this.seconds < 1) {
            clearInterval(this.stopTimer)
            this.showEchartDiv = true
          }
        }, 1000)
      }
    },
    types(n, o) {},
    info(n, o) {
      this.LineeEchartInfo = n
      console.log(n, 'nnn1')
    }
  },
  mounted() {},
  methods: {
    closeDialog() {
      this.$emit('close')
      clearInterval(this.stopTimer)
      this.showEchartDiv = false
      // this.$emit('update:show', false)

      //把绑定的弹窗数组 设为false即可关闭弹窗
    }
  }
}
</script>

<style lang="scss">
.showechart {
  .dialog-content {
    width: 800px !important;
    height: 600px !important;
    // top: 30% !important;
  }
}
</style>
