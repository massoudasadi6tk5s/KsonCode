(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1018:function(e,t,a){"use strict";a.r(t);var r=a(216),l={components:{XdhMap:r.a,XdhMapMeasure:r.k},data:function(){return{type:"length",styleJson:{className:"Style",fill:{className:"Fill",color:"rgba(255, 255, 255, 0.2)"},stroke:{className:"Stroke",color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2},image:{className:"CircleStyle",radius:5,stroke:{className:"Stroke",color:"rgba(0, 0, 0, 0.7)"},fill:{className:"Fill",color:"rgba(255, 255, 255, 0.2)"}}}}},methods:{start:function(){this.$refs.measure.start()}}},s=a(23),n=Object(s.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("xdh-map",[a("xdh-map-placement",{attrs:{placement:"right-top",margin:[10],theme:"light"}},[a("button",{on:{click:e.start}},[e._v("开始测距")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.type=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"length"}},[e._v("距离")]),e._v(" "),a("option",{attrs:{value:"area"}},[e._v("面积")])])]),e._v(" "),a("xdh-map-measure",{ref:"measure",attrs:{type:e.type}})],1)},[],!1,null,null,null);t.default=n.exports}}]);