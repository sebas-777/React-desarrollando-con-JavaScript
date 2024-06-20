import Button from "../Button";
import FillText from "../FillText";
import ListOptions from "../ListOptions";
import "./Form.css"

const Form = () =>{ 

    const HanderSend = (e) =>{     
        e.preventDefault();
        console.log('Manejar el envio',e);
    }

    return<section className = "form">
        <form onSubmit={HanderSend}>
            <h2>Rellene el formulario para crear el colaborador</h2>
            <FillText 
            title='Nombre'
            placeholder='Ingresar Nombre' 
            required
            />
            <FillText 
            title='Puesto'
            placeholder='Ingresar Puesto'
            required
             />
            <FillText 
            title='Foto' 
            placeholder='Ingrese Enlace de Foto'
            required
            />
            <ListOptions/>
            <Button>Guardar Colaborador</Button>
        </form>
    </section>
}

export default Form;