import "react-responsive-carousel/lib/styles/carousel.min.css"; // required CSS
import { Carousel } from "react-responsive-carousel";
import './App.css'

function App() {
  return (
    <div>
      <h1>React Carousel</h1>

      <Carousel>
        <div>
          <img src="https://static-cdn.toi-media.com/fr/uploads/2020/02/aUntitled-4-6.jpg" alt="TelAviv" />
          <p className="legend">Tel-Aviv</p>
        </div>

        <div>
          <img src="https://www.visit.brussels/content/dam/visitbrussels/images/b2c/what-to-do/les-incontournables-de-bruxelles/GRAND_PLACE_4212-%C2%A9_visit.brussels_-_Jean-Michel_Byl.jpg" alt="Brussels" />
          <p className="legend">Brussels</p>
        </div>

        <div>
          <img src="https://mistertravel.news/wp-content/uploads/2024/05/New_york_times_square.jpg" alt="NewYork" />
          <p className="legend">New-York</p>
        </div>

        <div>
          <img src="https://cdn.conscious-explorer.com/keycdn/file/a51da0068065eaead885f44f4e029d36835038a5d42082201d17f28559b2d4b5/SJoUTslQaytZjQm0.webp" alt="Seychelles" />
          <p className="legend">Seychelles</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
