import SideBar from "@/components/sidebar/sidebar";
import {StickyScroll} from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

export default async function BetterDayPage() {

	const navMenu = [{ name: "all-project.md", href: "/projects" }];
	const link = {
		preview: "https://better-day-iota.vercel.app/",
		github: "https://github.com/halonthe/BetterDay.git",
	}
	const content = [
		{
			title: "BETTER DAY",
			description:
				"Better Day is calendar app with a to-do list that allows users to create, edit, and delete tasks. Users can also create and edit their personal calendar. The app also allows users to view their daily tasks and reminders. Build with pure JavaScript, HTML, and CSS.",
			content: (
				<Image src="/images/better-day.png" alt="chill" width={300} height={300} className="h-full w-full object-cover"/>
			),
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
