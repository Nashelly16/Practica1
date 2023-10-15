import React, {useEffect,useState} from 'react'

export const Bebidas= ()=> {
const [estado, setEstado]=useState([]);
useEffect(()=>{
    api()   
}, [])
const api =async() =>{
    const URL="www.thecocktaildb.com/api/json/v1/1/random.php"
    const resp= await fetch (URL);
    const {drinks}= await resp.json();
    const data= await drinks.map(res=>
        {
            return{
                id:res.idDrink,
                nombre:res.starDrink,
                imagen:res.starDrinkThumn
            }
        })
    setEstado(data)

}

return(
    
    <>
        <div>
            {estado.map(esta=>(
                <div key={esta.id}>
                <h1>{esta.nombre}</h1>
                <img style={{width:"200px"}}src={esta.imagen} alt="imagen de bebidas"/>
                </div>
            ))}
        </div>

    </>
    )
}