import "./ListOptions.css";


const ListOptions = (props) =>{ 

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

    const HandlerChange = (e) =>{
        props.setTeam(e.target.value)
    }
    return <div className="list-options"> 
        <label>Teams</label>
    <select 
    value={props.value} 
    onChange={HandlerChange}
    >
        <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
       {teams.map((teams,index)=><option key={index} value={teams}>{teams}
        
       </option>)}
    </select>
    </div>
} 

export default ListOptions