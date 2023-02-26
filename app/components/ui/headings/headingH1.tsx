import { ReactNode } from "react";

export const HeadingH1 = ({ children }: { children: ReactNode }) => {
  return <h1 className="font-serif text-3xl">{children}</h1>;
};
