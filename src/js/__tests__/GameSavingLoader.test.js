import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';

jest.mock('../reader');

beforeEach(() => {
  jest.resetAllMocks();
});

test('works with async/await', async () => {
  read.mockReturnValue(Promise.resolve(new Uint16Array([116, 101, 115, 116])));
  expect.assertions(1);
  const data = await GameSavingLoader.load();
  expect(data).toEqual('test');
});

test('error handling', async () => {
  read.mockReturnValue(Promise.reject(new Error('Ошибка!')));
  expect.assertions(1);
  try {
    await GameSavingLoader.load();
  } catch (error) {
    expect(error).toEqual(Error('Ошибка!'));
  }
});
