import { KeyboardController } from "../../src"

const mockKey = 'f1'
const mockText = 'This is some text'

describe('Keyboard Controller Tests', () => {

  var keyboardController: KeyboardController

  beforeEach(() => {
    keyboardController = new KeyboardController()
    keyboardController.type = jest.fn()
    keyboardController.pressKey = jest.fn()
  })

  test('New instance should exist', () => {
    expect(keyboardController).toBeDefined()
  })

  test('Key press function should be executed', () => {
    keyboardController.pressKey(mockKey)

    expect(keyboardController.pressKey).toHaveBeenCalledWith(mockKey)
  })

  test('Type text function should be called', () => {
    keyboardController.type(mockText)

    expect(keyboardController.type).toHaveBeenCalledWith(mockText)
  })

})
