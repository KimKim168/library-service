import{j as e}from"./app-B9AQd5ys.js";/* empty css            */const n=[{title:"portfolio",img:"/assets/book_cambo/cbpa.png",link:"#"},{title:"blog",img:"/assets/thnal/tnal.png",link:"#"},{title:"ecommerce",img:"icon512_maskable.png",link:"#"},{title:"startup",img:"/assets/thnal/tnal.png",link:"#"},{title:"business",img:"/assets/book_cambo/cbpa.png",link:"#"},{title:"lifestyle",img:"icon512_rounded.png",link:"#"}],l=()=>e.jsxs("div",{className:"max-w-screen-2xl mx-auto px-3 sm:px-10 xl:px-20 mt-12",children:[e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6",children:n.map((i,s)=>e.jsxs("a",{href:i.link,className:"relative block rounded-xl border-2 border-gray-600 overflow-hidden p-[2px] group hover:shadow-lg transition",children:[e.jsx("span",{className:"absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#4fcf70] via-[#fad648] via-[#a767e5] via-[#12bcfe] to-[#44ce7b] opacity-0 group-hover:opacity-100 animate-[slideGradient_0.75s_linear_infinite] pointer-events-none"}),e.jsx("div",{className:"relative rounded-lg bg-white flex items-center justify-center w-full h-full",children:e.jsx("img",{src:i.img,alt:i.title,className:"block mx-auto w-full object-center"})})]},s))}),e.jsx("style",{jsx:!0,children:`
        @keyframes slideGradient {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
        .animate-[slideGradient_0.75s_linear_infinite] {
          background-size: 200% 100%;
          animation: slideGradient 0.75s linear infinite;
        }
      `})]});export{l as default};
