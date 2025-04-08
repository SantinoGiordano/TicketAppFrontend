import React from "react";
import Image from "next/image";

const ImageBanner = () => {
  const cards = [
    {
      src: "/dining.jpeg",
      alt: "person eating food on a train",
      label: "Dining Car",
      text: "Enjoy gourmet meals while watching the scenery roll by. A unique dining experience onboard.",
    },
    {
      src: "/livingSpace.jpeg",
      alt: "people talking together on train",
      label: "Lounge Area",
      text: "Relax and connect in our cozy lounge — perfect for conversation, games, or reading.",
    },
    {
      src: "/workingspace.jpg",
      alt: "person on train working",
      label: "Work Space",
      text: "Stay productive with onboard Wi-Fi and comfortable seating for your remote workflow.",
    },
  ];

  return (
    <div className="flex gap-6 justify-center items-start p-4 flex-wrap">
      {cards.map((item, index) => (
        <div key={index} className="flex flex-col items-center max-w-[400px]">
          {/* Image Card */}
          <div className="relative w-full h-[300px] rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
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
          {/* Filler Text */}
          <p className="mt-4 text-center text-sm text-gray-700">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageBanner;
