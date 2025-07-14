import { Routes, Route } from "react-router-dom";
import { Suspense } from "react"; 
import * as Screen from "./router";


export default function App() {
  return (
    <Suspense fallback={<div className="text-center p-10">Chargement...</div>}>
      <Routes>
        <Route path="/Rapid-form/" element={<Screen.PageUnderConstruction />} />
      </Routes>
    </Suspense>
  );
}
