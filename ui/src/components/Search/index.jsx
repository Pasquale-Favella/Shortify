import SearchForm from './SearchForm';

import SearchModal from './SearchModal';

export default function Search(){

    return(
        <>
            <div className="hidden md:block">
                <SearchForm hideSubmit={true}/>
            </div>

            <SearchModal />         
        </>
    )
}