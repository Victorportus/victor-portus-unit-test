// The operation should retunr the sum of two numbers

const { addition } = require('./addition');

// test('2 + 3 = 5', () => {
//     expect(addition(2, 3)).toBe(5);
// })

// test('1 + 7 = 8', () => {
//     expect(addition(1, 7)).toBe(8);
// })

test.each([
	[3, 4, 7],
	[5, -10, -5],
	[0, 2, 2],
])('a + b = c', (a, b, expected) => {
	expect(addition(a, b)).toBe(expected);
});