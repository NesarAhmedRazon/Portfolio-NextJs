import Section from "@/widgets/Section";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub, FaSquareUpwork } from "react-icons/fa6";

export default function Footer() {
  const date = new Date();

  return (
    <footer>
      <Section className="flex gap-6 flex-col md:flex-row md:justify-between items-center  py-6 md:py-4 border-t">
        <div
          className={`copyright order-last md:order-first text-sm md:text-base `}
        >
          © {date.getFullYear()} Nesar Ahmed - All Rights Reserved
        </div>
        <div className="social flex md:flex-row flex-col justify-center items-center gap-2">
          <span className="text-xl md:text-base font-normal">Find me on: </span>
          <div className="icons flex justify-center items-center gap-3 md:gap-1">
            <Link
              href="https://www.upwork.com/freelancers/nesarahmed"
              className="text-4xl md:text-3xl text-upwork-normal hover:text-upwork-hover duration-300"
            >
              <FaSquareUpwork />
            </Link>
            <Link
              href="https://www.facebook.com/NesarAhmedRazon"
              className="text-4xl md:text-3xl text-facebook-700 hover:text-facebook-600 duration-300"
            >
              <FaFacebookSquare />
            </Link>
            <Link
              href="https://github.com/NesarAhmedRazon/"
              className="text-4xl md:text-3xl text-github-900 hover:text-github-700 duration-300"
            >
              <FaSquareGithub />
            </Link>
          </div>
        </div>
      </Section>
    </footer>
  );
}
