import RenderIf from "../RenderIf";

import { Link } from "react-router-dom";
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import { AiFillCopy } from 'react-icons/ai';
import { FiDownloadCloud } from 'react-icons/fi';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState } from "react";
import { saveAs } from 'file-saver';
import CountDown from "../ShortCard/CountDown";

export default function SearchCard({ result = {}, isLoading = false}){

    const [copy , setCopy] = useState(false);

    const handleDownloadQr = ()=>{
        saveAs(result.qr, `QR_${result.site}.png`);
    }

    const handleCopyUrl = (_ , result) => {
        
        setCopy(result);

        setTimeout(() => {
            setCopy(false);
        }, 500);
    }

    return (
        <div className={`hero bg-base-200 mt-4 rounded ${isLoading && 'animate-pulse w-100 h-[300px]'}`}>
            <div className="hero-content flex-col lg:flex-row">
            <RenderIf condition={result?._id}>
                <img src={result?.qr} width={300} height={300} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <RenderIf condition={result?.preview}>
                    <div className="flex gap-4">
                        <RenderIf condition={result?.preview?.img}>
                            <div className="avatar">
                            <div className="w-8 h-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={result?.preview?.img} />
                            </div>
                            </div>
                        </RenderIf>
                        <h2 className="text-2xl font-bold">{result?.preview?.title}</h2>
                    </div>
                </RenderIf>

                <div className="flex gap-2 py-2">

                    {result?.redirectUrl}
                    
                    <CopyToClipboard 
                        text={result?.redirectUrl || ''}
                        onCopy={handleCopyUrl}>
                        <div data-tip={copy ? '✔️ copied':'copy url'} className="tooltip tooltip-bottom tooltip-primary">
                            <button className="btn btn-square btn-sm">
                                <AiFillCopy className="h-6 w-6"/>
                            </button>
                        </div>
                    </CopyToClipboard>
                </div>

                <div className="flex flex-col gap-2 mb-4">
                    <h6>Link expires in :</h6>
                    <CountDown createdAt={result?.createdAt}/>
                </div>

                <RenderIf condition={result?.qr}>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary gap-2" onClick={handleDownloadQr}>
                            <FiDownloadCloud className="w-6 h-6"/>
                            Download QR
                        </button>
                    </div>
                </RenderIf>
                </div>
            </RenderIf>

            <RenderIf condition={!isLoading && !result?._id} >
                <h1 className="text-5xl font-bold p-6">No result found</h1>
                <Link to="/" className="btn btn-primary text-white hover:text-white/80 gap-2">
                <IoChevronBackCircleOutline className="h-6 w-6"/>back home
                </Link>
            </RenderIf>
            </div>
        </div>
    )
}