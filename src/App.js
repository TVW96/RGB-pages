import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import "./styles.css"
import Home from "./pages/Home"
import Red from "./pages/Red"
import Green from "./pages/Green"
import Blue from "./pages/Blue"

import Carousel, {CarouselItem} from "./components/Carousel";
import StarWars from './Youtube/StarWars';
import Incredibles from './Youtube/Incredibles';
import ToyStory from './Youtube/ToyStory';




function App() {
  const onClickHandler = () => {
    }
  return (
    <>
      <header>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route onClick={onClickHandler} path="/" element={<Home />} />
            <Route onClick={onClickHandler} path="/red" element={<Red />} />
            <Route onClick={onClickHandler} path="/green" element={<Green />} />
            <Route onClick={onClickHandler} path="/blue" element={<Blue />} />
          </Routes>
        </BrowserRouter>
        {/* {component} */}

        <div className="App">
            <Carousel myColor="red"> 
            <CarouselItem><StarWars videoId='92CxXIyh6FI' /></CarouselItem>
            <CarouselItem><Incredibles videoId='M5Pk9FMxrp4' /></CarouselItem>
            <CarouselItem><ToyStory videoId='wIHAczUp1fQ' /></CarouselItem>
            </Carousel>
        </div>
      </header>
    </>
  );
}

export default App;
