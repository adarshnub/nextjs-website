"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from "@/assets/icons/ARC.png";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";

// import logoSm from "@/assets/icons/logosm.png";

import { MobileNavbar } from "./MobileNavbar";
import { DesktopNavbar } from "./DesktopNavbar";

const navLinks = [
  {
    label: "Home",
    link: "#",
    openSheet: false,
  },
  {
    label: "Products",
    link: "#",
    openSheet: false,
  },
  {
    label: "Cart",
    link: "#",
    openSheet: false,
  },
  {
    label: "Wishlist",
    link: "#",
    openSheet: false,
  },
  {
    label: "Notification",
    link: "#",
    openSheet: false,
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isJobAppToolsOpen, setIsJobAppToolsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      (dropdownRef.current as HTMLElement).contains(event.target as Node)
    ) {
      return;
    }
    setIsJobAppToolsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex px-[5vw] py-[24px] lg:hidden">
        <Link href="/">
          <Image src={logo} alt="logo" width={64} height={31} />
        </Link>
        <div className="absolute right-0 top-0 flex lg:hidden">
          <MobileNavbar navLinks={navLinks} />
        </div>
      </div>

      <section className="hidden w-full justify-between bg-transparent px-[5vw] py-[50px] lg:flex">
        <Link href="/">
          <Image src={logo} alt="logo" width={64} height={31} />
        </Link>

        <nav className="flex items-center space-x-8">
          <DesktopNavbar navLinks={navLinks} />
        </nav>
      </section>
    </>
  );
};

export default Navbar;
