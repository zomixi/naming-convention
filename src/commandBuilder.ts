import * as vscode from "vscode";

function commandBuilder(converter: (text: string) => string) {
  return () => {
    const activeTextEditor = vscode.window.activeTextEditor;

    if (!activeTextEditor) {
      return;
    }

    const { document, selections } = activeTextEditor;

    activeTextEditor.edit((editBuilder) => {
      selections.forEach((selection) => {
        const selectedText = document.getText(selection);
        const replacement = converter(selectedText);

        if (replacement !== selectedText) {
          editBuilder.replace(selection, replacement);
        }
      });
    });
  };
}

export { commandBuilder };
