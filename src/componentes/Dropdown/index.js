import "./Dropdown.css"

const Dropdown = (props)=>{

    const aoSelecionar = (event)=>{
        props.aoAlterado(event.target.value)
    }

    return(
        <div className="dropdown">
            <label>{props.label}</label>
            <select onChange={aoSelecionar} required={props.required} value={props.valor}>
                <option value='' disabled ></option>
                {props.itens.map(item =>{return <option key={item}>{item}</option>})}
            </select>
        </div>
    )
}

export default Dropdown