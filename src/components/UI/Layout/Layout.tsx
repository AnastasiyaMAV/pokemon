import React from 'react';
import cn from 'classnames';
import s from './Layout.module.scss';

interface ILayoutProps {
  children: React.ReactNode;
  className?: string | null;
}

export const Layout: React.FC<ILayoutProps> = ({
  children,
  className = null,
}) => <div className={cn(s.root, className)}>{children}</div>;
