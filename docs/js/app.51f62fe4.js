(function(t){function e(e){for(var i,s,r=e[0],u=e[1],c=e[2],l=0,m=[];l<r.length;l++)s=r[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&m.push(a[s][0]),a[s]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);p&&p(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={app:0},o=[];function s(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"bd560bed"}[t]+".js"}function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,i){n=a[t]=[e,i]}));e.push(n[2]=i);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=s(t);var c=new Error;o=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",c.name="ChunkLoadError",c.type=i,c.request=o,n[1](c)}a[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/games/",r.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var p=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"090e":function(t,e,n){t.exports=n.p+"img/kumabang_origin.8785cbae.png"},1689:function(t,e,n){},2547:function(t,e,n){t.exports=n.p+"img/planetbuster2.ee461fa2.png"},"25cf":function(t,e,n){t.exports=n.p+"img/questfortanelorn.0936f606.png"},3155:function(t,e,n){t.exports=n.p+"img/thestarsmydestination.b8d489e1.png"},"31b7":function(t,e,n){t.exports=n.p+"img/fruitsslash.9d9d7531.png"},"3cbc":function(t,e,n){t.exports=n.p+"img/shotgunpoker.ca9d6163.png"},4926:function(t,e,n){"use strict";n("e562")},"4d25":function(t,e,n){var i={"./applecatch.png":"752b","./fruitsslash.png":"31b7","./hayabusa.png":"8eed","./hiyoko.png":"863d","./kumabang_origin.png":"090e","./planetbuster.png":"700f","./planetbuster2.png":"2547","./planetbusterrevision.png":"eec1","./questfortanelorn.png":"25cf","./quickdraw.png":"93dd","./shotgunpoker.png":"3cbc","./tactics.png":"666b","./thestarsmydestination.png":"3155","./touchdeshot.png":"bba3"};function a(t){var e=o(t);return n(e)}function o(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=o,t.exports=a,a.id="4d25"},"515d":function(t,e,n){"use strict";n("f3c6")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("PageHeader")],1),n("router-view")],1)},o=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"headere-bar"},[i("MenuButton",{on:{open:t.onMenuOpen,close:t.onMenuClose}}),i("img",{staticClass:"logo",attrs:{src:n("cf05")}}),i("SideBar")],1)},r=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-button",on:{click:t.onClick}},[n("span",{staticClass:"line line-01",class:{"line-01-cross":t.isActive}}),n("span",{staticClass:"line line-02",class:{"line-02-cross":t.isActive}}),n("span",{staticClass:"line line-03",class:{"line-03-cross":t.isActive}})])},c=[],l={name:"MenuButton",computed:{isActive:function(){return this.$store.state.isMenuOpen}},methods:{onClick:function(){var t=!this.$store.state.isMenuOpen;this.$store.dispatch("SET_MENU_OPEN",t)}}},p=l,m=(n("fe90"),n("2877")),h=Object(m["a"])(p,u,c,!1,null,"9f91bdba",null),f=h.exports,d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"side-bar-box",class:{open:t.isOpen}},[t._m(0),"/"!==t.$route.path?i("div",[i("div",{staticClass:"menu-item",on:{click:t.onClickMainMenu}},[i("div",{staticClass:"spacer"}),i("div",{staticClass:"text"},[t._v("メインメニューへ")])]),i("div",{staticClass:"menu-item",on:{click:t.onClickBefore}},[i("div",{staticClass:"spacer"}),i("div",{staticClass:"text"},[t._v("いっこまえにもどる")])])]):t._e(),i("div",{staticClass:"menu-item",on:{click:t.onClickGithub}},[i("div",{staticClass:"spacer"}),i("img",{staticClass:"icon",attrs:{src:n("a7e8")}}),i("div",{staticClass:"text"},[t._v("GitHub")])]),i("div",{staticClass:"menu-item",on:{click:t.onClickTwitter}},[i("div",{staticClass:"spacer"}),i("img",{staticClass:"icon",attrs:{src:n("967e")}}),i("div",{staticClass:"text"},[t._v("Twitter")])])])},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-item"},[n("div",{staticClass:"spacer"}),n("div",{staticClass:"text"},[t._v("minimoのゲーム置き場")])])}],b={name:"SideBar",computed:{isOpen:function(){return this.$store.state.isMenuOpen}},methods:{onClickMainMenu:function(){this.closeMenu(),this.$router.push({name:"Home"})},onClickBefore:function(){this.closeMenu(),history.back()},onClickGithub:function(){this.closeMenu(),window.open("https://github.com/minimo","_blank")},onClickTwitter:function(){this.closeMenu(),window.open("https://twitter.com/minimo","_blank")},closeMenu:function(){this.$store.dispatch("SET_MENU_OPEN",!1)}}},v=b,_=(n("89cb"),Object(m["a"])(v,d,g,!1,null,"3c0921da",null)),C=_.exports,k={name:"PageHeader",components:{SideBar:C,MenuButton:f},methods:{onMenuOpen:function(){},onMenuClose:function(){}}},w=k,x=(n("715e"),Object(m["a"])(w,s,r,!1,null,"5a5594ae",null)),y=x.exports,O={components:{PageHeader:y}},M=O,E=(n("5c0b"),Object(m["a"])(M,a,o,!1,null,null,null)),D=E.exports,$=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"home",staticClass:"home"},[t._l(t.gameData,(function(t){return n("GameIcon",{key:t.title,attrs:{gameData:t}})})),t._l(4,(function(t){return n("GameIcon",{key:t})}))],2)},T=[],S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"box",staticClass:"thumbnail-box",on:{click:t.onClick}},[t.gameData?n("div",[n("div",{staticClass:"icon-box"},[n("img",{staticClass:"icon",attrs:{src:t.thumbnail,alt:t.alternative}})]),n("div",{staticClass:"title"},[t._v(t._s(t.title))])]):t._e()])},j=[],q={name:"GameIcon",props:{gameData:{type:Object,default:null}},data:function(){return{alternative:""}},mounted:function(){this.gameData?console.log(this.gameData):this.$refs.box.style.cursor="default"},computed:{title:function(){return this.gameData.title},thumbnail:function(){return n("4d25")("./".concat(this.gameData.thumbnail))}},methods:{onClick:function(){this.gameData&&(this.$store.dispatch("SET_GAME_DATA",this.gameData),this.$router.push({path:"detail"}),window.scrollTo({top:0}))}}},B=q,N=(n("daa9"),Object(m["a"])(B,S,j,!1,null,"41dddf00",null)),A=N.exports,G=n("8b6a"),U={name:"Home",components:{GameIcon:A},mounted:function(){this.$store.dispatch("SET_MENU_OPEN",!1)},computed:{gameData:function(){return G}}},F=U,H=(n("4926"),Object(m["a"])(F,P,T,!1,null,"eb929bfe",null)),L=H.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail-box"},[n("div",{staticClass:"title"},[t._v(t._s(t.title))]),n("img",{staticClass:"thumbnail",attrs:{src:t.thumbnail,alt:t.alternative}}),n("div",{staticClass:"button-box"},[n("button",{staticClass:"play-button",on:{click:t.onClickPlay}},[t._v("PLAY")])]),n("div",{staticClass:"button-box"},[n("button",{staticClass:"return-button",on:{click:t.onClickReturn}},[t._v("戻る")])])])},z=[],I={name:"GameDetail",mounted:function(){this.$store.dispatch("SET_MENU_OPEN",!1)},computed:{gameData:function(){return this.$store.state.gameData},title:function(){return this.gameData.title},thumbnail:function(){return n("4d25")("./".concat(this.gameData.thumbnail))},gameUrl:function(){return this.gameData.url},alternative:function(){return""},isMobile:function(){return!(!window.matchMedia||!window.matchMedia("(max-device-width: 640px)").matches)}},methods:{onClickPlay:function(){this.isMobile?window.open(this.gameUrl,"_blank"):this.$router.push({path:"frame"})},onClickReturn:function(){history.back()}}},Q=I,J=(n("515d"),Object(m["a"])(Q,R,z,!1,null,"4316863b",null)),K=J.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game-frame-box"},[n("iframe",{ref:"gameFrame",staticClass:"game-frame",attrs:{src:t.gameUrl}})])},Y=[],V={name:"GameFrame",mounted:function(){this.$store.dispatch("SET_MENU_OPEN",!1),window.addEventListener("resize",this.resize),this.resize()},computed:{gameData:function(){return this.$store.state.gameData},title:function(){return this.gameData.title},thumbnail:function(){return n("4d25")("./".concat(this.gameData.thumbnail))},gameUrl:function(){return this.gameData.url}},methods:{resize:function(){var t=window.innerHeight-100,e=window.innerWidth;this.$refs.gameFrame.style.height="".concat(t,"px"),"square"===this.gameData.orientation&&(this.$refs.gameFrame.style.width="".concat(t,"px"),e<t&&(this.$refs.gameFrame.style.width="".concat(e-100,"px"),this.$refs.gameFrame.style.height="".concat(e-100,"px")))}}},X=V,Z=(n("f373"),Object(m["a"])(X,W,Y,!1,null,"6c29c1ac",null)),tt=Z.exports;i["a"].use($["a"]);var et=[{path:"/",name:"Home",component:L},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/detail",name:"Detail",component:K},{path:"/frame",name:"Frame",component:tt}],nt=new $["a"]({mode:"history",base:"/games/",routes:et}),it=nt,at=n("2f62"),ot={isMenuOpen:!1,gameData:{}},st={setGameData:function(t,e){t.gameData=e},setMenuOpen:function(t,e){t.isMenuOpen=e}},rt={SET_GAME_DATA:function(t,e){t.commit("setGameData",e)},SET_MENU_OPEN:function(t,e){t.commit("setMenuOpen",e)}},ut=n("0e44");i["a"].use(at["a"]);var ct=new at["a"].Store({state:ot,mutations:st,actions:rt,modules:{},plugins:[Object(ut["a"])({storage:window.sessionStorage})]});i["a"].config.productionTip=!1,new i["a"]({router:it,store:ct,render:function(t){return t(D)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("91c4")},"666b":function(t,e,n){t.exports=n.p+"img/tactics.d4b2dae2.png"},"700f":function(t,e,n){t.exports=n.p+"img/planetbuster.58f9950a.png"},"715e":function(t,e,n){"use strict";n("d0d0")},"752b":function(t,e,n){t.exports=n.p+"img/applecatch.752eb674.png"},"7bbc":function(t,e,n){},"863d":function(t,e,n){t.exports=n.p+"img/hiyoko.231f9575.png"},"89cb":function(t,e,n){"use strict";n("ee99")},"8b6a":function(t){t.exports=JSON.parse('{"applecatch":{"title":"崖のくまさん危機一髪","url":"http://minimo.github.io/AppleCatch/","thumbnail":"applecatch.png","width":320,"height":320,"orientation":"square","description":"<div>くまくま大変だクマー！</div>"},"kumabang":{"title":"KumaKuma☆BangBang","url":"http://minimo.github.io/KumaBang_origin/","thumbnail":"kumabang_origin.png","width":320,"height":320,"orientation":"square"},"fruitsslash":{"title":"Fruits Slash!","url":"https://minimo.github.io/FruitsSlash/","thumbnail":"fruitsslash.png","width":320,"height":320,"orientation":"square"},"hayabusa":{"title":"はやぶさの帰還","url":"http://minimo.github.io/ReturnOfHayabusa/","thumbnail":"hayabusa.png","orientation":"square"},"tactics":{"title":"Tactics 9x9","url":"http://minimo.github.io/tactics/","thumbnail":"tactics.png","orientation":"square"},"planetbuster":{"title":"PlanetBuster","url":"http://minimo.github.io/PlanetBuster/","thumbnail":"planetbuster.png","orientation":"square"},"planetbuster2":{"title":"PlanetBuster 2","url":"http://minimo.github.io/PlanetBuster2/","thumbnail":"planetbuster2.png","orientation":"square"},"thestarsmydestination":{"title":"The stars my destination","url":"http://minimo.github.io/TheStarsMyDestinationEx/","thumbnail":"thestarsmydestination.png","orientation":"square"},"hiyoko":{"title":"ひよこは意外と高く空を飛ぶ","url":"http://minimo.github.io/hiyokoflyhigh/","thumbnail":"hiyoko.png","orientation":"square"},"touchdeshot":{"title":"Touch de SHOT","url":"http://minimo.github.io/TouchDeShot/","thumbnail":"touchdeshot.png","orientation":"square"},"quickdraw":{"title":"Quick Draw","url":"http://minimo.github.io/QuickDrawEx/","thumbnail":"quickdraw.png","orientation":"portrait"},"planetbusterrevision":{"title":"PlanetBusterRevision","url":"http://minimo.github.io/PlanetBusterRevision/","thumbnail":"planetbusterrevision.png","orientation":"portrait"},"shotgunpoker":{"title":"Shotgun Poker","url":"http://minimo.github.io/ShotgunPoker/","thumbnail":"shotgunpoker.png","orientation":"portrait"},"questfortanelorn":{"title":"Quest for Tanelorn","url":"https://minimo.github.io/QuestForTanelorn/","thumbnail":"questfortanelorn.png","orientation":"landscape"}}')},"8eed":function(t,e,n){t.exports=n.p+"img/hayabusa.2d1ddb73.png"},"91c4":function(t,e,n){},"93dd":function(t,e,n){t.exports=n.p+"img/quickdraw.aade89d1.png"},"967e":function(t,e,n){t.exports=n.p+"img/iconTwitter.41192923.svg"},a7e8:function(t,e,n){t.exports=n.p+"img/iconGithub.7c791d1b.svg"},bba3:function(t,e,n){t.exports=n.p+"img/touchdeshot.f8cf3317.png"},cf05:function(t,e,n){t.exports=n.p+"img/logo.d351c2cc.png"},d0d0:function(t,e,n){},daa9:function(t,e,n){"use strict";n("7bbc")},e562:function(t,e,n){},e912:function(t,e,n){},ee99:function(t,e,n){},eec1:function(t,e,n){t.exports=n.p+"img/planetbusterrevision.a3e405d8.png"},f373:function(t,e,n){"use strict";n("1689")},f3c6:function(t,e,n){},fe90:function(t,e,n){"use strict";n("e912")}});
//# sourceMappingURL=app.51f62fe4.js.map