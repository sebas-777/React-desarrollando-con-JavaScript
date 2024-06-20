import {useState} from 'react';
import './MyOrg.css'

const MyOrg = () =>{ 
    //State - hooks
    //useStates
    // UseState()
    console.log(useState());
   
    const [nombre,setNombre] = useState('Harland');

    const handlerClick = () =>{
        console.log('Mostrar/Ocultar elemento')
    }

    return <section className='orgSection'>
        <h3 className='title' > Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={handlerClick}/>

    </section>
}

export default MyOrg;