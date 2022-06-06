import { TbUnlink } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export default function ShortCallAction(){
    return(
        <div className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]" data-tip="short url">
            <Link to="shortify" className="btn btn-ghost btn-circle normal-case btn-sm">
                <TbUnlink className="h-6 w-6"/>
            </Link>
        </div>
    )
}