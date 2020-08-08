import DefaultImage from './DefaultImage';
import GatsbyImage from 'components/Image/GatsbyImage';

let Image = DefaultImage;

if (window.useGatsbyImage) {
  Image = GatsbyImage;
}

console.log(Image);
export default Image;
