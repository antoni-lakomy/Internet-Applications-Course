export default function Studenci() {
    interface Student {
        imie: string;
        nazwisko: string;
        rocznik: number;
    }

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
    
    const Students:Student[] = [student1, student2, student3];

    return (
        <table>
            {Students.map((studencik) => 
                <tr>
                    <td>{studencik.imie}</td>
                    <td>{studencik.nazwisko}</td>
                    <td>{studencik.rocznik}</td>
                </tr>
                    )
                }
        </table>
    )
}