import style from "@/styles/button.module.scss";
import Link from "next/link";

function ButtonLink({
  text = "Button",
  className,
  icon,
  iconAlign,
  href
}: {
  text: string;
  className?: string;
  icon?: string;
  iconAlign?: string;
  href: string;
}) {
  const attrs = {
    href: href,
    className: `${style.item}${className ? ` ` + className : ""}`
  };
  return <Link {...attrs}>{text}</Link>;
}

export default ButtonLink;
