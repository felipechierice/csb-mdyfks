(this["webpackJsonpflexiana-test-task"]=this["webpackJsonpflexiana-test-task"]||[]).push([[0],{178:function(e,t,a){},224:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(143),c=(a(178),a(40)),i=a(16),s=a(62),o=a(13),l=a(285),u=a(283),j=a(1);function b(e){return e.isLoading&&Object(j.jsx)(u.a,{sx:{display:"flex"},children:Object(j.jsx)(l.a,{})})}var d=a(286),O=a(288),p=a(145),h=a.n(p),x=a(76),f=a(281),v=a(273);function g(e){var t=e.id,a=e.label,r=e.inputRef,n=e.InputProps,c=e.onChange,i=e.error,s=e.type,o=void 0===s?"text":s,l=e.disableClearable,u=void 0!==l&&l,b=e.options,d=void 0===b?[]:b;return Object(j.jsx)(v.a,{id:t,freeSolo:!0,disableClearable:u,options:d,renderInput:function(e){return Object(j.jsx)(f.a,Object(x.a)(Object(x.a)({},e),{},{error:i,onChange:c,label:a,inputRef:r,InputProps:Object(x.a)(Object(x.a)({},n),{},{type:o})}))}})}function m(e){var t=e.id,a=e.label,r=e.inputRef,n=e.history,c=e.onChange,i=e.error;return Object(j.jsx)(g,{id:t,label:a,inputRef:r,options:n,error:i,onChange:c,InputProps:{endAdornment:Object(j.jsx)(O.a,{position:"end",children:Object(j.jsx)(d.a,{type:"submit",children:Object(j.jsx)(h.a,{})})})},type:"search"})}var w=a(280),T=a(278),R=a(287),_=a(275);function y(e){var t=e.id,a=e.label,r=e.defaultValue,n=e.value,c=e.onChange,i=e.options,s=e.size,o=void 0===s?"medium":s,l="".concat(t,"-label");return Object(j.jsxs)(R.a,{margin:"dense",children:[Object(j.jsx)(w.a,{id:l,children:a}),Object(j.jsx)(_.a,{id:t,labelId:l,size:o,defaultValue:r,value:n,onChange:c,label:a,children:i&&i.map((function(e){return Object(j.jsx)(T.a,{value:e.value,children:e.label},e.id)}))})]})}var S=a(274),C=a(61),k=a(51),H=a.n(k),P=a(277),E=a(289),I=a(290),D=a(284),N=a(89),z=a.n(N),L=a(90),A=a.n(L),B=a(147),M=a.n(B),U=H()("div")((function(){return{display:"flex"}})),G=H()("div")((function(){return{display:"flex",alignItems:"center",marginRight:"1rem","& sgv":{marginRight:"0.5rem"}}}));function F(e){e.id;var t=e.fullName,a=e.description,r=void 0===a?"":a,n=e.updatedAt,c=e.language,i=e.stargazersCount,s=r&&r.length>64?"".concat(r.slice(0,64),"..."):r;return Object(j.jsx)(E.a,{sx:{mb:2},children:Object(j.jsxs)(I.a,{children:[Object(j.jsx)(D.a,{variant:"h5",component:"div",children:Object(j.jsx)(C.b,{to:"/".concat(t),children:t})}),Object(j.jsx)(D.a,{sx:{mb:1.5},color:"text.secondary",children:s}),Object(j.jsxs)(U,{children:[Object(j.jsxs)(G,{children:[Object(j.jsx)(z.a,{}),i]}),Object(j.jsxs)(G,{children:[Object(j.jsx)(A.a,{}),c]}),Object(j.jsxs)(G,{children:[Object(j.jsx)(M.a,{}),Object(S.a)(new Date(n),new Date)]})]})]})})}function V(e){var t=e.repositories,a=e.totalCount,r=e.onClickLoadMore,n=e.isLoading;if(t&&t.length&&a)return Object(j.jsxs)("div",{children:[Object(j.jsxs)("h4",{children:["Showing ",a," available repository results"]}),t.map((function(e){return Object(j.jsx)(F,{id:e.id,fullName:e.full_name,description:e.description,updatedAt:e.updated_at,language:e.language,stargazersCount:e.stargazers_count},e.id)})),t.length<a&&Object(j.jsx)(u.a,{sx:{display:"flex",justifyContent:"center"},children:Object(j.jsx)(P.a,{variant:"outlined",loading:n,onClick:r,children:"Load more"})})]})}var J=a(3),Y=a(148),q=a.n(Y),W=a(117),K="GET",Q=[{id:0,label:"Best match",value:"best-match"},{id:1,label:"By stars",value:"stars"},{id:2,label:"By forks",value:"forks"},{id:3,label:"By issues",value:"help-wanted-issues"},{id:4,label:"Last updated",value:"updated"}],X=function(e){var t={},a=function(a){var r=e.END_POINTS[a],n=Object(W.camelCase)(a);t[n]=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.HTTP_METHOD===K?"params":"data",c="".concat(e.ROOT_URL,"/").concat(r.PATH);if(a.path)for(var i in a.path)c=c.replace(":".concat(i),a.path[i]);var s=Object(J.a)({method:r.HTTP_METHOD,url:c},n,t);return q()(s)}};for(var r in e.END_POINTS)a(r);return t},Z=function(e){var t={};for(var a in e){var r=e[a];t[Object(W.camelCase)(a)]=X(r)}return t}({GITHUB:{ROOT_URL:"https://api.github.com",END_POINTS:{SEARCH_REPOSITORIES:{PATH:"search/repositories",HTTP_METHOD:K},GET_REPOSITORY:{PATH:"repos/:owner/:repo",HTTP_METHOD:K},GET_REPOSITORY_CONTRIBUTORS:{PATH:"repos/:owner/:repo/contributors",HTTP_METHOD:K}}}});function $(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],l=Object(r.useState)(!1),u=Object(o.a)(l,2),d=u[0],O=u[1],p=Object(r.useState)([]),h=Object(o.a)(p,2),x=h[0],f=h[1],v=Object(r.useState)(null),g=Object(o.a)(v,2),w=g[0],T=g[1],R=Object(r.useState)(0),_=Object(o.a)(R,2),S=_[0],C=_[1],k=Object(r.useState)([]),H=Object(o.a)(k,2),P=H[0],E=H[1],I=Object(r.useState)(!1),D=Object(o.a)(I,2),N=D[0],z=D[1],L=Object(r.useState)(Q[0].value),A=Object(o.a)(L,2),B=A[0],M=A[1],U=Object(r.useRef)(),G=function(e){var t=e.page;return Z.github.searchRepositories({q:U.current.value,sort:B.value,per_page:20,page:t})},F=function(){var e=Object(s.a)(Object(c.a)().mark((function e(t){var a,r,s,o;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.page,e.next=3,G({page:a});case 3:if(r=e.sent,s=r.data,o=r.status,n(!1),O(!1),E((function(e){return[].concat(Object(i.a)(e),[U.current.value])})),200===o){e.next=13;break}return f([]),T(0),e.abrupt("return");case 13:1===a?(f(s.items),T(s.total_count)):f((function(e){return[].concat(Object(i.a)(e),Object(i.a)(s.items))}));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(s.a)(Object(c.a)().mark((function e(t){var a;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),(a=U.current.value)&&!(a.length<3)){e.next=5;break}return z(!0),e.abrupt("return",alert("Please insert at least 3 characters."));case 5:n(!0),C(1),F({page:1});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("form",{onSubmit:J,children:Object(j.jsx)(m,{id:"search-repositories-input",label:"Search GitHub repository...",onChange:function(){return z(!1)},inputRef:U,history:P,error:N})}),Object(j.jsx)(y,{id:"sort-select",size:"small",label:"Sort by",inputRef:U,value:B.value,defaultValue:Q[0].value,onChange:function(e){var t=e.target.value;M(t)},options:Q}),Object(j.jsx)(b,{isLoading:a}),Object(j.jsx)(V,{repositories:x,totalCount:w,onClickLoadMore:function(){var e=S+1;O(!0),C(e),F({page:e})},isLoading:d})]})}var ee=a(282),te=a(272);function ae(e){var t=e.topics;return Object(j.jsx)(te.a,{direction:"row",spacing:1,sx:{mb:1},children:t&&t.map((function(e){return Object(j.jsx)(ee.a,{label:e,size:"small"},e)}))})}var re=a(149),ne=a.n(re),ce=a(150),ie=a.n(ce),se=a(151),oe=a.n(se),le=a(152),ue=a.n(le);function je(e){var t=e.language,a=e.licenseName,r=e.stars,n=e.forks,c=e.watchers,i=e.size;return Object(j.jsxs)(te.a,{direction:"row",spacing:1,children:[Object(j.jsx)(ee.a,{icon:Object(j.jsx)(A.a,{}),label:t,variant:"outlined"}),Object(j.jsx)(ee.a,{icon:Object(j.jsx)(ne.a,{}),label:a,variant:"outlined"}),Object(j.jsx)(ee.a,{icon:Object(j.jsx)(z.a,{}),label:"Stars: ".concat(r),variant:"outlined"}),Object(j.jsx)(ee.a,{icon:Object(j.jsx)(ie.a,{}),label:"Forks: ".concat(n),variant:"outlined"}),Object(j.jsx)(ee.a,{icon:Object(j.jsx)(oe.a,{}),label:"Watchers: ".concat(c),variant:"outlined"}),Object(j.jsx)(ee.a,{icon:Object(j.jsx)(ue.a,{}),label:"".concat(i," kBs"),variant:"outlined"})]})}var be=H()("a")((function(){return{display:"flex",alignItems:"center"}})),de=H()("img")((function(){return{borderRadius:"50%",width:"48px",marginRight:".5rem"}}));function Oe(e){var t=e.imgUrl,a=e.profileUrl,r=e.username;return Object(j.jsxs)(be,{href:a,target:"_blank",rel:"noreferrer",children:[Object(j.jsx)(de,{src:t}),r]})}var pe=H()("img")((function(){return{borderRadius:"50%",width:"48px",marginRight:".5rem"}}));function he(e){var t=e.contributors;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{children:"Contributors"}),Object(j.jsx)(te.a,{direction:"row",spacing:1,children:t.map((function(e){return Object(j.jsx)("a",{href:e.html_url,target:"_blank",rel:"noreferrer",children:Object(j.jsx)(ee.a,{avatar:Object(j.jsx)(pe,{alt:e.login,src:e.avatar_url}),label:e.login,variant:"outlined"})})}))})]})}var xe=a(279);function fe(){var e=window.location.pathname.split("/"),t=Object(o.a)(e,3),a=t[1],n=t[2],i=Object(r.useState)(),l=Object(o.a)(i,2),b=l[0],d=l[1],O=Object(r.useState)([]),p=Object(o.a)(O,2),h=p[0],x=p[1];if(Object(r.useEffect)((function(){var e=function(){var e=Object(s.a)(Object(c.a)().mark((function e(){var t,r;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.github.getRepository(null,{path:{owner:a,repo:n}});case 2:t=e.sent,r=t.data,d(r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(s.a)(Object(c.a)().mark((function e(){var t,r;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.github.getRepositoryContributors(null,{path:{owner:a,repo:n}});case 2:t=e.sent,r=t.data,x(r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),t()}),[]),b)return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(xe.a,{"aria-label":"breadcrumb",children:[Object(j.jsx)(C.b,{to:"/",children:"Home"}),Object(j.jsx)(D.a,{color:"text.primary",children:b.name})]}),Object(j.jsx)("h1",{children:b.full_name}),Object(j.jsx)("p",{children:b.description}),Object(j.jsx)(ae,{topics:b.topics}),Object(j.jsx)(je,{language:b.language,licenseName:b.license.name,stars:b.stargazers_count,forks:b.forks_count,watchers:b.watchers_count,size:b.size}),Object(j.jsxs)(u.a,{sx:{my:1,display:"flex",alignItems:"center"},children:[Object(j.jsxs)(u.a,{sx:{marginRight:"1rem"},children:[Object(j.jsx)("strong",{children:"Last update: "}),Object(S.a)(new Date(b.updated_at),new Date)," "]}),Object(j.jsxs)(u.a,{children:[Object(j.jsx)("strong",{children:"Homepage: "}),Object(j.jsx)("a",{href:b.homepage,target:"_blank",rel:"noreferrer",children:b.homepage})]})]}),Object(j.jsx)(Oe,{imgUrl:b.owner.avatar_url,profileUrl:b.owner.html_url,username:b.owner.login}),Object(j.jsx)(he,{contributors:h})]})}var ve=a(18);function ge(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(C.a,{children:Object(j.jsxs)(ve.c,{children:[Object(j.jsx)(ve.a,{exact:!0,path:"/",children:Object(j.jsx)($,{})}),Object(j.jsx)(ve.a,{exact:!0,path:"/:owner/:repo",children:Object(j.jsx)(fe,{})})]})})})}var me=document.getElementById("root");Object(n.createRoot)(me).render(Object(j.jsx)(r.StrictMode,{children:Object(j.jsx)(ge,{})}))}},[[224,1,2]]]);
//# sourceMappingURL=main.b5e65155.chunk.js.map