import { ReactNode } from "react";

type PropTypes = {
  children: ReactNode;
  className?: string;
};

export const HeadingH2 = ({ className, children }: PropTypes) => {
  return (
    <h1 className={`font-serif text-3xl md:text-5xl ${className}`}>
      {children}
    </h1>
  );
};
