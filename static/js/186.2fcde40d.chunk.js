"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,r,t){t.r(r);var n=t(439),a=t(989),c=t(12),u=t(791),o=t(689),s=t(184);r.default=function(){var e=(0,u.useState)([]),r=(0,n.Z)(e,2),t=r[0],i=r[1],p=(0,o.UO)().movieId,f=(0,u.useState)(!1),l=(0,n.Z)(f,2),h=l[0],v=l[1];return(0,u.useEffect)((function(){v(!0),(0,c.Bt)(p).then((function(e){i(e)})).catch((function(e){console.log(e)})).finally((function(){v(!1)}))}),[p]),(0,s.jsxs)("div",{style:{textAlign:"justify"},children:[h&&(0,s.jsx)(a.a,{}),!h&&0===t.length&&(0,s.jsx)("p",{children:"No reviews for this movie..."}),(0,s.jsx)("ul",{style:{listStyleType:"none"},children:t.map((function(e){var r=e.id,t=e.author,n=e.content;return(0,s.jsxs)("li",{children:[(0,s.jsx)("h4",{style:{marginBottom:"10px",marginTop:"20px"},children:t}),(0,s.jsx)("p",{children:n})]},r)}))})]})}},12:function(e,r,t){t.d(r,{Bt:function(){return l},bI:function(){return i},c6:function(){return p},wL:function(){return f},zo:function(){return s}});var n=t(861),a=t(757),c=t.n(a),u=t(294),o="4bfe9ac7b716325880075e348301b2b8";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("trending/movie/day",{params:{api_key:o,language:"en-US"}});case 3:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 8:throw e.prev=8,e.t0=e.catch(0),console.error("Error fetching trends:",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("search/movie",{params:{api_key:o,query:r,language:"en-US"}});case 3:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 8:throw e.prev=8,e.t0=e.catch(0),console.error("Error fetching movies:",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(r),{params:{api_key:o,language:"en-US"}});case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie information:",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(r,"/credits"),{params:{api_key:o,language:"en-US"}});case 3:return t=e.sent,n=t.data,e.abrupt("return",n.cast);case 8:throw e.prev=8,e.t0=e.catch(0),console.error("Error fetching cast:",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(r,"/reviews"),{params:{api_key:o,language:"en-US"}});case 3:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 8:throw e.prev=8,e.t0=e.catch(0),console.error("Error fetching reviews:",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.2fcde40d.chunk.js.map