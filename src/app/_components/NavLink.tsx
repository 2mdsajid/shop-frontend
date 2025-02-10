import { Link } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React from 'react';

interface NavLinkProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ icon, label, to, className = '' }) => {
  const location = usePathname();
  const isActive = location === to;

  return (
    <Link
      to={to}
      className={`flex items-center space-x-1 text-gray-700 hover:text-rose-gold transition-colors ${
        isActive ? 'text-rose-gold' : ''
      } ${className}`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export const MobileNavLink: React.FC<NavLinkProps> = ({ icon, label, to, className = '' }) => {
  const location = usePathname();
  const isActive = location === to;

  return (
    <Link
      to={to}
      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-rose-gold transition-colors ${
        isActive ? 'text-rose-gold bg-gray-50' : ''
      } ${className}`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};