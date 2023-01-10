export const WORDS_BANK = {
  animals: [
    {
      word: 'MOUSE',
      img: '../assets/words/mouse.jpg',
      audio: '../assets/words-audio/Animals-0001.mp3',
    },
    {
      word: 'CAT',
      img: '../assets/words/cat.jpg',
      audio: '../assets/words-audio/Animals-0002.mp3',
    },
    {
      word: 'HORSE',
      img: '../assets/words/horse.jpg',
      audio: '../assets/words-audio/Animals-0003.mp3',
    },
    {
      word: 'CHICKEN',
      img: '../assets/words/chicken.jpg',
      audio: '../assets/words-audio/Animals-0004.mp3',
    },
    {
      word: 'RABBIT',
      img: '../assets/words/rabbit.jpg',
      audio: '../assets/words-audio//Animals-0005.mp3',
    },
    {
      word: 'PIG',
      img: '../assets/words/pig.jpg',
      audio: '../assets/words-audio//Animals-0006.mp3',
    },
    {
      word: 'DOG',
      img: '../assets/words/dog.jpg',
      audio: '../assets/words-audio//Animals-0007.mp3',
    },
    {
      word: 'INSECT',
      img: '../assets/words/insect.jpg',
      audio: '../assets/words-audio//Animals-0008.mp3',
    },
    {
      word: 'COW',
      img: '../assets/words/cow.jpg',
      audio: '../assets/words-audio//Animals-0009.mp3',
    },
    {
      word: 'BIRD',
      img: '../assets/words/bird.jpg',
      audio: '../assets/words-audio//Animals-0010.mp3',
    },
    {
      word: 'GOAT',
      img: '../assets/words/goat.jpg',
      audio: '../assets/words-audio/Animals-0011.mp3',
    },
    {
      word: 'SHEEP',
      img: '../assets/words/sheep.jpg',
      audio: '../assets/words-audio/Animals-0012.mp3',
    },
  ],
  football: [
    { word: 'STADIUM', img: '../assets/words/stadium.png' },
    { word: 'TEAM', img: '../assets/words/team.png' },
    { word: 'FIELD', img: '../assets/words/field.jpg' },
    { word: 'NET', img: '../assets/words/net.png' },
    { word: 'GOALKEEPER', img: '../assets/words/goalkeeper.png' },
  ],
  restaurant: [
    {
      word: 'waitress',
    },
    {
      word: 'glass',
    },
    {
      word: 'menu',
    },
    {
      word: 'cup',
    },
    {
      word: 'knife',
    },
    {
      word: 'plate',
    },
    {
      word: 'chef',
    },
    {
      word: 'meal',
    },
    {
      word: 'waiter',
    },
    {
      word: 'fork',
    },
    {
      word: 'bill',
    },
    {
      word: 'spoon',
    },
  ],
};

export const WORDS_LIST = WORDS_BANK.animals;

export const BOGGLE_GAME_DEFAULT_OPTIONS = {
  cols: 4,
  rows: 4,
  disabledDirections: ['N', 'W', 'NW', 'SW'],
  // dictionary: ['Bus', 'Car', 'Taxi', 'day', 'sad', 'bad', 'red'],
  dictionary: [...WORDS_LIST.map((animal) => animal.word)],
  maxWords: 20,
  backwardsProbability: 0.3,
  upperCase: true,
  diacritics: true,
};

export const COUNT_DOWN = 16;
