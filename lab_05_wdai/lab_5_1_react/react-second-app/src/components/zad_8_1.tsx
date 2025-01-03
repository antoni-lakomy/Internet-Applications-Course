import { useState, useEffect } from 'react';

export default function Licznik() {
    const [counter, setCounter] = useState<number>(() => {
        const savedValue = localStorage.getItem("counter");
        return savedValue ? parseInt(savedValue, 10) : 0;
    });

    useEffect( () => {
        localStorage.setItem("counter", counter.toString());
    }, [counter]);

    return (
        <div>
            <h1>licznik</h1>
            <div>{counter}</div>
            <button onClick={() => setCounter(counter+1)}>Dodaj</button>
        </div>
    );
}