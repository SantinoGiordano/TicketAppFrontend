import React from "react";
import Image from "next/image";

const ImageBanner = () => {
  return (
    <div className="flex gap-4 justify-center items-center p-4 flex-wrap">
      {/* Image Card */}
      {[
        { src: "/dining.jpeg", alt: "person eating food on a train", label: "Dining Car" },
        { src: "/livingSpace.jpeg", alt: "people talking together on train", label: "Lounge Area" },
        { src: "/workingspace.jpg", alt: "person on train working", label: "Work Space" },
      ].map((item, index) => (
        <div
          key={index}
          className="relative w-[400px] h-[300px] rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <Image
            src={item.src}
            alt={item.alt}
            layout="fill"
            objectFit="cover"
            className="rounded-xl transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl transition-opacity duration-300 group-hover:from-black/100" />
          <div className="absolute bottom-3 left-3 text-white text-2xl font-semibold z-10 transition-transform duration-300 group-hover:scale-105">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageBanner;
