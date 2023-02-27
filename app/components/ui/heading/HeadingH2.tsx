import { HeadingTypes } from "./HeadingH1";

export const HeadingH2 = ({ className, children }: HeadingTypes) => {
  return (
    <h2 className={`font-serif text-3xl md:text-5xl ${className}`}>
      {children}
    </h2>
  );
};
