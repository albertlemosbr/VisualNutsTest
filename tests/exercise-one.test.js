const isVisualNuts = require('../src/exercise-one');

describe('Exercise One', () => {
  it('should return Visual Nuts when number is divisible for 3 and 5', () => {
    expect(isVisualNuts(15)).toBe('Visual Nuts');
    expect(isVisualNuts(30)).toBe('Visual Nuts');
    expect(isVisualNuts(45)).toBe('Visual Nuts');
  });

  it('should return Visual when number is divisible for 3', () => {
    expect(isVisualNuts(3)).toBe('Visual');
    expect(isVisualNuts(9)).toBe('Visual');
    expect(isVisualNuts(18)).toBe('Visual');
  });

  it('should return Nuts when number is divisible for 5', () => {
    expect(isVisualNuts(5)).toBe('Nuts');
    expect(isVisualNuts(10)).toBe('Nuts');
    expect(isVisualNuts(20)).toBe('Nuts');
  });

  it('should return number input when number are not divisible for 3 or 5', () => {
    expect(isVisualNuts(2)).toBe(2);
    expect(isVisualNuts(4)).toBe(4);
    expect(isVisualNuts(16)).toBe(16);
    expect(isVisualNuts(0)).toBe(0);
  });
  
});