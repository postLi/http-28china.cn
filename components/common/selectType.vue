<template>
  <span>
    <template v-if="type === 'single'">
      <a 
        v-if="showDefault"
        @click.stop.prevent="setVal('','', '')"
        class="all"
        :class="current === '' ? 'now' : ''" 
        href="#">不限</a>
      <a 
        v-for="(item, index) in datas"
        :key="index"
        :class="current === index ? 'now' : ''" 
        @click.stop.prevent="setVal(item.code, item.name, index)"
        :rel="item.code"
        href="#">{{ item.name }}</a>
    </template>
    <template v-else>
      1111
    </template>
    
  </span>
</template>
<script>
/**
 * 从父组件传name值则直接从后台拿数据
 * 当list有数据时，取list数据
 * code值为初始化显示选中的第几个
 * getCode表示返回的值是要取编码值，还是拿区间段的名称
 */
export default {
  props: {
    // 是否显示默认的 不限
    showDefault: {
      type: Boolean,
      default: true
    },
    // 外部传入的数据，方便一些前端自定义字段显示
    list: {
      type: Array,
      default: () => []
    },
    // 是否获取code值
    getCode: {
      type: Boolean,
      default: true
    },
    // 初始的code值
    code: {
      type: String,
      default: ''
    },
    // 要获取的字典名
    name: {
      type: String,
      default: ''
    },
    // 单个 single
    // 多个 multiple
    type: {
      type: String,
      default: 'single'
    }
  },
  data() {
    return {
      current: '',
      datas: []
    }
  },
  mounted() {
    // 先判断是否有list值
    if (process.client) {
      if (this.list.length) {
        this.datas = this.list
        this.initCurrent()
      } else if (this.name) {
        this.fetchData(this.name).then(res => {
          console.log('res:::', res)
          this.datas = res.data
          this.initCurrent()
        })
      } else {
        // 为空怎么展示？
      }
    }
  },
  methods: {
    // 获取字典数据
    fetchData(name) {
      return this.$store.dispatch('getDictList', {
        name: this.name
      })
    },
    initCurrent() {
      if (this.code) {
        let index = ''
        this.datas.forEach((el, inx) => {
          if (el.code === this.code) {
            index = inx
          }
        })
        this.current = index
      } else {
        this.current = ''
      }
    },
    setVal(code, name, index) {
      this.current = index
      let val = name.replace(/>(.*)/, '$1-').split('-')

      if (this.getCode) {
        val = code
      }
      this.$emit('input', val)
      this.$emit('change', val)
    }
  }
}
</script>
