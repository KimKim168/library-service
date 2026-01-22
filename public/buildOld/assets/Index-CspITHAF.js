import{j as a,L as c}from"./app-B9AQd5ys.js";import{d as m}from"./styled-components.browser.esm-BDMIYzIS.js";import{B as t}from"./badge-C_HtA6Ve.js";import{M as d}from"./phone-0ZlEzQ2F.js";import{C as p}from"./chevron-right-6vQtaiep.js";import{P as b}from"./PaginationTabs-CydLeQms.js";import{L as u}from"./LibrarySearch-CcSypfdh.js";import{A as g,a as i,b as o,c as l}from"./accordion-DdtM0XCv.js";import{L as s}from"./LibrarySidebarList-ApB0cgI5.js";import{F as h}from"./FrontendLayout-uTZAHvud.js";/* empty css            */import"./index-swU0BSPm.js";import"./button-EpALpkJz.js";import"./utils-CBfrqCZ4.js";import"./createLucideIcon-CEUCJa7Y.js";import"./select-ClW_B0pS.js";import"./index-pUzHIrlx.js";import"./index-BdQq_4o_.js";import"./index-C4Ptd6V1.js";import"./index-_TP5U3zn.js";import"./index-CnQi-Tu5.js";import"./index-DGr2TLfR.js";import"./index-vyCFQFol.js";import"./index-C6zGpFsQ.js";import"./index-DlpLYDZ1.js";import"./index-DMVBB7S5.js";import"./index-DTexlEPQ.js";import"./index-BOj2oOoE.js";import"./index-DKMsqORC.js";import"./index-DXtQc_U7.js";import"./chevron-down-bb3v8jkC.js";import"./check-Dw7zI2V-.js";import"./chevron-up-BgYlsAMg.js";import"./use-translation-Bes2uPNF.js";import"./input-C9w9P4L6.js";import"./NavSheet-DhMvwYlS.js";import"./proxy-BNapONv9.js";import"./dialog-Bv9VVO8u.js";import"./index-BRlx25e-.js";import"./x-3TRNNdyt.js";import"./square-plus-BSM14hYC.js";import"./avatar-Cv_iQLGP.js";import"./SwitchDarkMode3D-Bl9lc39o.js";import"./separator-ZWokEsCp.js";import"./mail-B167Z10W.js";import"./NavLanguage-ClSNos7V.js";import"./info-CH5uYkAE.js";import"./sheet-DdM45rFk.js";import"./TooltipButton-CJ25Vfee.js";import"./tooltip-C7Swj_Cy.js";import"./search-4gJDPScM.js";import"./align-left-gXo-0IqN.js";import"./index-CM268rNH.js";import"./index-WOW4SexN.js";import"./checkbox-BiGuHDVo.js";import"./index-CZxAM9gV.js";import"./label-C0F9iVr4.js";import"./index-1DDNbJHx.js";import"./arrow-right-BShKVcrI.js";import"./NavbarLogo-JbmIOBol.js";const v=({badgeText:r,title:e,subTitle:w,image_url:n})=>a.jsx(x,{children:a.jsx(c,{href:"/@library-name",children:a.jsxs("div",{className:"card group h-full w-full cursor-pointer",children:[a.jsx("div",{className:"card__glow"}),a.jsxs("div",{className:"card__content",children:[r&&a.jsx("div",{className:"card__badge",children:r}),a.jsx("img",{src:n,alt:e,className:"card__image aspect-video w-full bg-primary"}),a.jsxs("div",{className:"flex flex-1 flex-col justify-between",children:[a.jsxs("div",{className:"card__text",children:[a.jsx("p",{className:"card__title",children:e}),a.jsxs("div",{className:"mt-2 flex flex-wrap gap-2",children:[a.jsx(t,{variant:"outline",children:"Public Funding"}),a.jsx(t,{variant:"outline",children:"High School Library"}),a.jsx(t,{variant:"outline",children:"Total : 1950+ Books"})]})]}),a.jsx("div",{children:a.jsxs("p",{className:"mt-4 flex items-center gap-2 text-sm text-muted-foreground",children:[a.jsx(d,{size:18})," Phnom Penh"]})})]}),a.jsx("div",{className:"card__button absolute right-5 bottom-5 size-6 translate-x-10 bg-true-primary opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:ring-[5px] group-hover:ring-primary/20",children:a.jsx(p,{})})]})]})})}),x=m.div`
    .card {
        --card-bg: var(--background);
        --card-accent: #655eb3;
        --card-text: var(--forground);
        --card-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);

        background: var(--card-bg);
        border-radius: 20px;
        position: relative;
        overflow: hidden;
        transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        box-shadow: var(--card-shadow);
        border: 1px solid rgba(255, 255, 255, 0.2);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    }

    .card__glow {
        position: absolute;
        inset: -10px;
        background: radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.3) 0%, rgba(124, 58, 237, 0) 70%);
        opacity: 0;
        transition: opacity 0.5s ease;
    }

    .card__content {
        padding: 1.25em;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.75em;
        position: relative;
        z-index: 2;
    }

    .card__badge {
        position: absolute;
        top: 12px;
        right: 12px;
        background: #10b981;
        color: white;
        padding: 0.25em 0.5em;
        border-radius: 999px;
        font-size: 0.7em;
        font-weight: 600;
        transform: scale(0.8);
        opacity: 0;
        transition: all 0.4s ease 0.1s;
    }

    .card__image {
        border-radius: 12px;
        transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        position: relative;
        overflow: hidden;
    }

    .card__text {
        display: flex;
        flex-direction: column;
        gap: 0.25em;
    }

    .card__title {
        color: var(--card-text);
        font-size: 1.1em;
        margin: 0;
        font-weight: 700;
        transition: all 0.3s ease;
    }

    .card__description {
        color: var(--card-text);
        font-size: 0.75em;
        margin: 0;
        opacity: 0.7;
        transition: all 0.3s ease;
    }

    .card__footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: auto;
    }

    .card__price {
        color: var(--card-text);
        font-weight: 700;
        font-size: 1em;
        transition: all 0.3s ease;
    }

    .card__button {
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        cursor: pointer;
        transition: all 0.3s ease;
        transform: scale(0.9);
    }

    /* Hover Effects */
    .card:hover {
        transform: translateY(-10px);
        box-shadow:
            0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        border-color: rgba(124, 58, 237, 0.2);
    }

    .card:hover .card__shine {
        opacity: 1;
        animation: shine 3s infinite;
    }

    .card:hover .card__glow {
        opacity: 1;
    }

    .card:hover .card__badge {
        transform: scale(1);
        opacity: 1;
        z-index: 1;
    }

    .card:hover .card__image {
        transform: translateY(-5px) scale(1.03);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }

    .card:hover .card__title {
        transform: translateX(2px);
    }

    .card:hover .card__description {
        opacity: 1;
        transform: translateX(2px);
    }

    .card:hover .card__price {
        color: var(--card-accent);
        transform: translateX(2px);
    }

    .card:hover .card__button svg {
        animation: pulse 1.5s infinite;
    }

    /* Active State */
    .card:active {
        transform: translateY(-5px) scale(0.98);
    }

    /* Animations */
    @keyframes shine {
        0% {
            background-position: -100% 0;
        }
        100% {
            background-position: 200% 0;
        }
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }
`,y=[{value:"public",label:"Public funding"},{value:"private",label:"Private funding"},{value:"ngo",label:"NGO funding"}],f=[{value:"higher_edu",label:"Higher Education Institution Library"},{value:"technical_vet",label:"Technical and Vocational Education and Training Library"},{value:"kindergarten",label:"Kindergarten Library"},{value:"national",label:"National Library"},{value:"government",label:"Government and related"},{value:"high_school",label:"High School Library"},{value:"middle_school",label:"Middle School Library"},{value:"primary_school",label:"Primary School Library"},{value:"provincial",label:"Provincial Library"},{value:"firm",label:"Firm Library (serves their staff members)"},{value:"corner_shop",label:"Library Corner/stall at shops (serve customers)"},{value:"private_person",label:"Private Library (set up by a private person but serves the community)"},{value:"home",label:"Home Library (serves only friends and family members)"},{value:"ngo_library",label:"NGO Library (library located in NGO office)"},{value:"pagoda",label:"Pagoda Library"},{value:"church",label:"Church Library"},{value:"community",label:"Community library"},{value:"mobile_van",label:"Mobile Van Library"},{value:"mobile_boat",label:"Mobile Boat Library"},{value:"popup",label:"Pop-up Library"},{value:"others",label:"Others (សរសេរចូល)"}],_=[{value:"standalone",label:"Stand-alone library"},{value:"main",label:"Main library"},{value:"branch",label:"Branch library"}],j=[{value:"phnom_penh",label:"Phnom Penh"},{value:"siem_reap",label:"Siem Reap"},{value:"battambang",label:"Battambang"},{value:"kampot",label:"Kampot"},{value:"takeo",label:"Takeo"},{value:"kampong_chhnang",label:"Kampong Chhnang"},{value:"kampong_som",label:"Kampong Som"},{value:"kampong_thom",label:"Kampong Thom"},{value:"prey_veng",label:"Prey Veng"},{value:"svay_rieng",label:"Svay Rieng"},{value:"kandal",label:"Kandal"}];function L(){return a.jsxs(g,{type:"multiple",defaultValue:["funding","types","classes","provinces"],className:"w-full rounded-lg border px-4",children:[a.jsxs(i,{value:"funding",children:[a.jsx(o,{className:"font-semibold",children:"Funding Source"}),a.jsx(l,{children:a.jsx(s,{options:y})})]}),a.jsxs(i,{value:"types",children:[a.jsx(o,{className:"font-semibold",children:"Type of Library"}),a.jsx(l,{children:a.jsx(s,{options:f})})]}),a.jsxs(i,{value:"classes",children:[a.jsx(o,{className:"font-semibold",children:"Library Classes"}),a.jsx(l,{children:a.jsx(s,{options:_})})]}),a.jsxs(i,{value:"provinces",children:[a.jsx(o,{className:"font-semibold",children:"Provinces"}),a.jsx(l,{children:a.jsx(s,{options:j})})]})]})}const N=[{name:"Royal University of Law and Economics Library",subtitle:"Preserves Cambodia’s literary heritage",sourceOfFunding:"NGO",type:"High School Library",image_url:"/assets/sample_images/library1.jpg"},{name:"Phnom Penh University Library",subtitle:"Academic resources for higher education",image_url:"/assets/sample_images/library2.jpg"},{name:"Siem Reap Public Library",subtitle:"Community learning hub",image_url:"/assets/sample_images/library1.jpg"},{name:"Battambang Provincial Library",subtitle:"Educational resources for students",image_url:"/assets/sample_images/library2.jpg"},{name:"Kampot Community Library",subtitle:"Local books and resources",image_url:"/assets/sample_images/library1.jpg"},{name:"Takeo High School Library",subtitle:"Supporting school education",image_url:"/assets/sample_images/library2.jpg"}],Aa=()=>a.jsx(h,{children:a.jsx("section",{className:"section-container mt-10 mb-40",children:a.jsxs("div",{className:"flex gap-8",children:[a.jsx("div",{className:"w-52",children:a.jsx(L,{})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"mb-4",children:a.jsx(u,{})}),a.jsx("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",children:N.map((r,e)=>a.jsx(v,{title:r.name,subTitle:r.subtitle,image_url:r.image_url},e))}),a.jsx(b,{})]})]})})});export{N as data,Aa as default};
