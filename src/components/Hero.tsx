import Image, { StaticImageData } from "next/image";

export default function Hero({
  image,
  title,
  subtitle = "",
}: {
  image: StaticImageData;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="hero">
      <Image
        src={image}
        alt="Heather Downing"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "45% 30%"
        }}
        priority
      />
      <div className="content">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </div>
  );
}
