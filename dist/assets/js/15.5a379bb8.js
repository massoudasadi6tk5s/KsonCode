(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1092:function(n,o,t){"use strict";t.r(o);t(144);var e=t(146),c={components:{XdhMap:e.c,XdhMapIcon:e.o},data:function(){return{coordType:"WGS84",mapOpts:{},icons:function(){for(var n=[],o=0;o<100;o++)n.push({pos:[120+Math.random()-Math.random(),30+Math.random()-Math.random()],checked:!1});return n}(),selectData:[]}},methods:{readyInit:function(n,o){var t=new e.a(n,o,{class:"custom-drag-box",coordType:this.coordType});n.addInteraction(t),t.on("boxend",function(n){console.log(n.areaGeo)})},boxEndHandle:function(n){var o=this.icons.reduce(function(o,t){return n.areaGeo.intersectsCoordinate(t.pos)&&(t.checked=!0,o.push(t)),o},[]);console.log(o),this.selectData=o},clearHandle:function(){this.icons.forEach(function(n){n.checked=!1}),this.selectData=[]}}},a=(t(768),t(16)),r=Object(a.a)(c,function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("div",[t("div",{staticClass:"map-warp",staticStyle:{width:"100%",height:"500px"}},[t("xdh-map",{ref:"map",attrs:{zoom:9,center:[120,30],"coord-type":n.coordType},on:{ready:n.readyInit,"on-boxend":n.boxEndHandle}},n._l(n.icons,function(n,o){return t("xdh-map-icon",{key:o,style:{color:n.checked?"red":"black"},attrs:{icon:"iconfont icon-location",position:n.pos}})}),1)],1),n._v(" "),t("div",[t("button",{on:{click:n.clearHandle}},[n._v("清空")]),n._v(" "),t("p",[n._v("按“shift”拖动鼠标，当前选中 "+n._s(n.selectData.length)+"个坐标")])])])},[],!1,null,null,null);o.default=r.exports},455:function(n,o,t){},768:function(n,o,t){"use strict";var e=t(455);t.n(e).a}}]);