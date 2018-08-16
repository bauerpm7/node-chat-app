const expect = require('expect');

const { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    //store res in variable
    const from = 'Mike';
    const text = 'This is a new message';
    const message = generateMessage(from, text);
    //assert from match
    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(message.createdAt).toBeA('number')
    //assert text match
    //assert createdAt is number
  });
});
