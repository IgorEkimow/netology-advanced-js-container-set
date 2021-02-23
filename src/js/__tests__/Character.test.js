import Character from '../Character';

test('should throw error for class name too short', () => {
  const received = () => new Character('d', 'Daemon');
  const expected = 'Имя класса персонажа должно быть строкой и содержать от 2 до 10 символов';
  expect(received).toThrowError(expected);
});

test('should throw error for class name too long', () => {
  const received = () => new Character('daemonstest', 'Daemon');
  const expected = 'Имя класса персонажа должно быть строкой и содержать от 2 до 10 символов';
  expect(received).toThrowError(expected);
});

test('should throw error for class type is unknown', () => {
  const received = () => new Character('Алексей', 'Healer');
  const expected = 'Такого типа класса персонажа в не существует';
  expect(received).toThrowError(expected);
});
