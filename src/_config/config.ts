const BASE_URL = 'https://res.cloudinary.com/dtecpsig5/image/upload/f_webp/';
const CONFIG = {
  scale300: 'c_scale,w_300/',
  scale700: 'c_scale,w_700/',
  scale1000: 'c_scale,w_1000/',
  lowQuality: 'q_50/',
  blur: 'e_blur:2000/',
  pixelate: 'e_pixelate:15/'
};
const DIRECTORY = 'rolevoshnaya/';

const LOGO_IMAGE = BASE_URL + CONFIG.pixelate + DIRECTORY + 'logokanala';
const CASTLE = BASE_URL + DIRECTORY + 'castleBackground';
const MOUNTAINS = BASE_URL + DIRECTORY + 'mountainsBackground';
const HANDS_WITH_MAP = BASE_URL + DIRECTORY + 'hands';

export {
  LOGO_IMAGE,
  CASTLE,
  MOUNTAINS,
  HANDS_WITH_MAP,
};
