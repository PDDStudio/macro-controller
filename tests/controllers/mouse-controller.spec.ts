import { MouseController } from "../../src"

describe('Mouse Controller Tests', () => {

  test('New instance should exist', () => {
    const mouseController = new MouseController()
    expect(mouseController).toBeDefined()
  })

})
