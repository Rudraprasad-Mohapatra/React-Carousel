import './App.css'
import "driver.js/dist/driver.css";

import { driver } from "driver.js";
import { useEffect, useRef, useState } from "react";

import apj from "./assets/Images/apj.png";
import billgates from "./assets/Images/billGates.png";
import einstein from "./assets/Images/einstein.png";
import nelson from "./assets/Images/nelsonMandela.png";
import steveJobs from "./assets/Images/steveJobs.png";
import ImageComponent from './Components/ImageComponent.jsx';

const featuredImages = [apj, billgates, einstein, nelson, steveJobs];
let count = 0;
let slideInterval;
function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef();

  const handleOnNextClick = () => {
    count = (count + 1) % featuredImages.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  const handleOnPrevClick = () => {
    const productsLength = featuredImages.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 2000)
  }

  const pauseSlider = () => {
    clearInterval(slideInterval);
  }

  useEffect(() => {
    startSlider();
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    const driverObj = driver({
      showProgress: false,
      animate: false,
      steps: [
        { element: '.prev', popover: { title: 'Prev Button', description: 'Click to see previous picture' } },
        { element: '.next', popover: { title: 'Next Button', description: 'Click to see Next picture' } },
      ]
    });

    driverObj.drive();

    return () => {
      clearInterval(slideInterval);
    }
  }, []);





  return (
    <div className='max-w-screen-xl m-auto'>
      <div ref={slideRef} className="w-full relative select-none">
        <ImageComponent featuredImages={featuredImages} currentIndex={currentIndex} />

        <div className="top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
          <button className="prev" onClick={handleOnPrevClick}>Previous</button>
          <button className="next" onClick={handleOnNextClick}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default App
