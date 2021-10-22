import robot from 'robotjs'
import { createLogger, Logger } from '../utils'
import { Key } from '../models'

/**
 * The KeyboardController is the main class which handles requested keyboard input.
 * It can press single keys or type complete texts.
 */
export class KeyboardController {

  private readonly logger: Logger

  constructor() {
    this.logger = createLogger()
    this.logger.debug('KeyboardController initialized!')
  }

  /**
   * Types the specified text.
   * 
   * @param text The text to type
   */
  public type(text: string) {
    robot.typeString(text)
  }

  /**
   * Presses the specified key.
   * 
   * @param key The key to press
   */
  public pressKey(key: Key) {
    robot.keyTap(key)
  }

}
