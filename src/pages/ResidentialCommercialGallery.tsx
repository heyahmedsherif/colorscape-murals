import React from 'react';
import GalleryPage from '../components/GalleryPage';

const commercialImages = [
  {
    src: "./images/gallery/commercial/commercial1.jpg",
    alt: "Commercial mural at Seagate Chiropractic",
    description: "Professional mural enhancing business space"
  },
  {
    src: "./images/gallery/commercial/commercial2.jpg",
    alt: "Commercial mural in office",
    description: "Office mural creating inspiring workspace"
  },
  {
    src: "./images/gallery/commercial/commercial3.jpg",
    alt: "Commercial mural in retail space",
    description: "Retail space mural attracting customers"
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