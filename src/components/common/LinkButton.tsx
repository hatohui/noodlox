import React from "react";
import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";

type LinkButtonProps = React.PropsWithChildren<LinkProps> & {
  className?: string;
};

export const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  className,
  children,
  ...restProps
}) => {
  return (
    <Link className={cn("button", className)} href={href} {...restProps}>
      {children}
    </Link>
  );
};

export default LinkButton;
