import React, { Fragment, useEffect, useState,  type JSX} from "react"

type metadata={
    name:string,
    date:string,
    ndevis:number
}

type ligneDevis={
    description:string,
    quantite:number,
    prixUnitaire:number
}

type Devis= {
    metadata:metadata,
    lignes:Array<ligneDevis>,
    total:number
}
function DevisForm(): JSX.Element {

    
     const [name,setName]= useState<string>("")

     const [date,setDate]=useState<string>("")

     const [ndevis,setNdevis]=useState<number>(0)

    const [listLigneDevis,setListLigneDevis]=useState<ligneDevis[]>([])
    const [devis, setDevis]=useState<Devis>()

    //calcul du total
    const total= listLigneDevis.reduce((acc, ligne)=>{
        return acc+ ligne.prixUnitaire* ligne.quantite
    },0)


    useEffect(()=>{
        const newDevis:Devis={
            metadata:{
                name,
                date,
                ndevis
            },
            lignes:listLigneDevis,
            total:total
        }

        setDevis(newDevis)
    },[listLigneDevis,date,name,ndevis,total])

    // const onChangeName=(e:React.ChangeEvent<HTMLInputElement>)=>{
    //     setName(e.target.value)
    // }


    // const onChangeDate=(e:React.ChangeEvent<HTMLInputElement>)=>{
    //     setDate(e.target.value)

    // }

    // const onChangeNdevis=(e:React.ChangeEvent<HTMLInputElement>)=>{
    //     setNdevis(Number.parseInt(e.target.value))

    // }


    // const onClickButton=()=>{
    //     console.log(name,date, ndevis)
    // }
    return (
        //<div className="flex flex-col justify-between h-50 " >
//
        //    <input placeholder="Nom du client" type="text" value={name} onChange={onChangeName}/>
        //    <input placeholder="Date" type="date" value={date} onChange={onChangeDate} />
        //    <input placeholder="Numero du devis" type="number" value={ndevis} onChange={onChangeNdevis} />
//
        //    <button onClick={onClickButton}>
        //        Ajouter
        //    </button>
        //</div>
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
        </div>
    )
}


export default DevisForm