import React from 'react';
import { useState } from 'react';
import '../css/Counter.css';

function Counter({clics}) {
    
    return (
        <div className='contenedor-counter centered'>
            {clics}
        </div>
    );
}

export default Counter;