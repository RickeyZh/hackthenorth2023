import Shop from "./Shop";
import { Link } from "react-router-dom";
export default function Home() {
    let x = 9;
    return(
        
        <div className="Desktop2 w-[100%] h-[100%] absolute bg-slate-400 overflow-hidden">
        <div className="Shop w-[116px] h-[110px] left-[90%] top-[5%] absolute">
            <div className="Rectangle1 w-[116px] h-[101.54px] left-[-0px] top-[4.23px] absolute bg-white rounded-3xl border border-white" />
            <div className="ShoppingBasket w-[112.97px] h-[110px] left-[1.52px] top-[-0px] absolute justify-center items-start gap-2.5 inline-flex" />
        </div>
        <div className="Hearts pr-[18.89px] left-[60%] top-[30%] absolute justify-start items-start gap-[12.52px] inline-flex">
            <div className="H5 w-[50.81px] h-[47.38px] relative">
            <div className="Group w-[33.75px] h-[13.79px] left-[3.95px] top-[3.92px] absolute">
            </div>
            </div>
            <div className="H4 w-[50.81px] h-[47.38px] relative">
            <div className="Group w-[33.75px] h-[13.79px] left-[3.95px] top-[3.92px] absolute">
            </div>
            </div>
            <div className="H3 w-[50.81px] h-[47.38px] relative">
            <div className="Group w-[33.75px] h-[13.79px] left-[3.95px] top-[3.92px] absolute">
            </div>
            </div>
            <div className="H2 w-[50.81px] h-[47.38px] relative">
            <div className="Group w-[33.75px] h-[13.79px] left-[3.95px] top-[3.92px] absolute">
            </div>
            </div>
            <div className="H1 w-[50.81px] h-[47.38px] relative">
            <div className="Group w-[33.75px] h-[13.79px] left-[3.95px] top-[3.92px] absolute">
            </div>
            </div>
        </div>
        <img className="StSmall507x507Pad600x600F8f8f8RemovebgPreview1 w-[708px] h-[674px] left-[378px] top-[153px] absolute" src="https://via.placeholder.com/708x674" />
        <div className="Money w-[282.86px] h-[100.17px] left-[2%] top-[90%] absolute">
        <div className=" w-[266.86px] h-[100.17px] left-[16px] top-0 absolute text-white text-[64px] font-normal font-['Actor']">{x}</div>
            <img className="KawaiiBread w-[102.75px] h-[72.96px] left-[151px] top-[4.81px] absolute" src="https://via.placeholder.com/103x73" />
            <div className="Rectangle2 w-64 h-[82.70px] left-0 top-0 absolute bg-zinc-300 bg-opacity-0 rounded-[32px] border-4 border-white" />
        </div>
        </div>
    )
}