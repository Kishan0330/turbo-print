import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('turbo-print.printVariable', async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage('No active editor found.');
      return;
    }

    const language = editor.document.languageId;
    const selection = editor.selection;

    // Get the selected text
    const selectedText = editor.document.getText(selection);
    if (!selectedText) {
      vscode.window.showWarningMessage('No Variable selected.');
      return;
    }

    // Determine the print statement based on the language
    let printStatement: string;
    switch (language) {
      case 'javascript':
      case 'typescript':
        printStatement = `console.log(${selectedText});`;
        break;
      case 'python':
        printStatement = `print(${selectedText})`;
        break;
      case 'java':
        printStatement = `System.out.println(${selectedText});`;
        break;
      case 'csharp':
        printStatement = `Console.WriteLine(${selectedText});`;
        break;
      case 'ruby':
        printStatement = `puts ${selectedText}`;
        break;
      default:
        vscode.window.showErrorMessage(`Print statement not defined for language: ${language}`);
        return;
    }

    // Insert a new line and the print statement directly below the selected variable
    const edit = new vscode.WorkspaceEdit();
    const currentLine = editor.document.lineAt(selection.end.line); // Get the current line
    const insertPosition = currentLine.range.end.translate(1, 0); // Move to the end of the current line and down one line
    
    edit.insert(editor.document.uri, insertPosition, `\n${printStatement}`);
    
    await vscode.workspace.applyEdit(edit);

    vscode.window.showInformationMessage(`Inserted: ${printStatement}`);
  });

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
