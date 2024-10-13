import * as ts from "typescript";

export const checkCode = (code: string) => {
  const sourceFile = ts.createSourceFile(
    "input.ts",
    code,
    ts.ScriptTarget.ES2015,
    true
  );
  const compilerOptions = { noEmitOnError: true };
  const program = ts.createProgram(["input.ts"], compilerOptions, {
    getSourceFile: (fileName) =>
      fileName === "input.ts" ? sourceFile : undefined,
    writeFile: () => {},
    getDefaultLibFileName: () => "lib.d.ts",
    useCaseSensitiveFileNames: () => true,
    getCanonicalFileName: (fileName) => fileName,
    getCurrentDirectory: () => "",
    getNewLine: () => "\n",
    fileExists: (fileName) => fileName === "input.ts",
    readFile: () => "",
    directoryExists: () => true,
    getDirectories: () => [],
  });

  const diagnostics = ts.getPreEmitDiagnostics(program);
  console.log(diagnostics);
  if (diagnostics.length > 0) {
    diagnostics.forEach((diagnostic) => {
      if (diagnostic.file) {
        const { line, character } =
          diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start!);
        const message = ts.flattenDiagnosticMessageText(
          diagnostic.messageText,
          "\n"
        );
        console.log(message);
        // return `Error at ${line + 1}, ${character + 1}: ${message}\n`;
      } else {
        console.log("error");
        // return `Error: ${ts.flattenDiagnosticMessageText(
        //   diagnostic.messageText,
        //   "\n"
        // )}\n`;
      }
    });
  } else {
    return "nothing";
  }
};
