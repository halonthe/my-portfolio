"use client";
import { IconFileTypeTs } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavType {
  name: string;
  href: string;
}

export default function NavSidebar({ navMenu }: { navMenu: NavType[] }) {
  const pathname = usePathname();
  return navMenu.map((nav) => {
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
