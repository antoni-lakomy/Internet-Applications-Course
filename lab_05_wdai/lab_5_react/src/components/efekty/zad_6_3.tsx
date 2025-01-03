import { useState, useEffect } from "react";

export default function Odliczanie() {
  const [czas, setCzas] = useState(15); // Stan licznika w sekundach
  const [dziala, setDziala] = useState(false); // Czy odliczanie jest aktywne

  useEffect(() => {
    let interval: number;

    if (dziala && czas > 0) {
      interval = setInterval(() => {
        setCzas((prev) => Math.max(prev - 0.1, 0)); // Zmniejsz czas z dokładnością do 0.1 sekundy
      }, 100);
    }

    return () => {
      if (interval) clearInterval(interval); // Sprzątanie po zakończeniu odliczania
    };
  }, [dziala, czas]); // Zależność od `dziala` i `czas`

  const toggleTimer = () => {
    setDziala(!dziala); // Zmiana stanu START/STOP
  };

  return (
    <div>
      <h1>Czas: {czas.toFixed(1)} sek</h1>
      <button
        onClick={toggleTimer}
        disabled={czas === 0}
      >
        {czas === 0 ? "Odliczanie zakończone" : dziala ? "STOP" : "START"}
      </button>
    </div>
  );
}
