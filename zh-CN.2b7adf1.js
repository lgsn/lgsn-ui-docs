(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{22:function(n,e,t){var a={"./docs/calendar.md":26,"./docs/installation.md":28,"./docs/quickstart.md":29};function r(n){var e=l(n);return t(e)}function l(n){if(t.o(a,n))return a[n];var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}r.keys=function(){return Object.keys(a)},r.resolve=l,(n.exports=r).id=22},23:function(n,e,t){var a={"./component.vue":27,"./lgsn-dome.vue":8,"./lgsn-head.vue":6,"./lgsn-menu.vue":7};function r(n){var e=l(n);return t(e)}function l(n){if(t.o(a,n))return a[n];var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}r.keys=function(){return Object.keys(a)},r.resolve=l,(n.exports=r).id=23},24:function(n,e,t){},25:function(n,e,t){"use strict";var a=t(24);t.n(a).a},26:function(n,e,t){"use strict";t.r(e);var a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},r={name:"component-doc",components:{"lgsn-dome0":a({render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[[t("g-calendar",{attrs:{height:400,calData:n.dataDome},scopedSlots:n._u([{key:"title",fn:function(){return[n._v("\n                    日历表\n                ")]},proxy:!0}])})]],2)},staticRenderFns:[]},{data:function(){return{dataDome:[]}},created:function(){var n=[{value:1,label:"张三",children:[]},{value:2,label:"李四",children:[]},{value:3,label:"张飞",children:[]},{value:4,label:"小黄",children:[]},{value:5,label:"小红",children:[]},{value:6,label:"小黑",children:[]},{value:7,label:"嘿呦",children:[]},{value:8,label:"嘿嘿",children:[]}];n.forEach(function(n){for(var e=0;e<31;e++)n.children.push({value:e,label:n.label+"收入"+Math.round(1e3*Math.random())+"元"})}),this.dataDome=n}}),"lgsn-dome1":a({render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("g-calendar",{attrs:{height:400,calData:e.dataDome,tipsY:!1},scopedSlots:e._u([{key:"content",fn:function(n){return[t("div",{class:600<n.money?"calendar-rise":"calendar-drop"},[e._v(e._s(n.label))])]}}])})]],2)},staticRenderFns:[]},{data:function(){return{dataDome:[]}},created:function(){var n=[{value:1,label:"张三",children:[]},{value:2,label:"李四",children:[]},{value:3,label:"张飞",children:[]},{value:4,label:"小黄",children:[]},{value:5,label:"小红",children:[]},{value:6,label:"小黑",children:[]},{value:7,label:"嘿呦",children:[]},{value:8,label:"嘿嘿",children:[]}];n.forEach(function(n){for(var e=0;e<31;e++){var t=Math.round(1e3*Math.random());n.children.push({value:e,label:n.label+"收入"+t+"元",money:t})}}),this.dataDome=n}})}},l=t(0),i=Object(l.a)(r,function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"content lgsn-doc"},[n._m(0),t("p",[n._v("以X, Y轴为时间线展示。")]),n._m(1),t("lgsn-dome",[t("template",{slot:"source"},[t("lgsn-dome0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[n._v("    <template>\n        <g-calendar :height=\"400\" :calData=\"dataDome\">\n                <template #title>\n                    日历表\n                </template>\n            </g-calendar>\n    </template>\n    <script>\n        \n        export default{\n           data() {\n            return {\n               dataDome: []\n            }\n           },\n           created() {\n             let arrayData = [\n                {\n                  value: 1,\n                  label: '张三',\n                  children: []\n                },\n                {\n                  value: 2,\n                  label: '李四',\n                  children: []\n                },\n                {\n                  value: 3,\n                  label: '张飞',\n                  children: []\n                },\n                {\n                  value: 4,\n                  label: '小黄',\n                  children: []\n                },\n                {\n                  value: 5,\n                  label: '小红',\n                  children: []\n                },\n                {\n                  value: 6,\n                  label: '小黑',\n                  children: []\n                },\n                {\n                  value: 7,\n                  label: '嘿呦',\n                  children: []\n                },\n                {\n                  value: 8,\n                  label: '嘿嘿',\n                  children: []\n                },\n              ]\n             arrayData.forEach(v => {\n              for(let i=0; i<31; i++) {\n                v.children.push({\n                  value: i,\n                  label: `${v.label}收入${Math.round(Math.random()*1000)}元`\n                })\n              }\n             })\n             this.dataDome = arrayData\n           }\n        };\n        \n    <\/script>\n")])])])],2),n._m(2),t("lgsn-dome",[t("template",{slot:"source"},[t("lgsn-dome1")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[n._v("    <style>\n        .calendar-rise{\n          width:100%;\n          height:100%;\n          background: #409eff;\n          border-radius: 4px;\n          padding:4px;\n          box-sizing: border-box;\n          color:#fff;\n        }\n        .calendar-drop{\n           width:100%;\n           height:100%;\n           background: #F56C6C;\n           border-radius: 4px;\n           padding:4px;\n           box-sizing: border-box;\n           color:#fff;\n         }\n    </style>\n    <template>\n        <g-calendar :height=\"400\" :calData=\"dataDome\" :tipsY=\"false\">\n                <template #content=\"card\">\n                    <div :class=\"card.money > 600 ? 'calendar-rise' : 'calendar-drop'\">{{card.label}}</div>\n                </template>\n            </g-calendar>\n    </template>\n    <script>\n        \n        export default{\n           data() {\n            return {\n               dataDome: []\n            }\n           },\n           created() {\n             let arrayData = [\n                {\n                  value: 1,\n                  label: '张三',\n                  children: []\n                },\n                {\n                  value: 2,\n                  label: '李四',\n                  children: []\n                },\n                {\n                  value: 3,\n                  label: '张飞',\n                  children: []\n                },\n                {\n                  value: 4,\n                  label: '小黄',\n                  children: []\n                },\n                {\n                  value: 5,\n                  label: '小红',\n                  children: []\n                },\n                {\n                  value: 6,\n                  label: '小黑',\n                  children: []\n                },\n                {\n                  value: 7,\n                  label: '嘿呦',\n                  children: []\n                },\n                {\n                  value: 8,\n                  label: '嘿嘿',\n                  children: []\n                },\n              ]\n             arrayData.forEach(v => {\n              for(let i=0; i<31; i++) {\n                let money = Math.round(Math.random()*1000)\n                v.children.push({\n                  value: i,\n                  label: `${v.label}收入${money}元`,\n                  money\n                })\n              }\n             })\n             this.dataDome = arrayData\n           }\n        };\n        \n    <\/script>\n")])])])],2),n._m(3),n._m(4),n._m(5),n._m(6),n._m(7),n._m(8)],1)},[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("h2",{attrs:{id:"ri-li-biao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ri-li-biao"}},[n._v("¶")]),n._v(" 日历表")])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("h3",{attrs:{id:"ji-chu-yong-fa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa"}},[n._v("¶")]),n._v(" 基础用法")])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("h3",{attrs:{id:"zi-ding-yi-mo-ban"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-mo-ban"}},[n._v("¶")]),n._v(" 自定义模板")])},function(){var n=this.$createElement,e=this._self._c||n;return e("h3",{attrs:{id:"calendar-shu-xing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#calendar-shu-xing"}},[this._v("¶")]),this._v(" calendar 属性")])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("table",[t("thead",[t("tr",[t("th",[n._v("参数")]),t("th",[n._v("说明")]),t("th",[n._v("类型")]),t("th",[n._v("可选值")]),t("th",[n._v("默认值")])])]),t("tbody",[t("tr",[t("td",[n._v("calData")]),t("td",[n._v("绑定值")]),t("td",[n._v("Array")]),t("td",[n._v("—")]),t("td",[n._v("—")])]),t("tr",[t("td",[n._v("height")]),t("td",[n._v("高度")]),t("td",[n._v("Number")]),t("td",[n._v("—")]),t("td",[n._v("400")])]),t("tr",[t("td",[n._v("tipsX")]),t("td",[n._v("横向悬浮条")]),t("td",[n._v("Boolean")]),t("td",[n._v("—")]),t("td",[n._v("true")])]),t("tr",[t("td",[n._v("tipsY")]),t("td",[n._v("纵向悬浮条")]),t("td",[n._v("Boolean")]),t("td",[n._v("—")]),t("td",[n._v("true")])])])])},function(){var n=this.$createElement,e=this._self._c||n;return e("h3",{attrs:{id:"caldata-shu-xing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#caldata-shu-xing"}},[this._v("¶")]),this._v(" calData 属性")])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("table",[t("thead",[t("tr",[t("th",[n._v("参数")]),t("th",[n._v("说明")]),t("th",[n._v("类型")]),t("th",[n._v("可选值")]),t("th",[n._v("默认值")])])]),t("tbody",[t("tr",[t("td",[n._v("value")]),t("td",[n._v("唯一标识 必填")]),t("td",[n._v("String / Number")]),t("td",[n._v("—")]),t("td",[n._v("—")])]),t("tr",[t("td",[n._v("label")]),t("td",[n._v("左侧（y轴）默认显示内容")]),t("td",[n._v("String / Number")]),t("td",[n._v("—")]),t("td",[n._v("-")])]),t("tr",[t("td",[n._v("children")]),t("td",[n._v("右侧默认显示内容")]),t("td",[n._v("Array")]),t("td",[n._v("—")]),t("td",[n._v("-")])])])])},function(){var n=this.$createElement,e=this._self._c||n;return e("h3",{attrs:{id:"zi-ding-yi-nei-rong-slot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-nei-rong-slot"}},[this._v("¶")]),this._v(" 自定义内容(Slot)")])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("table",[t("thead",[t("tr",[t("th",[n._v("name")]),t("th",[n._v("说明")])])]),t("tbody",[t("tr",[t("td",[n._v("title")]),t("td",[n._v("左上角内容")])]),t("tr",[t("td",[n._v("content")]),t("td",[n._v("右侧内容 参数 {card} 相对应数据")])])])])}],!1,null,null,null);e.default=i.exports},27:function(n,e,t){"use strict";t.r(e);var a={name:"lgsn-component"},r=(t(25),t(0)),l=Object(r.a)(a,function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"lgsn-component"},[e("lgsn-menu"),e("div",{staticClass:"component-view"},[e("router-view")],1)],1)},[],!1,null,null,null);e.default=l.exports},28:function(n,e,t){"use strict";t.r(e);var a=t(0),r=Object(a.a)({},function(){var n=this.$createElement;this._self._c;return this._m(0)},[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"content lgsn-doc"},[t("h2",{attrs:{id:"an-zhuang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#an-zhuang"}},[n._v("¶")]),n._v(" 安装")]),t("h3",{attrs:{id:"npm-an-zhuang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-an-zhuang"}},[n._v("¶")]),n._v(" npm 安装")]),t("pre",[t("code",{staticClass:"language-shell"},[n._v("npm i lgsn-ui --save\n")])]),t("h3",{attrs:{id:"cdn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdn"}},[n._v("¶")]),n._v(" CDN")])])}],!1,null,null,null);e.default=r.exports},29:function(n,e,t){"use strict";t.r(e);var a=t(0),r=Object(a.a)({},function(){var n=this.$createElement;this._self._c;return this._m(0)},[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"content lgsn-doc"},[t("h2",{attrs:{id:"kuai-su-shang-shou"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kuai-su-shang-shou"}},[n._v("¶")]),n._v(" 快速上手")]),t("h3",{attrs:{id:"wan-zheng-yin-ru"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wan-zheng-yin-ru"}},[n._v("¶")]),n._v(" 完整引入")]),t("p",[n._v("在 main.js 中安装插件：")]),t("pre",[t("code",{staticClass:"language-javascript"},[n._v("import Vue from 'vue';\nimport LgsnUI from 'lgsn-ui';\n\n// CSS文件\nimport 'element-ui/lib/theme-chalk/index.css';\nimport App from './App.vue';\n\nVue.use(LgsnUI);\n\nnew Vue({\n  el: '#app',\n  render: h => h(App)\n});\n")])]),t("h4",{attrs:{id:"an-xu-yin-ru"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-ru"}},[n._v("¶")]),n._v(" 按需引入")]),t("pre",[t("code",{staticClass:"language-javascript"},[n._v("import Vue from 'vue';\nimport { GCalendar } from 'lgsn-ui';\nimport App from './App.vue';\nimport 'lgsn-ui/component/src/index.css'\n\nVue.component(GCalendar.name, GCalendar);\n\nnew Vue({\n  el: '#app',\n  render: h => h(App)\n});\n")])])])}],!1,null,null,null);e.default=r.exports}}]);