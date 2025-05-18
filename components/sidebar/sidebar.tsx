import { IconFolderFilled } from "@tabler/icons-react";
import NavSidebar from "./nav";

interface NavType {
  name: string;
  href: string;
}

export default function SideBar({
  page,
  navMenu,
}: {
  page: string;
  navMenu: NavType[];
}) {
  return (
    <div className="w-[300px] h-full">
      <div className="flex items-center gap-1">
        <IconFolderFilled className="w-4 h-4" />
        <p>{page}</p>
      </div>
      <NavSidebar navMenu={navMenu} />
    </div>
  );
}
