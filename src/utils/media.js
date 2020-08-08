const MEDIA_SIZES = {
  xsmall: {min: 0, max: 599},
  small: {min: 600, max: 779},
  medium: {min: 780, max: 979},
  large: {min: 980, max: 1279},
  xlarge: {min: 1280, max: 1339},
  xxlarge: {min: 1340, max: Infinity},
};

const media = {
  between(minKey: Size, maxKey: Size, excludeMax: boolean = false) {
    if (excludeMax) {
      return `@media (min-width: ${
        MEDIA_SIZES[minKey].min
      }px) and (max-width: ${MEDIA_SIZES[maxKey].min - 1}px)`;
    }

    if (MEDIA_SIZES[maxKey].max === Infinity) {
      return `@media (min-width: ${MEDIA_SIZES[minKey].min}px)`;
    }

    return `@media (min-width: ${MEDIA_SIZES[minKey].min}px) and (max-width: ${MEDIA_SIZES[maxKey].max}px)`;
  },

  greaterThan(key: Size) {
    return `@media (min-width: ${MEDIA_SIZES[key].min}px)`;
  },

  lessThan(key: Size) {
    return `@media (max-width: ${MEDIA_SIZES[key].min - 1}px)`;
  },

  size(key: Size) {
    const size = MEDIA_SIZES[key];

    if (size.min == null) {
      return media.lessThan(key);
    }

    if (size.max == null) {
      return media.greaterThan(key);
    }

    return media.between(key, key);
  },
};

export {media};
