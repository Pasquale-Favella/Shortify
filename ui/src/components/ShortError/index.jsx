import { useUrlCtx } from "../../hooks/use-urlctx";
import RenderIf from "../RenderIf";

import { MdOutlineErrorOutline } from 'react-icons/md';

export default function ShortError(){

    const {state} = useUrlCtx();

    return (
        <RenderIf condition={state?.hasError}>
            <div className="alert alert-error shadow-lg max-w-2xl m-auto">
                <div>
                    <MdOutlineErrorOutline className="w-6 h-6" />
                    <span>{state?.errorMessage}</span>
                </div>
            </div>
        </RenderIf>
    )
}