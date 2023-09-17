import Shop from "./Shop";
import { Link } from "react-router-dom";
import bread from "../Assets/Kawaii Bread.svg";
import basket from "../Assets/Basket.svg";
import TEST_CAT from "../Assets/Skin1.png";
import heart from "../Assets/h-1.svg";
import font from "../Assets/Alata-Regular.ttf";
import P5sketch from "../Components/Sketch";
import { useState ,useEffect} from "react";


let score = 1090;
// Give them messages that they aren't in frame/more than 1 person in frame
// Can print the messages in
export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState('#849ED1');


    const menuPopup = () => {
        setIsOpen(!isOpen);
    };


    useEffect(() => {
        const colorList = ['#849ED1', '#b58feb', '##eb8fb8', ,'#eb978f', '#ebaf8f', '#eb978f', '#eb8fb8', '#b58feb'];
        let currentIndex = 0;
       
       
        const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % colorList.length;
        setBackgroundColor(colorList[currentIndex]);
        }, 20000); // 20 seconds
       
       
        return () => clearInterval(interval); // Cleanup on unmount
        }, []);




        const [hoveredButton, setHoveredButton] = useState(null);
          const buttons = Array.from({ length: 4 }, (_, index) => (
            <button
              key={index}
              className="relative flex items-center justify-center p-2 border border-gray-300"
              onMouseEnter={() => setHoveredButton(index)}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <img
                className={`asdd col-span-1 transition-transform transform ${
                  hoveredButton === index ? 'animate-bounce' : ''
                }`}
                src={basket}
                alt="Basket"
              />
            </button>
          ));


        const [hoveredButton1, setHoveredButton1] = useState(null);
          const buttons1 = Array.from({ length: 4 }, (_, index) => (
            <button
              key={index}
              className="relative flex items-center justify-center p-2 border border-gray-300"
              onMouseEnter={() => setHoveredButton1(index)}
              onMouseLeave={() => setHoveredButton1(null)}
            >
              <img
                className={`asdd col-span-1 transition-transform transform ${
                  hoveredButton1 === index ? 'animate-bounce' : ''
                }`}
                src={basket}
                alt="Basket"
              />
            </button>
          ));


   
    return(
        <div>
            <P5sketch></P5sketch>
            <div className="Desktop2 flex w-[100%] h-[100%] absolute bg-slate-400 overflow-hidden " style={{backgroundColor,transition: 'background-color 2s ease'}}>


            <button onClick={menuPopup} className="absolute w-[6%] h-[12%] left-[92%] top-[2%] transparent hover:transparent text-gray-800 font-bold rounded inline-flex items-center">
                <div className="Rectangle1 w-[100%] h-[100%] absolute bg-white rounded-3xl border border-white" />
                <img className="asdd w-[7vw] h-[8vh] left-0 top-[15%] absolute" src={basket} />  


               
            </button> {
                isOpen && (
                    <div className="help items-center inline-flex bg-white z-10 ">


                        <div className="Rectangle1 w-[60vw] h-[60vh] top-[20%] left-[19%] bg-white rounded-[16px] absolute flex items-center justify-center mx-auto" >
                            <div className="Store top-[2%] items-center justify-center text-slate-400 text-6xl font-normal font-['Alata'] absolute text-center= bold">BREADSHOP</div>
                           
                            <div className="Store top-[20%] items-center justify-center text-slate-400 text-3xl font-normal font-['Alata'] absolute text-center=">pets!</div>
                            <div className="absolute top-[30%] justify-center items-center grid grid-cols-4 gap-5 row-start-2">
                                {buttons}
                            </div>


                            <div className="Store top-[60%] items-center justify-center text-slate-400 text-3xl font-normal font-['Alata'] absolute text-center=">items!</div>
                           
                            <div className="absolute top-[70%] justify-center items-center grid grid-cols-4 gap-5 row-start-2">
                                {buttons1}
                            </div>
                        </div>




                    </div>
                )
            }






            <div className="h-screen flex items-center justify-center mx-auto">
                <img className="Bird absolute justify-center items-center h-[30vh] " src={TEST_CAT} alt="oks" />
                <div className="Store top-[70%] items-center justify-center text-white text-6xl font-normal font-['Alata'] absolute text-center= bold">dont let yesterday take up too much of today!</div>


            </div>






            <div className="z-0 items.center">


                <div className="absolute w-[100%] h-[100%] top-[91%] left-[80%]">
                    <img className="absolute w-[51px] h-[47px] top-0 left-0" alt="H" src={heart} />
                    <img className="absolute w-[51px] h-[47px] top-0 left-[63px]" alt="H" src={heart} />
                    <img className="absolute w-[51px] h-[47px] top-0 left-[127px]" alt="H" src={heart} />
                    <img className="absolute w-[51px] h-[47px] top-0 left-[190px]" alt="H" src={heart} />
                    <img className="absolute w-[51px] h-[47px] top-0 left-[253px]" alt="H" src={heart} />
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
