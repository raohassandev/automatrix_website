(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[149],{3349:function(e,t,n){"use strict";function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return i}})},6610:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return i}})},5991:function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}n.d(t,{Z:function(){return r}})},7608:function(e,t,n){"use strict";function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,{Z:function(){return i}})},5255:function(e,t,n){"use strict";function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}n.d(t,{Z:function(){return r}})},6089:function(e,t,n){"use strict";function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,{Z:function(){return s}});var r=n(3349);function s(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?(0,r.Z)(e):t}},6862:function(e,t,n){"use strict";var i=n(5893),r=n(6610),s=n(5991),a=n(5255),o=n(6089),c=n(7608),l=n(7294),u=n(1664);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,c.Z)(e);if(t){var r=(0,c.Z)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return(0,o.Z)(this,n)}}var f=function(e){(0,a.Z)(n,e);var t=d(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n,[{key:"render",value:function(){var e=[{id:1,image:"blog1.jpg",date:"1st Dec 2015",title:"How to Eat Foods",link:"single-blog"},{id:2,image:"blog2.jpg",date:"1st Dec 2015",title:"How to Eat Foods",link:"single-blog"},{id:3,image:"blog2.jpg",date:"1st Dec 2015",title:"How to Eat Foods",link:"single-blog"}].map((function(e,t){return(0,i.jsxs)("div",{className:"recent-post-box",children:[(0,i.jsx)("div",{className:"recnt_pst_imge",children:(0,i.jsx)("img",{src:"../../assets/images/".concat(e.image),alt:""})}),(0,i.jsxs)("div",{className:"recent-title",children:[(0,i.jsxs)("span",{children:[(0,i.jsx)("i",{className:"fa fa-calendar"}),e.date]}),(0,i.jsx)(u.default,{href:"/blog/".concat(e.id),children:e.title})]})]},t)})),t=[{title:"Juicy Grapes",link:"single-blog"},{title:"Red Watermelon",link:"single-blog"},{title:"Native Orange",link:"single-blog"},{title:"Juicy Grapes",link:"single-blog"},{title:"Fresh Banana",link:"single-blog"}].map((function(e,t){return(0,i.jsx)("li",{children:(0,i.jsxs)("a",{href:"".concat(e.link),children:[" ",e.title]})},t)})),n=[{name:"Food",link:"single-blog"},{name:"Red",link:"single-blog"},{name:"Grapes",link:"single-blog"},{name:"Fresh",link:"single-blog"},{name:"Banana",link:"single-blog"}].map((function(e,t){return(0,i.jsxs)("a",{href:"".concat(e.link),children:[" ",e.name]},t)}));return(0,i.jsxs)("div",{className:"col-md-3 col-sm-12 widget-area",children:[(0,i.jsx)("aside",{className:"widget widget-search",children:(0,i.jsxs)("div",{className:"input-group",children:[(0,i.jsx)("input",{className:"form-control",placeholder:"Search",type:"text"}),(0,i.jsx)("span",{className:"input-group-btn",children:(0,i.jsx)("button",{type:"button",children:(0,i.jsx)("i",{className:"fa fa-search"})})})]})}),(0,i.jsxs)("aside",{className:"widget wiget-recent-post",children:[(0,i.jsx)("h3",{className:"widget-title",children:"Recent Post"}),e]}),(0,i.jsxs)("aside",{className:"widget widget-post-categories",children:[(0,i.jsx)("h3",{className:"widget-title",children:"Post Categories"}),(0,i.jsx)("ul",{className:"categories-type",children:t})]}),(0,i.jsxs)("aside",{className:"widget widget-tags",children:[(0,i.jsx)("h3",{className:"widget-title",children:"Top Tags"}),n]})]})}}]),n}(l.Component);t.Z=f},3027:function(e,t,n){"use strict";var i=n(5893);n(7294),n(1664);t.Z=function(e){var t=e.title,n=e.bgImg;return(0,i.jsx)("header",{id:"page-top",className:"blog-banner",style:{backgroundImage:"url(".concat(n,")"),height:1100},children:(0,i.jsx)("div",{className:"container",id:"blog",children:(0,i.jsx)("div",{className:"row blog-header text-center",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)("h3",{children:t})})})})})}},1362:function(e,t,n){"use strict";n.r(t);var i=n(5893),r=n(6610),s=n(5991),a=n(3349),o=n(5255),c=n(6089),l=n(7608),u=n(6156),d=n(7294),f=n(1664),h=n(2422),m=n(3027),g=n(6862);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,l.Z)(e);if(t){var r=(0,l.Z)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return(0,c.Z)(this,n)}}var b=function(e){(0,o.Z)(n,e);var t=p(n);function n(){var e;(0,r.Z)(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return e=t.call.apply(t,[this].concat(s)),(0,u.Z)((0,a.Z)(e),"state",{heading:"Latest news",subHeading:"articles & tips"}),e}return(0,s.Z)(n,[{key:"render",value:function(){var e=[{id:1,image:"blog4.jpg",commentCount:"0 comments",date:"6 Nov 2019",title:"How to Find and Afford Organic Food in Your Area",postExcerpt:"Conventional farming methods expose produce to chemicals in the form of pesticides, fertilisers, and preser vatives. While these greatly improve productivity, they can be very harmful to human beings, and in large amou nts even cause irreversible damage. Organic food on the other hand, is produced through traditional farming methods, without the use of any artificial compounds or preservatives, making it far safer for human consump tion human beings, and in large amou nts even cause irreversible.",link:"single-blog"},{id:2,image:"blog5.jpg",commentCount:"0 comments",date:"6 Nov 2019",title:"How to Find and Afford Organic Food in Your Area",postExcerpt:"Conventional farming methods expose produce to chemicals in the form of pesticides, fertilisers, and preser vatives. While these greatly improve productivity, they can be very harmful to human beings, and in large amou nts even cause irreversible damage. Organic food on the other hand, is produced through traditional farming methods, without the use of any artificial compounds or preservatives, making it far safer for human consump tion human beings, and in large amou nts even cause irreversible.",link:"single-blog"}].map((function(e,t){return(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsxs)("div",{className:"blog_wrp",children:[(0,i.jsx)(f.default,{href:"/".concat(e.link),children:(0,i.jsx)("a",{className:"blog_img",children:(0,i.jsx)("img",{src:"assets/images/".concat(e.image),alt:""})})}),(0,i.jsxs)("div",{className:"blog_info",children:[(0,i.jsxs)("div",{className:"blog_date",children:[(0,i.jsxs)("span",{children:[(0,i.jsx)("i",{className:"fa fa-comment-o"}),e.commentCount," "]}),(0,i.jsxs)("span",{children:[" ",(0,i.jsx)("i",{className:"fa fa-calendar"}),e.date]})]}),(0,i.jsx)(f.default,{href:"/".concat(e.link),children:(0,i.jsx)("h4",{children:e.title})}),(0,i.jsx)("p",{children:e.postExcerpt}),(0,i.jsx)(f.default,{href:"/".concat(e.link),children:(0,i.jsx)("a",{className:"more-link",children:"Read more"})})]})]})},t)}));return(0,i.jsx)(d.Fragment,{children:(0,i.jsxs)(h.Z,{pageTitle:"Aidiex - Business React Next Template",children:[(0,i.jsx)(m.Z,{bgImg:"/assets/images/header.jpg",title:"Our Blog"}),(0,i.jsx)("div",{className:"blog-page-two",children:(0,i.jsx)("div",{className:"blog_container",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-md-9 col-sm-12 blog-area",children:(0,i.jsxs)("div",{className:"row",children:[e,(0,i.jsx)("div",{className:"prodt_pagination",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/blog",className:"page_number current",children:"1"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/blog",className:"page_number",children:"2"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/blog",className:"page_number",children:"\u2192"})})]})})]})}),(0,i.jsx)(g.Z,{})]})})})})]})})}}]),n}(d.Component);t.default=b},5713:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog-two",function(){return n(1362)}])}},function(e){e.O(0,[774,423,422,888,179],(function(){return t=5713,e(e.s=t);var t}));var t=e.O();_N_E=t}]);