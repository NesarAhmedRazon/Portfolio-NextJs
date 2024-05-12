import style from "@/styles/button.module.scss";
import Link from "next/link";

function ButtonLink({
  text = "Button",
  className,
  icon,
  iconAlign,
  href,
  target = "_self | _blank | _parent | _top"
}: {
  text: string;
  className?: string;
  icon?: string;
  iconAlign?: string;
  href: string;
  target?: string;
}) {
  const attrs = {
    href: href,
    target: target,
    className: `${style.item}${className ? ` ` + className : ""}`
  };
  return <Link {...attrs}>{text}</Link>;
}

export default ButtonLink;
