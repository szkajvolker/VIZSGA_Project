import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CreatePage from "./pages/CreatePage";
import ScooterPage from "./pages/ScooterPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/create" element={<CreatePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/scooter/:id" element={<ScooterPage />} />
      </Routes>
    </>
  );
}

export default App;
