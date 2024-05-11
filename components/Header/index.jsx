import ButtonLink from "@/components/ButtonLink";
import Logo from "@/components/Logo";
import NavigationMain from "@/components/NavigationMain";
import Link from "next/link";
import style from "./header.module.css";

export default function Header() {
  return (
    <div className="w-full bg-slate-50">
      <section className={`${style.container} siteWidth`}>
        <Link href={process.env.NEXT_PUBLIC_BASE_URL}>
          <Logo className="text-5xl" />
        </Link>
        <NavigationMain className="hidden lg:flex" />
        <ButtonLink href="#" text="Hire Me" />
      </section>
    </div>
  );
}
