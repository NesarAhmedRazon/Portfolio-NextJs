import style from "@/styles/button.module.scss";
import { cn } from "@/utils/cn";
import Link from "next/link";

function ButtonLink({
  text = "Button",
  className,
  href = "/",
  target = "_self",
  variant = "primary",
  bg = "base",
  activeBg = undefined
}: {
  text: string;
  className?: string;
  icon?: string;
  iconAlign?: string;
  href?: string;
  target?: string;
  variant?: string;
  bg?: string;
  activeBg?: string;
}) {
  const attrs = {
    href: href,
    target: target,
    className: cn(
      style.item,
      className && className,
      variant && style[variant],
      bg && style[bg],
      activeBg && style[activeBg]
    )
  };
  return <Link {...attrs}>{text}</Link>;
}

export default ButtonLink;
