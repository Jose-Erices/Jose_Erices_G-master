import React from 'react';
import ComponenteHijo from './ComponenteHijo';

const ComponentePadre = () => {

    return (
        
        <div>
            
            <ComponenteHijo>
                <h1>ESTE TITULO ES DE PRIMERA</h1>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat molestias, magnam ex ut perspiciatis molestiae? Doloribus suscipit rem architecto dolor saepe ratione commodi, nisi non eos voluptate eligendi unde molestias!</p>
            </ComponenteHijo>


            <ComponenteHijo>
                <h1>ESTE TITULO ES DE SEGUNDA</h1>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat molestias, magnam ex ut perspiciatis molestiae? Doloribus suscipit rem architecto dolor saepe ratione commodi, nisi non eos voluptate eligendi unde molestias!</p>
            </ComponenteHijo>

        </div>
    );
};

export default ComponentePadre;