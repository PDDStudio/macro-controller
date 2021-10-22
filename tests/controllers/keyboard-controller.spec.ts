import { KeyboardController } from "../../src"

describe('Keyboard Controller Tests', () => {

  test('New instance should exist', () => {
    const keyboardController = new KeyboardController()
    expect(keyboardController).toBeDefined()
  })

})
