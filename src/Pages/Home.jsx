import Shop from "./Shop";
import { Link } from "react-router-dom";
import bread from "../Assets/Kawaii Bread.svg";
import basket from "../Assets/Basket.svg";
import heart from "../Assets/h-1.svg";
import font from "../Assets/Alata-Regular.ttf";

let score = 1090;

export default function Home() {
    return(
        <div className="Desktop2 flex w-[100%] h-[100%] absolute bg-slate-400 overflow-hidden ">

        <div className="Shop w-[6%] h-[12%] left-[92%] top-[2%] absolute align-middle">
            <div className="Rectangle1 w-[100%] h-[100%] absolute bg-white rounded-3xl border border-white" />
            <img className="asdd w-[7vw] h-[8vh] left-0 top-[15%] absolute" src={basket} />     

        </div>
        <div className="relative w-[100%] h-[100%] top-[91%] left-[80%]">
            <img className="absolute w-[51px] h-[47px] top-0 left-0" alt="H" src={heart} />
            <img className="absolute w-[51px] h-[47px] top-0 left-[63px]" alt="H" src={heart} />
            <img className="absolute w-[51px] h-[47px] top-0 left-[127px]" alt="H" src={heart} />
            <img className="absolute w-[51px] h-[47px] top-0 left-[190px]" alt="H" src={heart} />
            <img className="absolute w-[51px] h-[47px] top-0 left-[253px]" alt="H" src={heart} />
        </div>

        
        <div className="Money w-[30%] h-[60%] left-[1%] top-[90%] absolute">
            <div className=" w-[8vw] h-[vh] left-[2vw] top-[2.5%] absolute text-center text-white text-5xl font-normal font-{font}">{score}</div>
            <img className="KawaiiBread w-[6vw] h-[10vh] left-[30%] top-[-1%] absolute" src={bread} alt="oks" />
            <div className="Rectangle2 w-[15vw] h-[9vh] left-0 top-0 absolute bg-zinc-300 bg-opacity-0 rounded-[32px] border-4 border-white border-opacity-50" /></div>
        </div>
    )
    
}