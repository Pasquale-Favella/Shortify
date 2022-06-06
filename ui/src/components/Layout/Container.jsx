export default function Container({children , margin }){

    return(
        <div className={`${margin}`} >
            {children}
        </div>
    )
}