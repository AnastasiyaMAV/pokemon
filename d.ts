declare module '*.module.scss' {
  const styles: { [className: string]: string };
  export default styles;
}

declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
