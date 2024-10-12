export default function Main() {
  return (
    <div className="w-[100%] mt-[100px]">
      <div className="w-full flex flex-col justify-center items-center">
        <p className="text-4xl font-bold">JavaScript를 TypeScript로 변환하기</p>
        <p className="text-sm my-6 text-center text-slate-700 leading-6">
          JavaScript 코드를 입력하고 TypeScript 코드로 변환해보세요.
          <br /> (입력된 코드는 AI 개선에 사용될 수 있습니다. 그러니{" "}
          <span className="font-bold">
            중요한 코드는 입력하지 않는 것을 권장
          </span>
          합니다.)
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[500px] h-[600px] bg-slate-100 mx-6 my-12 rounded-md"></div>
        <div className="w-[500px] h-[600px] bg-slate-100 mx-6 my-12 rounded-md"></div>
      </div>
    </div>
  );
}
