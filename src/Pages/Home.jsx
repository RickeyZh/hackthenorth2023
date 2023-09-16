import Shop from "./Shop";
import { Link } from "react-router-dom";
import bread from "../Assets/Kawaii Bread.svg";
import basket from "../Assets/Basket.svg";
import heart from "../Assets/h-1.svg";
import font from "../Assets/Alata-Regular.ttf";
//import P5sketch from "../Components/Sketch";

let score = 1090;
// Give them messages that they aren't in frame if they are not 
export default function Home() {

    function changeShop(){
        document.getElementById("image").style.display = "hidden";
    }


    return(
        <div>
            <div className="Desktop2 flex w-[100%] h-[100%] absolute bg-slate-400 overflow-hidden ">

            <button type="button" className="Shop w-[6%] h-[12%] left-[92%] top-[1%] absolute align-middle" onClick={changeShop}>
                <div className="Rectangle1 w-[100%] h-[100%] absolute bg-white rounded-3xl border border-white" />
                <img className="asdd w-[7vw] h-[8vh] left-0 top-[65%] absolute" src={basket} />     
            </button >

            <div className="relative w-[100%] h-[100%] top-[91%] left-[80%]">
                <img className="absolute w-[51px] h-[47px] top-0 left-0" alt="H" src={heart} />
                <img className="absolute w-[51px] h-[47px] top-0 left-[63px]" alt="H" src={heart} />
                <img className="absolute w-[51px] h-[47px] top-0 left-[127px]" alt="H" src={heart} />
                <img className="absolute w-[51px] h-[47px] top-0 left-[190px]" alt="H" src={heart} />
                <img className="absolute w-[51px] h-[47px] top-0 left-[253px]" alt="H" src={heart} />
            </div>

            <div className="w-[708px] h-[674px]" id="image">
                <img
                    className="fixed w-[708px] h-[674px] top-0 left-0 object-cover"
                    alt="St small pad"
                    src={bread}
                />
            </div>
            
            <div className="Money w-[30%] h-[60%] left-[1%] top-[90%] absolute">
                <div className=" w-[8vw] h-[vh] left-[2vw] top-[2.5%] absolute text-center text-white text-5xl font-normal font-{font}">{score}</div>
                <img className="KawaiiBread w-[6vw] h-[10vh] left-[30%] top-[-1%] absolute" src={bread} alt="oks" />
                <div className="Rectangle2 w-[15vw] h-[9vh] left-0 top-0 absolute bg-zinc-300 bg-opacity-0 rounded-[32px] border-4 border-white border-opacity-50" /></div>
            </div>
        </div>
    )
    
}