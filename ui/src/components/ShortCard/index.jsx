import { useUrlCtx } from "../../hooks/use-urlctx";
import RenderIf from "../RenderIf";
import CountDown from "./CountDown";

import { AiFillCopy } from 'react-icons/ai';
import { FiDownloadCloud } from 'react-icons/fi';

import { saveAs } from 'file-saver';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState } from "react";

export default function ShortCard(){
    const {urlCreated} = useUrlCtx();
    const [copy , setCopy] = useState(false);

    const handleDownloadQr = ()=>{
        saveAs(urlCreated.qr, `QR_${urlCreated.site}.png`);
    }

    const handleCopyUrl = (_ , result) => {
        
        setCopy(result);

        setTimeout(() => {
            setCopy(false);
        }, 500);
    }


    return (
        <RenderIf condition={urlCreated}>

            <div className="card lg:card-side bg-base-100 shadow-xl max-w-2xl m-auto">
                <RenderIf condition={urlCreated?.qr}>
                    <figure>
                        <img className="object-cover object-center rounded" width={400} height={400} src={urlCreated?.qr} alt="qr" />
                    </figure>
                </RenderIf>
                <div className="card-body">

                    <RenderIf condition={urlCreated?.preview}>
                        <div className="flex gap-4">

                            <RenderIf condition={urlCreated?.preview?.img}>
                                <div className="avatar">
                                <div className="w-8 h-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={urlCreated?.preview?.img} />
                                </div>
                                </div>
                            </RenderIf>

                            <h2 className="card-title text-sm">{urlCreated?.preview?.title}</h2>
                        </div>
                    </RenderIf>

                    <RenderIf condition={urlCreated?.redirectUrl}>
                        <div className="flex gap-2">

                            {urlCreated?.redirectUrl}
                            
                            <CopyToClipboard 
                                text={urlCreated?.redirectUrl || ''}
                                onCopy={handleCopyUrl}>
                                <div data-tip={copy ? '✔️ copied':'copy url'} className="tooltip tooltip-bottom tooltip-primary">
                                    <button className="btn btn-square btn-sm">
                                        <AiFillCopy className="h-6 w-6"/>
                                    </button>
                                </div>
                            </CopyToClipboard>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h6>Link expires in :</h6>
                            <CountDown createdAt={urlCreated?.createdAt}/>
                        </div>
                        <RenderIf condition={urlCreated?.qr}>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary gap-2" onClick={handleDownloadQr}>
                                    <FiDownloadCloud className="w-6 h-6"/>
                                    Download QR
                                </button>
                            </div>
                        </RenderIf>
                        
                    </RenderIf>
                    
                </div>
            </div>
        </RenderIf>
    )
}