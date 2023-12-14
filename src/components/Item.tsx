import { motion } from "framer-motion";
import React from "react";
import { ItemProps } from "../interfaces";

const Item = React.memo(({ title, year, type, src }: ItemProps) => {
  console.log("Item");

  return (
    <motion.div
      layout
      className="group relative h-fit cursor-pointer rounded-[20px] bg-customWhite p-3 text-black"
    >
      <div className="absolute inset-0 h-full w-full rounded-[20px] transition-all duration-200 group-hover:backdrop-blur-sm"></div>
      {src !== "N/A" ? (
        <img
          src={src}
          alt={title}
          className="h-[20rem] w-full rounded-[20px] object-cover"
        />
      ) : (
        <div className="flex h-[20rem] w-full items-center justify-center rounded-[20px] bg-gray-400 text-center text-customWhite">
          {title}
        </div>
      )}
      <div className="mt-1 flex w-full flex-col items-center">
        <h2 className="w-full text-center font-sans2 text-lg">{title}</h2>
        <div className="flex w-full justify-between px-8 text-sm">
          <span>{year}</span>
          <span>{type}</span>
        </div>
      </div>
      <button className="absolute inset-x-[30px] inset-y-[43%] flex items-center justify-center rounded-lg bg-customGray bg-opacity-30 px-11 py-4 text-customWhite opacity-0 transition-all duration-300 hover:bg-opacity-60 group-hover:opacity-100">
        View
      </button>
    </motion.div>
  );
});

export default Item;
