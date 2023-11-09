import React, {useState, useEffect}  from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {
    const [usuario, setUsuario] = useState("Yesenia Campos");
    const [fecha, setFecha] = useState("01-01-1998");
    const [contador, setContador] = useState(0);

    const modUsuario = e => {
        setUsuario(e.target.value);

        console.log("Ha habido un cambio en usuario");

    };

    const cambiarFecha = e => {
        setFecha(Date.now());
    };
    {/* Use-Effect tantas veces tu hace sun cambios se ejecuta el use effect cada que realices un cambio en un estado */}
    //si lo dejas vacio [] solo se ejecuta 1 vez al ejecutar el componente
    useEffect(() => {
        console.log("Ha habido un cambio en usuario");
    }, []);
    
    //Se ejecuta solo si cambio el usuario
    useEffect(() => {
        
        setContador(contador+1);
        console.log("Has modificado el usuario: " + contador);
    }, [usuario,fecha]);


    return (
        <div>
            <h1>El Efecto - useEffect</h1>
            <strong className={contador >= 10 ? "label label-green" : "label"} >{usuario}</strong>
            <strong className={contador >= 10 ? "label label-green" : "label"}>{fecha}</strong>
            <p>
                <input type="text"
                    onChange={modUsuario}
                    placeholder='Cambial el nombre'
                />

                <button onClick={cambiarFecha}>Cambiar Fecha</button>
            </p>

            {
                usuario== "YESENIA" && <AvisoComponent/>
            }
        </div>
    )
}
