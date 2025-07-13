import React, { Fragment, useEffect, useState,  type JSX} from "react"
import DevisPreview from "./DevisPreview"

import type {Devis,metadata,ligneDevis} from "../types"


function DevisForm(): JSX.Element {

    
     

    const [listLigneDevis,setListLigneDevis]=useState<ligneDevis[]>([])
    const [devis, setDevis]=useState<Devis>()

    //calcul du total
    const total= listLigneDevis.reduce((acc, ligne)=>{
        return acc+ ligne.prixUnitaire* ligne.quantite
    },0)


    // useEffect(()=>{


    //     const newDevis:Devis={
    //         metadata:{
    //             name,
    //             date,
    //             ndevis
    //         },
    //         lignes:listLigneDevis,
    //         total:total
    //     }

    //     setDevis(newDevis)
    // },[listLigneDevis,date,name,ndevis,total])

     return (
        <div>

        
        
        <div className="flex flex-col  w-150 marg">

            <div className="grid grid-cols-4 gap-4 mb-10">

                <h3>Description</h3>
                <h3>Quantite</h3>
                <h3>Prix unitaire</h3>
                <h3> sous totale</h3>
                {
                     listLigneDevis.map((ligne:ligneDevis,index)=>{
                        return(
                            <Fragment key={index}>
                                <input className=" border " type="text" value={ligne.description}  />
                                <input className="border" type="number" value={ligne.quantite} />
                                <input className="border" type="number" value={ligne.prixUnitaire}  />

                                <span>{ligne.prixUnitaire * ligne.quantite}</span>
                            </Fragment>
                        )
                    })
                }
            </div>

            <button className="bg-blue-500 hover:bg-fuchsia-500 ">
                Ajouter une ligne
            </button>

            <h2>Totale :  {total}</h2>


            <DevisPreview devis={devis} />
        </div>

        </div>
    )
}


export default DevisForm