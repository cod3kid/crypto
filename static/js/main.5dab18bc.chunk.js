(this["webpackJsonppoo-coin-trick"]=this["webpackJsonppoo-coin-trick"]||[]).push([[0],{26:function(t,e,n){},46:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var c=n(2),r=n.n(c),s=n(20),a=n.n(s),i=(n(26),n(10)),o=n.n(i),l=n(11),d=n(21),u=n(8),j=n(7),h=n.n(j),p=["1","2","3","4","5","6","7","8","9","0","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],b=(n(46),n(0));var O=function(){var t=Object(c.useState)(""),e=Object(u.a)(t,2),n=e[0],r=e[1],s=Object(c.useState)(""),a=Object(u.a)(s,2),i=a[0],j=a[1],O=Object(c.useState)([]),f=Object(u.a)(O,2),g=f[0],x=f[1];return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{style:{display:"grid",gridGap:20,justifyContent:"center",alignItems:"center",paddingTop:20},children:[Object(b.jsx)("input",{type:"text",placeholder:"First Few Characters",value:n,onChange:function(t){return r(t.target.value)},style:{padding:10}}),Object(b.jsx)("input",{type:"text",placeholder:"Last Few Characters",value:i,onChange:function(t){return j(t.target.value)},style:{padding:10}})]}),Object(b.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:20},children:Object(b.jsx)("button",{onClick:function(){x([]),p.forEach(function(){var t=Object(d.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://api1.poocoin.app/tokens?search=".concat(e).concat(i)).then((function(t){var e=t.data.filter((function(t){return t.address.startsWith(n)}));x((function(t){return[].concat(Object(l.a)(t),Object(l.a)(e))}))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},style:{padding:5},children:"Search"})}),g.length?Object(b.jsxs)("table",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Symbol"}),Object(b.jsx)("th",{children:"Coin"}),Object(b.jsx)("th",{children:"Address"})]}),g.map((function(t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.symbol}),Object(b.jsx)("td",{children:t.name}),Object(b.jsx)("td",{children:t.address})]})}))]}):null]})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),c(t),r(t),s(t),a(t)}))};h.a.create({timeout:1e4,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE","Access-Control-Allow-Headers":"Content-Type","Access-Control-Allow-Credentials":!0}}),a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),f()}},[[48,1,2]]]);
//# sourceMappingURL=main.5dab18bc.chunk.js.map