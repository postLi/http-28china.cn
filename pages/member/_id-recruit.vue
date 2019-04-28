<template>
  <div>
    <MemberBanner :url="'/member/images/banner_wd.jpg'" />
    <div class="main">
      <MemberSidebar />
      <div 
        id="js004" 
        class="right">
        <div class="right_bt1">
          <div class="right_bt1_1"><img src="/member/images/wd.png"><span>招聘信息</span></div>
          <div class="right_bt1_2">
    			
            <div class="search_input search_input3">
              <input
                id="search_key"
                :value="$route.query.key" 
                style="height: 100%;" 
                placeholder="请输入职位名称">
            </div>	
            <div class="search_button"><input 
              class="search_search" 
              readonly="" 
              value="搜索"> </div>
          </div>
        </div>
    	
        <div class="right_bt2">
          <ul>
            <li class="bt_01">职位名称</li>
            <li class="bt_02">招聘人数</li>
            <li class="bt_03">薪资范围</li>
            <li class="bt_04">学历要求</li>
            <li class="bt_05">工作地址</li>
            <li class="bt_06">发布时间</li>
          </ul>
        </div>
        <div class="wd_none">
          <span>暂无网点信息</span>
        </div>
        <div 
          v-for="(item, index) in $store.state.member.recruitList.list" 
          :key="index"
          class="wd_item">
          <a 
            :href="'/member/' + $store.state.member.id + '-recruitdetail?id='+item.id" 
            target="_blank">
            <ul>
              <li class="wd_item01"><span 
                :title="item.jobTitle" 
                id="nr031">{{ item.jobTitle }}</span></li>
              <li class="wd_item02"><span id="nr032">{{ item.recruitNum }}</span></li>
              <li class="wd_item03"><span id="nr033">{{ item.salaryBegin }}-{{ item.salaryEnd }}</span></li>
              <li class="wd_item04"><span id="nr034">{{ item.education }}</span></li>
              <li class="wd_item05"><span 
                id="nr035" 
              >{{ item.workProvince }}{{ item.workCity }}{{ item.workArea }}</span></li>
              <li 
                class="wd_item06"
                :title="item.updateTime || item.createTime"
              >{{ item.updateTime || item.createTime }}</li>
            </ul>
          </a>    		
        </div>
      </div>
      <div 
        class="box" 
        style="float: right;margin-right: 200px;">
        <div 
          id="pagination1" 
          class="page fl"/>
        <div class="info fl">
        <!--<p>当前页数：<span id="current1">1</span></p>-->
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
    link: [
      { rel: 'stylesheet', href: '/member/css/list.css' },
      { rel: 'stylesheet', href: '/css/jquery.pagination.css' }
    ]
  },
  layout: 'member',
  data() {
    return {
      query: {
        belongCityName: ''
      }
    }
  },
  mounted() {
    let uid = this.$store.state.member.id
    let _this = this
    seajs.use(['/member/js/jquery.pagination.min.js'], function() {
      seajs.use(
        [
          '/js/city-picker.js'
          // '/member/js/index.js',
          // '/js/collection.js',
          // '/member/js/wangdian.js'
        ],
        function() {
          $('#pagination1').pagination({
            currentPage: 1,
            totalPage: _this.$store.state.member.pointTotal,
            callback: function(current) {
              $('#current1').text(current)
              _this.$store.dispatch('member/getRecruitList', {
                companyId: _this.$route.params.id,
                pageSize: 10,
                jobTitle: _this.$route.query.key,
                currentPage: current
              })
              // process1(current)
              window.location.href = '#top'
            }
          })

          //网点搜索 S

          $('.search_search').click(function() {
            window.location =
              '/member/' +
              uid +
              '-recruit?key=' +
              ($('#search_key').val() || '')
          })
        }
      )
    })
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
      store.dispatch('member/getRecruitList', {
        companyId: params.id,
        jobTitle: query.key,
        pageSize: 10,
        currentPage: 1
      })
    ])
  }
}
</script>
<style lang="scss" scoped>
.search_input3 input {
  border: none;
  width: 100%;
}
.wd_item04,
.right_bt2 .bt_04 {
  width: 130px;
}
.right_bt2 .bt_06 {
  width: 210px;
}
.wd_item06 {
  width: 220px;
}
</style>
