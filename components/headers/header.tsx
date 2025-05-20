"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type HeaderProps = {
  maximize: () => void;
};

const Header = ({ maximize }: HeaderProps) => {
  const navigation = [
    { name: "hello", href: "/" },
    { name: "about", href: "/about/profile" },
    { name: "projects", href: "/projects" },
    { name: "articles", href: "/articles" },
    { name: "contact", href: "/contact" },
  ];
  const pathname = usePathname();
  return (
    <header className="flex w-full h-10 items-center">
      <div className="w-[300px] border-b-1 border-solid border-[#607C97] font-bold text-white">
        RESTIKA
      </div>

      {/* navbar */}
      <nav className="w-full flex ml-10 gap-5">
        {navigation.map((nav) => {
          const isActive =
            pathname === nav.href ||
            (pathname.startsWith(nav.href) && nav.href !== "/");
          return (
            <Link href={nav.href} key={nav.name} className="text-white/90">
              {nav.name.split("")[0]}
              <span
                className={
                  isActive
                    ? "text-[#607C97] cursor-pointer border-b border-solid border-[#607C97]"
                    : "text-[#607C97] cursor-pointer"
                }
              >
                {nav.name.slice(1)}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* toolbar */}
      <div className="flex items-center gap-2">
        <div
          className="w-3 h-3 rounded-full bg-green-500 cursor-pointer"
          onClick={maximize}
        ></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer"></div>
        <div
          className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"
          onClick={() => {
            window.close();
          }}
        ></div>
      </div>
    </header>
  );
};

export default Header;
