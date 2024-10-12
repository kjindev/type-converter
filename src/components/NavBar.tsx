import { projectTitle } from "../constant/strings";

export default function NavBar() {
  return (
    <div className="fixed w-full flex justify-center items-center h-[80px] bg-white">
      <div className="w-[1200px] flex items-center px-6">
        <p className="titleFont">
          {projectTitle}{" "}
          <span className="text-xs text-slate-400 ml-1">for JS & TS</span>
        </p>
      </div>
    </div>
  );
}
