import { useEffect, useState } from "react";

export default function Tytul() {
  const [tytul, setTytul] = useState<string>("");

  useEffect(() => {
    document.title = tytul;
  }, [tytul]);

  return (
    <input
      type="text"
      value={tytul}
      onChange={(e) => setTytul(e.target.value)}
      placeholder="Wpisz tytuł strony"
    />
  );
}
