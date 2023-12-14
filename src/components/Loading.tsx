import { Ellipsis } from "react-awesome-spinners";
const Loading = () => {
  console.log("Loading");

  return (
    <div className="mt-[30vh] flex h-screen w-full justify-center">
      <Ellipsis color="#DCE0D9" />
    </div>
  );
};

export default Loading;
