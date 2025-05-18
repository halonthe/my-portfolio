import SideBar from "@/components/sidebar/sidebar";
import { FocusCards } from "@/components/ui/focus-cards";

export default async function Projects() {
  const navMenu = [{ name: "all-project.md", href: "/projects" }];
  const cards = [
    {
      title: "CHILL",
      src: "/images/chill.png",
      desc: "Movie Streaming Platform",
    },
    {
      title: "Better Day",
      src: "/images/better-day.png",
      desc: "Calendar with TO-DO app",
    },
  ];
  return (
    <div className="w-full h-full flex">
      {/* sidebar */}
      <SideBar page="projects" navMenu={navMenu} />
      {/* projects gallery */}
      <FocusCards cards={cards} />
    </div>
  );
}
