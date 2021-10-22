import { MacroValidationHelper } from "./internal";
import { Action, Key, KeyboardAction, KeyboardActionType, Macro, MouseAction, MouseButton, TargetLocation } from "./models";

class MacroValidationError extends Error {
  private error: String

  constructor(message: String) {
    super()
    this.error = message
  }

  public getError(): String {
    return this.error
  }
}

class MacroValidator {

  private readonly validationHelper: MacroValidationHelper = new MacroValidationHelper()

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
    if (mouseAction.action !== 'click' && mouseAction.action !== 'move') {
      throw new MacroValidationError('Invalid Mouse action type provided!')
    }
    if (mouseAction.action == 'click') {
      this.validateMouseClickAction(mouseAction)
    } else {
      this.validateMouseMoveAction(mouseAction)
    }
  }

  private validateMouseMoveAction(mouseAction: MouseAction) {
    if (!mouseAction.location) {
      throw new MacroValidationError('Invalid mouse move action. Missing required property: location')
    } else {
      this.validateTargetLocation(mouseAction.location)
    }
  }

  private validateTargetLocation(location: TargetLocation) {
    if (location.x < 0 || location.y < 0) {
      throw new MacroValidationError('Location coordinates cannot be negative')
    }
  }

  private validateMouseClickAction(mouseAction: MouseAction) {
    if (!mouseAction.button) {
      throw new MacroValidationError('Invalid mouse click action. Missing required property: button')
    } else {
      this.validateMouseButton(mouseAction.button)
    }
  }

  private validateMouseButton(mouseButton: MouseButton) {
    if (mouseButton !== 'left' && mouseButton !== 'right' && mouseButton !== 'middle') {
      throw new MacroValidationError('Invalid mouse button provided')
    }
  }

  private validateKeyboardAction(keyboardAction: KeyboardAction) {
    if (!keyboardAction.action) {
      throw new MacroValidationError('Missing required keyboard action type!')
    }
    this.validateKeyboardActionType(keyboardAction.action)

    if (keyboardAction.action == 'key') {
      if(!keyboardAction.key) {
        throw new MacroValidationError('Missing required property: key')
      }

      const validKey = this.validationHelper.isValidKeyboardKey(keyboardAction.key)
      if (!validKey) {
        throw new MacroValidationError('Invalid key specified!')
      }

    } else {
      const validText = this.validationHelper.isValidText(keyboardAction.text)
      if (!validText) {
        throw new MacroValidationError('Invalid text specified!')
      }
    }

  }

  private validateKeyboardActionType(action: KeyboardActionType) {
    if (action !== 'key' && action != 'text') {
      throw new MacroValidationError('Invalid keyboard action type. Must be key or text.')
    }
  }

  private validateRepeatCount(value: number | string) {
    if (typeof value == 'number') {
      return true
    } else {
      return /^\d+$/.test(value)
    }
  }

}
