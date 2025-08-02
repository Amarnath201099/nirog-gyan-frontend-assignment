import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DoctorsContext } from "../../context/DoctorsContext";
import AppointmentForm from "../../components/AppointmentForm";
import "./index.css";

const DoctorProfilePage = () => {
  const [showForm, setShowForm] = useState(false);
  const [bookingClosed, setBookingClosed] = useState(false);

  const { id } = useParams();
  const { doctors } = useContext(DoctorsContext);

  const allSlots = ["10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "11:30 PM"];

  const doctor = doctors.find((doc) => String(doc.id) === id);

  useEffect(() => {
    if (!doctor) return;

    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const getSlotMinutes = (slotStr) => {
      const [time, meridiem] = slotStr.split(" ");
      let [hours, minutes] = time.split(":").map(Number);
      if (meridiem === "PM" && hours !== 12) hours += 12;
      if (meridiem === "AM" && hours === 12) hours = 0;
      return hours * 60 + minutes;
    };

    const availableSlots = allSlots.filter(
      (slot) =>
        !doctor.booked_slots.includes(slot) &&
        getSlotMinutes(slot) > currentMinutes
    );

    const lastSlotTime = getSlotMinutes(allSlots[allSlots.length - 1]);

    // If it's within 10 minutes before or after the last time slot OR no more available slots
    if (
      currentMinutes >= lastSlotTime - 10 ||
      availableSlots.length === 0 ||
      doctor.availability === "Fully Booked"
    ) {
      setBookingClosed(true);
    } else {
      setBookingClosed(false);
    }
  }, [doctor]);

  if (!doctors.length) {
    return <h3 className="text-center mt-5">Loading doctor information...</h3>;
  }

  if (!doctor) {
    return <h2 className="text-center mt-5">Doctor not found</h2>;
  }

  return (
    <div className={showForm ? "blurred-content" : "doc-profile-container"}>
      <div className="doc-details-card d-flex flex-column align-items-center text-center">
        <img
          src={doctor.profile_image}
          alt={doctor.name}
          className="rounded-circle mb-3 profile-img"
        />
        <h2 className="fw-bold">{doctor.name}</h2>
        <h5 className="text-muted">{doctor.specialization}</h5>
        <p
          className={`badge bg-${
            doctor.availability === "Available Today"
              ? "success"
              : doctor.availability === "Fully Booked"
              ? "danger"
              : "secondary"
          } mt-2 px-3 py-2`}
        >
          {doctor.availability}
        </p>

        {bookingClosed ? (
          <div className="booking-close-container">
            <p className="text-danger mt-3 mb-2 px-4 fw-semibold">
              Booking closed for today. Please try again tomorrow. <br />
            </p>
            <p className="text-muted fst-italic">
              “We’ll be ready to care for you tomorrow — take care, rest easy.”
            </p>
          </div>
        ) : (
          <button
            className="btn btn-primary mt-3 px-4 booking-btn"
            onClick={() => setShowForm(true)}
          >
            Book Appointment
          </button>
        )}
      </div>

      <div className="description-container">
        <h4>About Dr. {doctor.name.split(" ")[1]}</h4>
        <p>{doctor.experience}</p>

        <h5 className="mt-5">About the Specialization</h5>
        <p>{doctor.specialization_desc}</p>
      </div>

      <AppointmentForm
        doctor={doctor}
        isOpen={showForm}
        onClose={() => setShowForm(false)}
      />
    </div>
  );
};

export default DoctorProfilePage;
