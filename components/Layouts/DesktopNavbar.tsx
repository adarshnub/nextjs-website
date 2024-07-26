"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function DesktopNavbar({ navLinks }: any) {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-[32px]">
        {navLinks?.map((nav: any) => (
          <NavigationMenuItem
            key={nav.link}
            className="nav-item relative"
          >
            <Link href={nav.link} legacyBehavior passHref>
              <NavigationMenuLink className="nav-link">
                {nav?.label}
                <span className="underline"></span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
        <div
          className="text-[16px] font-[400] rounded-[10px] py-[10px] px-[24px] bg-black text-white cursor-pointer"
          style={{ boxShadow: "0px 20px 35px 0px #00000026" }}
        >
          Sign up
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
