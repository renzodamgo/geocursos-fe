import { ButtonOrLink, ButtonOrLinkType } from "@ui/Core/ButtonOrLink";
import { MouseEventHandler } from "react";

type ButtonType = ButtonOrLinkType & {
  type?: "button" | "reset" | "submit" | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({
  intent,
  type = "button",
  children,
  size,
  onClick,
}: ButtonType) => {
  return (
    <button type={type} className={"hover:brightness-90"} onClick={onClick}>
      <ButtonOrLink intent={intent} size={size}>
        {children}
      </ButtonOrLink>
    </button>
  );
};
