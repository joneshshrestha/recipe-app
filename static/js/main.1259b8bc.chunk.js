(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(5),s=c.n(a),i=(c(12),c(4)),p=c.n(i),o=c(6),u=c(2),j=(c(14),c(7)),l=c.n(j),b=c(0),d=function(e){var t=e.title,c=e.calories,n=e.image,r=e.ingredients;return Object(b.jsxs)("div",{className:l.a.recipes,children:[Object(b.jsx)("h1",{children:t}),Object(b.jsx)("ol",{children:r.map((function(e){return Object(b.jsx)("li",{children:e.text})}))}),Object(b.jsx)("p",{children:c}),Object(b.jsx)("img",{src:n,alt:""})]})},h=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),s=Object(u.a)(a,2),i=s[0],j=s[1],l=Object(n.useState)("chicken"),h=Object(u.a)(l,2),f=h[0],m=h[1];Object(n.useEffect)((function(){O()}),[f]);var O=function(){var e=Object(o.a)(p.a.mark((function e(){var t,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(f,"&app_id=").concat("e13c4d28","&app_key=").concat("bba6a4482d7dd3bf7e821422178a5d70"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,r(c.hits),console.log(c.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m(i)},className:"search-form",children:[Object(b.jsx)("input",{className:"search-bar",type:"text",value:i,onChange:function(e){j(e.target.value)}}),Object(b.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]}),Object(b.jsx)("div",{className:"recipes",children:c.map((function(e){return Object(b.jsx)(d,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)}))})]})};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root"))},7:function(e,t,c){e.exports={recipes:"recipe_recipes__2GpBA"}}},[[16,1,2]]]);
//# sourceMappingURL=main.1259b8bc.chunk.js.map