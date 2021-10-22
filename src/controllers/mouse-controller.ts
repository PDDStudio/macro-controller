import robot from 'robotjs'
import { createLogger, Logger } from '../utils'
import { TargetLocation, MouseButton, MouseClick } from '../models'

/**
 * The MouseController is the main class to handle requested mouse input.
 * It can move the mouse, but also click mouse buttons.
 */
export class MouseController {

  private readonly logger: Logger

  constructor() {
    this.logger = createLogger()
    this.logger.debug('MouseController initialized!')
  }

  public moveAround(speed: number = 2): void {
    this.logger.info('moveAround: Preparing for mouse moveemnt ')
    robot.setMouseDelay(speed)
    const twoPi = Math.PI * 2.0
    const screenSize = robot.getScreenSize()
    const width = screenSize.width
    const height = (screenSize.height / 2) - 10
    // tslint:disable-next-line:no-increment-decrement
    for (let x = 0; x < width; x++) {
      const y = height * Math.sin((twoPi * x) / width) + height
      this.logger.info(`Moving Mouse to x=${x}, y=${y}`)
      robot.moveMouse(x, y)
    }
    this.logger.info('moveAround: Finished movement!')
  }

  /**
   * Get the current position of the mouse cursor.
   * 
   * @returns The current position as [TargetLocation]
   */
  public getCurrentPosition(): TargetLocation {
    return robot.getMousePos()
  }

  /**
   * Function to trigger a mouse move event
   * @param location The target location the mouse should be moved to
   * @param smooth  Whether the move animation should be smooth or instant
   */
  public move(location: TargetLocation, smooth: boolean = true) {
    if(smooth) {
      robot.moveMouseSmooth(location.x, location.y)
    } else {
      robot.moveMouse(location.x, location.y)
    }
  }

  /**
   * Function to trigger a mouse click
   * @param location The target location where the mouse click should happen
   * @param button The target mouse button which should be pressed
   * @param clickType The target click type. Can be single or double
   * @param smooth Whether the click animation should be executed smoothly or instant
   */
  public click(location: TargetLocation, button: MouseButton, clickType: MouseClick, smooth: boolean) {
    this.move(location, smooth)
    robot.mouseClick(button, clickType === 'double')
  }
}
