import React, { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import "./Imageslider.css";

const images = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=600&fit=crop",
    alt: "Image 1",
  },
  {
    src: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1200&h=600&fit=crop",
    alt: "Image 2",
  },
  {
    src: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=1200&h=600&fit=crop",
    alt: "Image 3",
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=600&fit=crop",
    alt: "Image 4",
  },
];

function Imageslider({ accentColor, theme }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const randomImage = () => {
    let randIndex;
    do {
      randIndex = Math.floor(Math.random() * images.length);
    } while (randIndex === currentIndex);
    setCurrentIndex(randIndex);
  };
  return (
    <>
      <Container className="my-5 pt-5">
        <Card className="heroCarouselCard">
          <div className="heroImgWrapper" onClick={randomImage}>
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="heroSlideImg"
            />
          </div>
          <Card.Footer
            className="sliderControlsBar d-flex align-items-center justify-content-between"
            style={{
              backgroundColor: theme === "light" ? "#ffffff" : "#080d1d",
            }}
          >
            <Button
              className="navSliderBtn"
              style={{ backgroundColor: accentColor, borderColor: accentColor }}
              onClick={prevImage}
            >
              Prev
            </Button>

            <div
              className="slideCounterBox"
              style={{
                color: theme === "light" ? "#0d0e0f" : "#edeaea",
                backgroundColor: theme === "light" ? "#ffffff" : "#080d1d",
              }}
            >
              {currentIndex + 1} / {images.length}
            </div>

            <Button
              className="navSliderBtn"
              style={{ backgroundColor: accentColor, borderColor: accentColor }}
              onClick={nextImage}
            >
              Next
            </Button>
          </Card.Footer>
        </Card>
      </Container>
    </>
  );
}

export default Imageslider;
