import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import DoctorProfilePage from "./pages/DoctorProfilePage";
import DoctorsProvider from "./context/DoctorsContext";
import Footer from "./components/Footer";

function App() {
  return (
    <DoctorsProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/doctor/:id" element={<DoctorProfilePage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </DoctorsProvider>
  );
}

export default App;
