import { useState } from "react";

export default function Aktualizacja () {
    interface Produkt {
        nazwa: string;
        cena: number;
    }

    const [produkt, setProdukt] = useState<Produkt>({nazwa : "Pomidor", cena : 50})
    
    const updateProdukt = (nowaCena:number) => {
        setProdukt((prevState) => ({ ...prevState, cena: nowaCena }));
    };

    return (
        <div>
            <h1>Aktualnie {produkt.nazwa} kosztuje {produkt.cena}</h1>
            <button onClick={() => updateProdukt(100)}>Zmień cenę</button>
        </div>
    )
}