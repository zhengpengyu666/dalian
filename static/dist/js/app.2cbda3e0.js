(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"22b5":function(e,t,n){e.exports=n("2ae6")(990)},"2ae6":function(e,t){e.exports=libs_a1aa8c3eb03bb7ac545c},3191:function(e,t,n){e.exports=n("2ae6")(992)},"53f9":function(e,t,n){e.exports=n("2ae6")(988)},"55b2":function(e,t,n){"use strict";n("f450")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d3b7"),n("3ca3"),n("ddb0"),n("d81d");var r=n("a026"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("ThreeComp")],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"three"},[n("div",{staticClass:"operator spin-content"},[n("button",{on:{click:function(t){return e.handleControl("panLeft",-1)}}},[e._v("左移")]),n("button",{on:{click:function(t){return e.handleControl("panLeft",1)}}},[e._v("右移")]),n("button",{on:{click:function(t){return e.handleControl("dollyIn",1.1)}}},[e._v("放大")]),n("button",{on:{click:function(t){return e.handleControl("dollyOut",1.1)}}},[e._v("缩小")]),n("button",{on:{click:function(t){return e.handleControl("rotateLeft",-.1)}}},[e._v(" 顺时针旋转 ")]),n("button",{on:{click:function(t){return e.handleControl("rotateLeft",.1)}}},[e._v(" 逆时针旋转 ")]),n("button",{on:{click:function(t){return e.handleControl("reset")}}},[e._v("复位")]),n("span",{ref:"tip",staticClass:"tip"})]),e.dates.length?n("div",{staticClass:"date-select"},[n("a-select",{staticStyle:{width:"200px"},attrs:{"default-value":e.searchDate||e.dates[0]},on:{change:e.handleDateChange}},e._l(e.dates,(function(t,r){return n("a-select-option",{key:r,attrs:{value:t}},[e._v(" "+e._s(t)+" ")])})),1)],1):e._e(),n("div",{staticClass:"stats-panel"}),n("div",{staticClass:"three-wrap"})])},s=[],c=n("3835"),u=n("2909"),l=n("1da1"),d=(n("96cf"),n("ac1f"),n("1276"),n("5319"),n("841c"),n("4795"),n("99af"),n("277d"),n("a15b"),n("b0c0"),n("4160"),n("159b"),n("e25e"),n("5a89")),p=n("53f9"),h=n("6397"),f=n.n(h),m=n("22b5"),v=n("3191"),w=n.n(v),g=n("bc3a"),b=n.n(g),y=(n("fb6a"),n("cb29"),n("5180")),x=[{dui_hao:"堆号",chuan_ci:"船次"},{qi_shi:"范围"},{ti_ji:"体积",mi_du:"密度",zhong_liang:"重量"},{re_zhi:"发热量",hui_fen:"灰分"},{shui_fen:"水分",liu_fen:"硫分"},{hui_fa_fen:"挥发分",hui_rong_dian:"灰熔点"}],M={data:function(){return{basePoints:[],allLayoutMeshes:[],layoutRecords:[]}},created:function(){Object(y["b"])({font:"/fonts/NotoSansSC-Regular.otf"},(function(){}))},methods:{handleLayout:function(){var e=arguments,t=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){var r,a,o,i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.length>0&&void 0!==e[0]?e[0]:"",n.prev=1,a=t._basePoints,Array.isArray(t.allLayoutMeshes)&&t.allLayoutMeshes.length&&t.disposeLayout(),t.allLayoutMeshes=[],o=function(e,n){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=0,i=e.length;o<i;o++){for(var s=e[o],c=s.sy,u=new d["Geometry"],l=function(e,t){for(var o=c[e].slice(0,3),i="low"===n?c[e].slice(3,6):c[e].slice(6,9),s=0;s<3;s++){var l=o[s];null!=r?a[r][l].y=i[s]:a[l].y=i[s];var p=null!=r?a[r][l]:a[l];u.vertices.push(p)}var h=new Array(3).fill(0).map((function(t,n){return 3*e+n})),f=new d["Face3"](h[0],h[1],h[2]);u.faces.push(f)},p=0,h=c.length;p<h;p++)l(p,h);var f=new d["Color"];f.setRGB(s.R,s.G,s.B);var m=new d["MeshLambertMaterial"]({color:f,side:d["DoubleSide"]});u.computeFaceNormals();var v=new d["Mesh"](u,m);t.allLayoutMeshes.push(v),t.scene.add(v),t.render(),"high"===n&&t.addTextToScene(s,v)}},n.next=8,t.getLatestLayoutData(t.selected,r);case 8:if(i=n.sent,Array.isArray(i)&&i.length)for(s=0;s<i.length;s++)o(i[s],"low",s),o(i[s],"high",s);else o(i,"low"),o(i,"high");n.next=15;break;case 12:n.prev=12,n.t0=n["catch"](1),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[1,12]])})))()},addTextToScene:function(e,t){for(var n=this.getGeoCenter(t),r=0;r<x.length;r++){var a="";for(var o in x[r])a+=x[r][o]+":"+e[o]+" ";var i=new y["a"];i.text=a,console.log(a,r),this.addTextAttr(i,n,r),this.scene.add(i)}this.render()},addTextAttr:function(e,t,n){var r=3.2,a=90,o=62;e.maxWidth=80,e.color="black",e.anchorX="left",e.anchorY="top",e.lineHeight=r,e.font="/fonts/NotoSansSC-Regular.otf",e.fontSize=3,e.position.x=t.x,e.position.y=0,e.rotation.x=-Math.PI/2,t.z<0?e.position.z=n*r-a:e.position.z=o+n*r},getGeoCenter:function(e){return e.geometry.computeBoundingBox(),e.geometry.boundingBox.getCenter()},getLatestLayoutData:function(e){var t=arguments;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.length>1&&void 0!==t[1]?t[1]:"",e.abrupt("return",new Promise((function(e,t){b.a.post("/api/modelData").then((function(e){return[e.data.json1,e.data.json2]})).then((function(t){Promise.all(t.map((function(e){return b.a.get(e)}))).then((function(t){var n=t.map((function(e){return e.data}));console.log(n),e(n)}))}))})));case 2:case"end":return e.stop()}}),e)})))()},disposeLayout:function(){var e=this;Array.isArray(this.allLayoutMeshes)&&(this.allLayoutMeshes.map((function(t){e.scene.remove(t),t.geometry.dispose(),t.material.dispose()})),this.allLayoutMeshes=[],this.render())}}},L="#f40",T=["/obj/top.obj","/obj/bottom.obj"],j=2e3,R="",_={mixins:[M],data:function(){return{scene:null,renderer:null,coal:null,uwb:{car:[],person:[]},searchDate:"",dates:[],saveFixsPath:[],tableData:null,spin:!1,tip:"loading..."}},created:function(){var e=function(e){var t={};if(e)for(var n=e.replace("?","").split("&"),r=0;r<n.length;r++){var a=n[r].split("=");t[a[0]]=a[1]}return t};this.searchDate=window.location.search&&e(window.location.search).date},mounted:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.setTip(""),e.spin=!0,e.setTip("初始化性能监控..."),e.initStats(),e.setTip("初始化场景..."),t.next=8,e.loadScene();case 8:if(e.searchDate){t.next=12;break}return e.setTip("加载斗轮数据..."),t.next=12,e.loadDl();case 12:return e.setTip("加载分层数据..."),t.next=15,e.handleLayout();case 15:e.setTip("获取历史记录..."),e.getDates(),!e.searchDate&&e.move(),e.setTip("生成场景标注..."),e.genTickAndLabel(),e.render(),e.setTip(""),t.next=28;break;case 24:t.prev=24,t.t0=t["catch"](0),e.setTip("error"),e.render();case 28:setTimeout((function(){e.setTip(""),e.spin=!1,e.render()}),300);case 29:case"end":return t.stop()}}),t,null,[[0,24]])})))()},methods:{setTip:function(e){this.$refs.tip.innerHTML=e},handleDateChange:function(e){window.open("".concat(window.location.origin,"?date=").concat(e))},getDates:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b.a.post("/api/nameList").then((function(t){var n=t.data;e.dates=n}))["catch"]((function(t){return e.dates=[]}));case 2:case"end":return t.stop()}}),t)})))()},genTickAndLabel:function(){var e=this,t=300,n=60,r=10,a=5,o=Object(u["a"])(new Array(t/10).keys()).map((function(e){return e*r})),i=Object(u["a"])(new Array(n/5).keys()).map((function(e){return e*a})),s=Object(u["a"])(new Array(n/5).keys()).map((function(e){return-e*a})),c=new d["FontLoader"];c.load("fonts/helvetiker_regular.typeface.json",(function(t){for(var n=0;n<o.length;n++){var r=new d["Mesh"](new d["CubeGeometry"](.3,.01,3),new d["MeshBasicMaterial"]({color:16711680}));r.position.set(o[n],0,-6);var a=new d["Mesh"](new d["CubeGeometry"](.3,.01,3),new d["MeshBasicMaterial"]({color:16711680}));a.position.set(o[n],0,9);var c=new d["TextGeometry"]("".concat(o[n]),{font:t,size:3,height:.5,curveSegments:2,bevelEnabled:!1});c.center(),c.rotateX(-Math.PI/2),c.rotateY(Math.PI);var u=new d["MeshLambertMaterial"]({color:16711680}),l=new d["Mesh"](c,u);l.position.set(o[n],0,-2);var p=new d["TextGeometry"]("".concat(o[n]),{font:t,size:3,height:.5,curveSegments:2,bevelEnabled:!1});p.center(),p.rotateX(-Math.PI/2);var h=new d["MeshLambertMaterial"]({color:16711680}),f=new d["Mesh"](p,h);f.position.set(o[n],0,5),e.scene.add(r,a,l,f)}for(var m=8,v=0;v<i.length;v++){var w=new d["Mesh"](new d["CubeGeometry"](3,.3,.1),new d["MeshBasicMaterial"]({color:16711680}));w.rotation.x=Math.PI/2,w.position.set(-4,0,i[v]+m);var g=new d["TextGeometry"]("".concat(Math.abs(i[v])),{font:t,size:3,height:.5,curveSegments:2,bevelEnabled:!1});g.center(),g.rotateX(-Math.PI/2);var b=new d["MeshLambertMaterial"]({color:16711680}),y=new d["Mesh"](g,b);y.position.set(-7,0,i[v]+m),e.scene.add(w,y)}for(var x=0;x<s.length;x++){var M=new d["Mesh"](new d["CubeGeometry"](3,.3,.1),new d["MeshBasicMaterial"]({color:16711680}));M.rotation.x=Math.PI/2,M.position.set(-4,0,s[x]-m);var L=new d["TextGeometry"]("".concat(Math.abs(s[x])),{font:t,size:3,height:.5,curveSegments:2,bevelEnabled:!1});L.center(),L.rotateX(-Math.PI/2),L.rotateY(Math.PI);var T=new d["MeshLambertMaterial"]({color:16711680}),j=new d["Mesh"](L,T);j.position.set(-7,0,s[x]-m),e.scene.add(M,j)}}))},getUwb:function(){return new Promise((function(e,t){b.a.post("/api/uwb").then((function(t){var n=t.data;0===n.code?(Array.isArray(n.data.cart)&&(n.data.cart=n.data.cart.map((function(e){var t=e.split(" ");return t[1]=-t[1],t.join(" ")}))),e(n.data)):e(null)}))}))},move:function(){var e=this;this.timer&&clearInterval(this.timer),this.timer=setInterval(Object(l["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o,i,s,u,l,d,p,h,f,m,v;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.nowData&&(R=e.nowData),t.next=3,e.getData();case 3:n=t.sent,e.nowData=n,r=e.groupMove(n),a=Object(c["a"])(r,2),o=a[0],i=a[1],s=e.horRotate(n),u=Object(c["a"])(s,2),l=u[0],d=u[1],p=e.verRotate(n),h=Object(c["a"])(p,2),f=h[0],m=h[1],v=function e(){requestAnimationFrame(e),o.update(),i.update(),l.update(),d.update(),f.update(),m.update()},v();case 10:case"end":return t.stop()}}),t)}))),j)},groupMove:function(e){var t=this,n=[0,0],r=e.split(",").map((function(e){return+e.split(" ")[0]}));return R&&(n=R.split(",").map((function(e){return+e.split(" ")[0]}))),[new m["Tween"]({x:n[0]}).to({x:r[0]},j).onUpdate((function(e){var n=e.x;t.group.one.position.x=n,t.render()})).start(),new m["Tween"]({x:n[1]}).to({x:r[1]},j).onUpdate((function(e){var n=e.x;t.group.two.position.x=n,t.render()})).start()]},horRotate:function(e){var t=this,n=[0,0],r=e.split(",").map((function(e){return-+e.split(" ")[1]}));return R&&(n=R.split(",").map((function(e){return-+e.split(" ")[1]}))),[new m["Tween"]({y:n[0]}).to({y:r[0]},j).onUpdate((function(e){var n=e.y;t.group.one.children[0].rotation.y=t.degToAngle(n),t.render()})).delay(j).start(),new m["Tween"]({y:n[1]}).to({y:r[1]},j).onUpdate((function(e){var n=e.y;t.group.two.children[0].rotation.y=t.degToAngle(n),t.render()})).delay(j).start()]},verRotate:function(e){var t=this,n=[0,0],r=e.split(",").map((function(e){return+e.split(" ")[2]}));return R&&(n=R.split(",").map((function(e){return+e.split(" ")[2]}))),[new m["Tween"]({z:n[0]}).to({z:r[0]},j).onUpdate((function(e){var n=e.z;t.group.one.children[0].rotation.z=t.degToAngle(n),t.render()})).delay(j).start(),new m["Tween"]({z:n[1]}).to({z:r[1]},j).onUpdate((function(e){var n=e.z;t.group.two.children[0].rotation.z=t.degToAngle(n),t.render()})).delay(j).start()]},getData:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){var r=e.getRangeData,a="".concat(r(20,60)," ").concat(r(80,120)," ").concat(r(10,30),",").concat(r(120,180)," ").concat(r(-60,60)," ").concat(r(10,23));b.a.post("/api/dw").then((function(e){var n=e.data;0===n.code?t(n.data):t(a)}))})));case 1:case"end":return t.stop()}}),t)})))()},loadDl:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=T.map((function(t){return e.loadObj(t,L)})),t.next=3,Promise.all(n);case 3:e.dl=t.sent,e.dl=e.dl.concat(e.dl.map((function(e){return e.clone()}))),e.dl.map((function(e,t){return e.name=(t+1)%2?"top":"bottom"})),e.group={one:new d["Group"],two:new d["Group"]},e.group.one.add(e.dl[0],e.dl[1]),e.group.two.add(e.dl[2],e.dl[3]),e.scene.add(e.group.one,e.group.two),console.log("dl loaded...");case 11:case"end":return t.stop()}}),t)})))()},loadScene:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){var r=document.querySelector(".three-wrap");e.scene=new d["Scene"];var a=new d["PointLight"](16777215,0);a.position.set(100,100,60),a.castShadow=!0,a.power=10,e.scene.add(a);var o=new d["AmbientLight"](13421772,.6);e.scene.add(o);var i=r.offsetWidth,s=r.offsetHeight;e.camera=new d["PerspectiveCamera"](49,i/s,1,1200),e.camera.zoom=1,e.camera.position.set(430,135,217),e.camera.rotation.set(-30,48,23),e.camera.lookAt(e.scene.position),e.camera.updateProjectionMatrix(),e.renderer=new d["WebGLRenderer"],e.renderer.shadowMap.enabled=!0,e.renderer.setSize(i,s),e.renderer.setClearColor("#ccc",.8),r.appendChild(e.renderer.domElement),e.controls=new d["OrbitControls"](e.camera,e.renderer.domElement),e.controls.target=new d["Vector3"](150,0,0),e.controls.addEventListener("change",e.render),e.controls.update(),e.controls.saveState(),e.addResize(),t()})));case 1:case"end":return t.stop()}}),t)})))()},loadObj:function(e,t){return Object(l["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=new d["OBJLoader"],n.abrupt("return",new Promise((function(n,a){r.load(e,(function(e){Object.assign(e,{castShadow:!0,reciveShadow:!0}),e.children.forEach((function(e){return e.material.color.set(t)})),n(e)}),null,(function(e){return a(new Error("obj load error"))}))})));case 2:case"end":return n.stop()}}),n)})))()},render:function(){this.renderer.render(this.scene,this.camera)},initStats:function(){var e=this;this.statsList=[];for(var t=0;t<3;t++)if(1!=t){var n=new w.a;n.domElement.style.position="static",n.showPanel(t),this.statsList.push(n),document.querySelector(".stats-panel").appendChild(n.dom)}var r=function t(){e.statsList.map((function(e){e.begin(),e.end()})),requestAnimationFrame(t)};requestAnimationFrame(r)},addResize:function(){window.addEventListener("resize",this.resize,!1)},removeResize:function(){window.removeEventListener("resize",this.resize,!1)},resize:function(e){var t=document.querySelector(".three-wrap"),n=t.offsetWidth,r=t.offsetHeight;this.renderer.setSize(n,r),this.camera.updateProjectionMatrix()},handleAutoRotate:function(){this.autoRotateAnimate()},autoRotateAnimate:function(){requestAnimationFrame(this.autoRotateAnimate),this.controls.rotateLeft(-.005),this.controls.update(),this.renderer.render(this.scene,this.camera)},handleControl:function(e,t){if("panLeft"===e){var n=this.controls.object.matrix;this.controls[e](t,n)}else this.controls[e](t);this.controls.update(),this.render()},degToAngle:function(e){return e/180*Math.PI},angleToDeg:function(e){return e/Math.PI*180},handleRotate:function(e,t,n){if(t=+t,"belt"===e&&this.belt){var r=this.belt.position,a=r.x,o=r.y,i=r.z;this.belt.position.set(0,0,0),this.belt.rotation[n]=this.degToAngle(t),this.belt.position.set(a,o,i),this.render()}else this[e]&&(this[e].rotation[n]=this.degToAngle(t)%(2*Math.PI),this.render())},getRangeData:function(e,t){return parseInt(Math.random()*(t-e+1)+e)},deleteItem:function(e){try{this.scene.remove(e)}catch(t){}e&&e.traverse((function(e){e instanceof d["Mesh"]&&(e.geometry.dispose(),e.material.dispose())}))}}},O=_,P=(n("55b2"),n("2877")),C=Object(P["a"])(O,i,s,!1,null,null,null),A=C.exports,S={name:"App",components:{ThreeComp:A}},k=S,z=Object(P["a"])(k,a,o,!1,null,null,null),D=z.exports,I=n("f23d"),E=(n("202f"),n("cd22"),n("c1df")),G=n.n(E);d["OrbitControls"]=f.a,d["OBJLoader"]=p["OBJLoader"],d["MTLLoader"]=p["MTLLoader"],window.THREE=d,window.moment=G.a,I["message"].config({duration:2,top:"100px"}),r["a"].use(I["default"]),r["a"].config.productionTip=!1,Promise.all([b.a.get("/data/base1.json"),b.a.get("/data/base2.json")]).then((function(e){r["a"].prototype._basePoints=e.map((function(e){return e.data})),new r["a"]({render:function(e){return e(D)}}).$mount("#app")}))},"5a89":function(e,t,n){e.exports=n("2ae6")(330)},6397:function(e,t,n){e.exports=n("2ae6")(989)},bc3a:function(e,t,n){e.exports=n("2ae6")(790)},c1df:function(e,t,n){e.exports=n("2ae6")(6)},c8ba:function(e,t,n){e.exports=n("2ae6")(131)},cd22:function(e,t,n){},f23d:function(e,t,n){e.exports=n("2ae6")(808)},f450:function(e,t,n){}});
//# sourceMappingURL=app.2cbda3e0.js.map