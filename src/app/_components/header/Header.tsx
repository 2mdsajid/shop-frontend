'use client'


import React, { useState } from 'react';
import { NAVBAR_LINKS } from '@/lib/data';
import { NavigationLink } from './NavigationLink';
import { UserActions } from './UserActions';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="font-bold text-xl">
            LOGO
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            {NAVBAR_LINKS.map((link) => (
              <NavigationLink key={link.href} href={link.href}>
                {link.text}
              </NavigationLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <UserActions />
            <MobileMenu
              isOpen={isMobileMenuOpen}
              onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-2 border-t">
            {NAVBAR_LINKS.map((link) => (
              <NavigationLink key={link.href} href={link.href} isMobile>
                {link.text}
              </NavigationLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}