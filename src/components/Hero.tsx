import Image, { StaticImageData } from "next/image";

export default function Hero({
  heroImage,
  heading,
  subHeading = "",
}: {
  heroImage: StaticImageData;
  heading: string;
  subHeading?: string;
}) {
  return (
    <div className="hero">
      <Image
        src={heroImage}
        alt="Heather Downing"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "45% 30%"
        }}
        priority
      />
      <div className="content">
        <h1>{heading}</h1>
        <h2>{subHeading}</h2>
      </div>
    </div>
  );
}
