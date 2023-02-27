import LinkNext from "next/link";
import { ButtonOrLink, ButtonOrLinkType } from "../Core/ButtonOrLink";

type LinkType = ButtonOrLinkType & {
  innerRef: string;
  scroll?: boolean;
};

export const Link = ({
  innerRef,
  intent,
  serif,
  scroll = false,
  children,
}: LinkType) => {
  return (
    <LinkNext href={innerRef} className="hover:brightness-90" scroll={scroll}>
      <ButtonOrLink serif={serif} intent={intent}>
        {children}
      </ButtonOrLink>
    </LinkNext>
  );
};
