const BASE_URL = 'https://res.cloudinary.com/dtecpsig5/image/upload/f_webp/';
const CONFIG = {
  scale300: 'c_scale,w_300/',
  scale700: 'c_scale,w_700/',
  scale1000: 'c_scale,w_1000/',
  lowQuality: 'q_50/',
  blur: 'e_blur:2000/',
  pixelate: 'e_pixelate:10/'
};
const DIRECTORY = 'rolevoshnaya/';

const LOGO_IMAGE = BASE_URL + CONFIG.pixelate + DIRECTORY + 'logokanala';
const MANSION = BASE_URL + DIRECTORY + 'Main_mansion';
const FOREST = BASE_URL + DIRECTORY + 'Main_forest';
const HANDS_WITH_MAP = BASE_URL + DIRECTORY + 'book_tio7zx.png';

const CASTLE = BASE_URL + DIRECTORY + 'castleBackground';
const MOUNTAINS = BASE_URL + DIRECTORY + 'mountainsBackground';
const LIBRARY = BASE_URL + DIRECTORY + 'guildBackground__library';
const STRANGER = BASE_URL + DIRECTORY + 'lovecraft';
const GHOST = BASE_URL + DIRECTORY + 'ghost_jgvsar';

const PORTRAIT = BASE_URL + CONFIG.scale300 + CONFIG.lowQuality + DIRECTORY;

export {
  LOGO_IMAGE,
  MANSION,
  FOREST,
  HANDS_WITH_MAP,
  CASTLE,
  MOUNTAINS,
  LIBRARY,
  STRANGER,
  PORTRAIT,
  GHOST,
};

const getAchievementLink = (id: string): string => BASE_URL + DIRECTORY + id;

export const achievements = [
  {
    id: '0001',
    title: 'GhostBuster!',
    description: 'Who you gonna call?',
    image: getAchievementLink('ghostBusterAchievment_ntisc3'),
    reached: false,
  },
  {
    id: '0002',
    title: 'Загадочный текст',
    description: 'Король ужасов найден!',
    image: getAchievementLink('mysteryTextAchievement_polmrr'),
    reached: false,
  },
  {
    id: '0003',
    title: 'Загадочный текст',
    description: 'Король ужасов найден!',
    image: getAchievementLink('mysteryTextAchievement_polmrr'),
    reached: false,
  },
  {
    id: '0004',
    title: 'Загадочный текст',
    description: 'Король ужасов найден!',
    image: getAchievementLink('mysteryTextAchievement_polmrr'),
    reached: false,
  },
  {
    id: '0005',
    title: 'Загадочный текст',
    description: 'Король ужасов найден!',
    image: getAchievementLink('mysteryTextAchievement_polmrr'),
    reached: false,
  },
  {
    id: '0006',
    title: 'Загадочный текст',
    description: 'Король ужасов найден!',
    image: getAchievementLink('mysteryTextAchievement_polmrr'),
    reached: false,
  }
];

export const navLinks = [
  {
    title: 'Выход',
    url: '/',
    id: '1'
  },
  {
    title: 'Гильдия',
    url: '/guild',
    id: '2'
  },
  {
    title: 'О нас',
    url: '/about',
    id: '3'
  },
  {
    title: 'Блог',
    url: '/news',
    id: '4',
  },
];
