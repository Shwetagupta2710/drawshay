import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";
import SideNavTopSection from "./SideNavTopSection";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

function SideNav() {
  const { user }: any = useKindeBrowserClient();
  return (
    <div
      className=" h-screen fixed w-72 borde-r border-[1px] p-6
    flex flex-col"
    >
      <SideNavTopSection user={user} />
    </div>
  );
}

export default SideNav;
