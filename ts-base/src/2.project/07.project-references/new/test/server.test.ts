import Server = require('../src/server')

const c = new Server()

// do test
test('temp', () => {
    expect(c).toBeInstanceOf(Server)
})