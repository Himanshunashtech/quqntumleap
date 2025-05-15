import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/404';

  return (
    <div className="min-h-screen flex flex-col">
      {!hideHeaderFooter && <Header />}
      <div className="flex-grow">{children}</div>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default Layout;