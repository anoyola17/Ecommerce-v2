// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React from "react";
import Navbar from "./components/navbar/navbar.jsx";
import Footer from "./components/footer/footer.jsx";
import highway from "/src/assets/highway.jpg";
import "./App.css"; 

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero-image">
          <div>
            <img id="hero-highway" src={highway} alt="Highway Motorcycle Riders" />
          </div>
          <div>
            <h1>RaceRev Motorsport</h1>
          </div>
        </section>

        <section>
          <p>We support riders of all levels, from complete beginners to seasoned motorcycle enthusiasts, in finding the right gear and equipment. 
          Our mission is to ensure every rider feels confident, safe, and well-equipped on the road.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;