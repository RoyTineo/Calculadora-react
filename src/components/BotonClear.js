import React from "react";
import '../estilos/BotonClear.css'

const BotonClear = (props) => (
    <div 
    className="BotonClear" 
    onClick={props.manejarClic}>
        {props.children}
    </div>
)

export default BotonClear;