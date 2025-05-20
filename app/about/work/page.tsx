import { CodeBlock } from "@/components/ui/code-block";
import {work} from "@/contents/about";
import React from "react";
import SideBar from "@/components/sidebar/sidebar";

const ProfilePage = () => {
	const code = work;

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
