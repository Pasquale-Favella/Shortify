import { TbUnlink } from 'react-icons/tb';
import { ImSpinner8 } from 'react-icons/im';
import { useUrlCtx } from '../../hooks/use-urlctx';

export default function ShortForm(){

    const {url,setUrl,createUrl,state} = useUrlCtx();

    const onSubmit = (e)=>{

        e.preventDefault();

        createUrl();

    }

    return (
        <form className="form-control " onSubmit={onSubmit}>
            <div className="input-group flex justify-center items-center my-4">
                <input 
                    type="url" 
                    placeholder="Insert Url" 
                    className="input input-bordered md:w-1/3 w-full" 
                    required
                    value={url}
                    onChange={(e)=>setUrl(e.target.value)}
                />

                <button className="btn btn-square" disabled={!Boolean(url)}>
                    {state?.pending 
                        ? <ImSpinner8 className="h-6 w-6 animate-spin"/>
                        : <TbUnlink className="h-6 w-6"/>
                    }    
                </button>
            </div>
        </form>
    )
}