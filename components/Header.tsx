import Link from 'next/link'
import { Button } from './ui/button'

// Components
import Nav from './Nav'
import MobileNav from './MobileNav'

const Header = () => {
  return ( 
    <header className='py-8 xl:py-12 text-textColor'>
        <div className="container mx-auto flex justify-between items-center">
            {/*LOGO*/}
            <Link href='/'>
                <h1 className='text-4xl font-semibold'>
                    Toberuneko<span className= 'text-importantColor'>.</span>
                </h1>
            </Link>

            {/*Desktop Nav*/}
            <div className="hidden xl:flex items-center gap-8">
              <Nav />
              <Link href='/contact'>
                <Button>Contact me</Button>
              </Link>
            </div>

            {/*Mobile Nav*/}
            <div className="xl:hidden">
              <MobileNav></MobileNav>
            </div>

        </div>
    </header>
  )
}

export default Header