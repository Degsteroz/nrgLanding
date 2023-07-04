const BASE_URL = 'https://res.cloudinary.com/dtecpsig5/image/upload/f_webp/';
const CONFIG = {
  scale300: 'c_scale,w_300/',
  scale700: 'c_scale,w_700/',
  scale1000: 'c_scale,w_1000/',
  lowQuality: 'q_50/',
  blur: 'e_blur:2000/',
  pixelate: 'e_pixelate:8/'
};
const DIRECTORY = 'rolevoshnaya/';

const LOGO_IMAGE = BASE_URL + CONFIG.pixelate + DIRECTORY + 'logokanala';
const MANSION = BASE_URL + DIRECTORY + 'Main_mansion';
const FOREST = BASE_URL + DIRECTORY + 'Main_forest';
const HANDS_WITH_MAP = BASE_URL + DIRECTORY + 'hands';

const CASTLE = BASE_URL + DIRECTORY + 'castleBackground';
const MOUNTAINS = BASE_URL + DIRECTORY + 'mountainsBackground';

export {
  LOGO_IMAGE,
  MANSION,
  FOREST,
  HANDS_WITH_MAP,
  CASTLE,
  MOUNTAINS
};
