# BeFit Tracker

BeFit Tracker is a **React-based fitness tracking app** that allows users to log workouts, view exercise history, track fitness progress, and get guided workout recommendations. It integrates with the **WGER API** to provide real exercises, ranked from best to least effective, along with instructional videos.

## 🚀 Features

✅ **Log Workouts** – Users can enter exercises, sets, reps, and weights.
✅ **Workout History** – View past workout logs with timestamps.
✅ **Progress Tracking** – Displays fitness progress using data visualization (coming soon!).
✅ **Muscle Group Selection** – Users can select a muscle group to get recommended exercises.
✅ **Exercise Search & API Integration** – Fetch real exercise data from the WGER API.
✅ **Workout Ranking** – Exercises are ranked from best to least effective.
✅ **Instructional Videos** – Each exercise includes a video demonstrating proper form.
✅ **Responsive UI** – Built with Tailwind CSS for mobile-friendly design.
✅ **Persistent Data** – Uses localStorage to retain workout history.

---

## 🛠️ Tech Stack

- **Frontend**: React, React Router, Tailwind CSS
- **State Management**: useState, useEffect, Zustand (optional for scalability)
- **API Integration**: Fetch API / Axios (for exercise search and video embedding)
- **Storage**: localStorage (to save workout history)
- **Deployment**: Netlify / Vercel

---

## 📂 Folder Structure

```
BeFit-tracker/
│── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── WorkoutForm.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── LogWorkout.jsx
│   │   ├── History.jsx
│   │   ├── WorkoutPage.jsx  # Displays exercises for selected muscle group
│   │   ├── Signup.jsx
│   │   ├── Signin.jsx
│   ├── assets/
│   │   ├── images/  # Stores background images & assets
│   ├── App.jsx
│   ├── main.jsx
│── public/
│── package.json
│── tailwind.config.js
│── README.md
```

---

## 🏗️ Installation & Setup

### Clone the repository:

```sh
git clone https://github.com/your-username/BeFit-tracker.git
cd BeFit-tracker
```

### Install dependencies:

```sh
npm install
```

### Start the development server:

```sh
npm run dev
```

**Open in Browser:** The app will be available at `http://localhost:5173/` (if using Vite).

---

## 🚀 Deployment

To deploy the app on Netlify or Vercel:

### **Netlify:**

1. Push your project to GitHub.
2. Connect the repo to Netlify.
3. Deploy with automatic builds.

### **Vercel:**

1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Run the following command in the project directory:
   ```sh
   vercel
   ```

---

## 🎯 Upcoming Features

🔹 **Workout Progress Visualization with Charts** 📊  
🔹 **User Authentication & Profiles** 🔑  
🔹 **Dark Mode Support** 🌙  
🔹 **Exercise Suggestions Based on Workout History** 🤖

---

## 🤝 Contributing

Feel free to contribute! Fork the repo, make improvements, and submit a **Pull Request (PR)**.

---

## 📜 License

This project is open-source and licensed under the **MIT License**.

---

## 💪 Stay fit and keep tracking your progress with BeFit Tracker! 🚀
