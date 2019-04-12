<template>
  <div class="cy">
    <div class="main">
      <div class="nr order-create-main">
        <div class="order-line-info order-input-tab">
          <div class="order-success"><img
            src="/images/wzlImg/dagou (1).png"
            id="gou"><h3>恭喜发布成功！</h3></div>
          <div class="order-content">
            <h4><img src="/images/wzlImg/dengpao.png">物流课堂小秘笈</h4>
            <ul class="content-list">
              <li 
                v-for="(item,index) in dataset" 
                :key="index">
                <img
                  :src="'/images/wzlImg/xh'+item.num +'.png'"
                  class="li_imgbox">
                <h3>{{ item.title }}</h3>
                <p>{{ item.contentText }}</p>
              </li>
            </ul>
          </div>
        </div>
        <!-- 提交按钮 -->
        <div class="btn_bottom"/>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CySuccess',
  head: {
    link: [{ rel: 'stylesheet', href: '/css/create/cySuccess.css' }]
  },
  data() {
    return {
      dataset: [
        {
          title: '更多曝光机会',
          contentText: '专线内容完善度越高，展示及推荐的次数越多！',
          num: 1
        },
        {
          title: '获取更多商机',
          contentText:
            '准确、完整的填写您的企业信息，有利于获得客户的信任，赢得更多商机！',
          num: 2
        },
        {
          title: '更多曝光机会',
          contentText: '及时反馈用户留言能够提升客户满意度！',
          num: 3
        },
        {
          title: '更多曝光机会',
          contentText:
            '定期发布及更新信息享受线上推广，获得更多的展示，让更多用户找到你！',
          num: 4
        }
      ]
    }
  },
  mounted() {
    var buttonText = this.$route.query.text
    var id = this.$route.query.id
    var publishId = this.$route.query.publishId
    console.log(this.$route.query.publishId, 'this.$route.query.publishId')
    var shipperId = this.$route.query.shipperId
    var driverId = this.$route.query.driverId
    var lineOrder = '/zhuanxian/detail?id=' + id + '&publishId=' + publishId //查看详情
    var cheOrder = '/cheyuan/detail?id=' + driverId
    var hyOrder = '/huoyuan/detail?id=' + id + '&shipperId=' + shipperId
    $('.btn_bottom').append(
      '<div class="order-submit-btn" id="continue">继续发布' +
        buttonText +
        '</div><div class="order-submit-btn" id="check">查看' +
        buttonText +
        '详情</div><div class="order-submit-btn" id="management">管理我的' +
        buttonText +
        '</div>'
    )

    $('#continue').click(function() {
      if (buttonText === '车源') {
        window.location.href = '/create/cheyuan'
      } else if (buttonText === '货源') {
        window.location.href = '/create/huoyuan'
      } else {
        window.location.href = '/create/line'
      }
    })
    $('#check').click(function() {
      if (buttonText === '车源') {
        window.open(cheOrder)
      } else if (buttonText === '货源') {
        window.open(hyOrder)
      } else {
        window.open(lineOrder)
      }
    })
    $('#management').click(function() {
      if (location.href.indexOf('192.168.1.') !== 0) {
        if (buttonText === '车源') {
          window.location.href = 'http://192.168.1.157:9526/carinfo/manage'
        } else if (buttonText === '货源') {
          window.location.href = 'http://192.168.1.157:9526/order/manage'
        } else if (buttonText === '专线') {
          window.location.href = 'http://192.168.1.157:9526/logistics/manage'
        }
      }
    })
  }
}
</script>

<style lang="scss">
.cy {
  .order-content {
    .content-list {
      li {
        h3,
        p {
          padding-left: 5px;
        }
        h4 {
          img {
          }
        }
      }
    }
  }
}
</style>
