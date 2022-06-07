import SearchCard from "../components/SearchCard";
import { useSearchCtx } from "../hooks/use-searchctx";

export default function Search(){

    const { result , isLoading } = useSearchCtx();

    return (
        <main>
            {result && result.map(r => <SearchCard key={r._id} result={r}/>)}
            {isLoading && [...Array(3).keys()].map((_,i)=><SearchCard key={i} isLoading />)}
            {(!result || result.length < 1) && !isLoading && <SearchCard />}
        </main>
    )
}