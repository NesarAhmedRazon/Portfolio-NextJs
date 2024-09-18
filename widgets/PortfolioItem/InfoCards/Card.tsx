import dynamic from "next/dynamic";
import { IconComponentProps } from "../../../types";

export default function Card({ data = {} }: { data?: any }) {
  const IconComponent = dynamic<IconComponentProps>(
    () =>
      import(`@/components/Icons/${data.icon}`)
        .then((mod) => mod.default)
        .catch(() => null), // Handle if icon is not found
    { ssr: true }
  );

  return (
    <div className="info_card">
      <div
        title={`${data?.name}: ${data?.details}`}
        className="info_text text-xl font-medium mb-1 mt-2"
      >
        {IconComponent && (
          <IconComponent className="text-2xl hover:grayscale duration-300 cursor-pointer" />
        )}
      </div>
    </div>
  );
}
