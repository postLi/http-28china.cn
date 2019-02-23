<template>
  <div id="echart"/>
</template>

<script>
export default {
  name: 'ShowEchart',
  props: {
    info: {
      type: [Object, Array],
      default: () => {}
    }
  },
  data() {
    return {
      cargoType0: {},
      cargoType1: {},
      sendEchart: [],
      sendEchart1: []
    }
  },
  watch: {
    info(n, o) {
      console.log(n, 'nnnnnnnn')
    }
  },
  mounted() {
    if (process.server) {
      return
    }
    this.info.forEach((item, index) => {
      console.log(item, 'item')
      if (item.cargoType === '0') {
        this.cargoType0 = item
        this.comInfo(this.sendEchart, this.cargoType0)
      }
    })
    this.info.forEach((item, index) => {
      if (item.cargoType === '1') {
        this.cargoType1 = item
        this.comInfo(this.sendEchart1, this.cargoType1)
      }
    })
    // let arr = this.info.filter((item, index) => {
    //   return item.cargoType === '0'
    // })
    // this.cargoType1 = this.info.filter((item, index) => {
    //   return item.cargoType === '1'
    // })

    // this.comInfo(this.sendEchart1, this.cargoType1)
    console.log(this.sendEchart1, 'this.cargoType1')
    let maxY = this.sendEchart[0]
    this.sendEchart.forEach(el => {
      if (maxY < el) {
        maxY = el
      }
    })

    let maxY1 = this.sendEchart1[0]
    this.sendEchart1.forEach(el => {
      if (maxY1 < el) {
        maxY1 = el
      }
    })

    // maxY1 *= 1.5
    // let maxY1 = this.sendEchart1[0]
    // this.sendEchart1.forEach(el => {
    //   if (maxY1 < el) {
    //     maxY1 = el
    //   }
    // })
    //
    // maxY1 *= 1.5

    // console.log(this.sendEchart1, 'this.sendEchart1')
    // let echartInfos = await echartInfo($axios, this.$route.query.id)
    // console.log(echartInfos, 'echartInfos')
    let myChart = echarts.init(document.getElementById('echart'))
    // console.log(myChart, 'myChart')
    let option = {
      title: { text: '', subtext: '' },
      tooltip: { trigger: 'axis' },
      legend: {
        data: ['重货', '轻货'],
        selected: {
          // 选中'系列1'
          重货: true,
          // 不选中'系列2'
          轻货: false
        },
        selectedMode: 'single',
        textStyle: {
          color: '#FFA657' // 值域文字颜色
        }
      },
      xAxis: {
        show: false,
        type: 'category',
        boundaryGap: false,
        data: [
          '大品牌报价',
          '优质承运商报价',
          '行业均价（高点）',
          '行业均价（低点）',
          '本承运商价'
        ]
      },
      yAxis: {
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
        type: 'value',
        max: [maxY * 1.2, maxY1 * 1.2]
      },
      series: [
        {
          name: '重货',
          type: 'line',
          lineStyle: {
            normal: { color: 'rgba(255,173,101, 0.5)' }
          },
          data: this.sendEchart,
          markPoint: {
            symbol: 'image:///images/cy/11wk.png',
            symbolOffset: [0, '-70%'],
            symbolSize: [82, 62],
            itemStyle: {
              color: 'white' //需要把原本的样式变成白色，字体才能正常显示
            },
            label: {
              position: 'insideTop',
              formatter: function(params) {
                // console.log(params)
                return `{color1|${params.name}}\n{color0|${params.value}万}`
              },
              rich: {
                color0: {
                  fontSize: 14,
                  align: 'center',
                  fontWeight: 'normal',
                  color: '#FF7836',
                  padding: [0, 0, 6, 0]
                },
                color1: {
                  fontSize: 12,
                  align: 'center',
                  fontWeight: 'normal',
                  color: '#6F6F6F',
                  padding: [0, 0, 6, 0]
                }
              }
            },
            data: [
              {
                name: '',
                type: 'min'
              }
            ]
          },
          itemStyle: {
            normal: {
              color: '#6F6F6F',
              opacity: 1
            },
            emphasis: {
              color: '#6F6F6F'
            }
          },
          symbolSize: 6,
          hoverAnimation: false, //拐点不要动画
          symbol: 'circle',
          label: {
            show: true,
            position: 'bottom',
            textStyle: { color: '#6F6F6F' },
            formatter: function(params) {
              let c0
              if (params.dataIndex <= 1) {
                c0 = 'color1'
              } else {
                c0 = 'color0'
              }
              if (params.dataIndex === 4) {
                return ``
              } else {
                return `{${c0}|${params.value}元/公斤}\n{color2|${params.name}}`
              }
            },
            rich: {
              color0: { fontSize: 18, align: 'center', color: '#FF7836' },
              color1: { fontSize: 18, align: 'center', color: '#6F6F6F' },
              color2: {
                color: '#413A43',
                align: 'center',
                fontSize: 14,
                padding: [5, 5, 5, 5]
              }
            }
          },
          tooltip: { show: false }
        },
        {
          name: '重货',
          type: 'line',
          lineStyle: {
            normal: { color: 'rgba(255,173,101, 1)' }
          },
          areaStyle: {
            normal: {
              origin: 'end',
              color: 'rgba(255,161,77, 0.5)'
            }
          },
          data: [null, null, 239, 194],
          tooltip: { show: false }
        },
        {
          name: '重货',
          type: 'line',
          markLine: {
            name: 'xfdsvffds',
            symbol: ['circle', 'none'],
            lineStyle: {
              normal: { color: 'rgba(255,173,101, 1)' }
            },
            label: {
              show: true,
              position: 'end',
              formatter: function(params) {
                // console.log(params)
                if (params.dataIndex === 1) {
                  return `{style|建议价格区间}`
                }
              },
              rich: {
                style: {
                  fontSize: 15,
                  padding: [0, 110, 0, 0],
                  color: '#FF7836'
                }
              }
            },
            data: [
              [
                { coord: ['行业均价（高点）', 239] },
                { coord: ['行业均价（高点）', maxY] }
              ],
              [
                { coord: ['行业均价（低点）', 194] },
                { coord: ['行业均价（低点）', maxY] }
              ]
            ]
          }
        },
        {
          name: '轻货',
          type: 'line',
          lineStyle: {
            normal: { color: 'rgba(255,173,101, 0.5)' }
          },
          data: this.sendEchart1,
          markPoint: {
            symbol: 'image:///images/cy/11wk.png',
            symbolOffset: [0, '-70%'],
            symbolSize: [82, 62],
            itemStyle: {
              color: 'white' //需要把原本的样式变成白色，字体才能正常显示
            },
            label: {
              position: 'insideTop',
              formatter: function(params) {
                // console.log(params)
                return `{color1|${params.name}}\n{color0|${params.value}万}`
              },
              rich: {
                color0: {
                  fontSize: 14,
                  align: 'center',
                  fontWeight: 'normal',
                  color: '#FF7836',
                  padding: [0, 0, 6, 0]
                },
                color1: {
                  fontSize: 12,
                  align: 'center',
                  fontWeight: 'normal',
                  color: '#6F6F6F',
                  padding: [0, 0, 6, 0]
                }
              }
            },
            data: [
              {
                name: '',
                type: 'min'
              }
            ]
          },
          itemStyle: {
            normal: {
              color: '#6F6F6F',
              opacity: 1
            },
            emphasis: {
              color: '#6F6F6F'
            }
          },
          symbolSize: 6,
          hoverAnimation: false, //拐点不要动画
          symbol: 'circle',
          label: {
            show: true,
            position: 'bottom',
            textStyle: { color: '#6F6F6F' },
            formatter: function(params) {
              let c0
              if (params.dataIndex <= 1) {
                c0 = 'color1'
              } else {
                c0 = 'color0'
              }
              if (params.dataIndex === 4) {
                return ``
              } else {
                return `{${c0}|${params.value}万}\n{color2|${params.name}}`
              }
            },
            rich: {
              color0: { fontSize: 18, align: 'center', color: '#FF7836' },
              color1: { fontSize: 18, align: 'center', color: '#6F6F6F' },
              color2: {
                color: '#413A43',
                align: 'center',
                fontSize: 14,
                padding: [5, 5, 5, 5]
              }
            }
          },
          tooltip: { show: false }
        },
        {
          name: '轻货',
          type: 'line',
          lineStyle: {
            normal: { color: 'rgba(255,173,101, 1)' }
          },
          areaStyle: {
            normal: {
              origin: 'end',
              color: 'rgba(255,161,77, 0.5)'
            }
          },
          data: [null, null, 958.17, 785.53],
          tooltip: { show: false }
        },
        {
          name: '轻货',
          type: 'line',
          markLine: {
            name: 'xfdsvffds',
            symbol: ['circle', 'none'],
            lineStyle: {
              normal: { color: 'rgba(255,173,101, 1)' }
            },
            label: {
              show: true,
              position: 'end',
              formatter: function(params) {
                // console.log(params)
                if (params.dataIndex === 1) {
                  return `{style|建议价格区间}`
                }
              },
              rich: {
                style: {
                  fontSize: 15,
                  padding: [0, 110, 0, 0],
                  color: '#FF7836'
                }
              }
            },
            data: [
              [
                { coord: ['行业均价（高点）', 239] },
                { coord: ['行业均价（高点）', maxY1] }
              ],
              [
                { coord: ['行业均价（低点）', 194] },
                { coord: ['行业均价（低点）', maxY1] }
              ]
            ]
          }
        }
      ]
    }

    // option.series[0].data = Object.assign([], this.sendEchart)
    // this.sendEchar = option.series.data
    // console.log(option.series[0].data, 'option.series.data', this.sendEchart)
    myChart.setOption(option)
  },
  methods: {
    comInfo(sendEchart, cargoType) {
      // console.log(cargoType, 'cargoType')
      sendEchart[0] = cargoType.famousBrandPrice
      sendEchart[1] = cargoType.highAveragePrice
      sendEchart[2] = cargoType.highQualityPrice
      sendEchart[3] = cargoType.lowAveragePrice
      sendEchart[4] = {
        value: 15,
        symbol: 'image:///images/cy/12d.png',
        symbolSize: 20
      }
    }
  }
}
</script>

<style scoped>
</style>
