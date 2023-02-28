import { HeadingTypes } from "@ui/Heading/HeadingH1";
import clsx from "clsx";

export const HeadingH3 = ({
  className,
  alternative,
  children,
}: HeadingTypes) => {
  return (
    <h3
      className={clsx(`font-serif text-2xl md:text-3xl ${className}`, {
        "text-white": alternative,
      })}
    >
      {children}
    </h3>
  );
};
