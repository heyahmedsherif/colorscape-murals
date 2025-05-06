import React from 'react';
import GalleryPage from '../components/GalleryPage';

const publicImages = [
  {
    src: "./images/gallery/public/public1.jpg",
    alt: "Public mural at Omar K. Lightfoot Recreation Center",
    description: "Vibrant community mural at the recreation center"
  },
  {
    src: "./images/gallery/public/public8.jpg",
    alt: "Public mural at community center",
    description: "Large-scale mural enhancing public space"
  },
  {
    src: "./images/gallery/public/public9.jpg",
    alt: "Public mural in urban setting",
    description: "Urban art transforming public space"
  }
];

const PublicSpacesGallery: React.FC = () => {
  return (
    <GalleryPage
      title="Public Spaces Gallery"
      images={publicImages}
    />
  );
};

export default PublicSpacesGallery; 