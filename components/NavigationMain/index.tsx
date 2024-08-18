import style from "@/styles/navigation.module.scss";
import Link from "next/link";

function NavigationMain({
  className,
  itemClass
}: {
  className?: string;
  itemClass?: string;
}) {
  return (
    <nav className={`${style.container}${className ? " " + className : ""}`}>
      <Link
        href="#about"
        className={`${style.item}${itemClass ? " " + itemClass : ""}`}
      >
        About
      </Link>
      <Link
        href="/services"
        className={`${style.item}${itemClass ? " " + itemClass : ""}`}
      >
        Services
      </Link>
      <Link
        href="/contact"
        className={`${style.item}${itemClass ? " " + itemClass : ""}`}
      >
        Contact
      </Link>
    </nav>
  );
}

export default NavigationMain;
