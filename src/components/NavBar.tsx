import { projectTitle } from "../constant/strings";

export default function NavBar() {
  return (
    <div className="z-20 fixed w-full flex justify-center items-center h-[80px] bg-white">
      <div className="w-[1200px] flex items-center px-6">
        <p className="titleFont">{projectTitle}</p>
      </div>
    </div>
  );
}
