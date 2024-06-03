import style from "@/styles/button.module.scss";
import { cn } from "@/utils/cn";
import Link from "next/link";

function ButtonLink({
  text = "Button",
  className,
  icon,
  iconAlign,
  href,
  target = "_self",
  variant = "primary",
  color = "base"
}: {
  text: string;
  className?: string;
  icon?: string;
  iconAlign?: string;
  href: string;
  target?: string;
  variant?: string;
  color?: string;
}) {
  const attrs = {
    href: href,
    target: target,
    className: cn(
      style.item,
      className && className,
      variant && style[variant],
      color && style[color]
    )
  };
  return <Link {...attrs}>{text}</Link>;
}

export default ButtonLink;
