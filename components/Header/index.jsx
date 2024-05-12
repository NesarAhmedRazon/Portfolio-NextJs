import ButtonLink from "@/components/ButtonLink";
import Logo from "@/components/Logo";
import NavigationMain from "@/components/NavigationMain";
import Section from "@/widgets/Section";
import Link from "next/link";
import style from "./header.module.scss";

export default function Header() {
  return (
    <header>
      <Section className={`${style.container} md:py-4`}>
        <Link href={process.env.NEXT_PUBLIC_BASE_URL}>
          <Logo className="text-5xl" />
        </Link>
        <NavigationMain className="hidden lg:flex" />
        <ButtonLink
          href="https://www.upwork.com/freelancers/nesarahmed"
          talget="_blank"
          text="Hire Me"
        />
      </Section>
    </header>
  );
}
