import FillText from "../FillText";
import "./Form.css"

const Form = () =>{
    return<section className = "form">
        <form action="">
            <h2>Rellene el formulario para crear el colaborador</h2>
            <FillText 
            title='Nombre'
            placeholder='Ingresar Nombre' 
            />
            <FillText 
            title='Puesto'
            placeholder='Ingresar Puesto'
             />
            <FillText 
            title='Foto' 
            placeholder='Ingrese Enlace de Foto'
            />
        </form>
    </section>
}

export default Form;