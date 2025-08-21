"use client";

import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci'


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
    {
        name: 'contact',
        path: '/contact'
    },
]

const MobileNav = () => {
    const pathname = usePathname()
    return (
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] text-highlightColor'></CiMenuFries>
            </SheetTrigger>
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <SheetContent className='flex flex-col'>
                <div className='mt-32 mb-40 text-center text-2xl'>
                    <Link href='/'>
                        <h1 className='text-4xl font-semibold'>
                            Neko<span className='text-importantColor'>.</span>
                        </h1>
                    </Link>
                </div>

                <nav className='flex flex-col justify-center items-center gap-8'>
                    {links.map((link, index) => {
                        return (
                            <SheetClose asChild key={index}>
                                <Link
                                    href={link.path}
                                    className={`${link.path === pathname && 
                                        'text-hoverColor border-b-2 border-hoverColor'
                                        } capitalize hover:text-hoverColor transition-all`}>
                                    {link.name}
                                </Link>
                            </SheetClose>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav