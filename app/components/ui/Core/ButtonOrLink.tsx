import clsx from "clsx";
import React from "react";

export type ButtonOrLinkType = {
  path?: string;
  intent?:
    | "primary"
    | "secondary"
    | "terniary"
    | "simple"
    | "cancel"
    | "facebook"
    | "google";
  children: React.ReactNode;
  size?: "small";
  serif?: boolean;
};

export const ButtonOrLink = ({
  intent = "primary",
  children,
  size,
  serif,
}: ButtonOrLinkType) => {
  return (
    <div
      className={clsx("flex font-medium tracking-tight", {
        "items-center justify-center gap-3 px-4 py-3 text-center":
          intent != "simple",
        "bg-primary text-black": intent == "primary",
        "bg-secondary text-white": intent == "secondary",
        "border-2 border-black bg-white": intent == "terniary",
        underline: intent == "simple",
        "bg-red-600 text-white": intent == "cancel",
        "bg-[#1778F2] text-white": intent == "facebook",
        "border border-solid border-black bg-white text-black":
          intent == "google",
        "text-sm px-3 py-2 gap-1": size == "small",
        "font-serif text-xl": serif,
      })}
    >
      {children}
    </div>
  );
};
