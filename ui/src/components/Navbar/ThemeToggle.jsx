import { useMemo } from "react";
import { useTheme } from "../../hooks/use-theme";
import { FaSun } from 'react-icons/fa';
import { HiMoon } from 'react-icons/hi';


const ThemeToggle = ()=>{

    const {theme,toggleTheme} = useTheme();

    const tip = useMemo(() =>  theme ==='dark'
                                ? 'Light'
                                : 'Dark'
                , [theme]);
   
    return(
        <div className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]" data-tip={tip}>
            <label className="swap swap-rotate btn btn-ghost btn-circle btn-sm">

                <input 
                    type="checkbox" onClick={toggleTheme}
                />
                
                <FaSun className={`w-6 h-6 swap-off`} />
                <HiMoon className={`w-6 h-6 swap-on`} />
            
            </label>
        </div>
    )
}

export default ThemeToggle