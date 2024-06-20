import './FillText.css'

const FillText = (props) =>{ 
    console.log('datos:',props);
    const placeHolderModificado = `${props.placeholder}...`;
    return <div className ="fill-text">
        <label htmlFor="">{props.title}</label>
        <input 
        type="text"
        placeholder={placeHolderModificado}
        required={props.required}
        
        />
    </div>
}

export default FillText;