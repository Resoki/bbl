(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{7978:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r(8951)}])},5845:function(e,t,r){"use strict";r.d(t,{A:function(){return u}});var n=r(2322),s=r(7577),l=r(415),a=r(6774),i=r(5002),o=(r(2784),r(2924)),c=function(){return(0,n.jsx)("div",{className:"px-3 py-2 border-white/50 inline-flex items-center text-xs",children:(0,n.jsxs)("span",{className:"flex-1 text-right text-slate-600 dark:text-slate-400",children:["D\xe9velopp\xe9 par l'\xe9quipe de"," ",(0,n.jsx)("a",{className:"text-blue-500 dark:text-blue-300 hover:text-blue-400",href:"https://blablaland.fun",children:"Blablaland.new"})]})})};function d(e){return"string"===typeof e.href?(0,n.jsx)("a",{title:e.title,href:e.href,className:"bg-blue-300 dark:bg-white/20 p-3 rounded-full hover:bg-blue-400 dark:hover:bg-blue-300/20 text-blue-100 dark:text-blue-200",children:e.children}):(0,n.jsx)("button",{title:e.title,onClick:e.href,className:"bg-blue-300 dark:bg-white/20 p-3 rounded-full hover:bg-blue-400 dark:hover:bg-blue-300/20 text-blue-100 dark:text-blue-200",children:e.children})}function u(e){var t,r,u=(0,o.E)(),x=void 0!==(null===u||void 0===u||null===(t=u.data)||void 0===t?void 0:t.username);return(0,n.jsxs)("div",{className:"min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-gray-200 dark:from-blue-900 dark:to-gray-900",children:[(0,n.jsx)("div",{className:"my-6"}),(0,n.jsxs)("div",{className:null!==(r=e.className)&&void 0!==r?r:"flex flex-col bg-blue-500/10 dark:bg-white/10 backdrop-blur container rounded-xl my-4 max-w-md",children:[e.children,(0,n.jsx)(c,{})]}),(0,n.jsxs)("div",{className:"my-8 inline-flex gap-x-4",children:[(0,n.jsx)(d,{title:"Accueil",href:"/",children:(0,n.jsx)(s.Z,{className:"h-7"})}),(0,n.jsx)(d,{title:"Changer le th\xe8me",href:"/",children:(0,n.jsx)(l.Z,{className:"h-7"})}),(0,n.jsx)(d,{title:"Jouer",href:"/play",children:(0,n.jsx)(a.Z,{className:"h-7"})}),(0,n.jsx)(d,{title:"Mon compte",href:x?"/my-account":"/login",children:(0,n.jsx)(i.Z,{className:"h-7"})})]})]})}},8951:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return f}});var n=r(4776),s=r.n(n),l=r(2322),a=r(2779),i=r.n(a),o=r(9097),c=r(5632),d=r(2784),u=r(5845);function x(e,t,r,n,s,l,a){try{var i=e[l](a),o=i.value}catch(c){return void r(c)}i.done?t(o):Promise.resolve(o).then(n,s)}function h(e){return function(){var t=this,r=arguments;return new Promise((function(n,s){var l=e.apply(t,r);function a(e){x(l,n,s,a,i,"next",e)}function i(e){x(l,n,s,a,i,"throw",e)}a(void 0)}))}}var f=!0;t.default=function(){var e=(0,d.useState)({}),t=e[0],r=e[1];function n(){return(n=h(s().mark((function e(t){var n,l,a,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Send login request"),t.preventDefault(),n=new FormData(t.currentTarget),e.next=5,fetch("/api/auth/login",{body:JSON.stringify(Object.fromEntries(n)),headers:{"Content-Type":"application/json"},method:"POST"});case 5:return l=e.sent,e.next=8,l.json();case 8:a=e.sent,r(null!==(i=a.errors)&&void 0!==i?i:{}),0===Object.entries(a.errors).length&&c.default.push("/play");case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,l.jsxs)(u.A,{children:[(0,l.jsx)("div",{className:"p-5",children:(0,l.jsx)("h1",{className:"font-medium text-2xl text-slate-100",children:"Se connecter !"})}),(0,l.jsxs)("form",{className:"flex flex-col p-5 gap-y-10 flex-1",onSubmit:function(e){return n.apply(this,arguments)},children:[(0,l.jsxs)("div",{className:"flex flex-col gap-y-1",children:[(0,l.jsx)("label",{htmlFor:"username",className:"text-slate-100 font-medium",children:"Entre ton nom d'utilisateur :"}),(0,l.jsx)("input",{id:"username",name:"username",className:i()("px-1 py-1 text-white bg-transparent border-b-2 border-slate-500 focus:border-sky-500 focus:outline-none",{"border-red-500 focus:border-red-600":t.username})}),t.username&&(0,l.jsx)("small",{className:"text-red-500 mt-1.5",children:t.username})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-y-1",children:[(0,l.jsx)("label",{htmlFor:"password",className:"text-slate-100 font-medium",children:"Entre ton mot de passe :"}),(0,l.jsx)("input",{id:"password",name:"password",type:"password",className:i()("px-1 py-1 text-white bg-transparent border-b-2 border-slate-500 focus:border-sky-500 focus:outline-none",{"border-red-500 focus:border-red-600":t.password})}),t.password&&(0,l.jsx)("small",{className:"text-red-500 mt-1.5",children:t.password})]}),(0,l.jsxs)("div",{className:"flex gap-x-4",children:[(0,l.jsx)("button",{type:"submit",className:"flex-1 self-start px-6 py-2 rounded-full font-medium text-white bg-sky-600 hover:bg-sky-700",children:"Se connecter"}),(0,l.jsx)(o.default,{href:"/register",children:(0,l.jsx)("a",{className:"self-end px-6 py-2 rounded-full font-medium text-white bg-teal-600 hover:bg-teal-700",children:"Pas inscrit ?"})})]})]})]})}}},function(e){e.O(0,[109,774,888,179],(function(){return t=7978,e(e.s=t);var t}));var t=e.O();_N_E=t}]);