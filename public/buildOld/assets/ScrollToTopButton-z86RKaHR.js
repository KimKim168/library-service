import{r as e,j as t}from"./app-B9AQd5ys.js";import{d as s}from"./styled-components.browser.esm-BDMIYzIS.js";import{C as a}from"./chevron-up-BgYlsAMg.js";/* empty css            */import"./createLucideIcon-CEUCJa7Y.js";const w=()=>{const[r,i]=e.useState(!1);e.useEffect(()=>{const o=()=>{window.scrollY>300?i(!0):i(!1)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]);const n=()=>{typeof window<"u"&&window.scrollTo({top:0,behavior:"smooth"})};return t.jsx(t.Fragment,{children:r&&t.jsx(d,{children:t.jsxs("button",{className:"Btn bg-true-primary opacity-90 hover:opacity-100",onClick:n,children:[t.jsx("div",{className:"sign",children:t.jsx(a,{})}),t.jsx("div",{className:"text whitespace-nowrap",children:"Back to Top"})]})})})},d=s.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 50;

    .Btn {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 45px;
        height: 45px;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition-duration: 0.3s;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
    }

    .sign {
        width: 100%;
        transition-duration: 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .sign svg {
        width: 28px;
        height: 28px;
        color: white;
    }

    .text {
        position: absolute;
        right: 0%;
        width: 0%;
        opacity: 0;
        color: white;
        font-size: 1em;
        font-weight: 600;
        transition-duration: 0.3s;
    }

    .Btn:hover {
        width: 150px;
        border-radius: 40px;
        transition-duration: 0.3s;
    }

    .Btn:hover .sign {
        width: 30%;
        transition-duration: 0.3s;
        padding-left: 6px;
    }

    .Btn:hover .text {
        opacity: 1;
        width: 70%;
        transition-duration: 0.3s;
        padding-right: 10px;
    }

    .Btn:active {
        transform: translate(2px, 2px);
    }
`;export{w as default};
