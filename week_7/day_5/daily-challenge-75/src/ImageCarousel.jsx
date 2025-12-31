import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const images = [
  {
    src: "https://static-cdn.toi-media.com/fr/uploads/2020/02/aUntitled-4-6.jpg",
    alt: "Tel Aviv",
    label: "Tel-Aviv",
  },
  {
    src: "https://www.visit.brussels/content/dam/visitbrussels/images/b2c/what-to-do/les-incontournables-de-bruxelles/GRAND_PLACE_4212-%C2%A9_visit.brussels_-_Jean-Michel_Byl.jpg",
    alt: "Brussels",
    label: "Brussels",
  },
  {
    src: "https://mistertravel.news/wp-content/uploads/2024/05/New_york_times_square.jpg",
    alt: "New York",
    label: "New York",
  },
  {
    src: "https://cdn.conscious-explorer.com/keycdn/file/a51da0068065eaead885f44f4e029d36835038a5d42082201d17f28559b2d4b5/SJoUTslQaytZjQm0.webp",
    alt: "Seychelles",
    label: "Seychelles",
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
