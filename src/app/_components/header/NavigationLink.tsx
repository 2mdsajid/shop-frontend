import React from 'react';

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  isMobile?: boolean;
}

export function NavigationLink({ href, children, isMobile }: NavigationLinkProps) {
  return (
    <a
      href={href}
      className={`
        ${isMobile
          ? 'block w-full px-4 py-2 hover:bg-gray-100'
          : 'px-4 py-2 hover:text-gray-600'
        }
        transition-colors duration-200
      `}
    >
      {children}
    </a>
  );
}