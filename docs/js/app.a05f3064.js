(function(t){function e(e){for(var i,o,r=e[0],u=e[1],c=e[2],l=0,p=[];l<r.length;l++)o=r[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);m&&m(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={app:0},s=[];function o(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"bd560bed"}[t]+".js"}function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,i){n=a[t]=[e,i]}));e.push(n[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=o(t);var c=new Error;s=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",c.name="ChunkLoadError",c.type=i,c.request=s,n[1](c)}a[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(e)},r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/games/",r.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var m=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"090e":function(t,e,n){t.exports=n.p+"img/kumabang_origin.8785cbae.png"},"09bd":function(t,e,n){"use strict";n("1188")},1188:function(t,e,n){},1689:function(t,e,n){},2547:function(t,e,n){t.exports=n.p+"img/planetbuster2.ee461fa2.png"},"25cf":function(t,e,n){t.exports=n.p+"img/questfortanelorn.0936f606.png"},3155:function(t,e,n){t.exports=n.p+"img/thestarsmydestination.b8d489e1.png"},"31b7":function(t,e,n){t.exports=n.p+"img/fruitsslash.9d9d7531.png"},"3cbc":function(t,e,n){t.exports=n.p+"img/shotgunpoker.ca9d6163.png"},"44c7":function(t,e,n){t.exports=n.p+"img/iconMikan.77613953.png"},"4d25":function(t,e,n){var i={"./applecatch.png":"752b","./fruitsslash.png":"31b7","./hayabusa.png":"8eed","./hiyoko.png":"863d","./kumabang_origin.png":"090e","./planetbuster.png":"700f","./planetbuster2.png":"2547","./planetbusterrevision.png":"eec1","./questfortanelorn.png":"25cf","./quickdraw.png":"93dd","./shotgunpoker.png":"3cbc","./tactics.png":"666b","./thestarsmydestination.png":"3155","./touchdeshot.png":"bba3"};function a(t){var e=s(t);return n(e)}function s(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=s,t.exports=a,a.id="4d25"},"515d":function(t,e,n){"use strict";n("f3c6")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("PageHeader")],1),n("router-view")],1)},s=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"headere-bar"},[i("MenuButton",{on:{open:t.onMenuOpen,close:t.onMenuClose}}),i("img",{staticClass:"logo",attrs:{src:n("cf05")}}),i("SideBar")],1)},r=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-button",on:{click:t.onClick}},[n("span",{staticClass:"line line-01",class:{"line-01-cross":t.isActive}}),n("span",{staticClass:"line line-02",class:{"line-02-cross":t.isActive}}),n("span",{staticClass:"line line-03",class:{"line-03-cross":t.isActive}})])},c=[],l={name:"MenuButton",computed:{isActive:function(){return this.$store.state.isMenuOpen}},methods:{onClick:function(){var t=!this.$store.state.isMenuOpen;this.$store.dispatch("SET_MENU_OPEN",t)}}},m=l,p=(n("fe90"),n("2877")),h=Object(p["a"])(m,u,c,!1,null,"9f91bdba",null),f=h.exports,d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"side-bar-box",class:{open:t.isOpen}},[t._m(0),"/"!==t.$route.path?i("div",[i("div",{staticClass:"menu-item",on:{click:t.onClickMainMenu}},[i("div",{staticClass:"spacer"}),i("div",{staticClass:"text"},[t._v("メインページへ")])]),i("div",{staticClass:"menu-item",on:{click:t.onClickBefore}},[i("div",{staticClass:"spacer"}),i("div",{staticClass:"text"},[t._v("いっこまえにもどる")])])]):t._e(),i("div",{staticClass:"menu-item",on:{click:t.onClickGithub}},[i("div",{staticClass:"spacer"}),i("img",{staticClass:"icon",attrs:{src:n("a7e8")}}),i("div",{staticClass:"text"},[t._v("GitHub")])]),i("div",{staticClass:"menu-item",on:{click:t.onClickTwitter}},[i("div",{staticClass:"spacer"}),i("img",{staticClass:"icon",attrs:{src:n("967e")}}),i("div",{staticClass:"text"},[t._v("Twitter")])]),"/unfinished"!==t.$route.path?i("div",[i("div",{staticClass:"menu-item",on:{click:t.onClickUnfinished}},[i("div",{staticClass:"spacer"}),i("img",{staticClass:"icon",attrs:{src:n("44c7")}}),i("div",{staticClass:"text"},[t._v("みかん星人")])])]):t._e()])},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-item"},[n("div",{staticClass:"spacer"}),n("div",{staticClass:"text"},[t._v("minimoのゲーム置き場")])])}],b={name:"SideBar",computed:{isOpen:function(){return this.$store.state.isMenuOpen}},methods:{onClickMainMenu:function(){this.closeMenu(),this.$router.push({name:"Home"})},onClickBefore:function(){this.closeMenu(),history.back()},onClickGithub:function(){this.closeMenu(),window.open("https://github.com/minimo","_blank")},onClickTwitter:function(){this.closeMenu(),window.open("https://twitter.com/minimo","_blank")},onClickUnfinished:function(){this.closeMenu(),this.$router.push({name:"Unfinished"})},closeMenu:function(){this.$store.dispatch("SET_MENU_OPEN",!1)}}},v=b,_=(n("7fc5"),Object(p["a"])(v,d,g,!1,null,"1b7ea142",null)),C=_.exports,k={name:"PageHeader",components:{SideBar:C,MenuButton:f},methods:{onMenuOpen:function(){},onMenuClose:function(){}}},x=k,w=(n("715e"),Object(p["a"])(x,o,r,!1,null,"5a5594ae",null)),y=w.exports,M={components:{PageHeader:y}},O=M,E=(n("5c0b"),Object(p["a"])(O,a,s,!1,null,null,null)),D=E.exports,$=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"home",staticClass:"home"},[t._l(t.gameData.finished,(function(t){return n("GameIcon",{key:t.title,attrs:{gameData:t}})})),t._l(4,(function(t){return n("GameIcon",{key:t})}))],2)},P=[],S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"box",staticClass:"thumbnail-box",on:{click:t.onClick}},[t.gameData?n("div",[n("div",{staticClass:"icon-box"},[n("img",{staticClass:"icon",attrs:{src:t.thumbnail,alt:t.alternative}})]),n("div",{staticClass:"title"},[t._v(t._s(t.title))])]):t._e()])},j=[],q={name:"GameIcon",props:{gameData:{type:Object,default:null}},data:function(){return{alternative:""}},mounted:function(){this.gameData?console.log(this.gameData):this.$refs.box.style.cursor="default"},computed:{title:function(){return this.gameData.title},thumbnail:function(){return n("4d25")("./".concat(this.gameData.thumbnail))},isMobile:function(){return!(!window.matchMedia||!window.matchMedia("(max-device-width: 640px)").matches)}},methods:{onClick:function(){this.gameData&&(this.$store.dispatch("SET_GAME_DATA",this.gameData),this.$store.state.isTransitionGameDetail?(this.$router.push({path:"detail"}),window.scrollTo({top:0})):this.isMobile?window.open(this.gameUrl,"_blank"):this.$router.push({path:"frame"}))}}},B=q,G=(n("d71f"),Object(p["a"])(B,S,j,!1,null,"7fe780fb",null)),U=G.exports,N=n("8b6a"),A={name:"Home",components:{GameIcon:U},mounted:function(){this.$store.dispatch("SET_MENU_OPEN",!1)},computed:{gameData:function(){return N}}},F=A,H=(n("09bd"),Object(p["a"])(F,T,P,!1,null,"528344f9",null)),I=H.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail-box"},[n("div",{staticClass:"title"},[t._v(t._s(t.title))]),n("img",{staticClass:"thumbnail",attrs:{src:t.thumbnail,alt:t.alternative}}),n("div",{staticClass:"button-box"},[n("button",{staticClass:"play-button",on:{click:t.onClickPlay}},[t._v("PLAY")])]),n("div",{staticClass:"button-box"},[n("button",{staticClass:"return-button",on:{click:t.onClickReturn}},[t._v("戻る")])])])},R=[],z={name:"GameDetail",mounted:function(){this.$store.dispatch("SET_MENU_OPEN",!1)},computed:{gameData:function(){return this.$store.state.gameData},title:function(){return this.gameData.title},thumbnail:function(){return n("4d25")("./".concat(this.gameData.thumbnail))},gameUrl:function(){return this.gameData.url},alternative:function(){return""},isMobile:function(){return!(!window.matchMedia||!window.matchMedia("(max-device-width: 640px)").matches)}},methods:{onClickPlay:function(){this.isMobile?window.open(this.gameUrl,"_blank"):this.$router.push({path:"frame"})},onClickReturn:function(){history.back()}}},Q=z,J=(n("515d"),Object(p["a"])(Q,L,R,!1,null,"4316863b",null)),K=J.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game-frame-box"},[n("iframe",{ref:"gameFrame",staticClass:"game-frame",attrs:{src:t.gameUrl}})])},Y=[],V={name:"GameFrame",mounted:function(){this.$store.dispatch("SET_MENU_OPEN",!1),window.addEventListener("resize",this.resize),this.resize()},computed:{gameData:function(){return this.$store.state.gameData},title:function(){return this.gameData.title},thumbnail:function(){return n("4d25")("./".concat(this.gameData.thumbnail))},gameUrl:function(){return this.gameData.url}},methods:{resize:function(){var t=window.innerHeight-100,e=window.innerWidth;this.$refs.gameFrame.style.height="".concat(t,"px"),"square"===this.gameData.orientation&&(this.$refs.gameFrame.style.width="".concat(t,"px"),e<t&&(this.$refs.gameFrame.style.width="".concat(e-100,"px"),this.$refs.gameFrame.style.height="".concat(e-100,"px")))}}},X=V,Z=(n("f373"),Object(p["a"])(X,W,Y,!1,null,"6c29c1ac",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"home",staticClass:"home"},[t._l(t.gameData.unfinished,(function(t){return n("GameIcon",{key:t.title,attrs:{gameData:t}})})),t._l(4,(function(t){return n("GameIcon",{key:t})}))],2)},nt=[],it={name:"Unfinished",components:{GameIcon:U},mounted:function(){this.$store.dispatch("SET_MENU_OPEN",!1)},computed:{gameData:function(){return N}}},at=it,st=(n("abf6"),Object(p["a"])(at,et,nt,!1,null,"73b465cc",null)),ot=st.exports;i["a"].use($["a"]);var rt=[{path:"/",name:"Home",component:I},{path:"/unfinished",name:"Unfinished",component:ot},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/detail",name:"Detail",component:K},{path:"/frame",name:"Frame",component:tt}],ut=new $["a"]({mode:"history",base:"/games/",routes:rt}),ct=ut,lt=n("2f62"),mt={isTransitionGameDetail:!1,isMenuOpen:!1,gameData:{}},pt={setGameData:function(t,e){t.gameData=e},setMenuOpen:function(t,e){t.isMenuOpen=e}},ht={SET_GAME_DATA:function(t,e){t.commit("setGameData",e)},SET_MENU_OPEN:function(t,e){t.commit("setMenuOpen",e)}},ft=n("0e44");i["a"].use(lt["a"]);var dt=new lt["a"].Store({state:mt,mutations:pt,actions:ht,modules:{},plugins:[Object(ft["a"])({storage:window.sessionStorage})]});i["a"].config.productionTip=!1,new i["a"]({router:ct,store:dt,render:function(t){return t(D)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("91c4")},"666b":function(t,e,n){t.exports=n.p+"img/tactics.d4b2dae2.png"},"700f":function(t,e,n){t.exports=n.p+"img/planetbuster.58f9950a.png"},"715e":function(t,e,n){"use strict";n("d0d0")},"752b":function(t,e,n){t.exports=n.p+"img/applecatch.752eb674.png"},"7a31":function(t,e,n){},"7fc5":function(t,e,n){"use strict";n("7a31")},"863d":function(t,e,n){t.exports=n.p+"img/hiyoko.231f9575.png"},"8b6a":function(t){t.exports=JSON.parse('{"finished":{"applecatch":{"title":"崖のくまさん危機一髪","url":"https://minimo.github.io/AppleCatch/","thumbnail":"applecatch.png","orientation":"square","description":"<div>くまくま大変だクマー！</div>"},"kumabang":{"title":"KumaKuma☆BangBang","url":"https://minimo.github.io/KumaBang_origin/","thumbnail":"kumabang_origin.png","orientation":"square"},"fruitsslash":{"title":"Fruits Slash!","url":"https://minimo.github.io/FruitsSlash/","thumbnail":"fruitsslash.png","orientation":"square"},"hayabusa":{"title":"はやぶさの帰還","url":"https://minimo.github.io/ReturnOfHayabusa/","thumbnail":"hayabusa.png","orientation":"square"},"tactics":{"title":"Tactics 9x9","url":"https://minimo.github.io/tactics/","thumbnail":"tactics.png","orientation":"square"},"planetbuster":{"title":"PlanetBuster","url":"https://minimo.github.io/PlanetBuster/","thumbnail":"planetbuster.png","orientation":"square"},"planetbuster2":{"title":"PlanetBuster 2","url":"https://minimo.github.io/PlanetBuster2/","thumbnail":"planetbuster2.png","orientation":"square"},"thestarsmydestination":{"title":"The stars my destination","url":"https://minimo.github.io/TheStarsMyDestinationEx/","thumbnail":"thestarsmydestination.png","orientation":"square"},"hiyoko":{"title":"ひよこは意外と高く空を飛ぶ","url":"https://minimo.github.io/hiyokoflyhigh/","thumbnail":"hiyoko.png","orientation":"square"},"touchdeshot":{"title":"Touch de SHOT","url":"https://minimo.github.io/TouchDeShot/","thumbnail":"touchdeshot.png","orientation":"square"},"quickdraw":{"title":"Quick Draw","url":"https://minimo.github.io/QuickDrawEx/","thumbnail":"quickdraw.png","orientation":"portrait"},"planetbusterrevision":{"title":"PlanetBusterRevision","url":"https://minimo.github.io/PlanetBusterRevision/","thumbnail":"planetbusterrevision.png","orientation":"portrait"},"shotgunpoker":{"title":"Shotgun Poker","url":"https://minimo.github.io/ShotgunPoker/","thumbnail":"shotgunpoker.png","orientation":"portrait"},"questfortanelorn":{"title":"Quest for Tanelorn","url":"https://minimo.github.io/QuestForTanelorn/","thumbnail":"questfortanelorn.png","orientation":"landscape"}},"unfinished":{"slashbattle":{"title":"SlashBattle","url":"https://minimo.github.io/SlashBattle/","thumbnail":"questfortanelorn.png","orientation":"landscape"}}}')},"8eed":function(t,e,n){t.exports=n.p+"img/hayabusa.2d1ddb73.png"},"91c4":function(t,e,n){},"93dd":function(t,e,n){t.exports=n.p+"img/quickdraw.aade89d1.png"},"967e":function(t,e,n){t.exports=n.p+"img/iconTwitter.41192923.svg"},a0d5:function(t,e,n){},a7e8:function(t,e,n){t.exports=n.p+"img/iconGithub.7c791d1b.svg"},abf6:function(t,e,n){"use strict";n("b9a1")},b9a1:function(t,e,n){},bba3:function(t,e,n){t.exports=n.p+"img/touchdeshot.f8cf3317.png"},cf05:function(t,e,n){t.exports=n.p+"img/logo.d351c2cc.png"},d0d0:function(t,e,n){},d71f:function(t,e,n){"use strict";n("a0d5")},e912:function(t,e,n){},eec1:function(t,e,n){t.exports=n.p+"img/planetbusterrevision.a3e405d8.png"},f373:function(t,e,n){"use strict";n("1689")},f3c6:function(t,e,n){},fe90:function(t,e,n){"use strict";n("e912")}});
//# sourceMappingURL=app.a05f3064.js.map