import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MyOrg from './components/MyOrg';

function App() { 

  const[showForm,setShowForm] = useState(true);

  // ternario --> condicion ? seMuestra : noSeMuestra
  const changeShow = () =>{
    setShowForm(!showForm);
  }
  return (
    <div>
     <Header/>
     {/* {showForm  ? <Form/> : <></>} */} 
     {showForm && <Form />}
         
      <MyOrg changeShow ={changeShow}/>
    </div>
  );
}

export default App;
