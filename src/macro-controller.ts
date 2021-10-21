import { MouseController, KeyboardController } from './controllers'
import { MacroExecutor, MacroExecutorOptions } from './macro-executor'
import { Macro } from './models'
import { MacroValidationHelper } from './internal'

export type CancelCallback = () => boolean

export interface MacroExecutionOptions {
  cancelCallback?: CancelCallback
}

/**
 * The MacroController class is the main class exposed by this library.
 * It can load parsed [Macro] objects and execute their actions.
 * 
 * Use [MacroExecutionOptions] to customize the macro controllers execution logic.
 */
export class MacroController {

  private readonly macroExecutor: MacroExecutor

  constructor() {
    const executorOpts = this.buildMacroExecutorOptions()
    this.macroExecutor = new MacroExecutor(executorOpts)
  }

  /**
   * The executeMacro function is used to execute macros.
   * 
   * @param macro The macro object to be executed
   * @param options Options to customize the macro execution
   * @returns A promise that runs until the macro execution is finished or an error occurred.
   */
  // @ts-ignore
  public executeMacro(macro: Macro, options?: MacroExecutionOptions): Promise<void | undefined> {
    // TODO: add validation & proper options to customize macro execution
    return this.macroExecutor.run(macro, options?.cancelCallback)
  }

  private buildMacroExecutorOptions(): MacroExecutorOptions {
    return {
      keyboardController: new KeyboardController(),
      mouseController: new MouseController(),
      macroValidationHelper: new MacroValidationHelper()
    }
  }

}
