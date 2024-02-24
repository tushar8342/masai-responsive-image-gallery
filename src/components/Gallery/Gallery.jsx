import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import "./Gallery.css";

const Gallery = () => {
  const images = [
    {
      id: 1,
      title: "Car",
      price: 10,
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      title: "Bike",
      price: 20,
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      title: "Beach",
      price: 15,
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 4,
      title: "Tushar",
      price: 28,
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 5,
      title: "Bijay",
      price: 28,
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 6,
      title: "subha",
      price: 10,
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 7,
      title: "Tks",
      price: 25,
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 8,
      title: "Beach",
      price: 22,
      imageUrl: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className="gallery">
      {images.map((image) => (
        <ImageCard
          key={image.id}
          title={image.title}
          price={image.price}
          imageUrl={image.imageUrl}
        />
      ))}
    </div>
  );
};

export default Gallery;
