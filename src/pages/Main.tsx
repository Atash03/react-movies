import { Navbar } from "../components";
import AllItems from "../components/AllItems";
import Footer from "../components/Footer";

const Main = () => {
  console.log("Main");
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <AllItems />
      </div>
      <Footer />
    </>
  );
};

export default Main;
