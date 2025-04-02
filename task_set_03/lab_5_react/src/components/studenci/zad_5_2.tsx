import { useState } from "react";

interface Student {
    imie: string;
    nazwisko: string;
    rocznik: number;
  }

interface DodawanieProps {
  onAdd: (student: Student) => void;
}

function Dodawanie({ onAdd }: DodawanieProps) {
  const [imie, setImie] = useState("");
  const [nazwisko, setNazwisko] = useState("");
  const [rocznik, setRocznik] = useState("");

  const handleAdd = () => {
    // Walidacja
    if (!imie || !nazwisko || !rocznik) {
      alert("Wszystkie pola muszą być wypełnione.");
      return;
    }

    if (isNaN(Number(rocznik))) {
      alert("Rocznik musi być liczbą.");
      return;
    }

    // Dodanie nowego studenta
    onAdd({ imie, nazwisko, rocznik: Number(rocznik) });

    // Czyszczenie formularza
    setImie("");
    setNazwisko("");
    setRocznik("");
  };

  return (
    <div>
      <h2>Dodaj Studenta</h2>
      <input className="dodawanie"
        type="text"
        placeholder="Imię"
        value={imie}
        onChange={(e) => setImie(e.target.value)}
      />
      <input className="dodawanie"
        type="text"
        placeholder="Nazwisko"
        value={nazwisko}
        onChange={(e) => setNazwisko(e.target.value)}
      />
      <input className="dodawanie"
        type="text"
        placeholder="Rocznik"
        value={rocznik}
        onChange={(e) => setRocznik(e.target.value)}
      />
      <br />
      <button onClick={handleAdd}>Dodaj</button>
    </div>
  );
}

export default function StudentManager() {
//   interface Student {
//     imie: string;
//     nazwisko: string;
//     rocznik: number;
//   }

  const student1: Student = {
    imie: "Jan",
    nazwisko: "Kowalski",
    rocznik: 2003,
  };

  const student2: Student = {
    imie: "Zosia",
    nazwisko: "Samosia",
    rocznik: 2005,
  };

  const student3: Student = {
    imie: "Bożydar",
    nazwisko: "Odboga",
    rocznik: 2001,
  };

  const initialStudents: Student[] = [student1, student2, student3];

  const [Students, setStudents] = useState<Student[]>(initialStudents);

  const addStudent = (newStudent: Student) => {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  return (
    <div className="student-manager">
      <table className="student-table">
        {Students.map((studencik) => (
          <tr>
            <td>{studencik.imie}</td>
            <td>{studencik.nazwisko}</td>
            <td>{studencik.rocznik}</td>
          </tr>
        ))}
      </table>
      <Dodawanie onAdd={addStudent}/>
    </div>
  );
}
