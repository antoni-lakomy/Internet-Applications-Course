import { useEffect, useState } from "react";

export default function LicznikTwo() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Hello world!");
  }, []);

  useEffect( () => {
    console.log(`Licznik zwiększył się do ${counter}`)
  }, [counter])

  return (
    <div>
      <h1>licznik</h1>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Dodaj</button>
    </div>
  );
}
