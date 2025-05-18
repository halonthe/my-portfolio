"use client";
import { IconFileTypeTs } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Sidebar() {
  const navigation = [
    { name: "profile.ts", href: "/about/profile" },
    { name: "education.ts", href: "/about/education" },
    { name: "work.ts", href: "/about/work" },
  ];
  const pathname = usePathname();
  return navigation.map((nav) => {
    const isActive =
      pathname === nav.href ||
      (pathname.startsWith(nav.href) && nav.href !== "/");
    return (
      <div key={nav.name} className="flex items-center w-full gap-1 ml-4">
        <IconFileTypeTs
          className={isActive ? "w-4 h-4 text-blue-700" : "w-4 h-4"}
        />{" "}
        <Link
          href={nav.href}
          className={isActive ? "cursor-pointer text-white" : "cursor-pointer"}
        >
          {nav.name}
        </Link>
      </div>
    );
  });
}
