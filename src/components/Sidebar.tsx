import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import { BASE_URL } from "../utils/api";

const Sidebar = () => {
  console.log("Sidebar");
  const { changeTitle, title, changeLoading, fillData, open, toggle } =
    useContext(GlobalContext);

  const fetch = async () => {
    changeLoading(true);
    try {
      const res = await axios.get(BASE_URL + `&s=${title}`);
      fillData(res.data);
      changeLoading(false);
      console.log(res);
    } catch (err) {
      changeLoading(false);
      console.log(err);
    }
  };

  return (
    <>
      {/* Burger */}
      <div
        className={`fixed left-16 top-16 z-20 flex cursor-pointer flex-col space-y-2 ${
          open && "space-y-0"
        }`}
        onClick={toggle}
      >
        <span
          className={`inline-block h-[3px] w-11 transition-all duration-300 ${
            open ? "rotate-45 bg-customGray" : "bg-customWhite"
          }`}
        ></span>
        <span
          className={`inline-block h-[3px] w-11 transition-all duration-300 ${
            open
              ? "-translate-y-[10px] -rotate-45 bg-customGray"
              : "bg-customWhite"
          }`}
        ></span>
        <span
          className={`inline-block h-[3px] w-11 transition-all duration-300 ${
            open ? "hidden" : "bg-customWhite"
          }`}
        ></span>
      </div>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ ease: "linear" }}
            className="fixed bottom-0 left-0 top-0 z-10 h-screen w-[350px] bg-customWhite"
          >
            <div className="ml-8 flex h-full flex-col justify-between pt-44">
              <div>
                {/* Search bar */}
                <motion.input
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, ease: "easeInOut" }}
                  type="text"
                  placeholder="...search"
                  className="rounded-full bg-customGray px-10 py-4 text-customWhite focus:outline-customWhite"
                  onChange={(e) => changeTitle(e.target.value)}
                />
                {/* Filters */}
                <ul className="mt-20 space-y-6">
                  <li className="flex items-center space-x-10 text-customGray">
                    <input
                      name="filter"
                      type="radio"
                      className="accent-customGray"
                    />
                    <span>All</span>
                  </li>
                  <li className="flex items-center space-x-10 text-customGray">
                    <input
                      name="filter"
                      type="radio"
                      className="accent-customGray"
                    />
                    <span>Movies only</span>
                  </li>
                  <li className="flex items-center space-x-10 text-customGray">
                    <input
                      name="filter"
                      type="radio"
                      className="accent-customGray"
                    />
                    <span>Series only</span>
                  </li>
                </ul>
              </div>
              {/* Btn */}
              <button
                onClick={fetch}
                className="mb-12 mr-10 w-fit self-end rounded-2xl bg-customGray px-11 py-3 text-customWhite duration-300 hover:bg-black"
              >
                Search
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
