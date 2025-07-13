import { useEffect, type JSX } from "react";


export default function DevisPreview ({devis}): JSX.Element{

    useEffect(()=>{
        console.log(devis)
    },[])
    return(
        <div>
                
        </div>
    )
}