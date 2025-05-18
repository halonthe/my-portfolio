import SideBar from "@/components/sidebar/sidebar";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const navMenu = [{ name: "all project", href: "/projects" }];
  return (
    <div className="w-full h-full flex">
      {/* sidebar */}
      <SideBar page="projects" navMenu={navMenu} />
      {/* projects gallery */}
    </div>
  );
}
