import React from 'react';
import './ComponenteFuncional.css';
const ComponenteFuncional = () => {
   const handleSubmit = (evento) => {
       evento.preventDefault();
       alert("Formulario de Compra enviado");
   }
   return (
<div>
<h3 className='total'>Formulario de Compra</h3>
{/* <form onSubmit={handleSubmit}>
<input className='inputF' type='text' placeholder='Ingrese su nombre' name='nombre' />
<br />
<input className='inputF' type='text' placeholder='Ingrese su dirección' name='direccion' />
<br />
<input className='inputF' type='email' placeholder='Ingrese su correo electrónico' name='correo' />
<br />
<input className='inputF' type='tel' placeholder='Ingrese su número de celular' name='celular' />
<br />
<button className='botonF' type='submit'>Enviar</button>
</form>
<a href="https://wa.me/+56938614835" target="_blank" className='whatsapp-link'>Si deseas puedes contactar directo al vendedor vía  WhatsApp</a> */}
</div>
   );
};
export default ComponenteFuncional;