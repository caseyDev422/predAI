import { ReactNode, FC } from 'react';
import { Outlet } from 'react-router-dom';
import '../App.css';
import { Navbar, Footer } from '@/components';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <div className='background-heroes'>
    <Navbar />
    <main>
      {children}
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;