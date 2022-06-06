import { useQuery } from "react-query";
import { useDebounce } from 'vesuvio-hooks';
import { searchSuggest } from "../lib/service/searchService";


export const useSearchSuggest = (searchTerm)=>{

    const debouncedSearchQuery = useDebounce(searchTerm);

    const { isLoading, error, data :suggestions } = useQuery(['suggests',debouncedSearchQuery], async () =>{
        if(searchTerm.length>2){
            const  { data } = await searchSuggest(debouncedSearchQuery)
            return data
        }
    },
    {
        refetchInterval:1000 * 60 * 60,//ONE HOUR
        refetchOnWindowFocus:false
    }
          
   )

   return { isLoading, error, suggestions };
}