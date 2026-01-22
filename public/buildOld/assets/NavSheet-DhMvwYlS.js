import{r as o,j as e,L as x}from"./app-B9AQd5ys.js";import{d as ee}from"./styled-components.browser.esm-BDMIYzIS.js";import{c as L}from"./utils-CBfrqCZ4.js";import{d as se,f as O,e as B,J as te,u as H,M as X,g as ae,b as re,h as ne,j as w,m as U}from"./proxy-BNapONv9.js";import{D as I,b as A,c as C,d as _,e as D}from"./dialog-Bv9VVO8u.js";import{B as T}from"./badge-C_HtA6Ve.js";import{B as f}from"./button-EpALpkJz.js";import{S as ie}from"./square-plus-BSM14hYC.js";import{A as Y,a as q,b as J}from"./avatar-Cv_iQLGP.js";import{S as oe,L as le}from"./SwitchDarkMode3D-Bl9lc39o.js";import{S}from"./separator-ZWokEsCp.js";import{M as ce,P as V}from"./phone-0ZlEzQ2F.js";import{M as de}from"./mail-B167Z10W.js";import{H as me}from"./NavLanguage-ClSNos7V.js";import{I as he}from"./info-CH5uYkAE.js";import{c as z}from"./createLucideIcon-CEUCJa7Y.js";import{S as W,e as Q,d as G,a as xe,b as pe}from"./sheet-DdM45rFk.js";import{T as fe}from"./TooltipButton-CJ25Vfee.js";import{I as ue}from"./input-C9w9P4L6.js";import{S as F}from"./search-4gJDPScM.js";import{u as ge}from"./use-translation-Bes2uPNF.js";import{A as je}from"./align-left-gXo-0IqN.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],ve=z("ClipboardList",be);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]],K=z("Library",ye);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M22 19h-6",key:"vcuq98"}]],we=z("UserRoundPlus",Ne);function Se(...s){const t=!Array.isArray(s[0]),r=t?0:-1,a=s[0+r],n=s[1+r],i=s[2+r],l=s[3+r],c=se(n,i,l);return t?c(a):c}function ke(s,t,r){const a=s.get();let n=null,i=a,l;const c=typeof a=="string"?a.replace(/[\d.-]/g,""):void 0,d=()=>{n&&(n.stop(),n=null)},u=()=>{d(),n=new te({keyframes:[E(s.get()),E(i)],velocity:s.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...r,onUpdate:l})};if(s.attach((p,m)=>(i=p,l=g=>m(P(g,c)),O.postRender(u),s.get()),d),B(t)){const p=t.on("change",g=>s.set(P(g,c))),m=s.on("destroy",p);return()=>{p(),m()}}return d}function P(s,t){return t?s+t:s}function E(s){return typeof s=="number"?s:parseFloat(s)}function b(s){const t=H(()=>ae(s)),{isStatic:r}=o.useContext(X);if(r){const[,a]=o.useState(s);o.useEffect(()=>t.on("change",a),[])}return t}function Z(s,t){const r=b(t()),a=()=>r.set(t());return a(),re(()=>{const n=()=>O.preRender(a,!1,!0),i=s.map(l=>l.on("change",n));return()=>{i.forEach(l=>l()),ne(a)}}),r}function Le(s){w.current=[],s();const t=Z(w.current,s);return w.current=void 0,t}function ze(s,t,r,a){if(typeof s=="function")return Le(s);const n=Se(t,r,a);return Array.isArray(s)?R(s,n):R([s],([i])=>n(i))}function R(s,t){const r=H(()=>[]);return Z(s,()=>{r.length=0;const a=s.length;for(let n=0;n<a;n++)r[n]=s[n].get();return t(r)})}function $(s,t={}){const{isStatic:r}=o.useContext(X),a=()=>B(s)?s.get():s;if(r)return ze(a);const n=b(a());return o.useInsertionEffect(()=>ke(n,s,t),[n,JSON.stringify(t)]),n}const rs=()=>{const[s,t]=o.useState(!1);o.useEffect(()=>{const a=()=>{window.scrollY>300?t(!0):t(!1)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]);const r=()=>{typeof window<"u"&&window.scrollTo({top:0,behavior:"smooth"})};return e.jsx(e.Fragment,{children:s&&e.jsx(Me,{children:e.jsx("button",{onClick:r,children:e.jsx("div",{className:"scrolldown transition-all duration-300 hover:translate-y-[-8px] opacity-60 dark:opacity-85",children:e.jsxs("div",{className:"chevrons",children:[e.jsx("div",{className:"chevrondown"}),e.jsx("div",{className:"chevrondown"})]})})})})})},Me=ee.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 50;
    .scrolldown {
        --color: var(--foreground);
        --sizeX: 30px;
        --sizeY: 50px;
        position: relative;
        width: var(--sizeX);
        height: var(--sizeY);
        margin-left: var(sizeX / 2);
        border: calc(var(--sizeX) / 10) solid var(--color);
        border-radius: 50px;
        box-sizing: border-box;
        cursor: pointer;
    }

    .scrolldown::before {
        content: '';
        position: absolute;
        bottom: 30px;
        left: 50%;
        width: 6px;
        height: 6px;
        margin-left: -3px;
        background-color: var(--color);
        border-radius: 100%;
        animation: scrolldown-anim 2s infinite;
        box-sizing: border-box;
        box-shadow: 0px -5px 3px 1px #2a547066;
    }

    @keyframes scrolldown-anim {
        0% {
            opacity: 0;
            height: 6px;
        }

        40% {
            opacity: 1;
            height: 10px;
        }

        80% {
            transform: translate(0, 20px);
            height: 10px;
            opacity: 0;
        }

        100% {
            height: 3px;
            opacity: 0;
        }
    }

    .chevrons {
        padding: 6px 0 0 0;
        margin-left: -3px;
        margin-top: -18px;
        width: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .chevrondown {
        margin-top: -6px;
        position: relative;
        border: solid var(--color);
        border-width: 0 3px 3px 0;
        display: inline-block;
        width: 10px;
        height: 10px;
        transform: rotate(-135deg);
    }

    .chevrondown:nth-child(odd) {
        animation: pulse54012 500ms ease infinite alternate;
    }

    .chevrondown:nth-child(even) {
        animation: pulse54012 500ms ease infinite alternate 250ms;
    }

    @keyframes pulse54012 {
        from {
            opacity: 0;
        }

        to {
            opacity: 0.5;
        }
    }
`;function Ie(s,t){const r=[];for(let a=0;a<s;a++){const n=Math.floor(Math.random()*4e3)-2e3,i=Math.floor(Math.random()*4e3)-2e3;r.push(`${n}px ${i}px ${t}`)}return r.join(", ")}function k({count:s=1e3,size:t=1,transition:r={repeat:1/0,duration:50,ease:"linear"},starColor:a="#fff",className:n,...i}){const[l,c]=o.useState("");return o.useEffect(()=>{c(Ie(s,a))},[s,a]),e.jsxs(U.div,{"data-slot":"star-layer",animate:{y:[0,-2e3]},transition:r,className:L("absolute top-0 left-0 h-[2000px] w-full",n),...i,children:[e.jsx("div",{className:"absolute rounded-full bg-transparent",style:{width:`${t}px`,height:`${t}px`,boxShadow:l}}),e.jsx("div",{className:"absolute top-[2000px] rounded-full bg-transparent",style:{width:`${t}px`,height:`${t}px`,boxShadow:l}})]})}function Ae({children:s,className:t,factor:r=.05,speed:a=50,transition:n={stiffness:50,damping:20},starColor:i="#fff",pointerEvents:l=!0,...c}){const d=b(1),u=b(1),p=$(d,n),m=$(u,n),g=o.useCallback(h=>{const v=window.innerWidth/2,y=window.innerHeight/2,N=-(h.clientX-v)*r,j=-(h.clientY-y)*r;d.set(N),u.set(j)},[d,u,r]);return e.jsxs("div",{"data-slot":"stars-background",className:L("relative size-full overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_#262626_0%,_#000_100%)]",t),onMouseMove:g,...c,children:[e.jsxs(U.div,{style:{x:p,y:m},className:L({"pointer-events-none":!l}),children:[e.jsx(k,{count:1e3,size:1,transition:{repeat:1/0,duration:a,ease:"linear"},starColor:i}),e.jsx(k,{count:400,size:2,transition:{repeat:1/0,duration:a*2,ease:"linear"},starColor:i}),e.jsx(k,{count:200,size:3,transition:{repeat:1/0,duration:a*3,ease:"linear"},starColor:i})]}),s]})}function Ce(){const[s,t]=o.useState(null),[r,a]=o.useState(!1),[n,i]=o.useState(!1),[l,c]=o.useState(!1),[d,u]=o.useState(!1),[p,m]=o.useState(!1);o.useEffect(()=>{if(typeof window>"u")return;const h=window.navigator.userAgent.toLowerCase(),v=/iphone|ipad|ipod/.test(h)||h.includes("mac")&&"ontouchend"in document;i(v);const y=h.includes("macintosh")&&h.includes("safari")&&!h.includes("chrome");c(y);const N=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0;u(N);const j=M=>{M.preventDefault(),t(M),a(!0)};return window.addEventListener("beforeinstallprompt",j),()=>window.removeEventListener("beforeinstallprompt",j)},[]);const g=async()=>{if(!s)return;s.prompt();const{outcome:h}=await s.userChoice;console.log(h==="accepted"?"✅ User accepted install":"❌ User dismissed install"),t(null),a(!1)};return d?null:r&&s&&!n&&!l?e.jsxs("div",{className:"flex w-full flex-col items-center border-t border-dashed border-white/50 py-2",children:[e.jsx("span",{className:"mb-2 text-sm font-medium",children:"Install this app for quick access"}),e.jsxs(f,{className:"text-true-primary flex w-fit items-center gap-2 bg-white font-semibold transition-all duration-300 hover:scale-105 hover:bg-gray-100",variant:"secondary",onClick:g,children:[e.jsx("img",{className:"size-5",src:"/assets/icons/app-download-icon.png",alt:"Install"}),"Install"]})]}):n&&!d?e.jsxs("div",{className:"flex w-full flex-col items-center border-t border-dashed border-white/50 py-3",children:[e.jsx("span",{className:"mb-2 text-sm font-medium",children:"Install this app for quick access"}),e.jsxs(f,{className:"text-true-primary flex w-fit items-center gap-2 bg-white font-semibold transition-all duration-300 hover:scale-105 hover:bg-gray-100",variant:"secondary",onClick:()=>m(!0),children:[e.jsx("img",{className:"size-5",src:"/assets/icons/app-download-icon.png",alt:"Install"}),"Install"]}),e.jsx(I,{open:p,onOpenChange:m,children:e.jsxs(A,{className:"space-y-4 sm:max-w-[425px]",children:[e.jsxs(C,{children:[e.jsx(_,{children:"Install App"}),e.jsx(D,{children:"Follow these steps to add this app to your iPhone or iPad home screen:"})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{children:["1. Tap the",e.jsxs(T,{variant:"outline",className:"mx-2 inline-flex items-center gap-1 text-sm",children:["Share ",e.jsx("img",{className:"size-5",src:"/assets/icons/ios-share.png",alt:"Share"})]}),"at the bottom in Safari"]}),e.jsxs("div",{children:["2. Scroll down and tap",e.jsxs(T,{variant:"outline",className:"mx-2 inline-flex items-center gap-1 text-sm",children:["Add to Home Screen ",e.jsx(ie,{className:"ml-0.5"})]})]}),e.jsx("div",{className:"mt-2 text-sm text-muted-foreground",children:"After adding, the app will appear on your home screen like a native app."})]})]})})]}):l&&!d?e.jsxs("div",{className:"flex w-full flex-col items-center border-t border-dashed border-white/50 py-3",children:[e.jsx("span",{className:"mb-2 text-sm font-medium",children:"Install this app for quick access"}),e.jsxs(f,{className:"text-true-primary flex w-fit items-center gap-2 bg-white font-semibold",variant:"secondary",onClick:()=>m(!0),children:[e.jsx("img",{className:"size-5",src:"/assets/icons/app-download-icon.png",alt:"Install"}),"Install"]}),e.jsx(I,{open:p,onOpenChange:m,children:e.jsx(A,{children:e.jsxs(C,{children:[e.jsx(_,{children:"Install on Mac"}),e.jsxs(D,{children:["In Safari, go to the menu bar → ",e.jsx("b",{children:"File"})," → ",e.jsx("b",{children:"Add to Dock"}),"."]})]})})})]}):null}function _e(){return e.jsx(x,{href:"/",children:e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsxs(Y,{className:"size-18",children:[e.jsx(q,{src:"/icon512_maskable.png",alt:"Logo",className:"rounded-full"}),e.jsx(J,{children:"Logo"})]}),e.jsxs("div",{className:"flex flex-col text-center text-white",children:[e.jsx("p",{className:"text-xl leading-tight font-bold md:text-2xl",children:"Cambodia Library Association"}),e.jsx("p",{className:"text-sm md:text-base",children:"Library Directory Statistic"})]})]})})}function ns(){return e.jsxs("footer",{className:"relative border-t bg-primary to-transparent text-white dark:bg-gray-950",children:[e.jsx(Ae,{className:"absolute inset-0 hidden dark:block"}),e.jsxs("div",{className:"section-container mx-auto",children:[e.jsxs("div",{className:"relative z-10 mx-auto max-w-7xl pt-14 pb-20",children:[e.jsx("div",{className:"absolute right-0 bottom-0 z-0 h-auto w-full max-w-[2000px]",children:e.jsx("img",{src:"/assets/backgrounds/footer_banner_for_dark.png",alt:"",className:"z-0 w-[100%] max-w-7xl object-contain opacity-[40%] lg:opacity-[15%] dark:block"})}),e.jsxs("div",{className:"relative grid grid-cols-1 gap-12 lg:grid-cols-4",children:[e.jsxs("div",{className:"justify-self-center",children:[e.jsx(_e,{}),e.jsx("div",{className:"mt-8 w-auto",children:e.jsx(Ce,{})})]}),e.jsxs("div",{className:"lg:justify-self-center",children:[e.jsxs("h3",{className:"mb-4 text-xl font-bold",children:["Information ",e.jsx(S,{className:"w-auto bg-white"})]}),e.jsxs("ul",{className:"flex flex-col gap-3",children:[e.jsxs("li",{className:"flex gap-2",children:[e.jsxs("span",{className:"mt-0.5",children:[" ",e.jsx(ce,{size:18,className:"size-5"})]}),e.jsx("span",{children:"123 Main Street, Phnom Penh, Cambodia"})]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsxs("span",{className:"mt-0.5",children:[" ",e.jsx(V,{size:18,className:"size-5"})]}),e.jsx("a",{className:"hover:underline",href:"tel:+85512345678",children:"+855 12 345 678"})]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsxs("span",{className:"mt-0.5",children:[" ",e.jsx(de,{size:18,className:"size-5"})]}),e.jsx("a",{className:"hover:underline",href:"mailto:info@myapp.com",children:"info@myapp.com"})]})]})]}),e.jsxs("div",{className:"lg:justify-self-center",children:[e.jsxs("h3",{className:"mb-4 text-xl font-bold",children:["Quick Links ",e.jsx(S,{className:"w-auto bg-white"})]}),e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:e.jsxs(x,{prefetch:!0,href:"/",className:"flex items-center gap-2 hover:underline",children:[e.jsx(me,{size:18})," Home"]})}),e.jsx("li",{children:e.jsxs(x,{prefetch:!0,href:"/libraries",className:"flex items-center gap-2 hover:underline",children:[e.jsx(K,{size:18})," Libraries"]})}),e.jsx("li",{children:e.jsxs(x,{prefetch:!0,href:"/about",className:"flex items-center gap-2 hover:underline",children:[e.jsx(he,{size:18})," About"]})}),e.jsx("li",{children:e.jsxs(x,{prefetch:!0,href:"/contact",className:"flex items-center gap-2 hover:underline",children:[e.jsx(V,{size:18})," Contact Us"]})}),e.jsx("li",{children:e.jsxs(x,{prefetch:!0,href:"#",className:"flex items-center gap-2 hover:underline",children:[e.jsx(ve,{size:18})," Annual Report"]})})]})]}),e.jsxs("div",{className:"lg:justify-self-center",children:[e.jsxs("h3",{className:"mb-4 text-xl font-bold",children:["Social Media ",e.jsx(S,{className:"w-auto bg-white"})]}),e.jsxs("ul",{className:"space-y-3",children:[e.jsx("li",{children:e.jsxs("a",{href:"https://facebook.com",target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 hover:underline",children:[e.jsx("img",{width:28,height:28,src:"/assets/icons/links/facebook.png",alt:"Facebook",className:"transition-all duration-300 hover:scale-125 hover:cursor-pointer"}),"Facebook"]})}),e.jsx("li",{children:e.jsxs("a",{href:"https://instagram.com",target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 hover:underline",children:[e.jsx("img",{width:28,height:28,src:"/assets/icons/links/messenger.png",alt:"Instagram",className:"transition-all duration-300 hover:scale-125 hover:cursor-pointer"}),"Messenger"]})}),e.jsx("li",{children:e.jsxs("a",{href:"https://t.me",target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 hover:underline",children:[e.jsx("img",{width:28,height:28,src:"/assets/icons/links/telegram.png",alt:"Telegram",className:"transition-all duration-300 hover:scale-125 hover:cursor-pointer"}),"Telegram"]})})]})]})]})]}),e.jsx("div",{className:"relative z-10 mx-auto max-w-7xl sm:pb-0",children:e.jsxs("div",{className:"flex flex-col items-center justify-between gap-4 py-6 md:flex-row",children:[e.jsxs("p",{className:"text-sm text-center",children:["© 2025 ",e.jsx("b",{children:"Cambodia Library Association"}),". All Rights Reserved."]}),e.jsxs("p",{className:"text-sm",children:["Deverloped By : ",e.jsx("b",{children:"Library Tech"})]})]})})]}),e.jsx("div",{className:"absolute top-4 right-4 z-10",children:e.jsx(oe,{})})]})}const is=()=>e.jsx("div",{children:e.jsxs(W,{children:[e.jsx(fe,{tooltip:"Search Libraries",children:e.jsx(Q,{asChild:!0,children:e.jsx(f,{variant:"secondary",size:"icon",className:"size-9 rounded-md border bg-primary ring-background transition-all duration-300 hover:scale-115 hover:bg-primary active:scale-100",children:e.jsx(F,{className:"h-5 w-5 text-primary-foreground"})})})}),e.jsxs(G,{side:"top",className:"gap-0",children:[e.jsx(xe,{className:"text-center",children:e.jsx(pe,{children:"Search Libraries"})}),e.jsx("div",{className:"relative mx-auto mb-6 w-full max-w-2xl px-4",children:e.jsxs("div",{className:"flex items-center rounded-full border border-primary bg-muted p-2 ring-primary/20 transition-colors focus-within:ring-4 dark:ring-primary/50",children:[e.jsx(f,{variant:"ghost",size:"icon",className:"rounded-full pl-2 hover:bg-accent",children:e.jsx(K,{className:"h-5 w-5 text-primary"})}),e.jsx(ue,{type:"text",autoFocus:!0,placeholder:"Search libraries by name, type, or address...",className:"flex-1 border-0 bg-transparent pl-2 text-base shadow-none focus-visible:ring-0 sm:pl-3 sm:text-lg"}),e.jsx(f,{variant:"ghost",size:"icon",className:"rounded-full bg-primary/10 hover:bg-primary/20",children:e.jsx(F,{className:"h-5 w-5 text-primary"})})]})})]})]})});function De(){return e.jsx(x,{href:"/",children:e.jsxs("div",{className:"flex w-full flex-col flex-wrap items-center gap-4",children:[e.jsxs(Y,{className:"size-18",children:[e.jsx(q,{src:"/icon512_maskable.png",alt:"Logo",className:"rounded-full"}),e.jsx(J,{children:"Logo"})]}),e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("p",{className:"text-base leading-tight font-semibold text-foreground sm:text-lg",children:"Cambodia Library Association"}),e.jsx("p",{className:"text-xs text-foreground sm:text-sm",children:"Library Directory Statistic"})]})]})})}const Te=({hideRegisterWhenSmall:s})=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(x,{href:"/register",prefetch:!0,className:`${s&&"max-[450px]:hidden"}`,children:e.jsxs(f,{variant:"ghost",className:"inline-flex",children:[e.jsx(we,{})," Register"]})}),e.jsx(x,{href:"/login",prefetch:!0,children:e.jsxs(f,{variant:"ghost",children:[e.jsx(le,{})," Login"]})})]}),Ve=({orientation:s="horizontal"})=>{const{t}=ge(),r=[{label:t("Home"),href:"/"},{label:"Libraries",href:"/libraries"},{label:"Register Library Form",href:"/register-library"},{label:"About",href:"/about"},{label:"Contact Us",href:"/contact"}];return e.jsx("ul",{className:`flex flex-1 justify-start gap-1 ${s==="vertical"?"w-full flex-col items-start gap-3":""} `,children:r.map(a=>e.jsx("li",{className:`${s==="vertical"?"w-full":"w-auto"}`,children:e.jsx(x,{href:a.href,className:"block w-full rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-gray-100 hover:text-gray-900",children:a.label})},a.label))})},os=()=>e.jsxs(W,{children:[e.jsx(Q,{asChild:!0,children:e.jsx(f,{variant:"outline",size:"icon",children:e.jsx(je,{})})}),e.jsx(G,{className:"w-full",children:e.jsxs("div",{className:"h-full w-full space-y-8 p-4",children:[e.jsx(De,{}),e.jsx(Ve,{orientation:"vertical"}),e.jsx("div",{className:"flex justify-center",children:e.jsx(Te,{})})]})})]});export{ns as F,K as L,os as N,rs as S,is as a,Ae as b,Te as c,Ve as d};
