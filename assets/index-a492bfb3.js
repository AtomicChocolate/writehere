var Ze=Object.defineProperty;var Qe=(t,e,n)=>e in t?Ze(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var be=(t,e,n)=>(Qe(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function v(){}function Ue(t){return t()}function Ae(){return Object.create(null)}function V(t){t.forEach(Ue)}function ze(t){return typeof t=="function"}function F(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ae;function et(t,e){return t===e?!0:(ae||(ae=document.createElement("a")),ae.href=e,t===ae.href)}function tt(t){return Object.keys(t).length===0}function nt(t,...e){if(t==null){for(const l of e)l(void 0);return v}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function E(t,e,n){t.$$.on_destroy.push(nt(e,n))}function Le(t){return t??""}function ye(t,e,n){return t.set(n),e}function p(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode&&t.parentNode.removeChild(t)}function Se(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function B(t){return document.createTextNode(t)}function w(){return B(" ")}function ve(){return B("")}function L(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function h(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function lt(t){return Array.from(t.childNodes)}function Re(t,e){e=""+e,t.data!==e&&(t.data=e)}function ce(t,e){t.value=e??""}function Fe(t,e,n,l){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,l?"important":"")}function fe(t,e,n){for(let l=0;l<t.options.length;l+=1){const i=t.options[l];if(i.__value===e){i.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function it(t){const e=t.querySelector(":checked");return e&&e.__value}let re;function le(t){re=t}function rt(){if(!re)throw new Error("Function called outside component initialization");return re}function ot(t){rt().$$.on_mount.push(t)}const Z=[],Ie=[];let Q=[];const je=[],st=Promise.resolve();let we=!1;function at(){we||(we=!0,st.then(qe))}function de(t){Q.push(t)}const $e=new Set;let X=0;function qe(){if(X!==0)return;const t=re;do{try{for(;X<Z.length;){const e=Z[X];X++,le(e),ut(e.$$)}}catch(e){throw Z.length=0,X=0,e}for(le(null),Z.length=0,X=0;Ie.length;)Ie.pop()();for(let e=0;e<Q.length;e+=1){const n=Q[e];$e.has(n)||($e.add(n),n())}Q.length=0}while(Z.length);for(;je.length;)je.pop()();we=!1,$e.clear(),le(t)}function ut(t){if(t.fragment!==null){t.update(),V(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(de)}}function ct(t){const e=[],n=[];Q.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),Q=e}const ue=new Set;let ft;function A(t,e){t&&t.i&&(ue.delete(t),t.i(e))}function G(t,e,n,l){if(t&&t.o){if(ue.has(t))return;ue.add(t),ft.c.push(()=>{ue.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function Y(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function dt(t,e){t.d(1),e.delete(t.key)}function ht(t,e,n,l,i,r,o,s,a,c,d,u){let f=t.length,_=r.length,x=f;const M={};for(;x--;)M[t[x].key]=x;const S=[],g=new Map,k=new Map,N=[];for(x=_;x--;){const y=u(i,r,x),T=n(y);let C=o.get(T);C?l&&N.push(()=>C.p(y,e)):(C=c(T,y),C.c()),g.set(T,S[x]=C),T in M&&k.set(T,Math.abs(x-M[T]))}const ee=new Set,P=new Set;function U(y){A(y,1),y.m(s,d),o.set(y.key,y),d=y.first,_--}for(;f&&_;){const y=S[_-1],T=t[f-1],C=y.key,R=T.key;y===T?(d=y.first,f--,_--):g.has(R)?!o.has(C)||ee.has(C)?U(y):P.has(R)?f--:k.get(C)>k.get(R)?(P.add(C),U(y)):(ee.add(R),f--):(a(T,o),f--)}for(;f--;){const y=t[f];g.has(y.key)||a(y,o)}for(;_;)U(S[_-1]);return V(N),S}function H(t){t&&t.c()}function I(t,e,n){const{fragment:l,after_update:i}=t.$$;l&&l.m(e,n),de(()=>{const r=t.$$.on_mount.map(Ue).filter(ze);t.$$.on_destroy?t.$$.on_destroy.push(...r):V(r),t.$$.on_mount=[]}),i.forEach(de)}function j(t,e){const n=t.$$;n.fragment!==null&&(ct(n.after_update),V(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function pt(t,e){t.$$.dirty[0]===-1&&(Z.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(t,e,n,l,i,r,o=null,s=[-1]){const a=re;le(t);const c=t.$$={fragment:null,ctx:[],props:r,update:v,not_equal:i,bound:Ae(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:Ae(),dirty:s,skip_bound:!1,root:e.target||a.$$.root};o&&o(c.root);let d=!1;if(c.ctx=n?n(t,e.props||{},(u,f,..._)=>{const x=_.length?_[0]:f;return c.ctx&&i(c.ctx[u],c.ctx[u]=x)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](x),d&&pt(t,u)),f}):[],c.update(),d=!0,V(c.before_update),c.fragment=l?l(c.ctx):!1,e.target){if(e.hydrate){const u=lt(e.target);c.fragment&&c.fragment.l(u),u.forEach(b)}else c.fragment&&c.fragment.c();e.intro&&A(t.$$.fragment),I(t,e.target,e.anchor),qe()}le(a)}class O{constructor(){be(this,"$$");be(this,"$$set")}$destroy(){j(this,1),this.$destroy=v}$on(e,n){if(!ze(n))return v;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const i=l.indexOf(n);i!==-1&&l.splice(i,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const mt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(mt);const gt="/icon-192x192.png";function Be(t){let e,n,l;return{c(){e=m("button"),e.textContent="Install textarea.site",h(e,"type","button"),h(e,"class","rounded border p-1")},m(i,r){$(i,e,r),n||(l=L(e,"click",t[1]),n=!0)},p:v,d(i){i&&b(e),n=!1,l()}}}function _t(t){let e,n=t[0]&&Be(t);return{c(){n&&n.c(),e=ve()},m(l,i){n&&n.m(l,i),$(l,e,i)},p(l,[i]){l[0]?n?n.p(l,i):(n=Be(l),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:v,o:v,d(l){l&&b(e),n&&n.d(l)}}}function bt(t,e,n){let l;ot(()=>{window.addEventListener("beforeinstallprompt",r=>{r.preventDefault(),n(0,l=r)})});async function i(){l.prompt(),(await l.userChoice).outcome}return[l,i]}class $t extends O{constructor(e){super(),D(this,e,bt,_t,F,{})}}const K=[];function xe(t,e=v){let n;const l=new Set;function i(s){if(F(t,s)&&(t=s,n)){const a=!K.length;for(const c of l)c[1](),K.push(c,t);if(a){for(let c=0;c<K.length;c+=2)K[c][0](K[c+1]);K.length=0}}}function r(s){i(s(t))}function o(s,a=v){const c=[s,a];return l.add(c),l.size===1&&(n=e(i,r)||v),s(t),()=>{l.delete(c),l.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}const J=xe({about:!1,settings:!1});function vt(t){let e,n,l,i,r,o,s,a,c,d,u,f,_,x,M,S,g,k,N,ee,P,U,y,T,C,R,q,ke,Ke=" ",Te,Me,te,Ce,Ee,me,Ne,ge,se,ne;return f=new $t({}),{c(){e=m("div"),n=m("div"),l=m("img"),r=w(),o=m("h1"),o.textContent="textarea.site v3",s=w(),a=m("p"),a.textContent=`textarea.site is a persistent textbox that will hold on to whatever
			you write. No ads, trackers, etc. All free and open source. Enjoy!`,c=w(),d=m("p"),d.textContent=`Feel free to check out my website and follow me on social media to
			stay tuned for updates. You can also report issues, star, and fork
			the repo on GitHub.`,u=w(),H(f.$$.fragment),_=w(),x=m("ul"),x.innerHTML='<li class="text-blue-400 underline"><a href="https://github.com/real-jame/textarea">GitHub: real-jame/textarea</a></li> <li class="text-blue-400 underline"><a href="https://realja.me">My website: realja.me</a></li> <li class="text-blue-400 underline"><a href="https://twitter.com/real__jame">My Twitter: @real__jame</a></li> <li class="text-blue-400 underline"><a href="https://wetdry.world/@jame">My Mastodon: @jame@wetdry.world</a></li>',M=w(),S=m("div"),g=m("h1"),g.textContent="Releases",k=w(),N=m("div"),N.innerHTML=`<h2 class="text-3xl font-medium">v3 (
				<a href="https://github.com/real-jame/textarea/releases/tag/v3.0.0" class="text-blue-400 underline">latest commit</a>
				)</h2> <p>textarea.site has been inactive for almost a year... no better
				time to revive it than the present! There are a few neat
				changes, so enjoy.</p> <p class="text-xl font-bold">Theming improvements</p> <ul class="list-disc w-[90%] m-auto mb-1"><li>New themes: Monokai, Solarized Dark, Solarized Light.</li> <li>Default theme is now based off your device&#39;s dark mode
					preference.</li> <li>Scrollbar color is now affected by light/dark theme
					selection.</li> <li>Your selected theme now saves.</li></ul> <p class="text-xl font-bold">Utility improvements</p> <ul class="list-disc w-[90%] m-auto mb-1"><li>Added About/Releases panel.</li> <li>Added Settings panel.</li> <li>Footer styling no longer sucks.</li></ul>`,ee=w(),P=m("div"),U=m("h2"),U.innerHTML=`v2.1 (
				<a href="https://github.com/real-jame/textarea/releases/tag/v2.0.0" class="text-blue-400 underline">93f9c28</a>
				)`,y=w(),T=m("ul"),C=m("li"),C.textContent=`The website can now be installed to your desktop / home
					screen as a Progressive Web App, allowing it to be used
					offline.`,R=w(),q=m("li"),ke=B(`There is now a testing version of textarea.site built from
					the latest development commit available at`),Te=B(Ke),Me=w(),te=m("a"),te.textContent="https://real-jame.github.io/textarea",Ce=B(`
					.`),Ee=w(),me=m("div"),me.innerHTML=`<h2 class="text-3xl">v2 (
				<a href="https://github.com/real-jame/textarea/releases/tag/v2.0.0" class="text-blue-400 underline">8abb479</a>
				)</h2> <ul class="list-disc w-[90%] m-auto"><li>2 themes, Light and Dark. More to come.</li> <li>Footer bar items look a bit nicer now</li></ul>`,Ne=w(),ge=m("div"),ge.innerHTML=`<h2 class="text-3xl">v1 (
				<a href="https://github.com/real-jame/textarea/releases/tag/v1.0.0" class="text-blue-400 underline">3d46063</a>
				)</h2> <p>The first public release, used on textarea.site.</p>`,et(l.src,i=gt)||h(l,"src",i),h(l,"alt",""),h(l,"class","rounded-3xl mx-auto"),h(o,"class","text-4xl font-bold"),h(n,"class","flex-1 text-center p-4 overflow-y-auto"),h(g,"class","text-4xl font-bold text-center"),h(U,"class","text-3xl"),h(te,"href","https://real-jame.github.io/textarea"),h(te,"class","text-blue-400 underline"),h(T,"class","list-disc w-[90%] m-auto mb-1"),h(S,"class","flex-1 text-left overflow-y-auto"),h(e,"class",se=`about invisible flex flex-grow max-h-0 transition-all ${t[0].about?"show-about":""}`)},m(W,_e){$(W,e,_e),p(e,n),p(n,l),p(n,r),p(n,o),p(n,s),p(n,a),p(n,c),p(n,d),p(n,u),I(f,n,null),p(n,_),p(n,x),p(e,M),p(e,S),p(S,g),p(S,k),p(S,N),p(S,ee),p(S,P),p(P,U),p(P,y),p(P,T),p(T,C),p(T,R),p(T,q),p(q,ke),p(q,Te),p(q,Me),p(q,te),p(q,Ce),p(S,Ee),p(S,me),p(S,Ne),p(S,ge),ne=!0},p(W,[_e]){(!ne||_e&1&&se!==(se=`about invisible flex flex-grow max-h-0 transition-all ${W[0].about?"show-about":""}`))&&h(e,"class",se)},i(W){ne||(A(f.$$.fragment,W),ne=!0)},o(W){G(f.$$.fragment,W),ne=!1},d(W){W&&b(e),j(f)}}}function wt(t,e,n){let l;return E(t,J,i=>n(0,l=i)),[l]}class yt extends O{constructor(e){super(),D(this,e,wt,vt,F,{})}}function St(t){let e,n,l,i,r;return{c(){e=m("button"),n=B("About"),h(e,"type","button"),h(e,"class",l=`bg-inherit text-inherit rounded border p-1 h-full ${t[0].about?"hover":""}`)},m(o,s){$(o,e,s),p(e,n),i||(r=L(e,"click",t[1]),i=!0)},p(o,[s]){s&1&&l!==(l=`bg-inherit text-inherit rounded border p-1 h-full ${o[0].about?"hover":""}`)&&h(e,"class",l)},i:v,o:v,d(o){o&&b(e),i=!1,r()}}}function xt(t,e,n){let l;E(t,J,r=>n(0,l=r));function i(){ye(J,l.about=!l.about,l)}return[l,i]}class kt extends O{constructor(e){super(),D(this,e,xt,St,F,{})}}const pe={TEXT:"text",SETTINGS:"settings"},Ye={Theme:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"Default Dark":"Default Light",WordWrap:!0,SpellCheck:!0,FontFamily:'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',ExportFileName:"textarea-exported.txt"};function Je(t,e=""){return localStorage.getItem(t)||e}function Ve(t,e){localStorage.setItem(t,e)}function Tt(){return Je(pe.TEXT,"")}function Mt(t){Ve(pe.TEXT,t)}function Ct(){const t=Je(pe.SETTINGS,JSON.stringify(Ye));return JSON.parse(t)}function Et(t){t={...Ye,...t},Ve(pe.SETTINGS,JSON.stringify(t))}const ie=xe(Tt());ie.subscribe(t=>Mt(t));const he={Theme:"Theme",WordWrap:"Word Wrap",SpellCheck:"Spell Check",FontFamily:"Font Family",ExportFileName:"Export File Name"},z=xe(Ct());z.subscribe(t=>{Et(t)});function Nt(t){let e,n,l;return{c(){e=m("button"),e.textContent="Export",h(e,"class","bg-inherit text-inherit rounded border p-1 h-full")},m(i,r){$(i,e,r),n||(l=L(e,"click",t[2]),n=!0)},p:v,i:v,o:v,d(i){i&&b(e),n=!1,l()}}}function At(t,e,n){let l,i;E(t,z,s=>n(3,l=s)),E(t,ie,s=>n(0,i=s));function r(s){const a=document.createElement("a"),c=new Blob([s],{type:"text/plain"});a.href=URL.createObjectURL(c),a.download=String(l.ExportFileName),a.click()}return[i,r,()=>r(i)]}class Lt extends O{constructor(e){super(),D(this,e,At,Nt,F,{})}}function Ft(t){let e,n,l,i,r;return{c(){e=m("button"),n=B("Settings"),h(e,"type","button"),h(e,"class",l=`bg-inherit text-inherit rounded border p-1 h-full ${t[0].settings?"hover":""}`)},m(o,s){$(o,e,s),p(e,n),i||(r=L(e,"click",t[1]),i=!0)},p(o,[s]){s&1&&l!==(l=`bg-inherit text-inherit rounded border p-1 h-full ${o[0].settings?"hover":""}`)&&h(e,"class",l)},i:v,o:v,d(o){o&&b(e),i=!1,r()}}}function It(t,e,n){let l;E(t,J,r=>n(0,l=r));function i(){ye(J,l.settings=!l.settings,l)}return[l,i]}class jt extends O{constructor(e){super(),D(this,e,It,Ft,F,{})}}const oe=[{class:"theme-dark",label:"Default Dark",category:"Dark"},{class:"theme-monokai",label:"Monokai",category:"Dark"},{class:"theme-solarizeddark",label:"Solarized Dark",category:"Dark"},{class:"theme-light",label:"Default Light",category:"Light"},{class:"theme-solarizedlight",label:"Solarized Light",category:"Light"}];function De(t,e,n){const l=t.slice();return l[5]=e[n],l}function Oe(t,e,n){const l=t.slice();return l[8]=e[n],l}function We(t){let e,n=t[8].label+"",l;return{c(){e=m("option"),l=B(n),e.__value=t[8].label,ce(e,e.__value)},m(i,r){$(i,e,r),p(e,l)},p:v,d(i){i&&b(e)}}}function Ge(t){let e;function n(...r){return t[2](t[5],...r)}let l=Y(oe.filter(n)),i=[];for(let r=0;r<l.length;r+=1)i[r]=We(Oe(t,l,r));return{c(){e=m("optgroup");for(let r=0;r<i.length;r+=1)i[r].c();h(e,"label",t[5])},m(r,o){$(r,e,o);for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(e,null)},p(r,o){if(t=r,o&2){l=Y(oe.filter(n));let s;for(s=0;s<l.length;s+=1){const a=Oe(t,l,s);i[s]?i[s].p(a,o):(i[s]=We(a),i[s].c(),i[s].m(e,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=l.length}},d(r){r&&b(e),Se(i,r)}}}function Bt(t){let e,n,l,i=Y(t[1]),r=[];for(let o=0;o<i.length;o+=1)r[o]=Ge(De(t,i,o));return{c(){e=m("select");for(let o=0;o<r.length;o+=1)r[o].c();h(e,"aria-label","ui theme selection"),h(e,"class","bg-inherit text-inherit rounded border p-1 self-end h-full"),t[0].Theme===void 0&&de(()=>t[3].call(e))},m(o,s){$(o,e,s);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null);fe(e,t[0].Theme,!0),n||(l=L(e,"change",t[3]),n=!0)},p(o,[s]){if(s&2){i=Y(o[1]);let a;for(a=0;a<i.length;a+=1){const c=De(o,i,a);r[a]?r[a].p(c,s):(r[a]=Ge(c),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=i.length}s&3&&fe(e,o[0].Theme)},i:v,o:v,d(o){o&&b(e),Se(r,o),n=!1,l()}}}function Dt(t,e,n){let l;E(t,z,s=>n(0,l=s));const i=Array.from(new Set(oe.map(s=>s.category))),r=(s,a)=>a.category===s;function o(){l.Theme=it(this),z.set(l),n(1,i)}return[l,i,r,o]}class Ot extends O{constructor(e){super(),D(this,e,Dt,Bt,F,{})}}function Wt(t){let e,n,l,i,r,o,s,a,c,d,u;return l=new Lt({}),o=new jt({}),a=new kt({}),d=new Ot({}),{c(){e=m("footer"),n=m("div"),H(l.$$.fragment),i=w(),r=m("div"),H(o.$$.fragment),s=w(),H(a.$$.fragment),c=w(),H(d.$$.fragment),h(n,"class","flex gap-1 bg-inherit text-inherit"),h(r,"class","flex gap-1 bg-inherit text-inherit"),h(e,"class","fixed bottom-0 h-auto w-screen text-xs px-1 flex justify-between")},m(f,_){$(f,e,_),p(e,n),I(l,n,null),p(e,i),p(e,r),I(o,r,null),p(r,s),I(a,r,null),p(r,c),I(d,r,null),u=!0},p:v,i(f){u||(A(l.$$.fragment,f),A(o.$$.fragment,f),A(a.$$.fragment,f),A(d.$$.fragment,f),u=!0)},o(f){G(l.$$.fragment,f),G(o.$$.fragment,f),G(a.$$.fragment,f),G(d.$$.fragment,f),u=!1},d(f){f&&b(e),j(l),j(o),j(a),j(d)}}}class Gt extends O{constructor(e){super(),D(this,e,null,Wt,F,{})}}const Xe=new Set(["Arial","Arial Black","Bahnschrift","Calibri","Cambria","Cambria Math","Candara","Comic Sans MS","Consolas","Constantia","Corbel","Courier New","Ebrima","Franklin Gothic Medium","Gabriola","Gadugi","Georgia","HoloLens MDL2 Assets","Impact","Ink Free","Javanese Text","Leelawadee UI","Lucida Console","Lucida Sans Unicode","Malgun Gothic","Marlett","Microsoft Himalaya","Microsoft JhengHei","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Sans Serif","Microsoft Tai Le","Microsoft YaHei","Microsoft Yi Baiti","MingLiU-ExtB","Mongolian Baiti","MS Gothic","MV Boli","Myanmar Text","Nirmala UI","Palatino Linotype","Segoe MDL2 Assets","Segoe Print","Segoe Script","Segoe UI","Segoe UI Historic","Segoe UI Emoji","Segoe UI Symbol","SimSun","Sitka","Sylfaen","Symbol","Tahoma","Times New Roman","Trebuchet MS","Verdana","Webdings","Wingdings","Yu Gothic","American Typewriter","Andale Mono","Arial","Arial Black","Arial Narrow","Arial Rounded MT Bold","Arial Unicode MS","Avenir","Avenir Next","Avenir Next Condensed","Baskerville","Big Caslon","Bodoni 72","Bodoni 72 Oldstyle","Bodoni 72 Smallcaps","Bradley Hand","Brush Script MT","Chalkboard","Chalkboard SE","Chalkduster","Charter","Cochin","Comic Sans MS","Copperplate","Courier","Courier New","Didot","DIN Alternate","DIN Condensed","Futura","Geneva","Georgia","Gill Sans","Helvetica","Helvetica Neue","Herculanum","Hoefler Text","Impact","Lucida Grande","Luminari","Marker Felt","Menlo","Microsoft Sans Serif","Monaco","Noteworthy","Optima","Palatino","Papyrus","Phosphate","Rockwell","Savoye LET","SignPainter","Skia","Snell Roundhand","Tahoma","Times","Times New Roman","Trattatello","Trebuchet MS","Verdana","Zapfino"].sort());(async()=>{await document.fonts.ready;const t=new Set;for(const e of Xe.values())document.fonts.check(`12px "${e}"`)&&t.add(e);return console.log("Available Fonts:",[...t.values()]),[...t.values()]})();function He(t,e,n){const l=t.slice();return l[7]=e[n][0],l[8]=e[n][1],l[9]=e,l[10]=n,l}function Ht(t,e,n){const l=t.slice();return l[11]=e[n],l}function Pt(t){let e,n,l=he[t[7]]+"",i,r,o,s;function a(u,f){if(typeof u[8]=="string")return Rt;if(typeof u[8]=="boolean")return zt}let c=a(t),d=c&&c(t);return{c(){d&&d.c(),e=w(),n=m("label"),i=B(l),o=w(),s=m("br"),h(n,"for",r=t[7])},m(u,f){d&&d.m(u,f),$(u,e,f),$(u,n,f),p(n,i),$(u,o,f),$(u,s,f)},p(u,f){c===(c=a(u))&&d?d.p(u,f):(d&&d.d(1),d=c&&c(u),d&&(d.c(),d.m(e.parentNode,e))),f&1&&l!==(l=he[u[7]]+"")&&Re(i,l),f&1&&r!==(r=u[7])&&h(n,"for",r)},d(u){u&&(b(e),b(n),b(o),b(s)),d&&d.d(u)}}}function Ut(t){let e,n,l,i,r,o,s=he[t[7]]+"",a,c,d,u,f,_,x=Y(Xe),M=[];for(let g=0;g<x.length;g+=1)M[g]=qt(Ht(t,x,g));function S(...g){return t[3](t[7],...g)}return{c(){e=m("select");for(let g=0;g<M.length;g+=1)M[g].c();r=w(),o=m("label"),a=B(s),d=w(),u=m("br"),h(e,"name",n=t[7]),h(e,"id",l=t[7]),h(o,"for",c=t[7])},m(g,k){$(g,e,k);for(let N=0;N<M.length;N+=1)M[N]&&M[N].m(e,null);fe(e,t[8]),$(g,r,k),$(g,o,k),p(o,a),$(g,d,k),$(g,u,k),f||(_=L(e,"change",S),f=!0)},p(g,k){t=g,k&1&&n!==(n=t[7])&&h(e,"name",n),k&1&&l!==(l=t[7])&&h(e,"id",l),k&1&&i!==(i=t[8])&&fe(e,t[8]),k&1&&s!==(s=he[t[7]]+"")&&Re(a,s),k&1&&c!==(c=t[7])&&h(o,"for",c)},d(g){g&&(b(e),b(r),b(o),b(d),b(u)),Se(M,g),f=!1,_()}}}function zt(t){let e,n,l,i,r;function o(){t[5].call(e,t[9],t[10])}function s(...a){return t[6](t[7],...a)}return{c(){e=m("input"),h(e,"type","checkbox"),h(e,"title",n=t[7]),h(e,"name",l=t[7])},m(a,c){$(a,e,c),e.checked=t[8],i||(r=[L(e,"change",o),L(e,"change",s)],i=!0)},p(a,c){t=a,c&1&&n!==(n=t[7])&&h(e,"title",n),c&1&&l!==(l=t[7])&&h(e,"name",l),c&1&&(e.checked=t[8])},d(a){a&&b(e),i=!1,V(r)}}}function Rt(t){let e,n,l,i,r,o;function s(...a){return t[4](t[7],...a)}return{c(){e=m("input"),h(e,"type","text"),h(e,"title",n=t[7]),h(e,"name",l=t[7]),e.value=i=t[8]},m(a,c){$(a,e,c),r||(o=L(e,"change",s),r=!0)},p(a,c){t=a,c&1&&n!==(n=t[7])&&h(e,"title",n),c&1&&l!==(l=t[7])&&h(e,"name",l),c&1&&i!==(i=t[8])&&e.value!==i&&(e.value=i)},d(a){a&&b(e),r=!1,o()}}}function qt(t){let e;return{c(){e=m("option"),e.textContent=`${t[11]}`,e.__value=t[11],ce(e,e.__value)},m(n,l){$(n,e,l)},p:v,d(n){n&&b(e)}}}function Pe(t,e){let n,l;function i(s,a){if(s[7]==="FontFamily")return Ut;if(s[7]!=="Theme")return Pt}let r=i(e),o=r&&r(e);return{key:t,first:null,c(){n=ve(),o&&o.c(),l=ve(),this.first=n},m(s,a){$(s,n,a),o&&o.m(s,a),$(s,l,a)},p(s,a){e=s,r===(r=i(e))&&o?o.p(e,a):(o&&o.d(1),o=r&&r(e),o&&(o.c(),o.m(l.parentNode,l)))},d(s){s&&(b(n),b(l)),o&&o.d(s)}}}function Yt(t){let e,n,l,i,r,o=[],s=new Map,a,c=Y(Object.entries(t[0]));const d=u=>u[7];for(let u=0;u<c.length;u+=1){let f=He(t,c,u),_=d(f);s.set(_,o[u]=Pe(_,f))}return{c(){e=m("div"),n=m("h1"),n.textContent="Settings",l=w(),i=m("hr"),r=w();for(let u=0;u<o.length;u+=1)o[u].c();h(n,"class","text-4xl"),h(e,"class",a=`settings invisible relative top-[500px] max-h-40 transition-all overflow-y-auto pb-4 ${t[1].settings?"show-settings":""}`)},m(u,f){$(u,e,f),p(e,n),p(e,l),p(e,i),p(e,r);for(let _=0;_<o.length;_+=1)o[_]&&o[_].m(e,null)},p(u,[f]){f&5&&(c=Y(Object.entries(u[0])),o=ht(o,f,d,1,u,c,s,e,dt,Pe,null,He)),f&2&&a!==(a=`settings invisible relative top-[500px] max-h-40 transition-all overflow-y-auto pb-4 ${u[1].settings?"show-settings":""}`)&&h(e,"class",a)},i:v,o:v,d(u){u&&b(e);for(let f=0;f<o.length;f+=1)o[f].d()}}}function Jt(t,e,n){let l,i;E(t,z,d=>n(0,l=d)),E(t,J,d=>n(1,i=d));function r(d,u){ye(z,l={...l,[d]:u},l)}const o=(d,u)=>r(d,u.currentTarget.value),s=(d,u)=>r(d,u.currentTarget.value);function a(d,u){d[u][1]=this.checked}return[l,i,r,o,s,a,(d,u)=>r(d,u.currentTarget.checked)]}class Vt extends O{constructor(e){super(),D(this,e,Jt,Yt,F,{})}}function Xt(t){let e,n,l,i,r;return{c(){e=m("textarea"),h(e,"spellcheck",n=t[0].SpellCheck),h(e,"class",l=Le(`w-full h-[calc(100vh-1.5em)] bg-inherit text-inherit border-none focus-visible:outline-none resize-none text-xl p-4 transition-all ${t[1].settings?"show-settings":""} ${t[0].WordWrap?"wordwrap":""}`)+" svelte-1x2udxz")},m(o,s){$(o,e,s),ce(e,t[2]),i||(r=[L(e,"input",t[4]),L(e,"input",t[3])],i=!0)},p(o,[s]){s&1&&n!==(n=o[0].SpellCheck)&&h(e,"spellcheck",n),s&3&&l!==(l=Le(`w-full h-[calc(100vh-1.5em)] bg-inherit text-inherit border-none focus-visible:outline-none resize-none text-xl p-4 transition-all ${o[1].settings?"show-settings":""} ${o[0].WordWrap?"wordwrap":""}`)+" svelte-1x2udxz")&&h(e,"class",l),s&4&&ce(e,o[2])},i:v,o:v,d(o){o&&b(e),i=!1,V(r)}}}function Kt(t,e,n){let l,i,r;E(t,z,a=>n(0,l=a)),E(t,J,a=>n(1,i=a)),E(t,ie,a=>n(2,r=a));function o(a){const c=a.currentTarget.value;ie.set(c)}function s(){r=this.value,ie.set(r)}return[l,i,r,o,s]}class Zt extends O{constructor(e){super(),D(this,e,Kt,Xt,F,{})}}function Qt(t){let e,n,l,i,r,o,s,a,c,d;return n=new yt({}),i=new Zt({}),o=new Vt({}),a=new Gt({}),{c(){var u;e=m("main"),H(n.$$.fragment),l=w(),H(i.$$.fragment),r=w(),H(o.$$.fragment),s=w(),H(a.$$.fragment),h(e,"class",c=(u=oe.find(t[1]))==null?void 0:u.class),Fe(e,"font-family",t[0].FontFamily)},m(u,f){$(u,e,f),I(n,e,null),p(e,l),I(i,e,null),p(e,r),I(o,e,null),p(e,s),I(a,e,null),d=!0},p(u,[f]){var _;(!d||f&1&&c!==(c=(_=oe.find(u[1]))==null?void 0:_.class))&&h(e,"class",c),f&1&&Fe(e,"font-family",u[0].FontFamily)},i(u){d||(A(n.$$.fragment,u),A(i.$$.fragment,u),A(o.$$.fragment,u),A(a.$$.fragment,u),d=!0)},o(u){G(n.$$.fragment,u),G(i.$$.fragment,u),G(o.$$.fragment,u),G(a.$$.fragment,u),d=!1},d(u){u&&b(e),j(n),j(i),j(o),j(a)}}}function en(t,e,n){let l;return E(t,z,r=>n(0,l=r)),[l,r=>r.label===l.Theme]}class tn extends O{constructor(e){super(),D(this,e,en,Qt,F,{})}}new tn({target:document.getElementById("app")});"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(t=>{console.log("ServiceWorker registration successful with scope: ",t.scope)},t=>{console.log("ServiceWorker registration failed: ",t)})});
