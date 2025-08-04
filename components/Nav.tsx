"use client";

import { link } from "fs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'services',
        path: '/services'
    },
    {
        name: 'resume',
        path: '/resume'
    },
    {
        name: 'projects',
        path: '/projects'
    },
]

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);
  return (
  <nav className="flex gap-8">
    {links.map((link, index) => {
        return (
            <Link href={link.path} key={index} className={`${
            link.path === pathname && 'text-hoverColor border-b-2 border-hoverColor'
            } capitalize font-medium hover:text-hoverColor transition-all`}>
                {link.name}
            </Link>
        )
    })}
  </nav>)
}

export default Nav