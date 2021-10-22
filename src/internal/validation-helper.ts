import { TargetLocation, ActionType, MouseActionType, KeyboardActionType, Key } from '../models'

/**
 * The MacroValidationHelper class offers a set of utility functions to validate actions defined in a [Macro]
 * It's used internally by the [MacroExecutor] and is not intended for other usage.
 */
export class MacroValidationHelper {

  /**
   * Validate the target location
   * 
   * @param location The location to validate
   * @returns true if the location is valid; false otherwise
   */
  public isValidLocation(location?: TargetLocation): boolean {
    if (!location) {
      return false
    }
    if (location.x && location.x >= 0 && location.y && location.y >= 0) {
      return true
    }
    return false
  }

  /**
   * Validate the action type
   * 
   * @param type The action type to validate
   * @returns true if the action type is valid; false otherwise
   */
  public isValidActionType(type?: ActionType): boolean {
    if (!type) {
      return false
    }
    return type === 'keyboard' || type === 'mouse'
  }

  /**
   * Validate the mouse action type
   * 
   * @param mouseActionType The mouse action type to validate
   * @returns True if the mouse action type is valid, false otherwise
   */
  public isValidMouseActionType(mouseActionType?: MouseActionType): boolean {
    if (!mouseActionType) {
      return false
    }
    return mouseActionType === 'click' || mouseActionType === 'move'
  }

  /**
   * Validate the keyboard action type
   * 
   * @param keyboardActionType The keyboard action type to validate
   * @returns true if the keyboard action type is valid; false otherwise
   */
  public isValidKeyboardActionType(keyboardActionType?: KeyboardActionType): boolean {
    if (!keyboardActionType) {
      return false
    }
    return keyboardActionType === 'key' || keyboardActionType === 'text'
  }

  /**
   * Validate the keyboard key
   * 
   * @param keyboardKey The keyboard key to validate
   * @returns true if the key is valid; false otherwise
   */
  public isValidKeyboardKey(keyboardKey?: Key): boolean {
    if (!keyboardKey) {
      return false
    }
    
    switch (keyboardKey) {
      case 'alt':
      case 'backspace':
      case 'control':
      case 'delete':
      case 'down':
      case 'end':
      case 'enter':
      case 'escape':
      case 'home':
      case 'left':
      case 'pagedown':
      case 'pageup':
      case 'printscreen':
      case 'right':
      case 'right_shift':
      case 'shift':
      case 'space':
      case 'tab':
      case 'up':
      case 'f1':
      case 'f2':
      case 'f3':
      case 'f4':
      case 'f5':
      case 'f6':
      case 'f7':
      case 'f8':
      case 'f9':
      case 'f10':
      case 'f11':
      case 'f12':
      case 'command':
        return true
      default:
        return false
    }
  }

  /**
   * Validate the specified text. Ensures it's present and not empty.
   * 
   * @param text The text to validate
   * @returns true if the text is valid; false otherwise
   */
  public isValidText(text?: string): boolean {
    if (text && text.trim().length > 0) {
      return true
    }
    return false
  }

}
