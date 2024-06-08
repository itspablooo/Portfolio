"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="bg-primary text-secondary font-bold p-4 flex justify-between items-center px-8">
        <div className="text-2xl font-bold">
          Pablo Moreno-Rivera
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/About-Me" className="hover:text-gray-400">
            About Me
          </Link>
          <Link href="/Projects" className="hover:text-gray-400">
            Projects
          </Link>
          <Link href="/Contact" className="hover:text-gray-400">
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <button 
            id="menu-button" 
            aria-label="Toggle mobile menu"
            className="focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-primary text-secondary p-4">
          <Link href="/" className="block py-2 hover:text-gray-400">
            Home
          </Link>
          <Link href="/About-Me" className="block py-2 hover:text-gray-400">
            About Me
          </Link>
          <Link href="/Projects" className="block py-2 hover:text-gray-400">
            Projects
          </Link>
          <Link href="/Contact" className="block py-2 hover:text-gray-400">
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}