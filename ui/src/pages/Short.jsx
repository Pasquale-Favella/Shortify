import ShortCard from "../components/ShortCard";
import ShortError from "../components/ShortError";
import ShortForm from "../components/ShortForm";

export default function Short(){
    return(
        <main>
            <ShortForm/>
            <ShortCard/>
            <ShortError/>
        </main>
    )
}