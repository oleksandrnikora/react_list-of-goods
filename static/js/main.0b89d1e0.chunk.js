(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s,r=n(4),c=n.n(r),i=n(5),o=n(6),a=n(9),l=n(7),u=n(8),h=n(1),d=n.n(h),b=(n(14),n(15),n(2)),p=n.n(b),j=n(0),y=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(e){e[e.NONE=0]="NONE",e[e.ALPHABET=1]="ALPHABET",e[e.LENGTH=2]="LENGTH"}(s||(s={}));var v=function(e){Object(a.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={isReversed:!1,sortType:s.NONE},e.handleClickReverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.handleClickSortByName=function(){e.setState({sortType:s.ALPHABET})},e.handleClicksortByLength=function(){e.setState({sortType:s.LENGTH})},e.handleClickReset=function(){e.setState({isReversed:!1,sortType:s.NONE})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.sortType,n=e.isReversed,r=function(e,t){var n=t.sortType,r=t.isReversed,c=Object(u.a)(e);switch(console.log(n,r),n){case s.ALPHABET:c.sort((function(e,t){return e.localeCompare(t)}));break;case s.LENGTH:c.sort((function(e,t){return e.length-t.length}))}return r?c.reverse():c}(y,{sortType:t,isReversed:n});return Object(j.jsxs)("div",{className:"section content",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:p()("button is-info",{"is-light":t!==s.ALPHABET}),onClick:this.handleClickSortByName,children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:p()("button is-success",{"is-light":t!==s.LENGTH}),onClick:this.handleClicksortByLength,children:"Sort by length"}),Object(j.jsx)("button",{type:"button",className:p()("button is-warning",{"is-light":!n}),onClick:this.handleClickReverse,children:"Reverse"}),(t||n)&&Object(j.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.handleClickReset,children:"Reset"})]}),Object(j.jsx)("ul",{children:r.map((function(e){return Object(j.jsx)("li",{"data-cy":"Good",children:e},e)}))})]})}}]),n}(d.a.Component);c.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.0b89d1e0.chunk.js.map