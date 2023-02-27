import { ReactNode } from "react";

export type HeadingTypes = {
  children: ReactNode;
  className?: string;
  alternative?: boolean;
};

export const HeadingH1 = ({ className, children }: HeadingTypes) => {
  return (
    <h1 className={`font-serif text-5xl md:text-7xl ${className}`}>
      {children}
    </h1>
  );
};
