const isValidEmail = require('./isValidEmail');

test('valid email should return true', () => {
  expect(isValidEmail('hello@gmail.com')).toBe(true);
});

test('invalid email should return false', () => {
  expect(isValidEmail('notanemail')).toBe(false);
});