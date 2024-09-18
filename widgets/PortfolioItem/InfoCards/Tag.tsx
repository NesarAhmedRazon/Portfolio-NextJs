import style from "@/widgets/PortfolioItem/portfolio.module.scss";
import { IconComponentProps } from "@types";
import dynamic from "next/dynamic";

interface TagProps {
  data: {
    icon: string;
    name: string;
    details: string;
  };
}

export default function Tag({ data }: TagProps) {
  const IconComponent = dynamic<IconComponentProps>(
    () =>
      import(`@/components/Icons/${data.icon}`)
        .then((mod) => mod.default)
        .catch(() => null), // Handle if icon is not found
    { ssr: true }
  );

  return (
    <div
      className={`${style.info_tags_item}`}
      title={`${data?.name}: ${data?.details}`}
    >
      {IconComponent && (
        <IconComponent className={`${style.info_tags_item_icon}`} />
      )}
    </div>
  );
}
