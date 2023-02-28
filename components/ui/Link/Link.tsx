import { ButtonOrLink, ButtonOrLinkType } from "@ui/Core/ButtonOrLink";
import LinkNext from "next/link";

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
