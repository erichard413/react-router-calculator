import React from 'react';
import {useParams} from 'react-router-dom';
import doMath from './hooks';

const Output = () => {
    const {num1, num2, operation} = useParams();
    let output = doMath(num1, num2, operation);
    return (
        <div className="Output">
            <h1>ANSWER: {output}</h1>
        </div>
    )
}

export default Output;