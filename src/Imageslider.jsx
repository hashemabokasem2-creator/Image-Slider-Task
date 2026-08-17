import React, { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import "./Imageslider.css";

const images = [
  { src: "https://picsum.photos/1200/600?random=1", alt: "Image 1" },
  { src: "https://picsum.photos/1200/600?random=2", alt: "Image 2" },
  { src: "https://picsum.photos/1200/600?random=3", alt: "Image 3" },
  { src: "https://picsum.photos/1200/600?random=4", alt: "Image 4" },
];

function Imageslider({ accentColor }) {
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
          <Card.Footer className="sliderControlsBar d-flex align-items-center justify-content-between">
            <Button
              className="navSliderBtn"
              style={{ backgroundColor: accentColor, borderColor: accentColor }}
              onClick={prevImage}
            >
              Prev
            </Button>

            <div className="slideCounterBox">
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
