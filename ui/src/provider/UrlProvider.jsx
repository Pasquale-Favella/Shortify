import { useMemo, useState } from "react"
import { useMutation } from "react-query";

import { UrlContext } from "../context/UrlContext";
import { createShort } from "../lib/service/urlService";

export default function UrlProvider({children}){

    const value = useUrl();

    return(
        <UrlContext.Provider value={value}>
            {children}
        </UrlContext.Provider>
    )
}

const useUrl = ()=>{
    const [url,setUrl] = useState('');
    const [urlCreated , setUrlCreated] = useState(null);

    const urlMutation = useMutation(()=> createShort(url),{
        onSuccess:(response) => {
            setUrlCreated(response.data);
            setUrl('');
        }
    });

    const createUrl = ()=> urlMutation.mutate();

    const state = useMemo(()=>({
        hasError : urlMutation.isError,
        pending : urlMutation.isLoading,
        errorMessage : urlMutation?.error?.response?.data?.message 
                    || urlMutation?.error?.message,
    }),[urlMutation.isError,urlMutation.isLoading]);

    return {
        url,
        setUrl,
        createUrl,
        urlCreated,
        state
    }
}