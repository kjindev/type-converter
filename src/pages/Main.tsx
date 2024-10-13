import JSCodeEditor from "../components/JSCodeEditor";
import TSCodeEditor from "../components/TSCodeEditor";

export default function Main() {
  return (
    <div className="w-[100%] mt-[100px] mb-[200px]">
      <div className="w-full flex flex-col justify-center items-center">
        <p className="text-4xl font-bold">TypeScript 코드를 개선해보세요</p>
        <p className="text-sm my-6 text-center text-slate-700 leading-6">
          TypeScript 코드를 입력해보세요. 타입의 개선점, 추가적인 사항을
          추천해드립니다.
          <br /> 입력된 코드는 서비스 개선에 사용될 수 있습니다. 그러니{" "}
          <span className="font-bold">
            중요한 코드는 입력하지 않는 것을 권장
          </span>
          합니다.
        </p>
      </div>
      <div className="mt-7 flex justify-center">
        <div>
          <p className="text-center mb-5 font-bold text-xl">Input</p>
          <JSCodeEditor />
        </div>
        <div>
          <p className="text-center mb-5 font-bold text-xl">Output</p>
          <TSCodeEditor />
        </div>
      </div>
    </div>
  );
}
