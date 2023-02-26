import { ReactNode } from "react";

type PropTypes = {
  children: ReactNode;
  className?: string;
};

export const HeadingH1 = ({ className, children }: PropTypes) => {
  return (
    <h1 className={`font-serif text-5xl md:text-7xl ${className}`}>
      {children}
    </h1>
  );
};
