<template>
  <ul class="footerLinks">
    <li
      v-for="(item, index) in info"
      :key="index"
    >
      <a
        :href="item.targetLinks+'?startp='+ item.startProvince+'&startc='+item.startCity+'&starta='+item.startArea+'&endp='+item.endProvince+'&endc='+item.endCity+'&enda='+item.endArea+'&carSourceType='+item.carSourceType"
        target="_blank"><span>{{ item.title }}</span></a>
        <!--<a :href="'/zhuanxian/list?startp='+ item.startProvince+'&startc='+item.startCity+'&starta='+item.startArea+'&endp='+item.endProvince+'&endc='+item.endCity+'&enda='+item.endArea"><span>{{ item.title }}</span></a>-->
    </li>
    <!--<li>-->
    <!--<span>广州到北京物流专线tyt</span><span>广州物流专线</span><span>北京物流专线</span><span>北京物流公司</span><span>广州到北京整车运输</span><span>广州车源信息</span><span>北京车源信息</span>-->
    <!--</li>-->
  </ul>
</template>

<script>
export default {
  name: 'FooterLinks',
  props: {
    info: {
      type: [Array, Object],
      default: () => {}
    }
  },
  data() {
    return {
      targetLinks: '',
      carSourceType: '',
      toLinks: ''
    }
  },
  watch: {
    info(n, o) {
      // console.log(n, 'nnnnnnnn')
    }
  },
  mounted() {
    // console.log(this.info, 'info')
    this.info.forEach(item => {
      this.carSourceType = ''
      this.targetLinks = ''

      switch (item.startProvince) {
        case null:
          item.startProvince = ''
      }
      switch (item.startCity) {
        case null:
          item.startCity = ''
      }
      switch (item.startArea) {
        case null:
          item.startArea = ''
      }
      switch (item.endProvince) {
        case null:
          item.endProvince = ''
      }
      switch (item.endCity) {
        case null:
          item.endCity = ''
      }
      switch (item.endArea) {
        case null:
          item.endArea = ''
      }
      if (item.type == '1000') {
        this.targetLinks = '/gongsi/'
      }
      if (item.type == '2000') {
        this.targetLinks = '/zhuanxian/list'
      }
      if (item.type == '3000') {
        this.targetLinks = '/cheyuan'
      }
      if (item.type == '3001') {
        this.targetLinks = '/cheyuan'
        this.carSourceType = 'AF01801'
      }
      if (item.type == '4000') {
        this.targetLinks = '/huoyuan'
      }
      if (item.type == '4001') {
        this.targetLinks = '/member/' + item.companyId + '-huo'
      }
      item.targetLinks = this.targetLinks
      item.carSourceType = this.carSourceType
    })
  },
  methods: {
    switchFn(item) {
      switch (item) {
        case null:
          item = ''
      }
    }
  }
}

// 1000物流公司列表；
//
// 2000专线列表；
//
// 3000车源列表，
// 3001回程车源列表，
// 3002空车配载车源列表，
// 3003整车运输车源列表；
//
// 4000货源列表，
// 4001物流公司主页货源列表
// /member/13910000004-huo.html
</script>

<style lang="scss">
ul.footerLinks {
  padding-bottom: 10px;
  li {
    padding-top: 20px;
    float: left;
    span {
      /*width: 126px;*/
      /*padding-right: 40px;*/
      color: #333;
      font-size: 14px;
    }
    span:first-of-type {
      padding-left: 24px;
    }
  }
}
</style>
