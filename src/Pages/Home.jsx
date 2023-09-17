import Shop from "./Shop";
import { Link } from "react-router-dom";
import bread from "../Assets/Kawaii Bread.svg";
import basket from "../Assets/Basket.svg";
import TEST_CAT from "../Assets/duck1.png";
import TEST_CATT from "../Assets/duck2.png";

import TEST_CAT2 from "../Assets/penguin1.png";
import TEST_CATT2 from "../Assets/penguin2.png";

import TEST_CAT3 from "../Assets/Skin3.png";
import TEST_CAT4 from "../Assets/Skin4.png";

import TEST_ITEM from "../Assets/ToyMouse.webp";
import TEST_ITEM2 from "../Assets/DuckysDream.webp";
import TEST_ITEM3 from "../Assets/MomomiyaIchigo.webp";
import TEST_ITEM4 from "../Assets/SayorisBreakfast.webp";

import heart from "../Assets/h-1.svg";
import font from "../Assets/Alata-Regular.ttf";
import P5sketch from "../Components/Sketch";
import { useState ,useEffect} from "react";
import assignment from "../Assets/Assignment.svg";
import camera from "../Assets/Camera alt.svg";

import logo from '../logo.svg';
import '../App.css';
import React from 'react';
import QuoteGenerator from '../Components/QuoteGenerator';

