# Appointment Planner 🗓️

A responsive React application for managing contacts and scheduling appointments. Built with clarity, maintainability, and user experience in mind.

> ⚠️ This is a light practice project created as part of a Codecademy course.  
> It focuses on React fundamentals, component design, and state management.

## 🚀 Features

- Add and view contacts with name, phone, and email
- Schedule appointments with title, contact, date, and time
- Prevent duplicate contact names
- Dynamic form validation and controlled inputs
- Shared TileList component for consistent rendering
- Minimal, frictionless UI with clean routing

## 🧠 Tech Stack

- React (with hooks)
- React Router v6
- JavaScript (ES6+)
- CSS Modules (or plain CSS)

## 📁 Project Structure

```
src/
├── components/
│ ├── appointmentForm/
│ ├── contactForm/
│ ├── contactPicker/
│ ├── tile/
│ └── tileList/
├── containers/
│ ├── appointmentsPage/
│ └── contactsPage/
├── components/root/
│ └── Root.js
└── App.js
```

## 🛠️ How to Run

```bash
npm install
npm start
```

Runs the app in development mode at http://localhost:3000
🧪 How to Use

- Navigate to /contacts to add new contacts.
- Go to /appointments to schedule appointments.
- Select a contact from the dropdown when creating an appointment.
- All entries are displayed using reusable Tile components.
  📦 Deployment
  You can deploy this app using GitHub Pages, Vercel, or Netlify.
  To build for production:

```bash
npm run build
```
