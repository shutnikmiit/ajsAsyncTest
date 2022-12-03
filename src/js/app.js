import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    console.log(await GameSavingLoader.load());
  } catch (err) {
    console.log(err);
  }
})();
