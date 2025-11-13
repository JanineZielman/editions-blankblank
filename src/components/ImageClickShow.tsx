"use client";

import { useState } from "react";
import { PrismicNextImage } from "@prismicio/next";

export default function ImageClickShow({ images }: { images: any[] }) {
  const [index, setIndex] = useState(0);

  const handleClick = () => setIndex((index + 1) % images.length);

  // if we've shown all images, show nothing
  if (index >= images.length) return null;

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <PrismicNextImage field={images[index].image} />
    </div>
  );
}
