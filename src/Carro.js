import React from 'react';

export default function Carro(props) {
    return(
        <div>
            <h2>Soy un carro modelo {props.marca}</h2>
            <img src={props.imagen}
            alt="Imagen del carro"
            with="150"/>
            <p> {props.descripcion}</p>
            
        </div>
    );
}
