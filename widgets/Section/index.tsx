import { cn } from "@/utils/cn";

function Section({
  children,
  className,
  background = "bg-slate-50"
}: {
  children?: React.ReactNode;
  className?: string;
  background?: string;
}) {
  let attrs: { className?: string } = {
    className: cn("py-6 siteWidth md:py-8", className ? className : "")
  };

  return (
    <section className={`w-full ${background}`}>
      <div {...attrs}>{children}</div>
    </section>
  );
}

export default Section;
