import { useState } from 'react';

export default function Licznik() {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h1>licznik</h1>
            <div>{counter}</div>
            <button onClick={() => setCounter(counter+1)}>Dodaj</button>
        </div>
    )
}