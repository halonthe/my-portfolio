import SideBar from "@/components/sidebar/sidebar";
import {StickyScroll} from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

export default async function ChillPage() {

  const navMenu = [{ name: "all-project.md", href: "/projects" }];
  const link = {
      preview: "https://fe-2-rho.vercel.app/",
      github: "https://github.com/halonthe/chill",
  }
  const content = [
      {
      title: "CHILL",
      description:
          "chill is a web-based application designed to give users access to a vast library of movies and TV shows from their device. Chill offers a user-friendly interface that allows users to search for movies and TV shows, and start watching instantly. Chill offers personalized recommendations based on users’ viewing habits, helping users discover new movies and TV shows that they may not have otherwise discovered. In addition, Chill also offers original content, including movies and TV shows, that can only be found on the chill app, making it a unique and valuable resource for users.",
      content: (
              <Image src="/images/chill.png" alt="chill" width={300} height={300} className="h-full w-full object-cover"/>
      ),
        },
      {
          title: "Tech Stack",
          description: (
              <ul className={ "list-disc list-inside"}>
                  <li><a href={"https://react.dev/"} target={"_blank"} className={"font-bold underline"}>React</a> - Javascript library for building user interfaces</li>
                  <li><a href={"https://tailwindcss.com/"} target={"_blank"} className={"font-bold underline"}>Tailwind</a> - CSS framework</li>
                  <li><a href={"https://nodejs.org"} target={"_blank"} className={"font-bold underline"}>Nodejs</a> - Javascript Runtime</li>
                  <li><a href={"https://expressjs.com/"} target={"_blank"} className={"font-bold underline"}>Express</a> - Nodejs framework for building REST API</li>
              </ul>
          ),
          content: (
              <Image src="/images/chill.png" alt="chill" width={300} height={300} className="h-full w-full object-cover"/>
          ),
      },
      {
          title: "",
          description:"",
      },
  ]
  return (
    <div className="w-full h-full flex">
      {/* sidebar */}
      <SideBar page="projects" navMenu={navMenu} />
      {/* projects details */}
      <div className="w-full h-[640px]">
      <StickyScroll content={content} link={link} />
      </div>
    </div>
  );
}
