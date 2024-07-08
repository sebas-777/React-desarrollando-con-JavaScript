import { useState } from "react";
import Button from "../Button";
import FillText from "../FillText";
import ListOptions from "../ListOptions";
import "./Form.css"

const Form = () =>{ 

    const[name,setName] = useState("");
    const[position,setPosition] = useState("");
    const[photo,setPhoto] = useState("");
    const[team,setTeam] = useState("")

    const HanderSend = (e) =>{     
        e.preventDefault();
        let dateSend = {
            name,
            position,
            photo,
            team
        }
        console.log('Manejar el envio',e);
        console.log('dateSend',dateSend);
    }

    return<section className = "form">
        <form onSubmit={HanderSend}>
            <h2>Rellene el formulario para crear el colaborador</h2>
            <FillText 
            title='name'
            placeholder='Ingresar Nombre' 
            required
            value={name}
            setValue={setName}
            />
            <FillText 
            title='Position'
            placeholder='Ingresar Puesto'
            required
            value={position}
            setValue={setPosition}
             />
            <FillText 
            title='photo' 
            placeholder='Ingrese Enlace de Foto'
            required
            value={photo}
            setPhoto={setPhoto}
            />
            <ListOptions 
             value={team}
             setTeam={setTeam}
            />
            <Button>Guardar Colaborador</Button>
        </form>
    </section>
}

export default Form;