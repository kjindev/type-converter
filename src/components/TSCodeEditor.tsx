import Editor from "@monaco-editor/react";

export default function TSCodeEditor() {
  const defaultValue = `// Output will be here.`;

  return (
    <div className="z-10 bg-[#202020] w-[520px] h-[450px]  mx-3 flex justify-center items-center rounded-md">
      <Editor
        width="520px"
        height="400px"
        defaultLanguage="javascript"
        defaultValue={defaultValue}
        theme="vs-dark"
        options={{ readOnly: true }}
      />
    </div>
  );
}
