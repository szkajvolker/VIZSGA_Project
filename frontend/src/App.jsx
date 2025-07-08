import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CreatePage from "./pages/CreatePage";
import ScooterPage from "./pages/ScooterPage";
import HomePage from "./pages/HomePage";
// import { Toaster } from "sonner"; // enélkül nem működnek a toaster.success és toaster.error üzenetek

function App() {
  return (
    <>
      {/* <Toaster richColors /> */}
      <NavBar></NavBar> {/* Lehetne self closing tag: <Navbar/> */}
      <Routes>
        <Route path="/create" element={<CreatePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/scooter/:id" element={<ScooterPage />} />
      </Routes>
    </>
  );
}

export default App;
