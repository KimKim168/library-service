import{j as t}from"./app-B9AQd5ys.js";import{d as o}from"./styled-components.browser.esm-BDMIYzIS.js";import{B as e}from"./book-open-text-DHr5_0pY.js";/* empty css            */import"./createLucideIcon-CEUCJa7Y.js";const l=()=>t.jsx(r,{children:t.jsx("button",{className:"button group w-full p-2",children:t.jsxs("span",{className:"button_lg px-4 py-2 dark:bg-white",children:[t.jsx("span",{className:"button_sl"}),t.jsxs("span",{className:"button_text flex items-center gap-2 text-true-primary group-hover:text-white",children:[t.jsx(e,{}),t.jsx("span",{className:"flex-1 text-center",children:"Read PDF"})]})]})})}),r=o.div`
    .button {
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        border: none;
        background: none;
        color: #0f1923;
        cursor: pointer;
        position: relative;
        margin-bottom: 20px;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 14px;
        transition: all 0.15s ease;
    }

    .button::before,
    .button::after {
        content: '';
        display: block;
        position: absolute;
        right: 0;
        left: 0;
        height: calc(50% - 5px);
        border: 1px solid var(--primary);
        transition: all 0.15s ease;
    }

    .button::before {
        top: 0;
        border-bottom-width: 0;
    }

    .button::after {
        bottom: 0;
        border-top-width: 0;
    }

    .button:active,
    .button:focus {
        outline: none;
    }

    .button:active::before,
    .button:active::after {
        right: 3px;
        left: 3px;
    }

    .button:active::before {
        top: 3px;
    }

    .button:active::after {
        bottom: 3px;
    }

    .button_lg {
        position: relative;
        display: block;
        color: #fff;
        overflow: hidden;
        box-shadow: inset 0px 0px 0px 1px transparent;
    }

    .button_lg::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 2px;
        height: 2px;
        // background-color: #0f1923;
    }
    .button_sl {
        display: block;
        position: absolute;
        top: 0;
        bottom: -1px;
        left: -8px;
        width: 0;
        background-color: var(--true-primary);
        transform: skew(-15deg);
        transition: all 0.2s ease;
    }

    .button_text {
        position: relative;
    }

    .button:hover {
        color: #0f1923;
    }

    .button:hover .button_sl {
        width: calc(100% + 15px);
    }

    .button:hover .button_lg::after {
        background-color: #fff;
    }
`;export{l as default};
