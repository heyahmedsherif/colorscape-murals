import React from 'react';
import GalleryPage from '../components/GalleryPage';

const commercialImages = [
  {
    src: "./images/gallery/commercial/commercial1.jpg",
    alt: "Commercial mural at Seagate Chiropractic"
  },
  {
    src: "./images/gallery/commercial/commercial2.jpg",
    alt: "Commercial mural in office"
  },
  {
    src: "./images/gallery/commercial/commercial3.jpg",
    alt: "Commercial mural in retail space"
  }
];

const ResidentialCommercialGallery: React.FC = () => {
  return (
    <GalleryPage
      title="Residential & Commercial Gallery"
      images={commercialImages}
    />
  );
};

export default ResidentialCommercialGallery; 