import Shop from "./Shop";
import { Link } from "react-router-dom";
export default function Home() {
    return(
        <div>
            This is the home page with the animal and stuff
            <Link className="shop-link" to="/shop">
                Shop
            </Link>
        </div>
    )
}