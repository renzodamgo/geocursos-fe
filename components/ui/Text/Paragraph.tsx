import clsx from "clsx";
import { ReactNode } from "react";

type PropTypes = {
  children: ReactNode;
  serif?: boolean;
  alternative?: boolean;
  className?: string;
};

export const Paragraph = ({
  children,
  className,
  serif,
  alternative,
}: PropTypes) => {
  return (
    <p
      className={clsx(`md:text-lg ${className}`, {
        "font-serif text-xl md:text-xl": serif,
        "text-white": alternative,
      })}
    >
      {children}
    </p>
  );
};
