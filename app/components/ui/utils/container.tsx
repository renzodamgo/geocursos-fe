import { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  return <div className="container mx-auto px-6 py-10">{children}</div>;
};
