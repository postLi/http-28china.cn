webpackJsonp([38],{"5MRk":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tags-view-container"},[i("scroll-pane",{ref:"scrollPane",staticClass:"tags-view-wrapper"},[i("router-link",{staticClass:"tags-view-item",class:t.isActive({path:"/dashboard"})?"active":"",attrs:{to:"/dashboard"},nativeOn:{contextmenu:function(e){e.preventDefault(),t.openMenu(t.$el,e,!0)}}},[t._v("\n      首页\n    ")]),t._v(" "),t._l(Array.from(t.visitedViews),function(e){return i("router-link",{key:e.path,ref:"tag",refInFor:!0,staticClass:"tags-view-item",class:t.isActive(e)?"active":"",attrs:{to:e.path},nativeOn:{contextmenu:function(i){i.preventDefault(),t.openMenu(e,i)}}},[t._v("\n      "+t._s(t.generateTitle(e.title))+"\n      "),i("span",{staticClass:"el-icon-close",on:{click:function(i){i.preventDefault(),i.stopPropagation(),t.closeSelectedTag(e)}}})])})],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"contextmenu-box",style:{left:t.left+"px",top:t.top+"px"}},[i("ul",{staticClass:"contextmenu"},[t.hideCloseCurrentMenu?t._e():i("li",{on:{click:function(e){t.closeSelectedTag(t.selectedTag)}}},[t._v("关闭")]),t._v(" "),i("li",{on:{click:t.closeOthersTags}},[t._v("关闭其他")]),t._v(" "),i("li",{on:{click:t.closeAllTags}},[t._v("关闭全部")])]),t._v(" "),i("div",{staticClass:"menu-line"}),t._v(" "),i("ul",{staticClass:"contextmenu contextmenu-list"},[i("router-link",{attrs:{tag:"li",to:"/dashboard"}},[i("i",{class:t.isActive({path:"/dashboard"})?"el-icon-check":""}),t._v("\n        首页\n      ")]),t._v(" "),t._l(Array.from(t.visitedViews),function(e){return i("router-link",{key:e.path,attrs:{tag:"li",to:e.path}},[i("i",{class:t.isActive(e)?"el-icon-check":""}),t._v("\n      "+t._s(t.generateTitle(e.title))+"\n      ")])})],2)])],1)},n=[],a={render:s,staticRenderFns:n};e.a=a},CO0n:function(t,e,i){"use strict";function s(t){i("YrMl"),i("iZJl")}Object.defineProperty(e,"__esModule",{value:!0});var n=i("UOdx"),a=i("5MRk"),r=i("VU/8"),o=s,l=r(n.a,a.a,o,"data-v-22a5ff2b",null);e.default=l.exports},UOdx:function(t,e,i){"use strict";var s=i("BO1k"),n=i.n(s),a=i("sUix");e.a={components:{ScrollPane:a.a},data:function(){return{visible:!1,top:0,left:0,selectedTag:{},hideCloseCurrentMenu:!1}},computed:{visitedViews:function(){return this.$store.state.tagsView.visitedViews}},watch:{$route:function(){this.addViewTags(),this.moveToCurrentTag()},visible:function(t){t?document.body.addEventListener("click",this.closeMenu):document.body.removeEventListener("click",this.closeMenu)}},mounted:function(){this.addViewTags()},methods:{generateTitle:function(t){return t},generateRoute:function(){return!(!this.$route.name||"首页"===this.$route.name)&&this.$route},isActive:function(t){return t.path===this.$route.path||t.name===this.$route.name},addViewTags:function(){var t=this.generateRoute();if(!t)return!1;this.$store.dispatch("addVisitedViews",t)},moveToCurrentTag:function(){var t=this,e=this.$refs.tag;this.$nextTick(function(){var i=!0,s=!1,a=void 0;try{for(var r,o=n()(e);!(i=(r=o.next()).done);i=!0){var l=r.value;if(l.to===t.$route.path){t.$refs.scrollPane.moveToTarget(l.$el);break}}}catch(t){s=!0,a=t}finally{try{!i&&o.return&&o.return()}finally{if(s)throw a}}})},closeSelectedTag:function(t){var e=this;this.$store.dispatch("delVisitedViews",t).then(function(i){if(e.isActive(t)){var s=i.slice(-1)[0];s?e.$router.push(s.path):e.$router.push("/hyzx/")}})},closeOthersTags:function(){var t=this;this.$router.push(this.selectedTag.path),this.$store.dispatch("delOthersViews",this.selectedTag).then(function(){t.moveToCurrentTag()})},closeAllTags:function(){this.$store.dispatch("delAllViews"),this.$router.push("/hyzx/")},openMenu:function(t,e,i){this.visible=!0,this.selectedTag=t,this.left=e.clientX,this.top=e.clientY,this.hideCloseCurrentMenu=!!i},closeMenu:function(){this.visible=!1}}}},YrMl:function(t,e){},Z451:function(t,e,i){"use strict";e.a={name:"scrollPane",data:function(){return{left:0}},methods:{handleScroll:function(t){var e=t.wheelDelta||3*-t.deltaY,i=this.$refs.scrollContainer,s=i.offsetWidth,n=this.$refs.scrollWrapper,a=n.offsetWidth;e>0?this.left=Math.min(0,this.left+e):s-15<a?this.left<-(a-s+15)?this.left=this.left:this.left=Math.max(this.left+e,s-a-15):this.left=0},moveToTarget:function(t){var e=this.$refs.scrollContainer,i=e.offsetWidth,s=t.offsetLeft,n=t.offsetWidth;s<-this.left?this.left=15-s:s+15>-this.left&&s+n<-this.left+i-15||(this.left=-(s-(i-n)+15))}}}},cs9N:function(t,e){},iZJl:function(t,e){},ifEI:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"scrollContainer",staticClass:"scroll-container",on:{wheel:function(e){return e.preventDefault(),t.handleScroll(e)}}},[i("div",{ref:"scrollWrapper",staticClass:"scroll-wrapper",style:{left:t.left+"px"}},[t._t("default")],2)])},n=[],a={render:s,staticRenderFns:n};e.a=a},sUix:function(t,e,i){"use strict";function s(t){i("cs9N")}var n=i("Z451"),a=i("ifEI"),r=i("VU/8"),o=s,l=r(n.a,a.a,o,"data-v-a07b284e",null);e.a=l.exports}});