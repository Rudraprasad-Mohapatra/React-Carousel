import './App.css'

import { useEffect, useRef, useState } from "react";

import apj from "./assets/Images/apj.png";
import billgates from "./assets/Images/billGates.png";
import einstein from "./assets/Images/einstein.png";
import nelson from "./assets/Images/nelsonMandela.png";
import steveJobs from "./assets/Images/steveJobs.png";

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

    return () => {
      clearInterval(slideInterval);
    }
  }, []);


  return (
    <div className='max-w-screen-xl m-auto'>
      <div ref={slideRef} className="w-full relative select-none">
        <div className="aspect-w-10 aspect-h-9">
          <img src={featuredImages[currentIndex]} alt="1st Image" />
        </div>

        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
          <button onClick={handleOnPrevClick}>Previous</button>
          <button onClick={handleOnNextClick}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default App
