import Image from "@/node_modules/next/image";
import React from "react";

const BackgroundImage = ({
  image,
  altText,
}: {
  image: string;
  altText: string;
}) => {
  return (
    <div className="relative flex min-h-[20dvh] md:min-h-[40dvh]">
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-[1]" /> */}
      <Image src={image} alt={altText} fill className="w-full   object-cover" />
    </div>
  );
};

export default BackgroundImage;
