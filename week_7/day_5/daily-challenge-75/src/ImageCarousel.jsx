import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const images = [
  {
    src: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg",
    alt: "Hong Kong",
    label: "Hong Kong",
  },
  {
    src: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp",
    alt: "Macao",
    label: "Macao",
  },
  {
    src: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp",
    alt: "Japan",
    label: "Japan",
  },
  {
    src: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp",
    alt: "Las Vegas",
    label: "Las Vegas",
  },
];

function ImageCarousel() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      interval={4000}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={image.alt} />
          <p className="legend">{image.label}</p>
        </div>
      ))}
    </Carousel>
  );
}

export default ImageCarousel;
