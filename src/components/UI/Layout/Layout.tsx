import React from 'react';
import cn from 'classnames';
import s from './Layout.module.scss';

interface ILayout {
  children: React.ReactNode;
  className?: string | null;
}

const Layout: React.FC<ILayout> = ({ children, className = null }) => (
  <div className={cn(s.root, className)}>{children}</div>
);

export default Layout;
