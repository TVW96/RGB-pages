// import logo from './logo.svg';

import React from 'react';
import Navbar from './components/Navbar'
import "./styles.css"
import Home from "./pages/Home"
import Red from "./pages/Red"
import Green from "./pages/Green"
import Blue from "./pages/Blue"
import Carousel, {CarouselItem} from "./components/Carousel";

// import {Carousel} from './components/Carousel';
// import {Navbar} from './components/Navbar';

function App() {
  // console.log(window.location)
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/red":
      component = <Red />
      break
    case "/green":
      component = <Green />
      break
    case "/blue":
      component = <Blue />
      break
    default:
      component = <Home />
  }

  return (
    <>
      <Navbar />
      <div className="container">
      {component}
      </div>
      <div className="App">
        <Carousel>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem>
        </Carousel>
      </div>
    </>
  );
}

export default App;
