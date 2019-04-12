<template>
  //   <div class="wzlFooterLink">
    //     <div class="hot-city-layer main-width">
      //       <div class="hot-city-unit">
        //         <h3 class="news-unit-title line-title">{{ title }}</h3>
        //         <ul class="hot-cities">
          //           <li 
            v-for="(item,index) in dataInfo" 
            :key="index" 
            class="hot-cities-li" >
            //             <a
              target="_blank"
              :href="item.targetLinks+'?startp='+ item.startProvince+'&startc='+item.startCity+'&starta='+item.startArea+'&endp='+item.endProvince+'&endc='+item.endCity+'&enda='+item.endArea+'&carSourceType='+item.carSourceType"
              class="hot-cities-a">{{ item.title }}</a>
          //           </li>
        //         </ul>
      //       </div>
    //     </div>
  //   </div>
// </template>
// <script>
// export default {
//   name: 'FooterLink',
//   props: {
//     recommendBy28: {
//       type: [Array, Object],
//       default: () => []
//     },
//     by28label: {
//       type: String,
//       default: ''
//     }
//   },
//   data() {
//     return {
//       dataInfo: [],
//       title: ''
//     }
//   },
//   watch: {},
//   mounted() {
//     if (this.by28label) {
//       this.dataInfo = this.recommendBy28.forEach(this.hrefLink)
//       this.title = this.by28label
//     }
//     console.log(this.hrefLink, 888888888888888)
//   },
//   methods: {
//     hrefLink: item => {
//       switch (item.startProvince) {
//         case null:
//           item.startProvince = ''
//       }
//       switch (item.startCity) {
//         case null:
//           item.startCity = ''
//       }
//       switch (item.startArea) {
//         case null:
//           item.startArea = ''
//       }
//       switch (item.endProvince) {
//         case null:
//           item.endProvince = ''
//       }
//       switch (item.endCity) {
//         case null:
//           item.endCity = ''
//       }
//       switch (item.endArea) {
//         case null:
//           item.endArea = ''
//       }
//       item.carSourceType = ''
//       item.targetLinks = ''
//       if (item.type == '1000') {
//         item.targetLinks = '/gongsi/'
//       }
//       if (item.type == '2000') {
//         item.targetLinks = '/zhuanxian/list'
//       }
//       if (item.type == '2001') {
//         item.targetLinks = '/member/' + item.companyId + '-line'
//       }
//       if (item.type == '3000' || item.type == '3003' || item.type == '3002') {
//         item.targetLinks = '/cheyuan'
//       }
//       if (item.type == '3001') {
//         item.targetLinks = '/cheyuan'
//         item.carSourceType = 'AF01801'
//       }
//       if (item.type == '4000') {
//         item.targetLinks = '/huoyuan'
//       }
//       if (item.type == '4001') {
//         item.targetLinks = '/member/' + item.companyId + '-huo'
//       }
//     }
//     // this.dataInfo = this.recommendBy28.forEach(footLink)
//   }
// }
//
</script>
// <style lang="scss">
// .main-width {
//   max-width: 1036px;
//   float: left;
//   width: 1043px;
//   margin-bottom: 20px;
// }
// .hot-city-unit {
//   box-sizing: border-box;
//   /* border: 1px solid #ececec; */
//   background: #fff;
//   padding: 10px;
// }
// .news-unit-title:after {
//   position: absolute;
//   content: '';
//   height: 15px;
//   width: 3px;
//   left: 0;
//   top: 8px;
//   background: #589def;
// }
// .news-unit-title {
//   position: relative;
//   height: 32px;
//   line-height: 32px;
//   padding-left: 15px;
//   /* border-bottom: 2px solid #589def; */
//   margin-bottom: 10px;
//   font-weight: bold;
//   font-size: 20px;
//   color: #333333;
// }
// .line-title {
//   color: #3f94ee;
//   border-bottom: 2px solid #3f94ee;
//   font-size: 20px;
// }
// .hot-cities-li {
//   display: inline-block;
//   padding: 10px;
// }
// .hot-cities-a {
//   font-size: 14px;
//   /* color: #333; */
//   display: block;
//   width: 148px;
//   text-overflow: ellipsis;
//   white-space: nowrap;
//   overflow: hidden;
// }
// .rc_list {
//   margin: 10px 0;
// }
// .rc_list div {
//   display: table-cell;
//   vertical-align: middle;
//   font-size: 14px;
// }
// .rc_list .left p {
//   height: 20px;
//   line-height: 20px;
//   width: 20px;
//   background-color: #8eb9f5;
//   text-align: center;
//   color: #ffffff;
//   margin: 0 17px;
// }
//
</style>
