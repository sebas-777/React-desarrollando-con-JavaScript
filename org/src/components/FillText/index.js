import { useState } from 'react';
import './FillText.css'

const FillText = (props) =>{ 
     const[Value,setValue] = useState("");
    
    const placeHolderModificado = `${props.placeholder}...`;

    const HandlerChange =(e) =>{
       
        props.setValue(e.target.value);
    }

    return <div className ="fill-text">
        <label htmlFor="">{props.title}</label>
        <input 
        type="text"
        placeholder={placeHolderModificado}
        required={props.required} 
        value={props.value}
        onChange={HandlerChange}
        
        />
    </div>
}

export default FillText;