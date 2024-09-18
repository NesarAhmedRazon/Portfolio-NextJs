export default function Elementor({
  className
}: {
  size?: number;
  className?: string;
}) {
  const attrs = {
    x: "0px",
    y: "0px",
    role: "img",
    width: "1em",
    height: "1em",
    antialias: "true",
    clipRule: "evenodd",
    fill: "currentColor",
    viewBox: "0 0 1024 1024",
    className: className || "",
    xmlns: "http://www.w3.org/2000/svg"
  };

  return (
    <>
      <svg {...attrs} aria-hidden="true">
        <path
          fill="#92003b"
          d="M512 0c-282.798 0-512 229.202-512 512 0 282.703 229.202 512 512 512s512-229.202 512-512c-0.092-282.798-229.297-512-512-512zM384.023 725.263h-85.286v-426.619h85.286v426.619zM725.263 725.263h-255.954v-85.286h255.954v85.286zM725.263 554.596h-255.954v-85.286h255.954v85.286zM725.263 383.931h-255.954v-85.286h255.954v85.286z"
        ></path>
      </svg>
    </>
  );
}
