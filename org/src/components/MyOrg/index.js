import {useState} from 'react';
import './MyOrg.css'

const MyOrg = (props) =>{ 
    //State - hooks
    //useStates
    // UseState()
    // const [nombre,setNombre] = useState('Harland');
    console.log(props)

    // const[mostrar,setMostrar] = useState(true)

    // const handlerClick = () =>{
    //     console.log('Mostrar/Ocultar elemento' ,!mostrar);
    //     setMostrar(!mostrar);
    // }

    return <section className='orgSection'>
        <h3 className='title' > Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.changeShow}/>

    </section>
}

export default MyOrg;