import React from "react";
const ImageGalleryItem = ({ src, alt, bigSrc, onClick }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={src}
        alt={alt}
        className="ImageGalleryItem-image"
        onClick={() => onClick(bigSrc)}
      />
    </li>
  );
};

export default ImageGalleryItem;
