import React, { useEffect, useState } from 'react'



export const AjaxComponent = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setcargando] = useState(true);
    const [errores, setErrores] = useState([]);

    //Generico / basico 
    const getUsuarioEstaticos = () => {
        setUsuarios([
            {

                "id": 7,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson"
            },
            {
                "id": 8,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson"
            },
            {
                "id": 9,
                "email": "tobias.funke@reqres.in",
                "first_name": "Tobias",
                "last_name": "Funke"
            },
        ]);
    }
    //con promesas
    const getUsuariosAjaxPms = () => {
        fetch("https://reqres.in/api/users?page=1")
            .then(respuesta => respuesta.json())
            .then(resultadoFinal => {
                setUsuarios(resultadoFinal.data);
                console.log(usuarios);
            },
                error => {
                    console.log(error);
                });
    }

    //con  Async y Await
    const getUsuariosAjaxAW = () => {

        setTimeout(async () => {
            try {
                const peticion = await fetch("https://reqres.in/api/users?page=1");
                const { data } = await peticion.json();

                setUsuarios(data);
                setcargando(false);

            } catch (error) {
                console.log("Hola" + error);
                setErrores(error.message);
            }
        }, 1000)

    }



    useEffect(() => {
        //getUsuarioEstaticos();
        //getUsuariosAjaxPms();
        getUsuariosAjaxAW();
    }, []);
    
    if (errores != "") {
        //Cuando pasa algun error
        return (
            <div className='cargando'>
                Hay un error al cargar datos...
                &nbsp;
                {errores}
            </div>
        );
    } else if (cargando == true) {
        //Cuando esta cargando todo 
        return (
            <div className='cargando'>
                Cargando datos...
            </div>
        )
    } else if (cargando == false && errores == "") {
        //Ideal cuan todo fue bien
        return (
            <div>
                <h2>Listado de usuarios via AJAX </h2>
                <ol className='usuarios'>
                    {
                        usuarios.map(usuario => {
                            return <li key={usuario.id}>
                                <img src={usuario.avatar} width={20} />
                                &nbsp;
                                {usuario.first_name} {usuario.last_name}</li>
                        })
                    }
                </ol>

            </div>
        )
    }




}
