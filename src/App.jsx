import React , { useEffect, useState } from 'react';
import './App.css'
import icon1 from './assets/icon1.jpg';
import icon2 from './assets/icon2.jpg';
import icon3 from './assets/icon3.jpg';
import icon4 from './assets/icon4.jpg';
import icon5 from './assets/icon5.jpg';
import icon6 from './assets/icon6.jpg';
import icon7 from './assets/icon7.jpg';
import icon8 from './assets/icon8.jpg';
import icon9 from './assets/icon9.jpg';
import icon10 from './assets/icon10.jpg';
import icon11 from './assets/icon11.jpg';
import pully from './assets/pully.jpg'
import section5img from './assets/section5img.jpg'
import star from './assets/star-7207.png'
import '../src/style.css'
import math1 from './assets/math1.jpg'
import math2 from './assets/math2.jpg'
import math3 from './assets/math3.jpg'
import math4 from './assets/math4.jpg'
import last from './assets/last.jpg'
// import Spinner from 'react-bootstrap/Spinner';
// import { Spinner } from 'react-spinners';
const Section1 = ({ onNext }) => {
  const [selectedOption, setSelectedOption] = useState('');
  
  const handleOptionChange = (event) => {
    // setBorderColor('red')
    setSelectedOption(event.target.value);
  };

  const handleNext = () => {
    // Validate if an option is selected
    if (!selectedOption) {
      // You can show an error message or prevent moving to the next step
      alert('select an option');
      return;
    }
    // Call onNext to move to the next section
    // if (option) {
    //   onNext(option);
    // } else {
    //   // Handle case when no option is selected
    //   alert("Please select an option");
    // }
    onNext();
  };

  return (
    <>
      <div>
        <h1 className='text-gray-900 font-bold text-2xl md:text-4xl py-5 '>Which describes you best ?</h1>
        <h1 className='text-gray-700 text-md'>This will help us personalize your experience.</h1>
    </div>
    <div className=' pt-[40px] flex flex-col justify-center items-center'>
      <div className='flex w-full md:w-1/2  justify-center items-center'>
          <input className="sr-only peer flex border-[1.5px] border-red-400 rounded-md mb-3 hover:border-yellow-400 hover:scale-105 ease-in-out duration-300 option-label" checked={selectedOption === 'option1'} onChange={handleOptionChange}  type="radio" value="option1" name="answer" id="answer_yes1"/>
          <label className='w-full mb-3 hover:border-yellow-400 px-4 gap-2 hover:scale-105 ease-in-out duration-300 option-label flex justify-start items-center p-0 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent' for="answer_yes1"><img className='h-12 w-12' src={icon1} alt="icon1"/>Student <span className='text-gray-500 text-sm md:text-normal'>or soon to be enrolled</span></label>
      </div>
      <div className='flex  w-full md:w-1/2 justify-center items-center'>
          <input className="sr-only peer flex border-[1.5px] border-red-400 rounded-md mb-3 hover:border-yellow-400 hover:scale-105 ease-in-out duration-300 option-label" checked={selectedOption === 'option2'} onChange={handleOptionChange} type="radio" value="option2" name="answer" id="answer_yes2"/>
          <label className='w-full mb-3 hover:border-yellow-400 px-4 gap-2 hover:scale-105 ease-in-out duration-300 option-label flex justify-start items-center p-0 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent' for="answer_yes2"><img className='h-12 w-12' src={icon2} alt="icon1"/>Professional <span className='text-gray-500 text-sm md:text-normal'>pursuing a career</span></label>
      </div>
      <div className='flex  w-full md:w-1/2 justify-center items-center'>
          <input className="sr-only peer flex border-[1.5px] border-red-400 rounded-md mb-3 hover:border-yellow-400 hover:scale-105 ease-in-out duration-300 option-label" checked={selectedOption === 'option3'} onChange={handleOptionChange} type="radio" value="option3" name="answer" id="answer_yes3"/>
          <label className='w-full mb-3 hover:border-yellow-400 px-4 gap-2 hover:scale-105 ease-in-out duration-300 option-label flex justify-start items-center p-0 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent' for="answer_yes3"><img className='h-12 w-12' src={icon3} alt="icon1"/>Parent <span className='text-gray-500 text-sm md:text-normal'>of a school-age child</span></label>
      </div>
      <div className='flex  w-full md:w-1/2 justify-center items-center'>
          <input className="sr-only peer flex border-[1.5px] border-red-400 rounded-md mb-3 hover:border-yellow-400 hover:scale-105 ease-in-out duration-300 option-label" checked={selectedOption === 'option4'} onChange={handleOptionChange} type="radio" value="option4" name="answer" id="answer_yes4"/>
          <label className='w-full mb-3 hover:border-yellow-400 px-4 gap-2 hover:scale-105 ease-in-out duration-300 option-label flex justify-start items-center p-0 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent' for="answer_yes4"><img className='h-12 w-12' src={icon4} alt="icon1"/>Lifelong Learner</label>
      </div>
      <div className='flex w-full md:w-1/2 justify-center items-center'>
          <input className="sr-only peer flex border-[1.5px] border-red-400 rounded-md mb-3 hover:border-yellow-400 hover:scale-105 ease-in-out duration-300 option-label" checked={selectedOption === 'option5'} onChange={handleOptionChange} type="radio" value="option5" name="answer" id="answer_yes5"/>
          <label className='w-full mb-3 hover:border-yellow-400 px-4 gap-2 hover:scale-105 ease-in-out duration-300 option-label flex justify-start items-center p-0 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent' for="answer_yes5"><img className='h-12 w-12' src={icon5} alt="icon1"/>Teacher</label>
      </div>
      <div className='flex w-full md:w-1/2 justify-center items-center'>
          <input className="sr-only peer flex border-[1.5px] border-red-400 rounded-md mb-3 hover:border-yellow-400 hover:scale-105 ease-in-out duration-300 option-label" checked={selectedOption === 'option6'} onChange={handleOptionChange} type="radio" value="option6" name="answer" id="answer_yes6"/>
          <label className='w-full mb-3 hover:border-yellow-400 px-4 gap-2 hover:scale-105 ease-in-out duration-300 option-label flex justify-start items-center p-0 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent' for="answer_yes6"><img className='h-12 w-12' src={icon6} alt="icon1"/>Other</label>
      </div>
      <div className='flex justify-center pt-4'>
          <button className='text-white font-bold px-2 py-2 border-2 border-black rounded-lg w-[150px] bg-black' onClick={handleNext}>Continue</button>
      </div>
      {/* <button onClick={handleNext}>Next</button> */}
    </div>
    </>
  );
};


