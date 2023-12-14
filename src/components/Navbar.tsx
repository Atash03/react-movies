import { useContext, useState } from "react";
import blur from "../assets/blur.svg";
import Sidebar from "./Sidebar";
import { GlobalContext } from "../GlobalContext";

const Navbar = () => {
  const { open, toggle } = useContext(GlobalContext);
  console.log("Navbar");

  return (
    <div className="flex justify-center">
      <div className="container relative flex items-center justify-center py-10">
        <div className="relative w-[440px] rounded-full bg-customWhite py-4 text-center font-serif text-3xl">
          <span>React Movies</span>
          <img
            src={blur}
            alt="blur"
            className="absolute -top-6 fill-[#DCE0D9] blur-md"
          />
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Navbar;
