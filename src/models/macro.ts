
export type RepeatAction = number | string;
export type ActionType = 'mouse' | 'keyboard'

export type MouseActionType = 'click' | 'move'
export type KeyboardActionType = 'text' | 'key'

export type TargetLocation = { x: number, y: number }
export type MouseButton = 'left' | 'middle' | 'right'
export type MouseClick = 'single' | 'double'

// Important: Adding more supported keys also requires updating the validation check in [MacroValidationHelper]
export type Key = 'backspace' | 'delete' | 'enter' | 'tab' | 'escape' | 'up' | 'down' | 'left' | 'right' |
                  'home' | 'end' | 'pageup' | 'pagedown' | 'printscreen' | 'space' |
                  'f1' | 'f2' | 'f3' | 'f4' | 'f5' | 'f6' | 'f7' | 'f8' | 'f9' | 'f10' |
                  'f11' | 'f12' | 'command' | 'alt' | 'control' | 'shift' | 'right_shift'

export interface Macro {
  name: string
  repeat: RepeatAction
  actions: Action[]
}

export abstract class Action {
  type?: ActionType
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
