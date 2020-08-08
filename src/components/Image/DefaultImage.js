import React from 'react';

function DefaultImage(props) {
  return (
    <img
      className={props.className}
      alt={props.alt}
      src={props.src}
    />
  )
}

export default DefaultImage;
