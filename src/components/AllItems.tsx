import { AnimatePresence } from "framer-motion";
import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import Hero from "./Hero";
import Item from "./Item";
import Loading from "./Loading";

const AllItems = () => {
  const { open, data, loading } = useContext(GlobalContext);
  console.log("AllItems");
  console.log(loading);

  const renderItems = React.useMemo(() => {
    return (
      data?.Search && (
        <div
          className={`container mt-12 grid w-full grid-cols-5 gap-10 pb-64  ${
            open
              ? "max-[2000px]:grid-cols-4 max-[2000px]:pl-[350px]"
              : "grid-cols-5"
          }`}
        >
          <AnimatePresence initial={false}>
            {data?.Search.map((item: any) => {
              return (
                <Item
                  key={item.imdbID}
                  title={item.Title}
                  year={item.Year}
                  type={item.Type}
                  src={item.Poster}
                />
              );
            })}
          </AnimatePresence>
        </div>
      )
    );
  }, [data, open]);

  // here is need to fixed, cause when again clicking the search button the loading won't appear - FIXED! (just added the !loading)
  return data?.Search && !loading ? (
    <>{renderItems}</>
  ) : loading ? (
    <Loading />
  ) : data?.Error ? (
    <div className="flex h-screen w-full flex-col items-center justify-center font-sans2 text-3xl text-customWhite">
      <p>{data?.Error}</p>
      <span>Try to search with exact name!</span>
    </div>
  ) : (
    <Hero />
  );
};

export default AllItems;
