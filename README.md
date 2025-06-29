# Event Voyage - A Local Event Discovery PlatForm

**Purpose:**  
Event Explorer is a web application designed to help users discover, explore, and get detailed information about upcoming local events like conferences, workshops, sports events, art exhibitions, and more. Users can log in, browse events, view detailed info and reserve Seat.

**Live URL:**  
[https://event-voyage.netlify.app/](https://event-voyage.netlify.app/)

---

## Key Features

- Browse and discover local events.
- Upcoming Event discovery.
- View Event Details.
- User Can Reserve seat for any Event.
- User authentication and login system.
- Responsive design for mobile and desktop.

---

## Technologies Used

- **Frontend:** React, Tailwind CSS, DaisyUI
- **Authentication:** Firebase

---

## NPM Packages

- **react** – Frontend UI components
- **react-router** – Client-side routing
- **TailwindCSS** – CSS framework
- **DaisyUI** – Tailwind CSS plugin for pre-build components
- **react-helmet** – Dynamic page Title
- **react-countup** – Count Up animation
- **react-icons** – Icon Package
- **react-tooltip** – Hover Over object to show a title or info
- **sweetalert2** – Show Success or Error alerts
- **swiper** – Slider View

🚀 Run the Project Locally:

Clone the Repository
```bash
git clone https://github.com/noboKumar/Event-Voyage.git
cd Event-Voyage
```

Install Dependencies
```bash
npm install
```

Set Up Environment Variables

Create a .env file in the root directory and add your Firebase config:
```bash
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```
Start the Development Server
```bash
npm run dev
```
The app will now be running on http://localhost:5173

