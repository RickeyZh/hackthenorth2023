import { Link } from "react-router-dom";
import Skin1 from "../Assets/Skin1.png";
import Skin2 from "../Assets/Skin2.png";
import Skin3 from "../Assets/Skin3.png";
import Skin4 from "../Assets/Skin4.png";
// Note: part of words overflow before the images, gotta group them together
export default function Shop() {
    return(
        <div>
            <Link className="home-link" to="/">
                Home
            </Link>
            This is the shop page with skins and stuff

            <div className="shop-skins">
                <img src={Skin1}></img>
                100 bread
                <img src={Skin2}></img>
                200 bread
                <img src={Skin3}></img>
                200 bread
                <img src={Skin4}></img>
                300 bread
            </div>
        </div>
    )
}