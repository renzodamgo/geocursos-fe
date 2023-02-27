import { ReactNode } from "react";

type PropTypes = {
  children: ReactNode;
  className?: string;
};

export const HeadingH3 = ({ className, children }: PropTypes) => {
  return (
    <h1 className={`font-serif text-2xl md:text-4xl ${className}`}>
      {children}
    </h1>
  );
};
