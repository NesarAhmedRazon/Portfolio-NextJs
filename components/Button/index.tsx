import style from "@/styles/button.module.scss";
import { cn } from "@/utils/cn";

function Button({
  text = "Button",
  className,
  href = "/",
  target = "_self",
  variant = "primary",
  fn = undefined,
  active = false
}: {
  text: string;
  className?: string;
  icon?: string;
  iconAlign?: string;
  href?: string;
  target?: string;
  variant?: string;
  bg?: string;
  active?: boolean;
  fn?: () => void;
}) {
  const attrs = {
    href: href,
    target: target,
    className: cn(
      style.item,
      className && className,
      variant && style[variant],
      active && style[`active`]
    )
  };
  return (
    <button {...attrs} onClick={fn}>
      {text}
    </button>
  );
}

export default Button;
