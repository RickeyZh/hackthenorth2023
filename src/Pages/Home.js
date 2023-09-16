import { Link } from "react-router-dom";
import App from "../Components/Movement";

export default function Home() {
    return(
        <div className="Home">
            <Link className="shop-link" to="/shop">
                Shop
            </Link>

            This is the home page with the animal and stuff
            
        </div>
    )
}