let character = 0;
export let score = 1000;
// Give them messages that they aren't in frame/more than 1 person in frame
// Can print the messages in
export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenS, setIsOpenS] = useState(false);
    const [isOpenCamera, setIsOpenCamera] = useState(false);

    const [backgroundColor, setBackgroundColor] = useState('#849ED1');


    const menuPopup = () => {
        setIsOpen(!isOpen);

    };

    const toDoPopup = () => {
        setIsOpenS(!isOpenS);
    };

    const cameraPopUp = () => {
        setIsOpenCamera(!isOpenCamera);
    };


        const petImages = [
            TEST_CAT,
            TEST_CAT2,
            TEST_CAT3,
            TEST_CAT4
        ];

          const [hoveredButton, setHoveredButton] = useState(null);
          const buttons = petImages.map((imageSource, index) => (
            <button
              key={index}
              className="relative flex items-center justify-center p-2 "
              onMouseEnter={() => setHoveredButton(index)}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <img
                className={`asdd col-span-1 transition-transform transform ${
                  hoveredButton === index ? 'animate-bounce' : ''
                }`}
                src={imageSource} // Use the image source from the array
                alt={`Image ${index + 1}`} // Provide a descriptive alt text
              />
            </button>
          ));

        const itemImages = [
            TEST_ITEM,
            TEST_ITEM2,
            TEST_ITEM3,
            TEST_ITEM4,
        ];

          const [hoveredButton1, setHoveredButton1] = useState(null);
          const buttons1 = itemImages.map((imageSource, index) => (
            <button
              key={index}
              className="relative flex items-center justify-center p-2 "
              onMouseEnter={() => setHoveredButton1(index)}
              onMouseLeave={() => setHoveredButton1(null)}
            >
              <img
                className={`asdd col-span-1 transition-transform transform ${
                  hoveredButton1 === index ? 'animate-bounce' : ''
                }`}
                src={imageSource} // Use the image source from the array
                alt={`Image ${index + 1}`} // Provide a descriptive alt text
              />
            </button>
          ));

          const [mainQuoteIndex, setMainQuoteIndex] = useState(0);
          const [shopQuoteIndex, setShopQuoteIndex] = useState(0);
          const [showMainQuote, setShowMainQuote] = useState(true);

          const mainQuotes = [
            "Don't let yesterday take up too much of today!",
            "Reach your sleep goals!",
            "Let's conquer the day!",
            "I'm a dog hahahaha",
            "All our dreams can come true, if we have the courage to pursue them.",
"The secret of getting ahead is getting started.",
"I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life, and that is why I succeed.",
"Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
"The best time to plant a tree was 20 years ago. The second best time is now.",
"Only the paranoid survive.",
"It’s hard to beat a person who never gives up.",
"I wake up every morning and think to myself, ‘How far can I push this company in the next 24 hours.’",
"We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes―understanding that failure is not the opposite of success, it’s part of success.",
"Write it. Shoot it. Publish it. Crochet it. Sauté it. Whatever. MAKE.",
"If people are doubting how far you can go, go so far that you can’t hear them anymore.",
"You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.",
"Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
"Everything you can imagine is real.",
"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
"Do one thing every day that scares you.",
"It’s no use going back to yesterday, because I was a different person then.",
"Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.",
"Do what you feel in your heart to be right―for you’ll be criticized anyway.",
"Happiness is not something ready made. It comes from your own actions.",
"Whatever you are, be a good one.",
            ];
            
            
            const shopQuotes = ["pets!", "items!"];

          useEffect(() => {
            const colorList = [
            "#849ED1",
            "#b58feb",
            "#eb8fb8",
            "#eb978f",
            "#ebaf8f",
            "#eb978f",
            "#eb8fb8",
            "#b58feb",
            ];
            let currentIndex = 0;
            
            
            const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % colorList.length;
            setBackgroundColor(colorList[currentIndex]);
            }, 20000); // 20 seconds
            
            
            const mainQuoteInterval = setInterval(() => {
            setShowMainQuote(true); // Display the main quote
            setMainQuoteIndex((prevIndex) => (prevIndex + 1) % mainQuotes.length);
            
            
            // Hide the main quote after 10 seconds
            setTimeout(() => {
            setShowMainQuote(false);
            }, 10000);
            }, 10000); // 30 seconds (to align with background color change)
            
            
            return () => {
            clearInterval(interval); // Cleanup on unmount
            clearInterval(mainQuoteInterval); // Cleanup on unmount
            };
            }, []);
            
            const [imageIndex, setImageIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);


  const images = [TEST_CAT, TEST_CATT]; // Add your image sources here
  useEffect(() => {
    let code = images;

    if(character==0){
        code = images;
    }


    const imageInterval = setInterval(() => {
      // Update the image source and quote index
      setImageIndex((prevIndex) => (prevIndex + 1) % code.length);
      setQuoteIndex((prevIndex) => (prevIndex + 1) % mainQuotes.length);
      score ++;
    }, 1000); // Change image every 2 seconds (2000 milliseconds)
    return () => clearInterval(imageInterval); // Cleanup on unmount
  }, []);  

    return(
        <div>

            <div className="Desktop2 flex w-[100%] h-[100%] absolute bg-slate-400 overflow-hidden " style={{backgroundColor,transition: 'background-color 2s ease'}}>


            <button onClick={menuPopup} className="absolute w-[6%] h-[12%] left-[92%] top-[2%] transparent hover:transparent text-gray-800 font-bold rounded inline-flex items-center">
                <div className="Rectangle1 w-[100%] h-[100%] absolute bg-white rounded-3xl border border-white" />
                <img className="asdd w-[7vw] h-[8vh] left-0 top-[15%] absolute" src={basket} />  
            </button> {
                isOpen && (
                    <div className="help items-center inline-flex bg-white z-10 ">

                        <div className="Rectangle1 w-[60vw] h-[60vh] top-[20%] left-[19%] bg-white rounded-[16px] absolute flex items-center justify-center mx-auto" >
                            <div className="Store top-[2%] items-center justify-center text-slate-400 text-6xl font-normal font-['Alata'] absolute text-center= bold">BREADSHOP</div>
                           
                            <div className="Store top-[15%] items-center justify-center text-slate-400 text-3xl font-normal font-['Alata'] absolute text-center=">pets!</div>
<div className="absolute top-[23%] justify-center items-center grid grid-cols-4 gap-5 row-start-2">
  <button className="flex items-center justify-center p-2">
    <img
      className="asdd col-span-1 transition-transform transform hover:scale-110"
      src={TEST_CAT}
      alt="Basket"
    />
  </button>
  <button className="flex items-center justify-center p-2 ">
    <img
      className="asdd col-span-1 transition-transform transform hover:scale-110"
      src={TEST_CAT2}
      alt="Basket"
    />
  </button>
  <button className="flex items-center justify-center p-2 ">
    <img
      className="asdd col-span-1 transition-transform transform hover:scale-110"
      src={TEST_CAT3}
      alt="Basket"
    />
  </button>
  <button className="flex items-center justify-center p-2">
    <img
      className="asdd col-span-1 transition-transform transform hover:scale-110"
      src={TEST_CAT4}
      alt="Basket"
    />
  </button>
</div>


                            <div className="Store top-[60%] items-center justify-center text-slate-400 text-3xl font-normal font-['Alata'] absolute text-center=">items!</div>
                           
                            <div className="absolute top-[70%] justify-center items-center grid grid-cols-4 gap-5 row-start-2">
                                {buttons1}
                            </div>
                        </div>




                    </div>
                )
            }


            <button onClick={cameraPopUp} className="absolute w-[6%] h-[12%] left-[92%] top-[16%] transparent hover:transparent text-gray-800 font-bold rounded inline-flex items-center">
                <img className="assignment w-[7vw] h-[8vh] left-0 top-[15%] absolute" src={camera} />  
            </button> {isOpenCamera && (
                <div className="help items-center inline-flex bg-white z-10 ">
                <div className="Rectangle1 w-[60vw] h-[60vh] top-[20%] left-[19%] bg-white rounded-[16px] absolute flex items-center justify-center mx-auto">
                <P5sketch />
                </div>
                </div>
                )}


                <div>
                <button
                onClick={cameraPopUp}
                className="absolute w-[6%] h-[12%] left-[92%] top-[16%] transparent hover:transparent text-gray-800 font-bold rounded inline-flex items-center"
                >
                <img className="assignment w-[7vw] h-[8vh] left-0 top-[15%] absolute" src={camera} alt="Camera Icon" />
                </button>
                {isOpenCamera && (
                <div className="help items-center inline-flex bg-white z-10 ">
                <div
                className="Rectangle1 w-[60vw] h-[60vh] top-[20%] left-[19%] bg-white rounded-[16px] absolute flex items-center justify-center mx-auto"
                style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                <P5sketch />
                </div>
                </div>
                )}
                </div>

            <button onClick={toDoPopup} className="absolute z-10 w-[6%] h-[12%] left-[92%] top-[30%] transparent hover:transparent text-gray-800 font-bold rounded inline-flex items-center">
                <img className="assignment w-[7vw] h-[8vh] left-0 top-[15%] absolute" src={assignment} />  
            </button> {
                isOpenS && (
                    <div className="help items-center inline-flex bg-white z-0 ">
                        <div className="Rectangle1 w-[15vw] h-[40vh] top-[30%] left-[83%] bg-white opacity-30 rounded-[16px] absolute flex items-center justify-center mx-auto" >
                        </div>
                        <div className="Store opacity-80 top-[33%] left-[83.5%] items-center justify-center text-white text-3xl font-normal font-['Alata'] absolute text-center= bold">sleep goals</div>

                    </div>
                    )
            }



            <div className="h-screen flex items-center justify-center mx-auto">
            <img
        className="Bird absolute justify-center items-center h-[30vh]"
        src={images[imageIndex]}
        alt="Image"
      />                <div className="Store top-[70%] items-center justify-center text-white text-4xl font-normal font-['Alata'] absolute text-center bold">
                {mainQuotes[mainQuoteIndex]}
                </div>                
            </div>






            <div className="z-0 items.center">


                <div className="absolute w-[100%] h-[100%] top-[91%] left-[80%]">
                    <img className="absolute w-[51px] h-[47px] top-0 left-[230px]" alt="H" src={heart} />
                </div>


                <div className="Money w-[30%] h-[60%] left-[1%] top-[90%] absolute">
                    <div className=" w-[8vw] h-[vh] left-[2vw] top-[2.5%] absolute text-center text-white text-5xl font-normal font-{font}">{score}</div>
                    <img className="KawaiiBread w-[6vw] h-[10vh] left-[30%] top-[-1%] absolute" src={bread} alt="oks"/>
                    <div className="Rectangle2 w-[15vw] h-[9vh] left-0 top-0 absolute bg-zinc-300 bg-opacity-0 rounded-[32px] border-4 border-white border-opacity-50" /></div>
                </div>
            </div>
        </div>
    )
   
}
/*


           
            <div className="Shop w-[6%] h-[12%] left-[92%] top-[2%] absolute align-middle" >
                <div className="Rectangle1 w-[100%] h-[100%] absolute bg-white rounded-3xl border border-white" />
                <img className="asdd w-[7vw] h-[8vh] left-0 top-[15%] absolute" src={basket} />  
            </div>{
                isOpen && (
                    <div>
                     Hello
                    </div>
                )
            }
*/
