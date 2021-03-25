import logo from "./logo.svg";
import "./App.css";
import Carousel from "react-bootstrap/Carousel";
import gambar1 from "./assets/images/1.jpg";
import gambar2 from "./assets/images/2.jpg";
import gambar3 from "./assets/images/3.jpg";

function App() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={gambar1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={gambar2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={gambar3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
