import { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import SearchForm from "./SearchForm";

export default function SearchModal(){

    const [isOpen , setIsOpen] = useState(false);
    

    const toggleSearch = ()=>setIsOpen(prev => !prev);

    

    return(
        <div className="md:hidden">
        
        <label htmlFor="modal" className="btn btn-ghost btn-circle modal-button btn-sm">
            <FaSearch className="w-6 h-6" />
        </label>


        <input type="checkbox" id="modal" className="modal-toggle" onChange={toggleSearch} checked={isOpen} value={'toggle search'}/>
        <div className="modal items-baseline">
            <div className="modal-box relative rounded-t-none rounded-b-lg sm:rounded-lg">
                <label htmlFor="modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">Search Url</h3>
                <br/>
                <SearchForm toggleSearch={toggleSearch}/>
            </div>
        </div>
        </div>
    )
}