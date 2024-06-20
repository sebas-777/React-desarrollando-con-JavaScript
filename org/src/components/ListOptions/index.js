import "./ListOptions.css";


const ListOptions = () =>{ 

    // Metodo map ->arreglo.map((equipo,index) =>{
    //     return <option></option>
    // })

    const teams = [
        "Programación",
        "Front End",
        "Data Sciencie",
        "Devops",
        "UX Y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]
    return <div className="list-options"> 
        <label>Equipos</label>
    <select >
       {teams.map((teams,index)=><option key={index}>{teams}</option>)}
    </select>
    </div>
} 

export default ListOptions