import React from 'react';
import cn from 'classnames';
import s from './Button.module.scss';

interface IBtn {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: 'wide' | 'default' | 'small';
  color?: 'green' | 'yellow';
}

const Button: React.FC<IBtn> = ({
  children,
  onClick,
  size = 'default',
  color = 'green',
}) => {
  return (
    <button
      type="button"
      className={cn(s.root, s[color], s[size])}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
