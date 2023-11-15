import Carousel from 'react-bootstrap/Carousel';
import './CarouselComponet.css';

function CarouselComponet() {
  return (
    <Carousel fade>
      <Carousel.Item className='carouseSize'>
        <img src="https://www.lahiguera.net/cinemania/pelicula/6395/la_gran_estafa_americana-cartel-5306.jpg" alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carouseSize'>
      <img src="https://www.lahiguera.net/cinemania/pelicula/6395/la_gran_estafa_americana-cartel-5306.jpg" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carouseSize'>
      <img src="https://www.lahiguera.net/cinemania/pelicula/6395/la_gran_estafa_americana-cartel-5306.jpg" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponet;