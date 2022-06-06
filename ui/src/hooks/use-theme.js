import { useEffect } from 'react';
import { useStorage } from 'vesuvio-hooks';

export const useTheme = ()=>{

    const [theme , setTheme] = useStorage("theme","dark");

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme])

    const toggleTheme = ()=> {
        setTheme(prevTheme => prevTheme==='dark'?'light':'dark');
    };

    return {
        theme , toggleTheme
    }
}