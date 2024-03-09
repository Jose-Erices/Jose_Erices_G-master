import React from 'react';


const Ejemplos = React.memo(({texto}) => {

    console.log("Renderizando mensaje...")

    return (
        <div>
            <h1>{texto}</h1>
        </div>
    );
})

export default Ejemplos;