import { MouseController } from "../../src"

const mockLocation = { x: 100, y: 150 }
const mockButton = 'left'
const mockType = 'single'
const mockBool = true

describe('Mouse Controller Tests', () => {

  var mouseController: MouseController

  beforeEach(() => {
    mouseController = new MouseController()
    mouseController.click = jest.fn()
    mouseController.move = jest.fn()
  })

  test('New instance should exist', () => {
    expect(mouseController).toBeDefined()
  })

  test('Mouse move function should be exectued', () => {
    mouseController.move(mockLocation)

    expect(mouseController.move).toHaveBeenCalledWith(mockLocation)
  })

  test('Mouse click function should be executed', () => {
    mouseController.click(mockLocation, mockButton, mockType, mockBool)

    expect(mouseController.click).toHaveBeenCalledWith(mockLocation, mockButton, mockType, mockBool)
  })

})
