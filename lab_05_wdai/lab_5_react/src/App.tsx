// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Haslo from './components/formularze/zad_3_2';
// import Logowanie from './components/formularze/zad_3_3';
// import Ternary from './components/inne/zad_4_1';
// import Aktualizacja from './components/inne/zad_4_2';
// import Studenci from './components/studenci/zad_5_1';
import StudentManager from './components/studenci/zad_5_2';
// import Formularz from './components/formularze/zad_3_1'
// import Produkt from './components/koszyk/zad_1_1';
// import Licznik from './components/liczniki/zad_2_1';
// import NowyLicznik from './components/liczniki/zad_2_2';

// function Koszyk() {
//   return (
//     <div>
//       <Produkt nazwa='jabłko'/>
//       <Produkt nazwa='gruszka'/>
//       <Produkt nazwa='pomarańcza'/>
//       <Produkt nazwa='bakłażan'/>
//       <Produkt nazwa='kremówka'/>
//     </div>  
//   )
// }

// function NowyKoszyk() {
//   const produkty = ['śliwka', 'banan', 'awokado', 'gruszka', 'jabłko']
//   return (
//     produkty.map((produkt) => <Produkt nazwa={produkt}/> )
//   );
// }


export default function App() {
  // return (
  //   <div>
  //     <NowyKoszyk/>
  //     <Koszyk/>
  //   </div>  
  // );

  // return (
      // <Licznik/>
      // <NowyLicznik/>
  //   );

  // return (
  //   // <Formularz/>
  //   // <Haslo/>
  //    <Logowanie/>
  // );
  // return (
    // <Ternary/>
    // <Aktualizacja/>
  // )
  return (
    // <Studenci/>
    <StudentManager/>
  )

  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

