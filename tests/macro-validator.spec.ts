import { MacroValidator } from "../src"

describe('Macro Validator Tests', () => {

  test('New instance should exist', () => {
    const macroValidator = new MacroValidator()
    expect(macroValidator).toBeDefined()
  })

})
