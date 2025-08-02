import { useState, useEffect, useContext } from "react";
import Popup from "reactjs-popup";
import { DoctorsContext } from "../../context/DoctorsContext";
import "./index.css";

const AppointmentForm = ({ doctor, isOpen, onClose }) => {
  const allSlots = ["10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "11:30 PM"];
  const { updateDoctor } = useContext(DoctorsContext);

  const [availableSlots, setAvailableSlots] = useState([]);
  const [formData, setFormData] = useState({
    patientName: "",
    email: "",
    slot: "",
  });
  const [confirmation, setConfirmation] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!isOpen) return;

    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();

    const bookedSlots = doctor.booked_slots || [];

    const filteredSlots = allSlots.filter((slot) => {
      if (bookedSlots.includes(slot)) return false;

      const [time, meridiem] = slot.split(" ");
      let [hour, minutes] = time.split(":").map(Number);

      if (meridiem === "PM" && hour !== 12) hour += 12;
      if (meridiem === "AM" && hour === 12) hour = 0;

      if (hour > currentHour) return true;
      if (hour === currentHour && minutes > currentMinutes) return true;

      return false;
    });

    setAvailableSlots(filteredSlots);
  }, [isOpen, doctor.booked_slots]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.patientName) newErrors.patientName = true;
    if (!formData.slot) newErrors.slot = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = true;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // After adding the new booking
    const updatedBookedSlots = [...(doctor.booked_slots || []), formData.slot];

    // Helper to check if a slot is in the future
    const isFutureSlot = (slot) => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinutes = now.getMinutes();

      const [time, meridiem] = slot.split(" ");
      let [hour, minutes] = time.split(":").map(Number);

      if (meridiem === "PM" && hour !== 12) hour += 12;
      if (meridiem === "AM" && hour === 12) hour = 0;

      if (hour > currentHour) return true;
      if (hour === currentHour && minutes > currentMinutes) return true;

      return false;
    };

    // Get only future slots from allSlots
    const futureSlots = allSlots.filter(isFutureSlot);

    // Now see how many of those are booked
    const futureBookedSlots = futureSlots.filter((slot) =>
      updatedBookedSlots.includes(slot)
    );

    // Availability logic: all future slots are booked
    const newAvailability =
      futureSlots.length === futureBookedSlots.length
        ? "Fully Booked"
        : "Available Today";

    updateDoctor(doctor.id, {
      booked_slots: updatedBookedSlots,
      availability: newAvailability,
    });

    setConfirmation(
      `Appointment booked successfully with ${doctor.name} at ${formData.slot}!`
    );

    setTimeout(() => {
      setConfirmation("");
      setFormData({ patientName: "", email: "", slot: "" });
      setErrors({});
      onClose();
    }, 3000);
  };

  return (
    <Popup
      open={isOpen}
      onClose={onClose}
      modal
      nested
      contentStyle={{ maxWidth: "420px", width: "90%" }}
    >
      {(close) => (
        <div className="appointment-popup">
          <h2 className="appointment-popup-doctor-name">{doctor.name}</h2>
          <p className="appointment-popup-specialization">
            {doctor.specialization}
          </p>

          {!confirmation ? (
            <form
              onSubmit={handleSubmit}
              className="appointment-popup-form"
              noValidate
            >
              <label className="appointment-popup-label">
                Patient Name:
                <input
                  type="text"
                  name="patientName"
                  placeholder="Enter your name..."
                  value={formData.patientName}
                  onChange={handleChange}
                  className={`appointment-popup-input ${
                    errors.patientName ? "error" : ""
                  }`}
                />
                {errors.patientName && (
                  <span className="appointment-popup-error-msg">
                    *Please enter a name
                  </span>
                )}
              </label>

              <label className="appointment-popup-label">
                Email:
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email id..."
                  value={formData.email}
                  onChange={handleChange}
                  className={`appointment-popup-input ${
                    errors.email ? "error" : ""
                  }`}
                />
                {errors.email && (
                  <span className="appointment-popup-error-msg">
                    *Please enter a valid email address
                  </span>
                )}
              </label>

              <fieldset className="appointment-popup-slots-group">
                <label>Select Time Slot:</label>
                <ul className="appointment-popup-slots-list">
                  {allSlots.map((slot) => {
                    const disabled = !availableSlots.includes(slot);
                    return (
                      <li
                        key={slot}
                        className={`appointment-popup-slot-item ${
                          disabled ? "disabled" : ""
                        }`}
                      >
                        <label>
                          <input
                            type="radio"
                            name="slot"
                            value={slot}
                            onChange={handleChange}
                            disabled={disabled}
                            checked={formData.slot === slot}
                            className="appointment-popup-radio"
                          />
                          {slot}
                        </label>
                      </li>
                    );
                  })}
                </ul>
                {errors.slot && (
                  <span className="appointment-popup-error-msg">
                    *Please select a time slot
                  </span>
                )}
              </fieldset>

              <button
                type="submit"
                className="appointment-popup-submit-btn"
                disabled={availableSlots.length === 0}
              >
                Book Appointment
              </button>
            </form>
          ) : (
            <p className="appointment-popup-confirmation">{confirmation}</p>
          )}

          {!confirmation && (
            <button
              onClick={() => {
                close();
                onClose();
              }}
              className="appointment-popup-close-btn"
            >
              Close
            </button>
          )}
        </div>
      )}
    </Popup>
  );
};

export default AppointmentForm;
