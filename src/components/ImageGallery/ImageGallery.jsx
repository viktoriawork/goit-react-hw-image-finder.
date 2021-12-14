import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ hits, onClick }) => {
  return (
    <ul className="ImageGallery" id="gallery">
      {hits.map((hit) => (
        <ImageGalleryItem
          key={hit.id}
          src={hit.webformatURL}
          bigSrc={hit.largeImageURL}
          id={hit.id}
          alt={hit.tags}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
