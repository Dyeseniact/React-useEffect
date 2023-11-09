import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(() => {
        //Cuando el componente se monta
        alert("El componente AvisoComponente esta montado");

        //Cuando el componente se desmonta
        return () => {
            alert("COMPONENTE DESMONTADO");
        };
    }, []); //se ejecuta 1 vez por el array vacio




    return (
        <div>
            <hr />
            <h3>Saludos Yesenia </h3>
            <button onClick={e => { alert("Bienvenido") }}>Mostrar Alerta</button>
        </div>
    )
}
