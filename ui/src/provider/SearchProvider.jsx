import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { search } from "../lib/service/searchService";


export default function SearchProvider({children}){

    const value = useSearch();

    return(
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    )
}

const useSearch = ()=>{

    let { term } = useParams();

    const { isLoading, error, data :result } = useQuery(
        ['search',term], 
        async () =>{
            const  {data}  = await search(term);
            return data;
        },
        {
            refetchInterval:1000 * 60 * 60,//ONE HOUR
            refetchOnWindowFocus:false
        }
    );

   return { isLoading, error, result , term};

}