(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-341b29c4"],{"73ad":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("example",[r("xdh-map",{attrs:{center:e.center}},[r("xdh-map-track",{attrs:{routes:e.line1,src:e.car,steps:50}}),r("xdh-map-line",{attrs:{routes:e.line1,"stroke-color":"blue","stroke-line-dash":[10],"stroke-width":4}}),r("xdh-map-track",{attrs:{routes:e.line2,loop:!1,src:e.car}}),r("xdh-map-line",{attrs:{routes:e.line2,"stroke-color":"red","stroke-width":4}}),r("xdh-map-track",{attrs:{routes:e.line3},on:{move:e.handleMove}}),r("xdh-map-line",{attrs:{routes:e.passLine,"stroke-color":"green","stroke-width":4}}),r("xdh-map-line",{attrs:{routes:e.toLine,"stroke-color":"red","stroke-line-dash":[10],"stroke-width":4}}),r("xdh-map-circle",{attrs:{position:e.position,fill:"blue","z-index":100,radius:.01}})],1)],1)},n=[],o={data:function(){return{center:[120,30.186209],car:r("d866"),line1:[[119.960972,30.246209],[119.975288,30.235707],[119.979764,30.235124],[120.039173,30.24337],[120.05753,30.217952],[120.058055,30.21669],[120.054571,30.20782],[120.0525,30.19384],[120.054734,30.185295],[120.073708,30.166286],[120.081231,30.160251]],line2:[[119.40466,30.167937],[119.553405,30.22849],[119.58027,30.028843],[119.872781,30.159321]],line3:[[119.534941,29.817538],[120.401155,29.827967]],passLine:[],toLine:[],position:[]}},methods:{handleMove:function(e,t){this.passLine=e.slice(0,t),this.toLine=e.slice(t),this.position=e[t]}},created:function(){}},i=o,a=r("2877"),l=Object(a["a"])(i,s,n,!1,null,"9ffc6be0",null);t["default"]=l.exports},d866:function(e,t,r){e.exports=r.p+"img/car-small.a675f98f.png"}}]);
//# sourceMappingURL=chunk-341b29c4.c416861d.js.map