import { HeadingTypes } from "@ui/Heading/HeadingH1";

export const HeadingH2 = ({ className, children }: HeadingTypes) => {
  return (
    <h2 className={`font-serif text-3xl md:text-3xl ${className}`}>
      {children}
    </h2>
  );
};
