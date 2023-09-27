import Client = require('../src/client')

const c = new Client()

// do test
test('temp', () => {
    expect(c).toBeInstanceOf(Client)
})