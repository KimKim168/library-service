import{r,j as o}from"./app-B9AQd5ys.js";import{d as s}from"./styled-components.browser.esm-BDMIYzIS.js";/* empty css            */const c=()=>{const[t,e]=r.useState(!1);r.useEffect(()=>{const i=()=>{window.scrollY>300?e(!0):e(!1)};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[]);const n=()=>{typeof window<"u"&&window.scrollTo({top:0,behavior:"smooth"})};return o.jsx(o.Fragment,{children:t&&o.jsx(a,{children:o.jsx("button",{onClick:n,children:o.jsx("div",{className:"scrolldown transition-all duration-300 hover:translate-y-[-8px] opacity-60 dark:opacity-85",children:o.jsxs("div",{className:"chevrons",children:[o.jsx("div",{className:"chevrondown"}),o.jsx("div",{className:"chevrondown"})]})})})})})},a=s.div`
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
`;export{c as default};
