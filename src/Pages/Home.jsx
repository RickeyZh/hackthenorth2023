import Shop from "./Shop";
import { Link } from "react-router-dom";
export default function Home() {
    return(
        <div className="Desktop2 w-[100%] h-[100%] absolute bg-gradient-to-b from-sky-200 to-indigo-600 overflow-hidden">
        <div className="Shop w-[100%] h-[100%] left-[5%] top-[80%] absolute">
            <div className="Rectangle1 w-[153px] h-36 left-0 top-[6px] absolute bg-white rounded-3xl border border-white" />
            <div className="ShoppingBasket w-[149px] h-[156px] left-[2px] top-0 absolute justify-center items-start gap-2.5 inline-flex" />
        </div>
        <div className="Score w-[387px] h-[173px] left-[1032px] top-[865px] absolute">
            <img className="KawaiiBread w-[149px] h-[126px] left-[224px] top-0 absolute" src="https://via.placeholder.com/149x126" />
            <div className=" w-[387px] h-[173px] left-0 top-0 absolute text-white text-8xl font-normal font-['Raleway']">1000</div>
        </div>
        <div className="Message left-[525px] top-[623px] absolute text-white text-8xl font-normal font-['Raleway']">message</div>
        </div>
    )
}