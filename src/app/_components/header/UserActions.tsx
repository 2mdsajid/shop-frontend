import React from 'react';
import { ShoppingCart, User } from 'lucide-react';

export function UserActions() {
  return (
    <div className="flex items-center gap-4">
      <a
        href="/cart"
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        aria-label="Shopping cart"
      >
        <ShoppingCart className="w-5 h-5" />
      </a>
      <a
        href="/profile"
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        aria-label="User profile"
      >
        <User className="w-5 h-5" />
      </a>
    </div>
  );
}