import { useState } from "react";

export default function Formularz() {
  const [tekst, setTekst] = useState<string>("");
  const [tekstTwo, setTekstTwo] = useState<string>("");
  // const [tekstComp, setTekstComp] = useState<string>("");
  function tekstComp() {
    if (tekst == "" && tekstTwo == "") {
      return "Proszę wprowadzić hasło";
    } else if (tekst !== tekstTwo) {
      return "Hasła nie są zgodne!";
    } else{
      return "";
    };
  }
  return (
    <div>
      <input type="text" value={tekst} onChange={(e) => setTekst(e.target.value)} placeholder="Wprowadź hasło"/>
      <br />
      <br />
      <input type="text" value={tekstTwo} onChange={(e) => setTekstTwo(e.target.value)} placeholder="Powtórz hasło"/>
      <br />
      <br />
      <div>{tekstComp()}</div>
    </div>
  );
}