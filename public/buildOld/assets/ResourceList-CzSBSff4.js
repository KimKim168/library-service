import{j as e,L as l}from"./app-B9AQd5ys.js";import{c as n}from"./utils-CBfrqCZ4.js";import{B as d}from"./BookCardHoverGradient-BVqfcCrJ.js";import{d as c}from"./styled-components.browser.esm-BDMIYzIS.js";import{C as m}from"./chevron-right-6vQtaiep.js";const g={details:{students:"សាង សុជីវិត / ហួន សុណ្ណារ៉ា",advisor:"ទេព សុខ",year:2023,category:"នីតិសាស្ត្រ",pages:120}},b=({badgeText:t,title:r,subTitle:s,image_url:a})=>e.jsx(u,{children:e.jsxs("div",{className:"relative",children:[e.jsxs(l,{href:"/resources/theses/1",className:"btn group relative z-10 h-full w-full overflow-hidden rounded-md border-2 border-background shadow hover:translate-[-8px] hover:border-transparent active:hover:translate-0 dark:border-border dark:hover:border-transparent",children:[e.jsxs("div",{className:"flex h-[200px] border-none w-full bg-background text-foreground lg:h-[280px]",children:[e.jsx("img",{src:a,alt:r,className:"aspect-[7/10] h-full border-r bg-transparent object-cover"}),e.jsx("div",{className:"flex h-full flex-1 flex-col justify-between overflow-y-scroll [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden",children:e.jsxs("div",{className:"p-2",children:[e.jsx("p",{className:"line-clamp-6 text-sm leading-normal font-medium text-foreground lg:text-lg",children:"អភិបាលកិច្ចសាជីវកម្មក្នុងការបោះផ្សាយលក់មូលបត្រជាសាធារណៈរបស់ក្រុមហ៊ុន PPSEZ"}),e.jsx("div",{className:"max-w-sm text-[8px] mt-2 lg:mt-4 lg:text-[14px]",children:Object.entries(g.details).map(([i,o])=>e.jsxs("div",{className:"flex items-center justify-start gap-2 pb-1 lg:gap-4",children:[e.jsx("span",{className:"w-[40px] shrink-0 whitespace-nowrap lg:w-[80px]",children:i.charAt(0).toUpperCase()+i.slice(1)}),":",e.jsx("span",{className:"",children:o})]},i))})]})})]}),e.jsx("div",{className:"absolute right-2 bottom-2 flex size-5 translate-x-6 items-center justify-center rounded bg-primary/10 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 hover:scale-150 hover:bg-primary/20",children:e.jsx(m,{className:"size-5 font-bold"})})]}),e.jsx("div",{className:"absolute inset-0 z-0 h-full w-full rounded-lg border border-dashed border-foreground"})]})}),u=c.div`
    .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        background-size: 300% 300%;
        cursor: pointer;
        backdrop-filter: blur(1rem);
        transition: 0.5s;
        background-origin: border-box;
        background-clip: content-box, border-box;
    }
    .btn:hover {
        animation: gradient_301 2s ease infinite;
        background-image: linear-gradient(#212121, #212121), linear-gradient(137.48deg, #ffdb3b 10%, #fe53bb 45%, #8f51ea 67%, #0044ff 87%);
    }

    @keyframes gradient_301 {
        0% {
            background-position: 0% 50%;
        }

        50% {
            background-position: 100% 50%;
        }

        100% {
            background-position: 0% 50%;
        }
    }
`,p=[{name:"Royal University of Law and Economics Library",subtitle:"Preserves Cambodia’s literary heritage",sourceOfFunding:"NGO",type:"High School Library",image_url:"/assets/sample_images/books/thesis1.jpg"},{name:"Phnom Penh University Library",subtitle:"Academic resources for higher education",image_url:"/assets/sample_images/books/thesis1.jpg"},{name:"Siem Reap Public Library",subtitle:"Community learning hub",image_url:"/assets/sample_images/books/thesis1.jpg"},{name:"Battambang Provincial Library",subtitle:"Educational resources for students",image_url:"/assets/sample_images/books/thesis1.jpg"},{name:"Kampot Community Library",subtitle:"Local books and resources",image_url:"/assets/sample_images/books/thesis1.jpg"},{name:"Takeo High School Library",subtitle:"Supporting school education",image_url:"/assets/sample_images/books/thesis1.jpg"},{name:"Kampot Community Library",subtitle:"Local books and resources",image_url:"/assets/sample_images/books/thesis1.jpg"},{name:"Takeo High School Library",subtitle:"Supporting school education",image_url:"/assets/sample_images/books/thesis1.jpg"}],y=({className:t,cardLayout:r="grid"})=>e.jsx(e.Fragment,{children:e.jsx("div",{className:n(`grid gap-4 ${r=="grid"?"grid-cols-2 sm:grid-cols-3 lg:grid-cols-4":"grid-cols-1 lg:grid-cols-2"}`,t),children:p.map((s,a)=>r=="list"?e.jsx(b,{title:s.name,subTitle:s.subtitle,image_url:s.image_url},a):e.jsx(d,{title:s.name,subTitle:s.subtitle,image_url:s.image_url},a))})});export{y as R};
