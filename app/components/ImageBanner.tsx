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
    <div className="flex flex-wrap justify-center gap-10 px-6 py-12 bg-blue-100">
      {cards.map((item, index) => (
        <div
          key={index}
          className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] flex flex-col items-center"
        >
          {/* Card Container */}
          <div className="relative w-full h-[250px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg group transition-shadow hover:shadow-2xl">
            <Image
              src={item.src}
              alt={item.alt}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl transition duration-300 group-hover:from-black/90" />
            <div className="absolute bottom-4 left-4 text-white text-xl sm:text-2xl font-semibold z-10">
              {item.label}
            </div>
          </div>

          {/* Description */}
          <p className="mt-4 px-2 text-center text-gray-800 text-sm sm:text-base leading-relaxed">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ImageBanner;
