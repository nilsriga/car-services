"use strict";(self.webpackChunkheadless_gatsby_multilang=self.webpackChunkheadless_gatsby_multilang||[]).push([[423],{81810:function(e,t,r){r.d(t,{T:function(){return n}});var a=r(86383),i=r(26914),o=r(85893),n=function(e){var t=e.recordId,r=e.date,n=e.title,l=e.excerpt,s=e.authorImg,d=e.authorName,c=e.category,g=e.cardImg,h=e.cardImgMobile,u=e.altImg,p=(0,i.PV)(g,h),v=(0,a.Q)(r).formattedDate;return(0,o.jsx)("article",{children:(0,o.jsxs)(i.YS,{recordId:t,children:[(0,o.jsx)(i.$U,{children:(0,o.jsx)(i.Mo,{objectFit:"cover",image:p,alt:u||""})}),(0,o.jsxs)(i.vs,{children:[c&&(0,o.jsx)(i.w0,{children:c.title}),(0,o.jsx)(i.Ej,{children:v}),(0,o.jsx)(i.DZ,{children:n}),(0,o.jsx)(i.hP,{children:l}),(0,o.jsx)(i._8,{children:(0,o.jsxs)(i.TQ,{children:[(0,o.jsx)(i.kB,{objectFit:"cover",image:s||"",alt:d||""}),(0,o.jsx)(i.Ej,{as:"address",children:d})]})})]})]})})}},62533:function(e,t,r){r.d(t,{e:function(){return v}});var a=r(71082),i=r(92992),o=r(84301),n=r(37230),l=r(12862),s="var(--borderSmall) solid var(--dividerColor);",d=n.default.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-n6w3ph-0"})(["max-width:var(--globalContainer);padding:0 var(--globalPaddingLr) var(--borderRegular) var(--globalPaddingLr);margin:auto;width:100%;"]),c=n.default.div.withConfig({displayName:"styles__Container",componentId:"sc-n6w3ph-1"})(["--scrollBarHeight:6px;position:relative;border-top:",";border-bottom:",";&::after{position:absolute;content:'';width:var(--gapXL);z-index:2;display:block;height:calc(100% - calc(var(--scrollBarHeight) * 2));top:0;","}"],s,s,(function(e){return e.isRtl?(0,n.css)(["left:0;background:linear-gradient( to left,var(--backgroundTransparentColor) 25%,var(--backgroundColor) 75% );"]):(0,n.css)(["right:0;background:linear-gradient( to right,var(--backgroundTransparentColor) 25%,var(--backgroundColor) 75% );"])})),g=n.default.nav.withConfig({displayName:"styles__Nav",componentId:"sc-n6w3ph-2"})(["width:var(--globalContainer);padding:var(--gapRegular) 0 calc(var(--gapRegular) - calc(var(--scrollBarHeight) / 2)) 0;overflow:auto;scrollbar-width:thin;scrollbar-color:var(--dividerColor) var(--transparent);width:100%;max-width:var(--globalContainer);&::-webkit-scrollbar{height:var(--scrollBarHeight);}&::-webkit-scrollbar-track{background:var(--backgroundColorAlt);}&::-webkit-scrollbar-thumb{background-color:var(--dividerColor);border-radius:var(--scrollBarHeight);border:none;}"]),h=n.default.ul.withConfig({displayName:"styles__NavList",componentId:"sc-n6w3ph-3"})(["display:grid;grid-auto-flow:column;width:min-content;column-gap:var(--gapXL);& li:last-of-type > a{z-index:3;}"]),u=(0,n.default)(l.C).withConfig({displayName:"styles__CategoryLink",componentId:"sc-n6w3ph-4"})(["color:var(--headingsColor);font-weight:600;white-space:nowrap;position:relative;@media (hover:hover){&:hover{color:var(--primaryColor);}}"]),p=r(85893),v=function(){var e=(0,a.K2)("484147590").allDatoCmsCategory.categoryNodes,t=(0,o.U)().pageLocale,r=(0,i.s)().isRtl;return(0,p.jsx)(d,{children:(0,p.jsx)(c,{isRtl:r,children:(0,p.jsx)(g,{children:(0,p.jsx)(h,{children:e.filter((function(e){return e.locale===t})).map((function(e){var t=e.id,r=e.title;return(0,p.jsx)("li",{children:(0,p.jsx)(u,{recordId:t,activeClassName:"activeClassLink",children:r})},r)}))})})})})}},48040:function(e,t,r){r.d(t,{V:function(){return c}});var a=r(37230),i=a.default.section.withConfig({displayName:"styles__Wrapper",componentId:"sc-snzx44-0"})(["width:100%;display:grid;padding:var(--globalPaddingTb) var(--globalPaddingLr);margin:auto;row-gap:var(--gapXL);max-width:var(--globalContainer);align-items:center;",";"],(function(e){return e.isFullViewport&&(0,a.css)(["justify-content:center;height:100vh;& > div{justify-items:center;text-align:center;}"])})),o=a.default.div.withConfig({displayName:"styles__TextBox",componentId:"sc-snzx44-1"})(["display:grid;grid-template-columns:1fr;row-gap:var(--gapRegular);width:600px;height:max-content;@media (max-width:768px){width:100%;}"]),n=a.default.h2.withConfig({displayName:"styles__Caption",componentId:"sc-snzx44-2"})(["color:var(--primaryColor);font-size:var(--baseXL);text-transform:uppercase;letter-spacing:0.1em;line-height:var(--headingsLineHeight);font-weight:400;"]),l=a.default.h1.withConfig({displayName:"styles__Title",componentId:"sc-snzx44-3"})(["font-size:var(--headingXXL);color:var(--headingsColor);line-height:var(--headingsLineHeight);@media (max-width:768px){font-size:var(--headingXL);}"]),s=a.default.p.withConfig({displayName:"styles__Subtitle",componentId:"sc-snzx44-4"})(["font-size:var(--baseXL);color:var(--baseTextColor);line-height:var(--bodyLineHeight);"]),d=r(85893),c=function(e){var t=e.caption,r=e.title,a=e.subtitle,c=e.button,g=e.sectionChildren,h=e.isFullViewport;return(0,d.jsxs)(i,{isFullViewport:h,children:[(0,d.jsxs)(o,{children:[t&&(0,d.jsx)(n,{children:t}),(0,d.jsx)(l,{children:r}),(0,d.jsx)(s,{children:a}),c]}),g]})}},98646:function(e,t,r){r.d(t,{o:function(){return o},p:function(){return n}});var a={hour:"2-digit",minute:"2-digit"},i={year:"numeric",month:"short",day:"numeric"},o=function(e,t){return new Date(e).toLocaleString(t,Object.assign({},i,a))},n=function(e,t){return new Date(e).toLocaleString(t,Object.assign({},i))}},86383:function(e,t,r){r.d(t,{Q:function(){return n}});var a=r(67294),i=r(85207),o=r(98646),n=function(e){var t=(0,a.useContext)(i.R).pageLocale;return{formattedDate:(0,o.p)(e,t)}}},17577:function(e,t,r){r.r(t);var a=r(48040),i=r(56736),o=r(62533),n=r(81810),l=r(64734),s=r(85893);t.default=function(e){var t,r=e.data,d=r.datoCmsCategory,c=d.hero[0],g=c.heroTitle,h=c.heroSubtitle,u=c.heroAlt,p=d.seo,v=r.allCategoryPosts.postNodes,m=e.pageContext;return(0,s.jsxs)(i.F,{pageData:m,seoTitle:null==p?void 0:p.seoTitle,seoDescription:null==p?void 0:p.seoDescription,seoImage:null==p||null===(t=p.seoImage)||void 0===t?void 0:t.seoImageUrl,children:[(0,s.jsx)(a.V,{caption:u,title:g,subtitle:h}),(0,s.jsx)(o.e,{}),v.length>0&&(0,s.jsx)(l.QF,{children:v.map((function(e){var t=e.id,r=e.meta.updatedAt,a=e.title,i=e.coverImage,o=e.subtitle,l=e.author,d=l.authorName,c=l.picture.authorImageData,g=e.categoryLink;return(0,s.jsx)(n.T,{recordId:t,date:r,category:g,cardImg:i.gatsbyImageData,cardImgMobile:i.squaredImage,altImg:a,title:a,excerpt:o,authorImg:c,authorAltImg:d,authorName:d},t)}))})]})}}}]);
//# sourceMappingURL=component---src-templates-category-jsx-b39a3606c95e825a06ab.js.map