import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Researchs', href: '#researchs' },
    { name: 'Contact', href: '#contact' },
  ]
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
     setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled?"glass-strong py-3":"bg-transparent py-5 "} z-50`}>
      <nav className='container mx-auto flex items-center justify-between px-6'>
        <div className='flex items-center gap-2'>
        <img src="Logo_milkio.webp" alt="my logo" className='relative h-14 w-auto' />
        <a href="#"  className='relative text-2xl font-bold tracking-tight hover:text-primary transition-colors duration-300 font-logo'>
          MILK.io
        </a>
        </div>

        {/* Desktop Nav */}
        <div className='hidden md:flex items-center gap-1'>
          <div className='glass rounded-full px-2 py-1 flex items-center gap-1'>
            {navLinks.map((link, index) => (
              <a key={link.name} href={link.href} className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-primary transition-colors'>
                {link.name}
              </a>
            ))

            }
          </div>
        </div>
        
        <div className='hidden md:block'>
          <Button asChild className="cursor-pointer">
            <a href="https://app.fzmilky.my.id" target="_blank" rel="noopener noreferrer">
              TRY APP
            </a>
          </Button>
        </div>
          {/* Mobile Menu Button */}
        <button className='md:hidden p-2 text-foreground' 
        onClick={ () => setIsMobileMenuOpen((prev) => !prev) }>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24}/>}
        </button>
      </nav>
      {/* Mobile Menu */}
     {isMobileMenuOpen && (<div className="md:hidden glass-strong animate-fade-in">
        <div className='container mx-auto px-6 py-6 flex flex-col gap-4 '>
        {navLinks.map((link, index) => (
              <a key={link.name} href={link.href} className='text-lg text-muted-foreground hover:text-foreground rounded-full hover:bg-surface px-4 py-2 block'>
                {link.name}
              </a>
            ))

            }
           
          <Button asChild className="cursor-pointer">
            <a href="https://app.fzmilky.my.id" target="_blank" rel="noopener noreferrer">
              TRY APP
            </a>
          </Button>
        
        </div>
      </div>
    )}
    </header>
  )
}

export default Navbar