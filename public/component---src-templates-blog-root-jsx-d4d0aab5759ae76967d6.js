"use strict";(self.webpackChunkheadless_gatsby_multilang=self.webpackChunkheadless_gatsby_multilang||[]).push([[657],{81810:function(e,t,a){a.d(t,{T:function(){return n}});var r=a(86383),i=a(26914),o=a(85893),n=function(e){var t=e.recordId,a=e.date,n=e.title,l=e.excerpt,s=e.authorImg,d=e.authorName,c=e.category,g=e.cardImg,u=e.cardImgMobile,h=e.altImg,p=(0,i.PV)(g,u),v=(0,r.Q)(a).formattedDate;return(0,o.jsx)("article",{children:(0,o.jsxs)(i.YS,{recordId:t,children:[(0,o.jsx)(i.$U,{children:(0,o.jsx)(i.Mo,{objectFit:"cover",image:p,alt:h||""})}),(0,o.jsxs)(i.vs,{children:[c&&(0,o.jsx)(i.w0,{children:c.title}),(0,o.jsx)(i.Ej,{children:v}),(0,o.jsx)(i.DZ,{children:n}),(0,o.jsx)(i.hP,{children:l}),(0,o.jsx)(i._8,{children:(0,o.jsxs)(i.TQ,{children:[(0,o.jsx)(i.kB,{objectFit:"cover",image:s||"",alt:d||""}),(0,o.jsx)(i.Ej,{as:"address",children:d})]})})]})]})})}},62533:function(e,t,a){a.d(t,{e:function(){return v}});var r=a(71082),i=a(92992),o=a(84301),n=a(37230),l=a(12862),s="var(--borderSmall) solid var(--dividerColor);",d=n.default.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-n6w3ph-0"})(["max-width:var(--globalContainer);padding:0 var(--globalPaddingLr) var(--borderRegular) var(--globalPaddingLr);margin:auto;width:100%;"]),c=n.default.div.withConfig({displayName:"styles__Container",componentId:"sc-n6w3ph-1"})(["--scrollBarHeight:6px;position:relative;border-top:",";border-bottom:",";&::after{position:absolute;content:'';width:var(--gapXL);z-index:2;display:block;height:calc(100% - calc(var(--scrollBarHeight) * 2));top:0;","}"],s,s,(function(e){return e.isRtl?(0,n.css)(["left:0;background:linear-gradient( to left,var(--backgroundTransparentColor) 25%,var(--backgroundColor) 75% );"]):(0,n.css)(["right:0;background:linear-gradient( to right,var(--backgroundTransparentColor) 25%,var(--backgroundColor) 75% );"])})),g=n.default.nav.withConfig({displayName:"styles__Nav",componentId:"sc-n6w3ph-2"})(["width:var(--globalContainer);padding:var(--gapRegular) 0 calc(var(--gapRegular) - calc(var(--scrollBarHeight) / 2)) 0;overflow:auto;scrollbar-width:thin;scrollbar-color:var(--dividerColor) var(--transparent);width:100%;max-width:var(--globalContainer);&::-webkit-scrollbar{height:var(--scrollBarHeight);}&::-webkit-scrollbar-track{background:var(--backgroundColorAlt);}&::-webkit-scrollbar-thumb{background-color:var(--dividerColor);border-radius:var(--scrollBarHeight);border:none;}"]),u=n.default.ul.withConfig({displayName:"styles__NavList",componentId:"sc-n6w3ph-3"})(["display:grid;grid-auto-flow:column;width:min-content;column-gap:var(--gapXL);& li:last-of-type > a{z-index:3;}"]),h=(0,n.default)(l.C).withConfig({displayName:"styles__CategoryLink",componentId:"sc-n6w3ph-4"})(["color:var(--headingsColor);font-weight:600;white-space:nowrap;position:relative;@media (hover:hover){&:hover{color:var(--primaryColor);}}"]),p=a(85893),v=function(){var e=(0,r.K2)("484147590").allDatoCmsCategory.categoryNodes,t=(0,o.U)().pageLocale,a=(0,i.s)().isRtl;return(0,p.jsx)(d,{children:(0,p.jsx)(c,{isRtl:a,children:(0,p.jsx)(g,{children:(0,p.jsx)(u,{children:e.filter((function(e){return e.locale===t})).map((function(e){var t=e.id,a=e.title;return(0,p.jsx)("li",{children:(0,p.jsx)(h,{recordId:t,activeClassName:"activeClassLink",children:a})},a)}))})})})})}},48040:function(e,t,a){a.d(t,{V:function(){return c}});var r=a(37230),i=r.default.section.withConfig({displayName:"styles__Wrapper",componentId:"sc-snzx44-0"})(["width:100%;display:grid;padding:var(--globalPaddingTb) var(--globalPaddingLr);margin:auto;row-gap:var(--gapXL);max-width:var(--globalContainer);align-items:center;",";"],(function(e){return e.isFullViewport&&(0,r.css)(["justify-content:center;height:100vh;& > div{justify-items:center;text-align:center;}"])})),o=r.default.div.withConfig({displayName:"styles__TextBox",componentId:"sc-snzx44-1"})(["display:grid;grid-template-columns:1fr;row-gap:var(--gapRegular);width:600px;height:max-content;@media (max-width:768px){width:100%;}"]),n=r.default.h2.withConfig({displayName:"styles__Caption",componentId:"sc-snzx44-2"})(["color:var(--primaryColor);font-size:var(--baseXL);text-transform:uppercase;letter-spacing:0.1em;line-height:var(--headingsLineHeight);font-weight:400;"]),l=r.default.h1.withConfig({displayName:"styles__Title",componentId:"sc-snzx44-3"})(["font-size:var(--headingXXL);color:var(--headingsColor);line-height:var(--headingsLineHeight);@media (max-width:768px){font-size:var(--headingXL);}"]),s=r.default.p.withConfig({displayName:"styles__Subtitle",componentId:"sc-snzx44-4"})(["font-size:var(--baseXL);color:var(--baseTextColor);line-height:var(--bodyLineHeight);"]),d=a(85893),c=function(e){var t=e.caption,a=e.title,r=e.subtitle,c=e.button,g=e.sectionChildren,u=e.isFullViewport;return(0,d.jsxs)(i,{isFullViewport:u,children:[(0,d.jsxs)(o,{children:[t&&(0,d.jsx)(n,{children:t}),(0,d.jsx)(l,{children:a}),(0,d.jsx)(s,{children:r}),c]}),g]})}},98646:function(e,t,a){a.d(t,{o:function(){return o},p:function(){return n}});var r={hour:"2-digit",minute:"2-digit"},i={year:"numeric",month:"short",day:"numeric"},o=function(e,t){return new Date(e).toLocaleString(t,Object.assign({},i,r))},n=function(e,t){return new Date(e).toLocaleString(t,Object.assign({},i))}},86383:function(e,t,a){a.d(t,{Q:function(){return n}});var r=a(67294),i=a(85207),o=a(98646),n=function(e){var t=(0,r.useContext)(i.R).pageLocale;return{formattedDate:(0,o.p)(e,t)}}},73068:function(e,t,a){a.r(t);var r=a(56736),i=a(48040),o=a(62533),n=a(81810),l=a(64734),s=a(85893);t.default=function(e){var t,a=e.data,d=a.datoCmsBlogRoot,c=d.hero[0],g=c.heroTitle,u=c.heroSubtitle,h=d.seo,p=a.allDatoCmsBlogPost.blogPostNodes,v=e.pageContext;return(0,s.jsxs)(r.F,{pageData:v,seoTitle:null==h?void 0:h.seoTitle,seoDescription:null==h?void 0:h.seoDescription,seoImage:null==h||null===(t=h.seoImage)||void 0===t?void 0:t.seoImageUrl,seo:!0,children:[(0,s.jsx)(i.V,{title:g,subtitle:u}),(0,s.jsx)(o.e,{}),(0,s.jsx)(l.QF,{children:p.map((function(e){var t=e.id,a=e.meta.updatedAt,r=e.coverImage,i=e.title,o=e.subtitle,l=e.author;return(0,s.jsx)(n.T,{recordId:t,date:a,cardImg:r.gatsbyImageData,cardImgMobile:r.squaredImage,altImg:i,title:i,excerpt:o,authorImg:null==l?void 0:l.picture.gatsbyImageData,authorAltImg:null==l?void 0:l.authorName,authorName:null==l?void 0:l.authorName},t)}))})]})}}}]);
//# sourceMappingURL=component---src-templates-blog-root-jsx-d4d0aab5759ae76967d6.js.map