import { useState } from "react";

export default function Logowanie() {
  const [username, setUsername] = useState<string>("");
  const [haslo, setHaslo] = useState<string>("");
  const [hasloRepeat, setHasloRepeat] = useState<string>("");

  const isFilled = () => username && haslo && hasloRepeat;

  function validateLogin() {
    if (haslo !== hasloRepeat) {
      alert("Hasła nie są zgodne gałganie!");
    } else {
      alert("Hasła zgodne, yuhuuu!");
    }
  }
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Wprowadź nazwę użytkownika"
      />
      <br />
      <br />
      <input
        type="text"
        value={haslo}
        onChange={(e) => setHaslo(e.target.value)}
        placeholder="Wprowadź hasło"
      />
      <br />
      <br />
      <input
        type="text"
        value={hasloRepeat}
        onChange={(e) => setHasloRepeat(e.target.value)}
        placeholder="Powtórz hasło"
      />
      <br />
      <br />
      <button onClick={validateLogin} disabled={!isFilled()}>
        Zaloguj się
      </button>
    </div>
  );
}
