import { HoverEffect } from "./ui/card-hover-effect";

export function Card() {
  return (
    <div className="mt-20 max-w-screen-2xl mx-auto px-3 sm:px-10 xl:px-20">
      <div className="text-center">
            <h2 className="font-semibold text-xl dark:text-[#2eafff] text-[#1B6593]">Interlibrary</h2>

            <p className="max-w-lg dark:text-gray-400 mx-auto mt-1 text-gray-500">
                Over 1000 Libraries join and share their resources with thnal
            </p>

        </div>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "PUC library",
    link: "https://stripe.com",
    logo: "/assets/thnal/puc.png",
  },
  {
    title: "Rule library",
    link: "https://netflix.com",
    logo: "/assets/thnal/rule.png",
  },
  {
    title: "Rac library",
    link: "https://google.com",
    logo: "/assets/thnal/rac.png",
  },
    {
    title: "PUC library",
    link: "https://stripe.com",
    logo: "/assets/thnal/puc.png",
  },
  {
    title: "Rule library",
    link: "https://netflix.com",
    logo: "/assets/thnal/rule.png",
  },
  {
    title: "Rac library",
    link: "https://google.com",
    logo: "/assets/thnal/rac.png",
  },
    {
    title: "PUC library",
    link: "https://stripe.com",
    logo: "/assets/thnal/puc.png",
  },
  {
    title: "Rule library",
    link: "https://netflix.com",
    logo: "/assets/thnal/rule.png",
  },
  {
    title: "Rac library",
    link: "https://google.com",
    logo: "/assets/thnal/rac.png",
  },
    {
    title: "PUC library",
    link: "https://stripe.com",
    logo: "/assets/thnal/puc.png",
  },
  {
    title: "Rule library",
    link: "https://netflix.com",
    logo: "/assets/thnal/rule.png",
  },
  {
    title: "Rac library",
    link: "https://google.com",
    logo: "/assets/thnal/rac.png",
  },
    {
    title: "PUC library",
    link: "https://stripe.com",
    logo: "/assets/thnal/puc.png",
  },
  {
    title: "Rule library",
    link: "https://netflix.com",
    logo: "/assets/thnal/rule.png",
  },
  {
    title: "Rac library",
    link: "https://google.com",
    logo: "/assets/thnal/rac.png",
  },
  {
    title: "Rac library",
    link: "https://google.com",
    logo: "/assets/thnal/rac.png",
  },
  
];

