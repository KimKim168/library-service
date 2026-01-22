import{j as e}from"./app-B9AQd5ys.js";import{d as n,m as s}from"./styled-components.browser.esm-BDMIYzIS.js";/* empty css            */const a=s`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,p=()=>{const t=[{title:"portfolio",img:"/assets/book_cambo/cbpa.png",link:"#"},{title:"blog",img:"/assets/thnal/tnal.png",link:"#"},{title:"ecommerce",img:"icon512_rounded.png",link:"#"},{title:"startup",img:"/assets/thnal/tnal.png",link:"#"},{title:"business",img:"/assets/book_cambo/cbpa.png",link:"#"},{title:"lifestyle",img:"icon512_rounded.png",link:"#"}];return e.jsx(r,{children:e.jsxs("div",{className:"mt-10 max-w-screen-2xl mx-auto px-3 sm:px-10 xl:px-20",children:[e.jsx("h1",{className:"text-xl dark:text-[#2eafff] mb-2 text-[#1B6593] font-semibold",children:"Resource :"}),e.jsx("div",{className:" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6",children:t.map((i,o)=>e.jsx("a",{className:"codepen-button shadow-lg shadow-gray-300",href:i.link,children:e.jsx("div",{className:"rounded-xl aspect-square bg-white flex items-center justify-center",children:e.jsx("img",{src:i.img,alt:i.title,className:"block mx-auto w-full object-cover"})})},o))})]})})},r=n.div`
  .codepen-button {
    display: inline-block;
    position: relative;
    cursor: pointer;
    border-radius: 12px;
    padding: 3px; 
    overflow: hidden;
    isolation: isolate;
  }

  /* Default gray border */
  .codepen-button::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 2px;
    border-radius: 12px;
    background: #1B6593; /* gray-600 */
    z-index: -1;
    transition: background 0.3s ease;
  }

  /* Animate gradient on hover */
  .codepen-button:hover::before {
    background: linear-gradient(115deg, #4fcf70, #fad648, #a767e5, #12bcfe, #44ce7b);
    background-size: 300% 300%;
    animation: ${a} 3s linear infinite;
  }

  /* Make images fit the inner space */
  .codepen-button img {
    display: block;
    width: 100%;
    border-radius: 12px; 
  }
`;export{p as default};
