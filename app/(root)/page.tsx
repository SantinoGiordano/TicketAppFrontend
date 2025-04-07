"use client";
import ImageBanner from "../components/ImageBanner";
import Nav from "../components/Nav";
import DropdownInput from "../components/ToAndFrom";

const Home = () => {
  return (
    <>
      <Nav />
      <div className=" p-10 flex flex-col sm:flex-row items-center gap-4  bg-base-100 rounded-xl w-full">
        <DropdownInput />
        <DropdownInput />
      </div>

      <div className="bg-blue-100">
        <ImageBanner />
        <div className="divider divider-info">Learn more</div>
      </div>
    </>
  );
};

export default Home;
