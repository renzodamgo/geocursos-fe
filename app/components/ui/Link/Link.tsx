import LinkNext from "next/link";
import { ButtonOrLink, ButtonOrLinkType } from "../Core/ButtonOrLink";

type LinkType = ButtonOrLinkType & {
  innerRef: string;
};

export const Link = ({ innerRef, intent, children }: LinkType) => {
  return (
    <LinkNext href={innerRef} className="hover:brightness-90">
      <ButtonOrLink intent={intent}>{children}</ButtonOrLink>
    </LinkNext>
  );
};
