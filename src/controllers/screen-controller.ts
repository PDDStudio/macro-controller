import robot, { Bitmap } from 'robotjs'
import { Logger, createLogger, saveTemporary } from '../utils'

/**
 * The ScreenController is an experimental implementation that is responsible for everything on-screen related.
 * Right now it only supports creating screenshots from the users display.
 */
export class ScreenController {

  private readonly logger: Logger

  constructor() {
    this.logger = createLogger()
    this.logger.debug('ScreenController instance created!')
  }

  /**
   * Utility function to print detected screen information to the console.
   */
  public printScreenInfo(): void {
    const screen = robot.getScreenSize()
    this.logger.info(`Screen Size: ${screen.width} x ${screen.height} (width/height)`)
  }

  /**
   * Function to capture a specific area of the display.
   * @param x x location to start from
   * @param y y location to start from
   * @param width width of the area
   * @param height height of the area
   * @returns A [Bitmap] image containing a snapshot of the specified area.
   */
  public async capture(x: number, y: number, width: number, height: number): Promise<Bitmap> {
    const bitmap = await robot.screen.capture(x, y, width, height)
    await saveTemporary(`caputre_${bitmap.width}x${bitmap.height}.bmp`, bitmap.image)
    return bitmap
  }

}
