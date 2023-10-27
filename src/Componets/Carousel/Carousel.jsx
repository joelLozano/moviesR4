import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

export default function CarouselComponent () {
    
  return (
     <Carousel>
      <div >
        <img src="https://images5.alphacoders.com/132/thumbbig-1328421.webp" alt="Imagen 1" />
      </div>
      <div>
        <img src="https://www.gran-turismo.com/images/c/i13ynTpBw8HAmb.jpg" alt="Imagen 2" />
      </div>
      <div>
        <img src="https://files.merca20.com/uploads/2023/10/radical-eugenio-derbez.jpg" alt="Imagen 3" />
      </div>

    </Carousel>
  );
};

