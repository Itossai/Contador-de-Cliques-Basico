import React, { useState } from 'react';

const Contador = () =>{
    const [contador, setContador] = useState(0);

    const incrementarContador = () =>{
        setContador(contador + 1);
    }
    return(<>
        <h2>Contador: {contador}</h2>
        <button onClick={incrementarContador}>Clique Aqui</button>
        </>
    );
};

export default Contador;