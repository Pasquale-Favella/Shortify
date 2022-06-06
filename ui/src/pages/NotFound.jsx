import { Link } from "react-router-dom";
import { IoChevronBackCircleOutline } from 'react-icons/io5';

export default function NotFound(){
    return(
        <div className="container mx-auto text-center">
            <h1 className="font-bold text-4xl sm:text-6xl mt-10 mb-5 flex align-middle justify-center">
                Page not found
            </h1>
            <Link to="/" className="btn btn-primary text-white hover:text-white/80 gap-2">
               <IoChevronBackCircleOutline className="h-6 w-6"/>back home
            </Link>
        </div>
    )
}