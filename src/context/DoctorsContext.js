import { createContext, useState, useEffect } from "react";
import doctorsJson from "../data/doctors.json";

export const DoctorsContext = createContext();

const DoctorsProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    setDoctors(doctorsJson);
  }, []);

  const updateDoctor = (id, updatedData) => {
    setDoctors((prevDoctors) =>
      prevDoctors.map((doc) =>
        String(doc.id) === String(id) ? { ...doc, ...updatedData } : doc
      )
    );
  };

  return (
    <DoctorsContext.Provider value={{ doctors, updateDoctor }}>
      {children}
    </DoctorsContext.Provider>
  );
};

export default DoctorsProvider;
