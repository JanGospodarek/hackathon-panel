"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Switch,
} from "@nextui-org/react";
import {
  Camera,
  House,
  Monitor,
  PaintBrush,
  ToggleLeft,
} from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Switches from "./menus/Switches";
import Views from "./menus/Views";

const Navbar = () => {
  return (
    <div className="w-[60px] flex flex-col gap-4 bg-cyan-500 rounded-xl items-center py-6">
      <Link href="/" className="hover:scale-105">
        <House size={32} color="#fff" />
      </Link>
      <Link href="/camera" className="hover:scale-105">
        <Camera size={32} color="#fff" />
      </Link>
      <Link href="/animation" className="hover:scale-105">
        <PaintBrush size={32} color="#fff" />
      </Link>
      <Switches />
      <Views />
      {/* <Switch defaultSelected aria-label="Automatic updates" /> */}
    </div>
  );
};
export default Navbar;
// gesty, logo, informacje, wygaszacz
