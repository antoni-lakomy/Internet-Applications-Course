export default function Ternary() {
    const a: boolean = true;
    const b: boolean = false;

    return (
        <>
            {a ? <h1>Stwierdzenie a jest prawdziwe</h1> : <h1>Stwierdzenie a jest fałszywe</h1>}
            {b ? <h1>Stwierdzenie b jest prawdziwe</h1> : <h1>Stwierdzenie b jest fałszywe</h1>}
        </>
    );
}