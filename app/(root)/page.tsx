"use client";
import CarouselTop from "../components/CarouselTop";
import DepartureDate from "../components/DepartureDate";
import ImageBanner from "../components/ImageBanner";
import Nav from "../components/Nav";
import DropdownInput from "../components/ToAndFrom";

const Home = () => {
  return (
    <>
      <Nav />
      <CarouselTop />
      <div className="bg-gray-100 py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="w-full sm:w-1/2">
            <DropdownInput label="From Station" />
          </div>
          <div className="text-gray-500 text-center sm:text-xl font-medium">to</div>
          <div className="w-full sm:w-1/2">
            <DropdownInput label="To Station" />
          </div>
          <DepartureDate/>
        </div>
      </div>
      <div className="bg-blue-100 py-10 px-4">
        <ImageBanner />
      </div>
    </>
  );
};

export default Home;
