<template>
  <div>
    <MemberBanner :url="'/member/images/banner_wd.jpg'" />
    <div class="main">
      <MemberSidebar />
      <div 
        id="js004" 
        class="right">
        <div class="right_bt1">
          <div class="right_bt1_1"><img src="/member/images/wd.png"><span>招聘详情</span></div>
        </div>
        <div class="recruitinfo">
          <h2>{{ info.jobTitle }}</h2>
          <div class="rec-hr"><span>基本信息</span></div>
          <ul>
            <li><span>月薪范围(元)：</span><i>{{ info.salaryBegin }}-{{ info.salaryEnd }}</i></li>
            <li><span>招聘人数：</span>{{ info.recruitNum }}</li>
            <li><span>学历要求：</span>{{ info.education }}</li>
            <li><span>工作年限：</span>{{ info.recruitNum }}</li>
            <li><span>工作地址：</span>{{ info.workProvince }}{{ info.workCity }}{{ info.workArea }}{{ info.workAddress }}</li>
            <li><span>联系人：</span>{{ info.contacts }}</li>
            <li><span>联系电话：</span>{{ info.telephone }}</li>
          </ul>
          <div class="rec-hr"><span>职位信息</span></div>
          <div class="recruitdesc">{{ info.jobInfo }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MemberBanner from '~/components/member/banner'
import MemberSidebar from '~/components/member/sidebar2'

export default {
  components: {
    MemberBanner,
    MemberSidebar
  },
  head: {
    link: [{ rel: 'stylesheet', href: '/member/css/list.css' }]
  },
  layout: 'member',
  computed: {
    info() {
      return this.$store.state.member.recruitDetail
    }
  },
  async fetch({ store, params, $axios, error, query }) {
    store.commit('member/setId', params.id)
    await Promise.all([
      store.dispatch('member/GETCOMPANYINFO', params.id).catch(err => {
        if (err.type === 'network') {
          error({ statusCode: 500, message: err.msg })
        } else {
          error({ statusCode: 404, message: err.msg })
        }
      }),
      store.dispatch('member/getRecruitDetail', query.id)
    ])
  }
}
</script>
<style lang="scss" scoped>
.recruitinfo {
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  padding: 20px 50px;
  line-height: 1.7;
  ul {
    li {
      padding-left: 8em;
      float: left;
      width: 386px;
      line-height: 41px;
      &:last-child {
        float: none;
        clear: both;
      }
    }
    i {
      font-style: normal;
      color: #fe0000;
      font-size: 1.5em;
      line-height: 41px;
      vertical-align: bottom;
    }
    span {
      display: inline-block;
      width: 8em;
      text-align: right;
      margin-left: -8em;
      color: #666;
    }
  }
}
.rec-hr {
  clear: both;
  color: #333;
  border-bottom: 1px dashed #bbb;
  margin-bottom: 20px;
  span {
    display: inline-block;
    background: #fff;
    font-size: 18px;
    position: relative;
    top: 13px;
    padding-right: 20px;
    font-weight: bold;
  }
}
.recruitdesc {
  white-space: pre;
  background: #fff;
  color: #444;
  line-height: 1.5;
  padding: 20px;
}
</style>
