# 🏥 NirogGyan Healthcare Appointment Booking App

A fully responsive, intuitive, and modern healthcare appointment booking application built using React. This platform enables users to effortlessly search for doctors by name or specialization, view detailed doctor profiles including their real-time availability, and conveniently book appointments through a streamlined and accessible interface. Designed with user experience at its core, this app ensures that patients can connect with healthcare professionals quickly and efficiently—whether they're on a desktop, tablet, or mobile device. Ideal for demonstrating frontend development skills in a practical, healthcare-focused scenario.

---

## 📌 Features

- 🔍 Search doctors by **name** or **specialization**
- 🧑‍⚕️ View detailed **doctor profiles**
- 🗓️ Book appointments using a clean, responsive **popup form**
- ⏰ Dynamic availability based on time and booked slots
- ♻️ Real-time UI updates via **Context API**
- 🧾 Inline **form validation** with error feedback
- 📱 Fully responsive and mobile-friendly UI
- 🚫 Clear **loading** and **empty search result** handling
- 📱 **Mobile-first design** ensures seamless user experience on all device sizes starting from small screens.

---

## 🛠️ Tech Stack

| 🧰 Tool          | 🔍 Purpose                    |
| ---------------- | ----------------------------- |
| React            | Frontend framework            |
| Context API      | State management              |
| React Router DOM | Routing between pages         |
| Bootstrap        | UI framework (styling/layout) |
| React Icons      | Icons used in navbar/footer   |
| reactjs-popup    | Appointment form modal        |

---

## 🚀 Deployment

This project is deployed using **Vercel** for fast, secure, and serverless frontend hosting.

🔗 **Live URL:** [https://nirog-gyan-frontend-assignment-health-care.vercel.app](https://nirog-gyan-frontend-assignment-lovat.vercel.app/)

---

## 📂 Folder Structure

```
src/
│
├── components/
│   ├── NavBar/
│   ├── Footer/
│   └── AppointmentForm/
│
├── pages/
│   ├── LandingPage/
│   └── DoctorProfilePage/
│
├── context/
│   └── DoctorsContext.js
│
├── data/
│   └── doctors.json
│
├── App.js
└── index.js
```

---

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone [https://github.com/Amarnath201099/nirog-gyan-frontend-assignment.git](https://github.com/Amarnath201099/nirog-gyan-frontend-assignment.git)
   cd nirog-gyan-frontend-assignment
   ```

   This command copies the project repository from GitHub to your local machine and navigates into the project directory so you can start working on it.

2. **Install dependencies**
   Run the following command in your project directory to install all required packages:

   ```bash
    npm install
   ```

3. **Run the app**
   After the dependencies are installed, start the development server with:
   ```bash
   npm start
   ```

---

## 📐 Responsive Design Strategy

This project uses a **mobile-first approach**, designing and optimizing the UI for **smaller screens first**, then progressively enhancing layouts for larger devices. This ensures smooth usability and performance across smartphones, tablets, and desktops.

---

## 🌱 Future Improvements

If given more time, here are features I would implement:

- 🧠 Backend using **Node.js + Express** to persist data
- 💾 Integration with a real **database** (e.g., MongoDB or PostgreSQL) to store doctor and appointment records
- ✉️ Email confirmation via mock email service
- 📆 Full calendar integration for multi-day booking
- 🔐 User authentication for managing appointments
- 🧪 Unit testing using **React Testing Library**

---

## 🧠 Challenges Faced & Solutions

| ⚠️ Challenge                 | ✅ Solution                                                                          |
| ---------------------------- | ------------------------------------------------------------------------------------ |
| Dynamic time slot filtering  | Used JavaScript `Date` logic to show only future & available time slots              |
| Managing shared doctor state | Implemented global state using **React Context API** with an `updateDoctor()` method |

---

## 🙏 Thank You

Thank you for taking the time to review this project.  
If you have any questions or would like to get in touch, feel free to reach out:

📧 **Email:** amarnath201099@gmail.com
