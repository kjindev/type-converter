import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { checkCode } from "../constant/utils";

export default function JSCodeEditor() {
  const [code, setCode] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const codeWithErrors = `
    let age: string = "thirty";
    function greet(name: string): number {
      return "Hello, " + name;
    }
  `;

  useEffect(() => {
    checkCode(codeWithErrors);
  }, []);

  return (
    <div className="z-10 bg-[#202020] w-[520px] h-[450px] mx-3 flex justify-center items-center rounded-md">
      <Editor
        width="520px"
        height="400px"
        defaultLanguage="javascript"
        defaultValue={`// Put your code!
  
        `}
        theme="vs-dark"
      />
    </div>
  );
}
