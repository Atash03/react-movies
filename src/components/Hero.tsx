import bigBlur from "../assets/bigBlur.svg";

const Hero = () => {
  return (
    <div className="container relative flex h-screen w-full items-center justify-center px-16">
      <p className="text-center font-serif1 text-5xl leading-snug text-customWhite">
        <span className="font-semibold">Discover the Cinematic Universe:</span>
        <br />
        <span className="italic opacity-70">
          "Your Ultimate Guide to Movies, Series, and More!"
        </span>
      </p>
      <img
        className="absolute inset-y-0 h-full w-full"
        src={bigBlur}
        alt="img"
      />
    </div>
  );
};

export default Hero;
