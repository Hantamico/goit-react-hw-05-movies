"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[922],{787:function(e,s,i){i.d(s,{Z:function(){return t}});var n="Title_title__mrNq5",r=i(184),t=function(e){var s=e.titleMessage;return(0,r.jsx)("h1",{className:n,children:s})}},922:function(e,s,i){i.r(s),i.d(s,{default:function(){return f}});var n=i(439),r="FilmDescription_description__title__w405z",t="FilmDescription_description__block__-acyl",c="FilmDescription_description__genresList__1IUHR",l="FilmDescription_description__genresItem__jw9B9",a=i(184),o=function(e){var s=e.userScore,i=e.overview,n=e.genres;return(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{className:t,children:[(0,a.jsx)("span",{className:r,children:"userScore: "}),s]}),(0,a.jsxs)("p",{className:t,children:[(0,a.jsx)("span",{className:r,children:"Overview: "}),i]}),(0,a.jsx)("p",{className:t,children:(0,a.jsx)("span",{className:r,children:"Genres"})}),(0,a.jsx)("ul",{className:c,children:n.map((function(e){return(0,a.jsx)("li",{className:l,children:e.name},e.id)}))})]})},_=i(787),m=i(791),d=i(689),u=i(87),v=i(771),h="FilmInfo_movie__mainDescriptionWrapper__XAvZX",p="FilmInfo_movie_img__GNV0P",j="FilmInfo_movie_linkList__7t5GA",x="FilmInfo_movie_link__7B80N",f=function(){var e,s,i=(0,d.TH)(),r=(0,m.useRef)(null!==(e=null===(s=i.state)||void 0===s?void 0:s.from)&&void 0!==e?e:"/"),t=(0,d.UO)(),c=(0,m.useState)(null),l=(0,n.Z)(c,2),f=l[0],N=l[1];return(0,m.useEffect)((function(){v.ZP.fetchDetails(t.movieId).then((function(e){return N(e)})).catch((function(e){return console.log(e)}))}),[t.movieId]),(0,a.jsx)(a.Fragment,{children:f&&(0,a.jsxs)("div",{className:"movie__mainDescription",children:[(0,a.jsx)(u.rU,{className:x,to:r.current,children:"Back"}),(0,a.jsxs)("div",{className:h,children:[(0,a.jsx)("img",{className:p,src:"https://image.tmdb.org/t/p/w500/".concat(f.poster_path),alt:f.title}),(0,a.jsxs)("div",{children:[(0,a.jsx)(_.Z,{titleMessage:f.title}),(0,a.jsx)(o,{userScore:f.vote_average,overview:f.overview,genres:f.genres})]})]}),(0,a.jsxs)("ul",{className:j,children:[(0,a.jsx)("li",{children:(0,a.jsx)(u.rU,{className:x,to:"cast",children:"Cast"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u.rU,{className:x,to:"reviews",children:"Reviews"})})]}),(0,a.jsx)(d.j3,{})]})})}}}]);
//# sourceMappingURL=922.eae56eb2.chunk.js.map