import Image from "next/image";
import Link from "next/link";
import { ImageUrl } from "@/utils/Sanitizer";

export default function Card({ data,title }: { data: any,title?:boolean }) {
  const url = data?.url || process.env.NEXT_PUBLIC_BASE_URL+'/projects/'+data?.slug || "#";
  const img = data?.image || data?.featuredImage?.node || "/images/placeholder.png";
  const imgSrc = img?.sourceUrl || img;
  
  return (
    <Link
      href={url}
      target={data.target || "_self"}
      className="card bg-slate-100 relative aspect-sd shadow-lg hover:shadow rounded-md overflow-hidden duration-200"
    >
      <Image 
      alt={data.title} 
      src={ImageUrl(imgSrc)} 
      fill 
      sizes="(min-width: 1024px) 400px, (min-width: 640px) 300px, 200px"
      />
      {title && (
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
          <h3 className="text-lg font-bold">{data.title}</h3>
        </div>
      )}
    </Link>
  );
}