const Section2 = ({ onNext }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNext = () => {
    // Validate if an option is selected
    if (!selectedOption) {
      // You can show an error message or prevent moving to the next step
      alert("select an option")
      return;
    }
    // Call onNext to move to the next section
    onNext();
  };

  return (
    <>
      <div>
        <h1 className='text-gray-900 font-bold text-2xl md:text-4xl py-5'>Which are you most interested in?</h1>
        <h1 className='text-gray-700 text-md'>Choose just one. This will help us get you started (but won't limit your experience).</h1>
    </div>

    <div className=' pt-[40px] flex flex-col justify-center items-center'>
      <div className='flex w-full md:w-1/2 justify-center items-center'>
          <input className="sr-only peer flex rounded-md mb-3 hover:border-yellow-400 hover:scale-105 ease-in-out duration-300 option-label" checked={selectedOption === 'option11'} onChange={handleOptionChange}  type="radio" value="option11" name="answer" id="answer_yes11"/>
          <label className='text-sm md:text-[15px] w-full mb-3 hover:border-yellow-400 px-2 md:px-4 gap-2 hover:scale-105 ease-in-out duration-300 option-label flex justify-start items-center p-0 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent' for="answer_yes11"><img className='h-12 w-12' src={icon7} alt="icon1"/>Learning specific skills to advance my career </label>
      </div>
      <div className='flex w-full md:w-1/2 justify-center items-center'>
          <input className="sr-only peer flex border-[1.5px] border-red-400 rounded-md mb-3 hover:border-yellow-400 hover:scale-105 ease-in-out duration-300 option-label" checked={selectedOption === 'option22'} onChange={handleOptionChange} type="radio" value="option22" name="answer" id="answer_yes22"/>
          <label className='text-sm md:text-[15px] w-full mb-3 hover:border-yellow-400  px-2 md:px-4 gap-0 hover:scale-105 ease-in-out duration-300 option-label flex justify-start items-center p-0 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent' for="answer_yes22"><img className='h-12 w-12' src={icon8} alt="icon1"/>Exploring new topics I'm interested in</label>
      </div>
      <div className='flex w-full md:w-1/2 justify-center items-center'>
          <input className="sr-only peer flex border-[1.5px] border-red-400 rounded-md mb-3 hover:border-yellow-400 hover:scale-105 ease-in-out duration-300 option-label" checked={selectedOption === 'option33'} onChange={handleOptionChange} type="radio" value="option33" name="answer" id="answer_yes33"/>
          <label className='text-sm md:text-[15px] w-full mb-3 hover:border-yellow-400  px-2 md:px-4  gap-2 hover:scale-105 ease-in-out duration-300 option-label flex justify-start items-center p-0 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent' for="answer_yes33"><img className='h-12 w-12' src={icon9} alt="icon1"/>Refreshing my math foundations </label>
      </div>
      <div className='flex w-full md:w-1/2 justify-center items-center'>
          <input className="sr-only peer flex border-[1.5px] border-red-400 rounded-md mb-3 hover:border-yellow-400 hover:scale-105 ease-in-out duration-300 option-label" checked={selectedOption === 'option44'} onChange={handleOptionChange} type="radio" value="option44" name="answer" id="answer_yes44"/>
          <label className='text-sm md:text-[15px]  w-full mb-3 hover:border-yellow-400  px-2 md:px-4  gap-2 hover:scale-105 ease-in-out duration-300 option-label flex justify-start items-center p-0 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent' for="answer_yes44"><img className='h-12 w-12' src={icon10} alt="icon1"/>Exercising my brain to stay sharp </label>
      </div>
      <div className='flex w-full md:w-1/2 justify-center items-center'>
          <input className="sr-only peer flex border-[1.5px] border-red-400 rounded-md mb-3 hover:border-yellow-400 hover:scale-105 ease-in-out duration-300 option-label" checked={selectedOption === 'option55'} onChange={handleOptionChange} type="radio" value="option55" name="answer" id="answer_yes55"/>
          <label className='text-sm md:text-[15px] w-full mb-3 hover:border-yellow-400  px-2 md:px-4  gap-2 hover:scale-105 ease-in-out duration-300 option-label flex justify-start items-center p-0 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent' for="answer_yes55"><img className='h-12 w-12' src={icon11} alt="icon1"/>Something else</label>
      </div>
      
      <div className='flex justify-center pt-4'>
          <button className='text-white font-bold px-2 py-2 border-2 border-black rounded-lg w-[150px] bg-black' onClick={handleNext}>Continue</button>
      </div>
      {/* <button onClick={handleNext}>Next</button> */}
    </div>
    </>
  );
};

const Section3 = ({ onNext }) => {
  // const [selectedOption, setSelectedOption] = useState('');

  // const handleOptionChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };

  const handleNext = () => {
    // Validate if an option is selected
    // if (!selectedOption) {
    //   // You can show an error message or prevent moving to the next step
    //   return;
    // }
    // Call onNext to move to the next section
    onNext();
  };

  return (
    <>
      <div className='flex flex-col md:flex-row pt-5'>
        <div className='md:block md:h-[500px] md:w-full flex justify-center'>
          <img className=' h-full w-[80%] flex justify-center'  src={pully} alt="pully" />
        </div>
        <div className='flex flex-col justify-center gap-6 pt-[2em] md:pt-0'>
          <h1 className='text-3xl md:text-4xl font-bold justify-center flex md:justify-start'>You're in right place</h1>
         <div className='flex justify-start pt-5 md:pt-10  pb-10'>
          <h1 className= 'text-[15px] md:text-[18px] text-left font-medium flex justify-start'>
            Brilliant gets you hands-on to help improve your professional
            skills and knowledge. You'll interact with concepts and solve
            fun problems in math, science, and computer science.
            </h1>
         </div>
        </div>
      </div>
      <div className='flex justify-center pt-4'>
        <button className='text-white font-bold px-2 py-2 border-2 border-black rounded-lg w-[150px] bg-black' onClick={handleNext}>Continue</button>
      </div>
    </>
  );
};

const Section4 = ({ onNext }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNext = () => {
    // Validate if an option is selected
    if (!selectedOption) {
      alert("select an option")
      return;
    }
    // Call onNext to move to the next section
    onNext();
  };

  return (
    <>
      <div>
        <h1 className='text-gray-900 font-bold text-2xl md:text-4xl py-5 pt-12'>What is your math comfort level?</h1>
        <h1 className='text-gray-700 text-md'>Choose the highest level you feel confident in - you can always adjust later.</h1>
      </div>
      
      <div className='md:h-[20rem] flex flex-col md:flex-row justify-center items-center gap-4 m-4 pt-6'>
        <div id='first' className='w-full h-[full]'>
            <div className='flex justify-center items-center h-full'>
              <input className="sr-only peer flex border-[1.5px] border-red-400 rounded-md mb-3 hover:border-yellow-400 hover:scale-105 ease-in-out duration-300 option-label" checked={selectedOption === 'math1'} onChange={handleOptionChange} type="radio" value="math1" name="answer" id="math1"/>
              <label className='w-full h-full mb-3 hover:border-yellow-400 px-4  hover:scale-105 ease-in-out duration-300 option-label flex flex-col justify-start items-center p-0 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent' for="math1"><img className='h-[7rem] w-[12rem]' src={math1} alt="icon1"/>Arithmatic <span className='text-gray-400'>Introductory</span></label>
            </div>
        </div>
        <div id='second' className='w-full h-[full] '>
          <div className='flex justify-center items-center h-full'>
                <input className="sr-only peer flex border-[1.5px] border-red-400 rounded-md mb-3 hover:border-yellow-400 hover:scale-105 ease-in-out duration-300 option-label" checked={selectedOption === 'math2'} onChange={handleOptionChange} type="radio" value="math2" name="answer" id="math2"/>
                <label className='w-full h-full mb-3 hover:border-yellow-400 px-4 hover:scale-105 ease-in-out duration-300 option-label flex flex-col justify-start items-center p-0 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent' for="math2"><img className='h-[7rem] w-[12rem]' src={math2} alt="icon1"/>Basic Algebra <span className='text-gray-400'>Foundational</span></label>
            </div>
        </div>
        <div id='third' className='w-full h-[full] '>
          <div className='flex justify-center items-center h-full'>
                <input className="sr-only peer flex border-[1.5px] border-red-400 rounded-md mb-3 hover:border-yellow-400 hover:scale-105 ease-in-out duration-300 option-label" checked={selectedOption === 'math3'} onChange={handleOptionChange} type="radio" value="math3" name="answer" id="math3"/>
                <label className='w-full h-full mb-3 hover:border-yellow-400 px-4 hover:scale-105 ease-in-out duration-300 option-label flex flex-col justify-start items-center p-0 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent' for="math3"><img className='h-[7rem] w-[12rem]' src={math3} alt="icon1"/>Intermediate Algebra <span className='text-gray-400'>Intermediate</span></label>
            </div>
        </div>
        <div id='fourth' className='w-full h-[full]'>
          <div className='flex flex-col justify-center items-center h-full'>
                <input className="sr-only peer border-[1.5px] border-red-400 rounded-md mb-3 hover:border-yellow-400 hover:scale-105 ease-in-out duration-300 option-label" checked={selectedOption === 'math4'} onChange={handleOptionChange} type="radio" value="math4" name="answer" id="math4"/>
                <label className='w-full h-full mb-3 hover:border-yellow-400 px-4 hover:scale-105 ease-in-out duration-300 option-label flex flex-col justify-start items-center p-0 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent' for="math4"><img className='h-[7rem] w-[12rem]' src={math4} alt="icon1"/>Calculus <span className='text-gray-400'>Advanced</span></label>
            </div>
        </div>
      </div>
      <div className='flex justify-center pt-4'>
        <button className='text-white font-bold px-2 py-2 border-2 border-black rounded-lg w-[150px] bg-black' onClick={handleNext}>Continue</button>
      </div>
    </>
  );
};




const Section5 = ({ onNext }) => {
  // const [selectedOption, setSelectedOption] = useState('');

  // const handleOptionChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };

  const handleNext = () => {
    // Validate if an option is selected
    // if (!selectedOption) {
    //   // You can show an error message or prevent moving to the next step
    //   return;
    // }
    // Call onNext to move to the next section
    onNext();
  };

  return (
    <>
      <div className='flex flex-col md:flex-row gap-[100px] pt-5'>
        <div className='md:h-[500px] md:w-[150%] flex justify-center'>
          <img className=' h-full w-[80%] ' src={section5img} alt="section5img" />
        </div>
        <div className='flex flex-col justify-center gap-8'>
          <h1 className='text-3xl md:text-4xl font-bold flex justify-center md:justify-start'>You're on your way</h1>
          <div className='flex w-6 md:w-10'>
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </div>
          <div className='flex justify-start pt-0 md:pb-10'>
              <h1 className='text-sm md:text-lg text-left font-medium italic flex justify-start'>
              "Through its engaging and well-structured courses, Brilliant has taught me
              mathematical concepts that previously struggled to understand. I now feel
              confident approaching both technical job interviews and real world problem
              solving situations."
                </h1>
          </div>
          <div className=' text-sm md:text-[18px] text-left font-medium
           flex justify-start pb-10 md:pb-0'>
            <h1 className='italic'>- Jacob S.</h1>
          </div>

        </div>
      </div>
      <div className='flex justify-center pt-4'>
        <button className='text-white font-bold px-2 py-2 border-2 border-black rounded-lg w-[150px] bg-black' onClick={handleNext}>Continue</button>
      </div>
    </>
  );
};

const Section6 = ({ onNext }) => {

  const handleNext = () => {
    onNext();
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleNext();
    }, 3000);

    // Clear the timeout when the component unmounts or when the timeout is triggered
    return () => clearTimeout(timeoutId);
  }, []);
  
  return (
    <>
      
      <div className='flex flex-col m-0 p-0 h-[80vh] justify-center items-center'>
        {/* <Spinner /> */}
        <div role="status">
            <svg aria-hidden="true" className="inline w-14 h-28 text-gray-200 animate-spin dark:text-gray-200 fill-yellow-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            {/* <span class="sr-only">Loading...</span> */}
        </div>
        <div className='flex justify-center'>
          <h1 className='text-gray-900 font-bold text-lg md:text-3xl w-3/4'>Finding learning path recommendations for you based on your responses</h1>
        </div>
      </div>
    </>
  );
};
const Section7 = ({ onNext }) => {
  return (
    <>
      <div className='pt-0 md:pt-[4rem]'>
        <div className='mb-[-30px] mt-6'>
          <h1 className='text-gray-900 font-bold text-2xl md:text-4xl py-5'>Learning paths based on your answers</h1>
          <h1 className='text-gray-700 text-sm md:text-lg'>Choose one to get started. You can switch anytime.</h1>
        </div>
        <div className='flex h-[full] w-full mt-28 md:mt-0 flex-col md:flex-row md:h-[20rem] md:w-auto gap-4 md:m-16 justify-center items-center'>
          <div className='border-2 w-[full] h-[full] md:w-1/3 md:h-[10rem] p-4 rounded-md relative '>
              <div id='popular' className='absolute top-[-10px] left-1/3 h-9'>
                <h1 className='bg-yellow-400 px-3 text-xs font-bold border-2 border-yellow-400 rounded-full' >MOST POPULAR</h1>
              </div>
              <div className='flex gap-2'>
                <div className='w-2/3'>
                  <h1 className='text-left text-[14px] md:text-[17.4px]'><span className='font-bold'>Foundational Math</span> Build your foundational skills in algebra, geometry, and probability.</h1>
                </div>
                <div>
                  <img className='h-[5rem] w-[5rem] md:h-[8rem] md:w-[10rem]' src={last} alt="last" />
                </div>
              </div>
          </div>
          <div className='border-2  w-[full] h-[full] md:w-1/3 md:h-[10rem] p-4 rounded-md relative '>
              <div className='flex gap-2'>
                <div className='w-2/3'>
                  <h1 className='text-left text-[14px] md:text-[17.4px]'><span className='font-bold'>Mathematical Thinking</span> Build your foundational skills in algebra, geometry, and probability.</h1>
                </div>
                <div>
                  <img className='h-[5rem] w-[5rem] md:h-[8rem] md:w-[10rem]' src={last} alt="last" />
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');

  const handleNext = (option) => {
    setSelectedOption(option);
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
 };
 return (
  <>
  <div>
    {currentStep <= 5 && (
        <div>
          <progress className='w-full h-[3px]' value={currentStep} max={5} />
          <style jsx>{`
            progress::-webkit-progress-value {
              background-color: #129d7c;
            }
            progress::-webkit-progress-bar {
              /* Sets the color of the remaining portion */
              background-color: #e6e6e6;
            }
          `}</style>
        </div>
    )}
    {currentStep === 1 && <Section1 onNext={handleNext} />}
    {currentStep === 2 && <Section2 onNext={handleNext} />}
    {currentStep === 3 && <Section3 onNext={handleNext} />}
    {currentStep === 4 && <Section4 onNext={handleNext} />}
    {currentStep === 5 && <Section5 onNext={handleNext} />}
  </div>
  <div>
      {currentStep === 6 && <Section6 onNext={handleNext} />}
      {currentStep === 7 && <Section7 onNext={handleNext} />}
  </div>
  </>
  
);
};
export default MultiStepForm
