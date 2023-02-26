import { ReactNode } from "react";

type PropTypes = {
  children: ReactNode;
  className?: string;
};

export const Paragraph = ({ children, className }: PropTypes) => {
  return <p className={`md:text-lg ${className}`}>{children}</p>;
};
