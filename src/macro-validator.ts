import { Action, KeyboardAction, Macro, MouseAction } from "./models";

class MacroValidator {

  validateMacro(macro: Macro) {
    macro.actions
  }

  private validateAction(action: Action) {
    if (action.hasOwnProperty('key')) {
      this.validateMouseAction(action as MouseAction)
    } else {
      this.validateKeyboardAction(action as KeyboardAction)
    }
  }

  private validateMouseAction(mouseAction: MouseAction) {
    // TODO
  }

  private validateKeyboardAction(keyboardAction: KeyboardAction) {
    // TODO
  }

}
