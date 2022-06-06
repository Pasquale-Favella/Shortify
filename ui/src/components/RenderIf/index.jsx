export default function RenderIf({children , condition}){

    if(!condition) return null;
    
    return (
        <>
        {children}
        </>
    )
}