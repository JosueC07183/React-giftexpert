import { useState } from "react"

// Linea de abajo esto es desestructuracion.
export const AddCategory = ({onNewCategory}) => {
const[inputValue, setInputValue]= useState('');
const onInputChange =({target})=> {
    setInputValue(target.value);
}


const onSubmit = (event)=>{
    event.preventDefault();
    
    if(inputValue.trim().length<=1) return; //esto es para evitar insertar nombres sin sentido
    // Lo de abajo es un callback, donde se tienen todas las categorias anteriores o del estado actual
    //- luego viene una desestructuracion de las categorias anteriores.
    //setCategories(categories=>[inputValue, ...categories])
    onNewCategory(inputValue.trim());
    setInputValue('')

}
  return (
    <form onSubmit={onSubmit}>
        <input 
        type="text"
        placeholder="Buscar gifs"
        value={inputValue }
        onChange={(event)=>onInputChange(event)}
    />
    </form>
    
        
  )
}
