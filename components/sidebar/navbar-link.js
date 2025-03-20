"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarLink(menu) {
    const pathname = usePathname();
    // console.log(pathname)
    return (
        <>
            <Link href={menu.href} 
                className={`flex items-center px-4 py-2 text-sm  text-black rounded-xl hover:bg-gray-200 hover:font-medium
                        ${pathname === menu.href ? "bg-gray-300" : "bg-none"}`}>
                {menu.icon} {menu.label}
            </Link>
        </>
    )
}