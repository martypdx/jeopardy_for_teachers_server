(function(e){function t(t){for(var a,s,c=t[0],u=t[1],i=t[2],d=0,h=[];d<c.length;d++)s=c[d],r[s]&&h.push(r[s][0]),r[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(h.length)h.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("c21b"),r=n.n(a);r.a},"0530":function(e,t,n){},"0782":function(e,t,n){"use strict";var a=n("d072"),r=n.n(a);r.a},"22d7":function(e,t,n){"use strict";var a=n("6650"),r=n.n(a);r.a},2727:function(e,t,n){"use strict";var a=n("3560"),r=n.n(a);r.a},"28da":function(e,t,n){"use strict";var a=n("6077"),r=n.n(a);r.a},"29c9":function(e,t,n){"use strict";var a=n("b367"),r=n.n(a);r.a},3220:function(e,t,n){"use strict";var a=n("d30a"),r=n.n(a);r.a},3560:function(e,t,n){},"35cc":function(e,t,n){},"3d05":function(e,t,n){},5167:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("p",{attrs:{id:"logo"}},[e._v("Jeopardy!")]),n("header",[e.user?n("a",{attrs:{href:"/"}},[e._v("Home")]):e._e(),e.user?e._e():n("RouterLink",{attrs:{to:"/auth"}},[e._v("Sign in")]),e.user?n("a",{attrs:{href:"/"},on:{click:function(t){return t.preventDefault(),e.handleSignOut(t)}}},[e._v("Sign Out")]):e._e(),e.user?n("router-link",{attrs:{to:"/board"}}):e._e(),e.user?n("router-link",{attrs:{to:"/"}}):e._e(),e.user?n("span",{staticClass:"user"},[e._v("user: "+e._s(e.user.name))]):e._e()],1),n("RouterView",{staticClass:"routes",attrs:{onUser:e.handleUser,user:e.user}})],1)},o=[],s="/api",c="".concat(s,"/auth"),u="".concat(s,"/search"),i="".concat(s,"/games"),l="".concat(s,"/me/boards"),d="".concat(s,"/teams"),h="".concat(s,"/game");function m(e){return e.ok?e.json():e.json().then(function(e){throw e.error})}var v="";function f(){var e={"Content-type":"application/json"};return v&&(e["Authorization"]=v),e}function p(){return fetch("api/games-played",{headers:f()}).then(m)}function _(){return fetch(l,{headers:f()}).then(m)}function b(e){return fetch("".concat(i,"/").concat(e.className,"/").concat(e.boardId),{method:"POST",headers:f()}).then(m)}function g(e){return fetch("".concat(d,"/").concat(e),{method:"POST",headers:f()}).then(m)}function w(e,t){return fetch("".concat(d,"/games/").concat(e,"/").concat(t),{method:"POST",headers:f()}).then(m)}function y(e){return fetch("RESULTS_URL/".concat(e),{headers:f()}).then(m)}function C(e){return fetch("".concat(s,"/teams/").concat(e),{headers:f()}).then(m)}function k(e){return fetch("".concat(c,"/signup"),{method:"POST",headers:f(),body:JSON.stringify(e)}).then(m).then(function(e){return x(e),e})}function N(e){return fetch("".concat(c,"/signin"),{method:"POST",headers:f(),body:JSON.stringify(e)}).then(m).then(function(e){return x(e),e})}function S(){v="",window.localStorage.removeItem("user")}function x(e){v=e.id,window.localStorage.setItem("user",JSON.stringify(e))}function $(){var e=window.localStorage.getItem("user");if(!e)return null;var t=JSON.parse(e);return v=t.id,t}function I(e){return fetch("".concat(u,"/").concat(e),{headers:f()}).then(m)}function A(e,t){return console.log("api category",e,"api board",t),fetch("".concat(l,"/").concat(t,"/categories/").concat(e),{method:"POST",headers:f()}).then(m)}function O(e){return console.log("api board",e),fetch("".concat(l,"/").concat(e),{method:"POST",headers:f()}).then(m)}function P(e,t,n,a){return console.log("api category",a,"api clue",e),fetch("".concat(s,"/me/categories/").concat(a,"/clues/").concat(e,"/").concat(t,"/").concat(n),{method:"POST",headers:f()}).then(m)}function j(e){return fetch("".concat(h,"/").concat(e),{headers:f()}).then(m)}function T(e){return fetch("".concat(s,"/categories/").concat(e),{headers:f()}).then(m)}function E(e){return fetch("".concat(s,"/scores/").concat(e),{headers:f()}).then(m)}function M(e){return fetch("".concat(s,"/delete-game/").concat(e),{method:"DELETE",headers:f()}).then(m)}function D(e,t){return fetch("".concat(s,"/game/").concat(e,"/turn/").concat(t),{method:"PUT",headers:f()}).then(m)}function U(e){return fetch("".concat(s,"/get-turn/").concat(e),{headers:f()}).then(m)}function B(e){return console.log("get number called",e),fetch("".concat(l,"/categoryNumber/").concat(e),{headers:f()}).then(m)}function R(e){return fetch("".concat(l,"/clues/").concat(e),{headers:f()}).then(m)}function q(e){return fetch("".concat(l,"/categories/").concat(e),{headers:f()}).then(m)}var J={name:"app",components:{},data:function(){return{user:null}},methods:{handleUser:function(e){this.user=e},handleSignOut:function(){S(),this.user=null,this.$router.push("/")}},created:function(){this.user=$()}},F=J,G=(n("034f"),n("2877")),V=Object(G["a"])(F,r,o,!1,null,null,null);V.options.__file="App.vue";var Y=V.exports,L=n("8c4f"),H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Create your game board")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.handleAddBoard(t)}}},[n("div",[e._v("Game Name: \n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.board,expression:"board"}],attrs:{type:"text",name:"board",placeholder:"Game Name",required:""},domProps:{value:e.board},on:{input:function(t){t.target.composing||(e.board=t.target.value)}}}),n("button",[e._v("Submit")])])])])},z=[],K={data:function(){return{board:""}},methods:{handleAddBoard:function(){var e=this;return console.log("board",this.board),O(this.board).then(function(t){e.board=t,e.$router.push("/board/".concat(e.board.id))})}}},W=K,Q=(n("28da"),Object(G["a"])(W,H,z,!1,null,null,null));Q.options.__file="BoardName.vue";var X=Q.exports,Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.user?n("div",[n("h1",[e._v("Dashboard")]),n("br"),n("div",{attrs:{id:"options"}},[n("router-link",{attrs:{to:"/game"}},[e._v("Play Game")]),n("router-link",{attrs:{to:"/board"}},[e._v("Make New Game Board")])],1),n("RouterView"),n("div",{attrs:{id:"game-box"}},[n("h3",[e._v("Your Games:")]),n("ul",e._l(e.games,function(t,a){return n("li",{key:t.id},[e._v("\n        "+e._s(t.class_name)+"\n        "),n("button",{on:{click:function(t){e.handleDelete(a)}}},[e._v("Delete")])])}))])],1):e._e()},ee=[],te={props:{user:Object,handleNext:Function},data:function(){return{games:null}},created:function(){var e=this;p().then(function(t){e.games=t}).catch(function(t){e.error=t})},methods:{handleDelete:function(e){var t=this;if(!confirm("Are you sure you want to remove game ".concat(this.games[e].class_name)))return M(this.games[e].id).then(function(){t.$router.push("/")})}}},ne=te,ae=(n("93d6"),Object(G["a"])(ne,Z,ee,!1,null,null,null));ae.options.__file="Dash.vue";var re=ae.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"clue-router"}},[n("router-link",{attrs:{to:"/board/"+e.board+"/categories/"+e.category+"/custom-clue"}},[e._v("Create Custom Clue")]),n("br"),n("router-link",{attrs:{to:"/board/"+e.board+"/categories/"+e.category+"/search"}},[e._v("Search Jeopardy Database for a Clue")]),n("br"),n("router-link",{attrs:{to:"/board/"+e.board+"/categories/"+e.category+"/your-board"}},[e._v("Your Board")]),e.previousClue?n("div",[n("p",[e._v("Your previous clue, answer, and point value were saved as:")]),n("ul",[n("li",[e._v("Clue: "+e._s(e.previousClue.clue))]),n("li",[e._v("Answer: "+e._s(e.previousClue.answer))]),n("li",[e._v("Value: "+e._s(e.previousClue.value))])])]):e._e(),n("RouterView",{attrs:{message:e.message,onAdd:e.handleCustomClue,category:e.category,addCustomClue:e.handleCustomClue,historicClues:e.clues,onSearch:e.handleSearch}})],1)},se=[],ce={data:function(){return{clues:null,keywords:"",clueNumber:null,previousClue:null,categoryNumber:null,message:""}},created:function(){var e=this;this.category=this.$route.params.categoryId,this.board=this.$route.params.id,B(this.board).then(function(t){e.categoryNumber=t.count,console.log("cat",e.categoryNumber)})},methods:{handleSearch:function(e){this.keywords=e,this.searchData()},searchData:function(){var e=this;I(this.keywords).then(function(t){return e.clues=t,e.clues})},handleCustomClue:function(e,t,n,a){var r=this;return this.clueNumber++,console.log("clue num",this.clueNumber),P(e,t,n,this.category).then(function(e){r.previousClue=e,r.clue="",r.answer="",r.value=null,r.clueNumber<5&&r.categoryNumber<=6?r.$router.push("/board/".concat(r.board,"/categories/").concat(r.category,"/").concat(a)):5===r.clueNumber&&r.categoryNumber<6?r.$router.push("/board/".concat(r.board)):5===r.clueNumber&&r.categoryNumber>=6?(r.message="You have finished your game board!",r.$router.push("/board/".concat(r.board,"/categories/").concat(r.category,"/your-board"))):alert("an error has occured")})},handleAdd:function(e,t,n){console.log("view",e,t,n)}}},ue=ce,ie=(n("af73"),Object(G["a"])(ue,oe,se,!1,null,null,null));ie.options.__file="AddClueView.vue";var le=ie.exports,de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v(e._s(e.label))]),n("button",{on:{click:function(t){e.type=e.isSignUp?"signIn":"signUp"}}},[e._v("\n    "+e._s(e.isSignUp?"Already a user? Click here to sign in!":"New? Click here to sign up!")+"\n    ")]),n("pre",[e._v(e._s(e.error))]),n("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("label",[e._v("\n        Username:\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.name,expression:"credentials.name"}],domProps:{value:e.credentials.name},on:{input:function(t){t.target.composing||e.$set(e.credentials,"name",t.target.value)}}})]),n("br"),n("label",[e._v("\n        Password:\n        "),"checkbox"===(e.show?"text":"password")?n("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.credentials.password)?e._i(e.credentials.password,null)>-1:e.credentials.password},on:{change:function(t){var n=e.credentials.password,a=t.target,r=!!a.checked;if(Array.isArray(n)){var o=null,s=e._i(n,o);a.checked?s<0&&e.$set(e.credentials,"password",n.concat([o])):s>-1&&e.$set(e.credentials,"password",n.slice(0,s).concat(n.slice(s+1)))}else e.$set(e.credentials,"password",r)}}}):"radio"===(e.show?"text":"password")?n("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"}],attrs:{type:"radio"},domProps:{checked:e._q(e.credentials.password,null)},on:{change:function(t){e.$set(e.credentials,"password",null)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"}],attrs:{type:e.show?"text":"password"},domProps:{value:e.credentials.password},on:{input:function(t){t.target.composing||e.$set(e.credentials,"password",t.target.value)}}})]),n("button",{attrs:{type:"button"},on:{click:function(t){e.show=!e.show}}},[e._v("\n      "+e._s(e.show?"Hide":"Show")+"\n      ")]),n("br"),n("button",{attrs:{type:"submit"}},[e._v("\n        Submit\n      ")])])])},he=[],me={props:{onUser:Function},data:function(){return{credentials:{name:"",password:""},show:!1,type:"signIn",error:null}},computed:{isSignUp:function(){return"signUp"===this.type},label:function(){return this.isSignUp?"Sign Up":"Sign In"}},watch:{type:function(e,t){e!==t&&(this.error=null)}},methods:{handleSubmit:function(){var e=this;this.error=null;var t=this.isSignUp?k:N;t(this.credentials).then(function(t){e.onUser(t),e.$router.push("/")}).catch(function(t){e.error=t})}}},ve=me,fe=(n("29c9"),Object(G["a"])(ve,de,he,!1,null,null,null));fe.options.__file="Auth.vue";var pe=fe.exports,_e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("h2",[e._v("Select a Board")]),n("ul",e._l(e.boards,function(t){return e.boards?n("label",{key:t.id,staticClass:"board"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.boardId,expression:"boardId"}],attrs:{type:"radio"},domProps:{value:t.id,checked:e._q(e.boardId,t.id)},on:{change:function(n){e.boardId=t.id}}}),e._v("\n        "+e._s(t.name)+"\n      ")]):e._e()})),n("h2",[e._v("Add Class Name")]),n("label",[e._v("\n      Class Name: \n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.className,expression:"className"}],attrs:{type:"text",name:"className",placeholder:"Class Name",required:""},domProps:{value:e.className},on:{input:function(t){t.target.composing||(e.className=t.target.value)}}})]),n("button",[e._v("Next")])])])},be=[],ge={props:{},data:function(){return{className:"",boards:null,boardId:null}},computed:{isNew:function(){return void 0===this.game}},created:function(){var e=this;_().then(function(t){e.boards=t}).catch(function(t){e.error=t})},methods:{handleSubmit:function(){var e=this,t={className:this.className,boardId:this.boardId};return b(t).then(function(t){e.game=t,e.$router.push("/game/".concat(e.game.id))})}},components:{}},we=ge,ye=(n("849a"),Object(G["a"])(we,_e,be,!1,null,null,null));ye.options.__file="AddClassName.vue";var Ce=ye.exports,ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"teams"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("div",{staticClass:"team-list"},[e.teams.length<4?n("div",[n("h2",[e._v("Add Teams")]),n("label",[e._v("\n          Team Name: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.teamName,expression:"teamName"}],attrs:{type:"text"},domProps:{value:e.teamName},on:{input:function(t){t.target.composing||(e.teamName=t.target.value)}}})]),n("button",[e._v("Add")])]):e._e()])]),n("h3",[e._v("Teams:")]),n("ul",e._l(e.teams,function(t){return n("li",{key:t.id},[e._v("\n      "+e._s(t.team)+"\n    ")])})),n("button",{on:{click:e.handleNext}},[e._v("Next")])])},Ne=[],Se={data:function(){return{teamName:"",teams:[]}},props:{},created:function(){var e=this;this.gameId=this.$route.params.id,C(this.gameId).then(function(t){e.teams=t})},methods:{handleNext:function(){this.$router.push("/game/".concat(this.gameId,"/instructions"))},handleSubmit:function(){var e=this;return this.gameId=this.$route.params.id,g(this.teamName).then(function(t){e.teams.push(t),e.team=t,w(e.team.teamId,e.gameId)})}}},xe=Se,$e=(n("a111"),Object(G["a"])(xe,ke,Ne,!1,null,"0f89bfa4",null));$e.options.__file="AddTeamNames.vue";var Ie=$e.exports,Ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"next"},[n("h1",[e._v("Instructions")]),n("router-link",{attrs:{to:"/game/"+this.gameId+"/gameplay"}},[e._v("Next")])],1)},Oe=[],Pe={created:function(){console.log(this.$route.params),this.gameId=this.$route.params.id}},je=Pe,Te=(n("2727"),Object(G["a"])(je,Ae,Oe,!1,null,null,null));Te.options.__file="Instructions.vue";var Ee=Te.exports,Me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"category"},[n("form",{staticClass:"category-form",on:{submit:function(t){return t.preventDefault(),e.handleAddCategory(t)}}},[n("div",[e._v("Category Name: \n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.category,expression:"category"}],attrs:{type:"text",name:"category",placeholder:"Category",required:""},domProps:{value:e.category},on:{input:function(t){t.target.composing||(e.category=t.target.value)}}})]),n("button",[e._v("Submit")])])]),n("div")])},De=[],Ue={data:function(){return{category:""}},created:function(){this.board=this.$route.params.id,console.log(this.board),T(this.board)},methods:{handleAddCategory:function(){var e=this;return this.board=this.$route.params.id,A(this.category,this.board).then(function(t){e.category=t,e.$router.push("/board/".concat(e.category.boardId,"/categories/").concat(e.category.id,"/custom-clue"))})}}},Be=Ue,Re=(n("e3c5"),Object(G["a"])(Be,Me,De,!1,null,null,null));Re.options.__file="CategoryName.vue";var qe=Re.exports,Je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("Find Inspiration for your game board")]),n("h4",[e._v("Search the jeopardy database by keyword(s)")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("div",[e._v("Keywords\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.keywords,expression:"keywords"}],attrs:{type:"text",name:"keywords",placeholder:"Enter your keywords",required:""},domProps:{value:e.keywords},on:{input:function(t){t.target.composing||(e.keywords=t.target.value)}}}),n("button",[e._v("Search")])])]),e._l(e.historicClues,function(t){return e.historicClues?n("div",{key:t.id},[n("div",{attrs:{id:"search-results"}},[n("h4",[e._v("Results")]),n("p",[e._v("Clue: "+e._s(t.clue))]),n("p",[e._v("Answer: "+e._s(t.answer))]),n("div",{staticClass:"select-points"},[n("label",[e._v("Select point value\n          "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{name:"value"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.value=t.target.multiple?n:n[0]}}},[n("option",{domProps:{value:100}},[e._v("100")]),n("option",{domProps:{value:200}},[e._v("200")]),n("option",{domProps:{value:300}},[e._v("300")]),n("option",{domProps:{value:400}},[e._v("400")]),n("option",{domProps:{value:500}},[e._v("500")])])]),n("button",{attrs:{value:t.id},on:{click:e.handleAdd}},[e._v("Add this clue to your board")])])])]):e._e()})],2)},Fe=[],Ge={props:{onSearch:Function,historicClues:Array,onAdd:Function},data:function(){return{keywords:"",selected:null,clue:null,value:null,search:null}},methods:{handleSubmit:function(){this.onSearch(this.keywords)},handleAdd:function(e){var t=this.historicClues;this.view="search";for(var n=0;n<t.length;n++)t[n].id===parseInt(e.target.value)&&(this.clue=t[n].clue,this.answer=t[n].answer);console.log("clue",this.clue,this.answer,this.value),this.onAdd(this.clue,this.answer,this.value,this.view)}}},Ve=Ge,Ye=(n("0782"),Object(G["a"])(Ve,Je,Fe,!1,null,null,null));Ye.options.__file="Search.vue";var Le=Ye.exports,He=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"custom-clue"},[e.category?n("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("div",[e._v("Clue: \n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.clue,expression:"clue"}],attrs:{type:"text",name:"clue",placeholder:"Clue",value:"100",required:""},domProps:{value:e.clue},on:{input:function(t){t.target.composing||(e.clue=t.target.value)}}})]),n("div",[e._v("Answer: \n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"answer"}],attrs:{type:"text",name:"answer",placeholder:"Answer",required:""},domProps:{value:e.answer},on:{input:function(t){t.target.composing||(e.answer=t.target.value)}}}),n("label",[e._v("Select point value: \n      "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{name:"value",placeholder:"Please choose a point value",required:""},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.value=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"100"}},[e._v("100")]),n("option",{attrs:{value:"200"}},[e._v("200")]),n("option",{attrs:{value:"300"}},[e._v("300")]),n("option",{attrs:{value:"400"}},[e._v("400")]),n("option",{attrs:{value:"500"}},[e._v("500")])])])]),n("button",[e._v("Submit")])]):e._e()])},ze=[],Ke={props:{category:String,addCustomClue:Function},data:function(){return{clue:"",answer:"",value:null,search:null}},methods:{handleSubmit:function(){this.view="custom-clue",this.addCustomClue(this.clue,this.answer,this.value,this.view)}}},We=Ke,Qe=(n("6ecd"),Object(G["a"])(We,He,ze,!1,null,"3d8f2c19",null));Qe.options.__file="CustomClue.vue";var Xe=Qe.exports,Ze=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},et=[],tt={data:function(){return{results:null}},created:function(){var e=this;y().then(function(t){console.log(t),e.results=t}).catch(function(t){e.error=t})}},nt=tt,at=(n("67b8"),Object(G["a"])(nt,Ze,et,!1,null,null,null));at.options.__file="Results.vue";var rt=at.exports,ot=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("div",[e.turn?n("h3",[e._v("It is Team "+e._s(e.turn[0].turn)+"'s turn")]):e._e(),e.turn?e._e():n("form",{on:{submit:function(t){return t.preventDefault(),e.handleSelectTurn(t)}}},[n("h3",[e._v("Who's wants to start first?")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selected=t.target.multiple?n:n[0]}}},e._l(e.teams,function(t){return n("option",{key:t.id,domProps:{selected:t.team}},[e._v(e._s(t.team))])})),n("button",[e._v("Select")])])]),e.turn?n("div",{staticClass:"container"},[e._l(e.categories,function(t){return e.categories?n("div",{key:t.id,staticClass:"column"},[n("div",{staticClass:"box-cat"},[e._v(e._s(t.category))]),e._l(e.clues,function(a){return n("div",{key:a.id},[t.category===a.category?n("button",{staticClass:"box-clue",attrs:{id:"show-modal",value:a},on:{click:function(t){return e.handleClick(a,t)}}},[e._v(" "+e._s(a.value))]):e._e()])})],2):e._e()}),e.showModal?n("Modal",{on:{close:function(t){e.showModal=!1,e.showAnswer=!1}}},[n("h3",{attrs:{slot:"header"},slot:"header"}),n("h2",{attrs:{slot:"body"},slot:"body"},[e._v(e._s(e.selectedClue.clue)+" \n          "),!0===e.showAnswer?n("div",{staticClass:"answer"},[e._v(e._s(e.selectedClue.answer))]):e._e(),n("button",{staticClass:"modal-default-button",on:{click:function(t){e.showAnswer=!0}}},[e._v("\n              Show Answer\n          ")]),n("br"),n("button",{staticClass:"modal-default-button",on:{click:function(t){e.showAnswer=!0}}},[e._v("\n              Incorrect\n          ")]),n("button",{staticClass:"modal-default-button",on:{click:function(t){e.showAnswer=!0}}},[e._v("\n             Incorrect\n          ")])])]):e._e()],2):e._e(),e.turn?n("div",{staticClass:"leaderboard"},[n("div",[n("h3",[e._v("Scoreboard")]),e._l(e.scores,function(t){return n("ul",{key:t.id},[n("p",[e._v("Team "+e._s(t.team)+" has "+e._s(t.score)+" points")])])})],2)]):e._e()])},st=[],ct=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"modal-header"},[e._t("header",[e._v("\n              default header\n            ")])],2),n("div",{staticClass:"modal-body"},[e._t("body",[e._v("\n              default body\n            ")])],2),n("div",{staticClass:"modal-footer"},[e._t("footer",[n("button",{staticClass:"score-buttons",on:{click:function(t){e.$emit("close")}}},[e._v("\n                Correct\n              ")]),n("button",{staticClass:"score-buttons",on:{click:function(t){e.$emit("close")}}},[e._v("\n                Incorrect\n              ")]),n("button",{staticClass:"score-buttons",on:{click:function(t){e.$emit("close")}}},[e._v("\n                No Answer\n              ")])])],2)])])])])],1)},ut=[],it={props:{clue:Object}},lt=it,dt=(n("22d7"),Object(G["a"])(lt,ct,ut,!1,null,null,null));dt.options.__file="Modal.vue";var ht=dt.exports,mt={components:{Modal:ht},data:function(){return{showModal:!1,categories:null,clues:null,scores:null,showAnswer:!1,teams:[],turn:null,selected:null}},methods:{handleClick:function(e,t){this.showModal=!0,this.selectedClue=e,t.target.disabled=!0,t.target.className="clicked-button";var n=function(e,t){for(var n=t.length,a=0;a<=n-1;a+=1){if(a===n-1)return e[0].turn=t[0].team,e;if(e[0].turn===t[a].team)return e[0].turn=t[a+1].team,e}return e};n(this.turn,this.teams),D(this.gameId,this.turn[0].turn)},handleSelectTurn:function(){var e=this;this.turn=this.selected,this.gameId=this.$route.params.id,D(this.gameId,this.turn).then(function(t){e.turn=t})}},created:function(){var e=this;this.gameId=this.$route.params.id,j(this.gameId).then(function(t){e.clues=t}),T(this.gameId).then(function(t){e.categories=t}),E(this.gameId).then(function(t){e.scores=t}),C(this.gameId).then(function(t){e.teams=t}),U(this.gameId).then(function(t){t.length>0&&(e.turn=t)})}},vt=mt,ft=(n("5c7e"),Object(G["a"])(vt,ot,st,!1,null,null,null));ft.options.__file="GamePlay.vue";var pt=ft.exports,_t=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("h2",[e._v("Your Board")]),e.message?n("p",[e._v(e._s(e.message))]):e._e(),n("p",[e._v("Board: "+e._s(e.boardId))]),n("div",{staticClass:"container"},[e._l(e.categories,function(t){return e.categories?n("div",{key:t.id,staticClass:"column"},[n("div",{staticClass:"box-cat"},[e._v(e._s(t.category))]),e._l(e.clues,function(a){return n("div",{key:a.id},[t.category===a.category?n("button",{staticClass:"box-clue",attrs:{id:"show-modal",value:a},on:{click:function(t){return e.handleClick(a,t)}}},[e._v(" "+e._s(a.value))]):e._e()])})],2):e._e()}),e.showModal?n("BoardModal",{on:{close:function(t){e.showModal=!1,e.showAnswer=!1}}},[n("h3",{attrs:{slot:"header"},slot:"header"}),n("h2",{attrs:{slot:"body"},slot:"body"},[e._v("Clue: "+e._s(e.selectedClue.clue)+" \n          "),n("div",[e._v("Answer: "+e._s(e.selectedClue.answer))])])]):e._e()],2)])},bt=[],gt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"modal-header"},[e._t("header",[e._v("\n              default header\n            ")])],2),n("div",{staticClass:"modal-body"},[e._t("body",[e._v("\n              default body\n            ")])],2),n("div",{staticClass:"modal-footer"},[e._t("footer",[n("button",{staticClass:"modal-default-button",on:{click:function(t){e.$emit("close")}}},[e._v("Close")])])],2)])])])])],1)},wt=[],yt={props:{clue:Object}},Ct=yt,kt=(n("3220"),Object(G["a"])(Ct,gt,wt,!1,null,null,null));kt.options.__file="BoardModal.vue";var Nt=kt.exports,St={props:{message:String},components:{BoardModal:Nt},data:function(){return{showModal:!1,categories:null,clues:null,showAnswer:!1,boardId:null}},methods:{handleClick:function(e,t){this.showModal=!0,this.selectedClue=e,t.target.disabled=!0,t.target.className="clicked-button"}},created:function(){var e=this;this.boardId=this.$route.params.id,R(this.boardId).then(function(t){e.clues=t}),q(this.boardId).then(function(t){e.categories=t})}},xt=St,$t=(n("da94"),Object(G["a"])(xt,_t,bt,!1,null,null,null));$t.options.__file="YourBoard.vue";var It=$t.exports,At=new L["a"]({mode:"history",routes:[{path:"/",component:re},{path:"/auth",component:pe},{path:"/board",component:X},{path:"/board/:id",component:qe},{path:"/game",component:Ce},{path:"/game/:id",component:Ie},{path:"/game/:id/instructions",component:Ee},{path:"/game/:id/gameplay",component:pt},{path:"/board/:id/categories/:categoryId",component:le,children:[{path:"custom-clue",component:Xe},{path:"search",component:Le},{path:"your-board",component:It}]},{path:"/results",component:rt},{path:"*",redirect:"/"}]});n("35cc");a["a"].config.productionTip=!1,a["a"].use(L["a"]),a["a"].component("RouterLink",a["a"].component("router-link")),a["a"].component("RouterView",a["a"].component("router-view")),new a["a"]({router:At,render:function(e){return e(Y)}}).$mount("#app")},"5c52":function(e,t,n){},"5c7e":function(e,t,n){"use strict";var a=n("0530"),r=n.n(a);r.a},6077:function(e,t,n){},6650:function(e,t,n){},"67b8":function(e,t,n){"use strict";var a=n("e938"),r=n.n(a);r.a},"6ecd":function(e,t,n){"use strict";var a=n("5c52"),r=n.n(a);r.a},"849a":function(e,t,n){"use strict";var a=n("99d5"),r=n.n(a);r.a},"93d6":function(e,t,n){"use strict";var a=n("5167"),r=n.n(a);r.a},"99d5":function(e,t,n){},"9d8e":function(e,t,n){},a111:function(e,t,n){"use strict";var a=n("f1cb"),r=n.n(a);r.a},ab8a:function(e,t,n){},af73:function(e,t,n){"use strict";var a=n("ab8a"),r=n.n(a);r.a},b367:function(e,t,n){},c21b:function(e,t,n){},d072:function(e,t,n){},d30a:function(e,t,n){},da94:function(e,t,n){"use strict";var a=n("9d8e"),r=n.n(a);r.a},e3c5:function(e,t,n){"use strict";var a=n("3d05"),r=n.n(a);r.a},e938:function(e,t,n){},f1cb:function(e,t,n){}});
//# sourceMappingURL=app.fce36439.js.map