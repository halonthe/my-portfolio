import { CodeBlock } from "@/components/ui/code-block";
import { education, profile, work } from "@/contents/about";
import { notFound } from "next/navigation";
import React from "react";
import SideBar from "@/components/sidebar/sidebar";

const ProfilePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  let code;
  if (slug === "profile") {
    code = profile;
  } else if (slug === "education") {
    code = education;
  } else if (slug === "work") {
    code = work;
  } else {
    notFound();
  }

  const navMenu = [
    { name: "profile.ts", href: "/about/profile" },
    { name: "education.ts", href: "/about/education" },
    { name: "work.ts", href: "/about/work" },
  ];
  return (
    <div className="w-full h-full flex">
      {/* sidebar */}
      <SideBar page="about" navMenu={navMenu} />
      {/* codeblock */}
      <CodeBlock language="ts" filename="" code={code} />
    </div>
  );
};

export default ProfilePage;
