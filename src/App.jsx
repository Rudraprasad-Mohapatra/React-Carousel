import apj from "./assets/Images/apj.png";
import billgates from "./assets/Images/billGates.png";
import einstein from "./assets/Images/einstein.png";
import nelson from "./assets/Images/nelsonMandela.png";
import steveJobs from "./assets/Images/steveJobs.png";

import './App.css'

const featuredImages = [apj, billgates, einstein, nelson, steveJobs]
function App() {

  return (
    <div className='max-w-screen-xl m-auto'>
      <div className="w-full relative select-none">
        <img src={featuredImages[0]} alt="1st Image" />

        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  )
}

export default App
