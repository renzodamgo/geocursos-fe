import { ReactNode } from "react";

type PropTypes = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: PropTypes) => {
  return (
    <div className={`container mx-auto px-6 py-10 ${className}`}>
      {children}
    </div>
  );
};
