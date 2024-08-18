import { cn } from "@/utils/cn";

function Section({
  children,
  className,
  background = "bg-slate-50",
  id = ""
}: {
  children?: React.ReactNode;
  className?: string;
  background?: string;
  id?: string;
}) {
  let attrs: { className?: string } = {
    className: cn("py-6 siteWidth md:py-8", className ? className : "")
  };

  return (
    <section className={`w-full ${background}`} id={id}>
      <div {...attrs}>{children}</div>
    </section>
  );
}

export default Section;
