import { CodeBlock } from "@/components/ui/code-block";
import Sidebar from "@/components/sidebar/sidebar";
import { education, profile, work } from "@/contents/about";
import { IconFolderFilled } from "@tabler/icons-react";
import { notFound } from "next/navigation";
import React from "react";

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

  return (
    <div className="w-full h-full flex">
      {/* sidebar */}
      <div className="w-[300px] h-full">
        <div className="flex items-center gap-1">
          <IconFolderFilled className="w-4 h-4" />
          <p>about</p>
        </div>
        <Sidebar />
      </div>
      {/* codeblock */}
      <CodeBlock language="ts" filename="" code={code} />
    </div>
  );
};

export default ProfilePage;
