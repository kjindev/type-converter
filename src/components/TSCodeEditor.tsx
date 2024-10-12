import Editor from "@monaco-editor/react";

export default function TSCodeEditor() {
  const defaultValue = `// output will be here.
  
  
  
  `;

  return (
    <div className="z-10 bg-[#202020] w-[530px] h-[690px] mx-3 flex justify-center items-center rounded-md">
      <Editor
        width="500px"
        height="600px"
        defaultLanguage="javascript"
        defaultValue={defaultValue}
        theme="vs-dark"
      />
    </div>
  );
}
