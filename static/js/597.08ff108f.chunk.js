"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{687:function(e,t,r){r.d(t,{Hg:function(){return s},s_:function(){return o},yO:function(){return p}});var n=r(861),a=r(757),c=r.n(a),u=r(388),i="768a976ba726350d854c210d487f9812",s=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(i,"&page=1"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results.map((function(e){return{id:e.id,title:e.title}})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return r=e.sent,n=r.data,e.abrupt("return",{image:n.poster_path,title:n.title,date:n.release_date,score:n.vote_average,overview:n.overview,genres:n.genres});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast.map((function(e){return{avatar:e.profile_path,name:e.name,character:e.character}})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},597:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=r(861),a=r(439),c=r(757),u=r.n(c),i=r(687),s=r(791),o=r(689),p=r(152),f=r(184);function l(){var e=(0,s.useState)(!1),t=(0,a.Z)(e,2),r=t[0],c=t[1],l=(0,s.useState)(null),h=(0,a.Z)(l,2),d=h[0],v=h[1],m=(0,s.useState)([]),g=(0,a.Z)(m,2),w=g[0],x=g[1],k=(0,o.UO)().id;return(0,s.useEffect)((function(){function e(){return(e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),e.next=4,(0,i.yO)(k);case 4:t=e.sent,console.log(t),x(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),v("Sorry, we can not get data.");case 12:return e.prev=12,c(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[k]),(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("ul",{children:[d&&(0,f.jsx)("p",{children:d}),r&&(0,f.jsx)(p.Z,{}),w.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(e.avatar),alt:e.name}),(0,f.jsx)("p",{children:e.name}),(0,f.jsx)("p",{children:e.character})]},e.name)}))]})})}},152:function(e,t,r){var n=r(643),a=r(184);t.Z=function(){return(0,a.jsx)(n.Bb,{height:"80",width:"80",radius:"9",color:"green",ariaLabel:"loading",wrapperStyle:!0,wrapperClass:!0})}}}]);
//# sourceMappingURL=597.08ff108f.chunk.js.map