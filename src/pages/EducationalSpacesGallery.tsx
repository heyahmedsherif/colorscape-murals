import React from 'react';
import GalleryPage from '../components/GalleryPage';

const educationalImages = [
  {
    src: "./images/gallery/educational/educational1.jpg",
    alt: "Educational mural in school",
    description: "Inspirational mural in educational setting"
  },
  {
    src: "./images/gallery/educational/educational2.jpg",
    alt: "Educational mural with learning theme",
    description: "Mural promoting learning and creativity"
  },
  {
    src: "./images/gallery/educational/educational3.jpg",
    alt: "Educational mural in classroom",
    description: "Classroom mural enhancing learning environment"
  },
  {
    src: "./images/gallery/educational/educational4.jpg",
    alt: "Educational mural in library",
    description: "Library mural inspiring young readers"
  },
  {
    src: "./images/gallery/educational/educational5.jpg",
    alt: "Educational mural in hallway",
    description: "Hallway mural creating welcoming atmosphere"
  },
  {
    src: "./images/gallery/educational/educational6.jpg",
    alt: "Educational mural in common area",
    description: "Common area mural promoting school spirit"
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