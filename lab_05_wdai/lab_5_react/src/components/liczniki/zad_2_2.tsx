import { useState } from 'react';

interface PrzyciskProps {
    onClick: () => void; // Typowanie funkcji przekazywanej jako prop
  }
  
const Przycisk: React.FC<PrzyciskProps> = ({ onClick }) => {
    return <button onClick={onClick}>Dodaj</button>;
  };
  

export default function NowyLicznik() {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h1>licznik</h1>
            <div>{counter}</div>
            <Przycisk onClick={() => setCounter(counter+1)}/>
        </div>
    )
}