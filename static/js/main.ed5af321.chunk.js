(this.webpackJsonptest_img_catalog=this.webpackJsonptest_img_catalog||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),r=n.n(a),i=n(8),s=n.n(i),u=(n(15),n(9)),l=n(6),j=n(3),o=(n(16),n(2));var b=function(){var t=Object(a.useState)(""),e=Object(j.a)(t,2),n=e[0],r=e[1],i=Object(a.useState)(""),s=Object(j.a)(i,2),b=s[0],d=s[1],f=Object(a.useState)([]),O=Object(j.a)(f,2),m=O[0],h=O[1],p=Object(a.useState)(!0),g=Object(j.a)(p,2),v=g[0],x=g[1],N=Object(a.useState)(!1),y=Object(j.a)(N,2),S=y[0],k=y[1],C=Object(a.useState)(!1),q=Object(j.a)(C,2),I=q[0],F=q[1],P=Object(a.useState)(!1),_=Object(j.a)(P,2),A=_[0],w=_[1],J=Object(a.useState)(null),M=Object(j.a)(J,2),B=M[0],E=M[1],T=Object(a.useRef)(),z=function(t,e){var n=t-.5+Math.random()*(e-t+1);return Math.round(n)},D=function(){var t=function(t){for(var e=[],n="abcdefghijklmnopqrstuvwxyz",c=0;c<t;c++)e.push(n.charAt(z(1,n.length)));return e.join("")}(z(1,10));r(t),d(t)};Object(a.useEffect)((function(){""!==b&&(x(!1),Promise.all(b.split(",").map((function(t){return fetch("https://api.giphy.com/v1/gifs/random?api_key=MCinVvF5uqpmYQPkxunJqBPtgaVXfNJ8&tag=".concat(t))}))).then((function(t){return Promise.all(t.map((function(t){if(200!==t.status)throw t.status;return t.json()})))})).then((function(t){return t.map((function(t){return t.data.image_url}))})).then((function(t){t.includes(void 0)?w(!0):h([].concat(Object(l.a)(m),[Object(u.a)({},b,Object(l.a)(t))]))})).catch((function(t){return E(t)})).finally((function(){return x(!0)})),d(""))}),[b]),Object(a.useEffect)((function(){""!==n&&F(!1),A&&w(!1)}),[n]);var L=function(t,e){if(Object(o.isArray)(t))return Object(o.isArray)(t[0])?[].concat(Object(l.a)(t),[e]):[t,e]};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("form",{className:"justify-content-center align-items-center",onSubmit:function(t){t.preventDefault(),""===n?F(!0):"delay"===n?(D(),T.current=setInterval(D,5e3)):d(n)},children:[Object(c.jsxs)("div",{className:"alerts",children:[I?Object(c.jsx)("span",{className:"alert alert-danger",children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435!"}):null,A?Object(c.jsx)("span",{className:"alert alert-danger",children:"\u041f\u043e \u0442\u0435\u0433\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e!"}):null,B?Object(c.jsxs)("span",{className:"alert alert-danger",children:["\u041e\u0448\u0438\u0431\u043a\u0430 ",B,"!"]}):null]}),Object(c.jsx)("input",{type:"text",autoFocus:!0,onChange:function(t){r(t.target.value.replace(/^,|,{2,}|[^a-zA-Z,]/,""))},value:n,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u0433"}),Object(c.jsx)("button",{className:"btn btn-success",type:"submit",disabled:!v,children:v?"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),Object(c.jsx)("button",{className:"btn btn-danger",type:"reset",onClick:function(t){r(""),clearTimeout(T.current),h([])},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"}),Object(c.jsx)("button",{className:"btn btn-info",type:"button",onClick:function(){return k(!S)},children:S?"\u0420\u0430\u0437\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c":"\u0413\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]}),Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"card-deck",children:function(){if(S){var t={};return m.map((function(e){return Object(o.mergeWith)(t,e,L)})),Object.entries(t).map((function(t){return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("h5",{className:"card-title",children:t[0]}),t[1].map((function(e){return Object(c.jsx)("div",{className:"card insideCard",children:Object(c.jsx)("img",{className:"card-img img-fluid",src:e,alt:t[0],onClick:function(){return r(t[0])}},Object(o.uniqueId)())},Object(o.uniqueId)())}))]},Object(o.uniqueId)())}))}return m.map((function(t){return Object.entries(t).map((function(t){return Object(c.jsx)("div",{className:"card mb-2",children:t[1].map((function(e){return Object(c.jsx)("img",{className:"card-img img-fluid",src:e,alt:t[0],onClick:function(){return r(t[0])}},Object(o.uniqueId)())}))},Object(o.uniqueId)())}))}))}()})})]})},d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),r(t),i(t)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),d()}},[[19,1,2]]]);
//# sourceMappingURL=main.ed5af321.chunk.js.map