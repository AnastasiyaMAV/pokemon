import React from 'react';

interface IHeading {
  children: React.ReactNode;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

const Heading: React.FC<IHeading> = ({ children, type = 'h1' }) => {
  const Tag = type as keyof JSX.IntrinsicElements;
  return <Tag> {children}</Tag>;
};

export default Heading;
