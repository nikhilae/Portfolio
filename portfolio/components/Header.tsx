'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <ScrollLink to="about" smooth={true} duration={500} className="text-2xl font-bold cursor-pointer text-primary">
          Nikhila Etikyala
        </ScrollLink>
        <nav>
          <ul className="flex space-x-6">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <ScrollLink 
                  to={item.toLowerCase()} 
                  smooth={true} 
                  duration={500} 
                  className="text-sm font-medium text-muted-foreground hover:text-primary cursor-pointer transition-colors"
                >
                  {item}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

