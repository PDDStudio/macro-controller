
/**
 * The RepeatAction represents the amount of times a specific Action should be repeated.
 * It can be number or a number in string format.
 */
export type RepeatAction = number | string;

/**
 * The ActionType identifies whether the declared Action is intended for Keyboard or Mouse execution.
 */
export type ActionType = 'mouse' | 'keyboard'

/**
 * The MouseActionType is used to identify the desired mouse action. Can be 'click' or 'move'.
 */
export type MouseActionType = 'click' | 'move'

/**
 * The KeyboardActionType is used to identify the desired keyboard action. Can be 'text' or 'key'.
 * 
 * Use 'text' to input complete texts.
 * Use 'key' to press specific keys only.
 */
export type KeyboardActionType = 'text' | 'key'

/**
 * The TargetLocation is used to identify coordinates on the screen.
 */
export type TargetLocation = { x: number, y: number }

/**
 * The MouseButton specifies which mouse button is targeted for the action. Can be 'left', 'right' or 'middle'.
 */
export type MouseButton = 'left' | 'middle' | 'right'

/**
 * The MouseClick is used to identify whether the click action should be 'single' or 'double'.
 * 
 * Use 'single' for a single click.
 * Use 'double' for a double click.
 */
export type MouseClick = 'single' | 'double'

// Important: Adding more supported keys also requires updating the validation check in [MacroValidationHelper]
export type Key = 'backspace' | 'delete' | 'enter' | 'tab' | 'escape' | 'up' | 'down' | 'left' | 'right' |
                  'home' | 'end' | 'pageup' | 'pagedown' | 'printscreen' | 'space' |
                  'f1' | 'f2' | 'f3' | 'f4' | 'f5' | 'f6' | 'f7' | 'f8' | 'f9' | 'f10' |
                  'f11' | 'f12' | 'command' | 'alt' | 'control' | 'shift' | 'right_shift'


/**
 * The Macro interface represents the whole YML/JSON file structure.
 */
export interface Macro {
  name: string
  repeat: RepeatAction
  actions: Action[]
}

export abstract class Action {
  type?: ActionType
  delay_before?: number
  delay_after?: number
}

export interface MouseAction extends Action {
  readonly action: MouseActionType
  readonly location?: TargetLocation
  readonly smooth?: boolean
  readonly button?: MouseButton
  readonly click?: MouseClick
}

export interface KeyboardAction extends Action {
  readonly action: KeyboardActionType
  readonly key?: Key
  readonly text?: string
}
