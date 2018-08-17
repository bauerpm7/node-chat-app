const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    //store res in variable
    const from = 'Mike';
    const text = 'This is a new message';
    const message = generateMessage(from, text);

    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(message.createdAt).toBeA('number');
  });
});
 describe('generateLocationMessage', () => {
  it('should generate the correct location message object', () => {
    const from = 'Mike';
    const latitude = 1;
    const longitude = 1;
    const message = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).toBeA('number');
    expect(message.from).toBe(from);
    expect(message.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`)
  });
 });
