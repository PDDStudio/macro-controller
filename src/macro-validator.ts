import { Action, KeyboardAction, Macro, MouseAction } from "./models";

class MacroValidator {

  validateMacro(macro: Macro) {
    macro.actions.forEach((action) => this.validateAction(action))
    this.validateRepeatCount(macro.repeat)
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

  private validateRepeatCount(value: number | string) {
    if (typeof value == 'number') {
      return true
    } else {
      return /^\d+$/.test(value)
    }
  }

}
