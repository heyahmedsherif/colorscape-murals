import React from 'react';
import GalleryPage from '../components/GalleryPage';

const educationalImages = [
  {
    src: "./images/gallery/educational/educational1.jpg",
    alt: "Educational mural in school"
  },
  {
    src: "./images/gallery/educational/educational2.jpg",
    alt: "Educational mural with learning theme"
  },
  {
    src: "./images/gallery/educational/educational3.jpg",
    alt: "Educational mural in classroom"
  },
  {
    src: "./images/gallery/educational/educational4.jpg",
    alt: "Educational mural in library"
  },
  {
    src: "./images/gallery/educational/educational5.jpg",
    alt: "Educational mural in hallway"
  },
  {
    src: "./images/gallery/educational/educational6.jpg",
    alt: "Educational mural in common area"
  }
];

const EducationalSpacesGallery: React.FC = () => {
  return (
    <GalleryPage
      title="Educational Spaces Gallery"
      images={educationalImages}
    />
  );
};

export default EducationalSpacesGallery; 