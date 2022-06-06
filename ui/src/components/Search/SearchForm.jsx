import { useRef, useState } from "react";
import { FaSearch } from 'react-icons/fa';
import { ImSpinner8 } from 'react-icons/im';
import { useClickOutside } from "../../hooks/use-clickOutside";
import { useSearchSuggest } from "../../hooks/use-searchSuggest";
import { Link, useNavigate } from "react-router-dom";

export default function SearchForm({hideSubmit = false , toggleSearch = ()=>{}}){

    const [term , setTerm] = useState('');
    const [showSuggestions,setShowSuggestions] = useState(false);
    const { isLoading, suggestions } = useSearchSuggest(hideSubmit && term);

    const searchRef = useRef();
    useClickOutside(searchRef, () => setShowSuggestions(false));

    let navigate = useNavigate();

    const hadleSubmit = (e)=>{

        e.preventDefault();
        navigate(`/s/${encodeURI(term)}`, { replace: true });
        setTerm('');
        toggleSearch();
    }


    return(
        <form className="form-control relative" onSubmit={hadleSubmit} ref={searchRef}>
            <div className={`${!hideSubmit && 'input-group w-full'} flex`}>
                {hideSubmit && isLoading && <ImSpinner8 className="h-6 w-6 animate-spin my-auto mr-2"/>}
                <input 
                    type="text" 
                    placeholder="Search…" 
                    className={`input input-bordered w-full ${hideSubmit && 'w-80'}`}
                    value={term}
                    onClick={()=>setShowSuggestions(true)}
                    onChange={(e)=>setTerm(e.target.value)}
                />
                <button className={`btn btn-square ${hideSubmit && 'hidden'}`}  disabled={!Boolean(term)}>
                    {isLoading ? <ImSpinner8 className="h-6 w-6 animate-spin"/> : <FaSearch className="w-6 h-6" />}
                </button>
            </div>
            { showSuggestions && suggestions && (
                <ul className="w-full menu bg-base-100 rounded-box absolute top-12 shadow-xl z-50 ">
                    {suggestions
                        .map(suggestion=>suggestion?.preview?.title &&
                        <li key={suggestion._id}>
                            
                            <Link className="w-full flex gap-2" to={`s/${suggestion._id}`}>
                                {suggestion?.preview?.img &&
                                <div className="avatar">
                                    <div className="w-6 h-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={suggestion?.preview?.img} />
                                    </div>
                                </div>}
                                {suggestion?.preview?.title}
                            </Link>
                        </li>)
                    }
                </ul>
            )}
            
        </form>
    )
}