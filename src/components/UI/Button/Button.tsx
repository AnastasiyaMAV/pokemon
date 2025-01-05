import React from 'react';
import cn from 'classnames';
import s from './Button.module.scss';

interface IBtnProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: 'wide' | 'default' | 'small' | 'mini' | 'micro';
  color?: 'green' | 'yellow';
  isDisabled?: boolean;
}

export const Button: React.FC<IBtnProps> = ({
  children,
  onClick,
  size = 'default',
  color = 'green',
  isDisabled = false,
}) => {
  return (
    <button
      type="button"
      className={cn(s.root, s[color], s[size])}
      onClick={onClick}
      disabled={isDisabled}>
      {children}
    </button>
  );
};
