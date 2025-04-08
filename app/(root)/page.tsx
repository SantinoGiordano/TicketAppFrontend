"use client";
import CarouselTop from "../components/CarouselTop";
// import DepartureDate from "../components/DepartureDate";
import ImageBanner from "../components/ImageBanner";
import Nav from "../components/Nav";
import DropdownInput from "../components/ToAndFrom";

const Home = () => {
  return (
    <>
      <Nav />
      <CarouselTop/>
      <div className=" bg-gray-300 flex justify-center items-center p-10 flex-col sm:flex-row gap-4 w-full">
        <DropdownInput />
        To
        <DropdownInput />
        {/* <DepartureDate/> */}
      </div>

      <div className="bg-blue-100">
        <ImageBanner />
      </div>
    </>
  );
};

export default Home;
