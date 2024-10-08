# turbo-print

This is the README for extension **turbo-print**. This extension allows you to quickly insert print statements for selected variables in various programming languages directly in Visual Studio Code.

## Features

- **Insert Print Statement**: Select a variable and insert a print statement directly below it.
- **Supports Multiple Languages**: Currently supports JavaScript, TypeScript, Python, Java, C#, and Ruby.

### Usage

1. **Insert Print Statement**: 
   - Select a variable in your code and use the shortcut `Ctrl+Alt+P` (or your custom shortcut) to insert a print statement.
   
   ![Insert Print Statement](images/insert-print.png)

> Tip: Check your code after using the commands to see the added print statements for debugging!

## Requirements

No additional dependencies are required for this extension. It runs directly in Visual Studio Code.

## Extension Settings

This extension does not add any specific settings through the `contributes.configuration` extension point.

## Known Issues

- Type detection is currently a placeholder and may not accurately reflect the variable's type in all cases. Further improvements may be made in future releases.
  
## Release Notes

### 1.0.0

Initial release of **turbo-print** with basic print functionality for selected variables.

---

**Enjoy!**
