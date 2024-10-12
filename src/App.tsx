import NavBar from "./components/NavBar";
import Main from "./pages/Main";

export default function App() {
  return (
    <div className="w-full">
      <NavBar />
      <div className="pt-[60px]">
        <Main />
      </div>
    </div>
  );
}
