import { useState } from "react";

export default function Formularz() {
  const [tekst, setTekst] = useState<string>("");
  return (
    <div>
      <input type="text" value={tekst} onChange={(e) => setTekst(e.target.value)} placeholder="Tutaj pisać!"/>
      <div>{tekst}</div>
    </div>
  );
}
