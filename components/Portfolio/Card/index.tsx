import Image from "next/image";
import Link from "next/link";

export default function Card({ data }: { data: any }) {
  const url = data.url || "#";
  return (
    <Link
      href={url}
      target={data.target || "_self"}
      className="card bg-slate-100 relative aspect-sd shadow-lg hover:shadow rounded-md overflow-hidden duration-200"
    >
      <Image alt={data.title} src={data.image} fill />
    </Link>
  );
}
