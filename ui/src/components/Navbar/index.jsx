import ThemeToggle from "./ThemeToggle";
import GitHubTooltip from "./GithubTooltip";
import Search from "../Search";
import { Link } from "react-router-dom";
import ShortCallAction from "./ShortCallAction";

export default function NavBar(){
    return (
        <div className="navbar bg-base-100">

            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl text-primary">Shortify</Link>
            </div>

            <div className="flex justify-end gap-3 w-2/3 mr-3">
                
                <Search/>

                <ShortCallAction/>

                <GitHubTooltip/>
           
                <ThemeToggle/>

            </div>
        </div>
    )
}