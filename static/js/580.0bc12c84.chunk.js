"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[580],{787:function(t,e,n){n.d(e,{Z:function(){return s}});var i="Title_title__mrNq5",r=n(184),s=function(t){var e=t.titleMessage;return(0,r.jsx)("h1",{className:i,children:e})}},580:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var i=n(439),r=n(791),s=n(87),a="TrendingList_trendingList__img__fLXDy",c="TrendingList_trendingList__gallery__g950W",l="TrendingList_trendingList__url__oEasm",_="TrendingList_trendingList__item__Mn5SU",o="TrendingList_trendingList__itemTitle__wA0r8",u=n(184),m=function(t){var e=t.filmList,n=t.location;return(0,u.jsx)("ul",{className:c,children:e.map((function(t){return(0,u.jsx)("li",{className:_,children:(0,u.jsxs)(s.rU,{state:{from:n},className:l,to:"movies/".concat(t.id),children:[(0,u.jsx)("img",{className:a,src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),alt:t.title}),(0,u.jsx)("p",{className:o,children:t.title})]})},t.id)}))})},d=n(787),f=n(771),g=n(689),h=function(){var t=(0,g.TH)(),e=(0,r.useState)([]),n=(0,i.Z)(e,2),s=n[0],a=n[1];return(0,r.useEffect)((function(){f.ZP.fetchTrending().then((function(t){var e=t.results;return a(e)})).catch((function(t){return console.error(t)}))}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d.Z,{titleMessage:"Popular Films"}),(0,u.jsx)(m,{location:t,filmList:s})]})}}}]);
//# sourceMappingURL=580.0bc12c84.chunk.js.map