import React from 'react';

const ImageParagraph = props => (
  <div className={props.className}>
    <img src={props.imgUrl} alt={props.imgAlt} />
    <p>{props.children}</p>
  </div>
);

export default ImageParagraph;
