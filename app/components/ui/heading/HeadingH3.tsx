import clsx from "clsx";
import { HeadingTypes } from "./HeadingH1";

export const HeadingH3 = ({
  className,
  alternative,
  children,
}: HeadingTypes) => {
  return (
    <h3
      className={clsx(`font-serif text-2xl md:text-4xl ${className}`, {
        "text-white": alternative,
      })}
    >
      {children}
    </h3>
  );
};
