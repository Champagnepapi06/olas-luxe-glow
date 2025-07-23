import React from 'react';
import Navigation from './Navigation';
import { CartProvider } from '@/contexts/CartContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
      </div>
    </CartProvider>
  );
};

export default Layout;