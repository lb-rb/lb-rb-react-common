import DefaultImage from './DefaultImage';
import GatsbyImage from 'components/Image/GatsbyImage';
import {useGatsbyImage} from 'config';

let Image = DefaultImage;

if (useGatsbyImage) {
  Image = GatsbyImage;
}

export default Image;
