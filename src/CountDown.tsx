// // src/Countdown.tsx
// import React, { useEffect, useState } from "react";
// import "./Countdown.css"; // we'll add styling here

// const targetDate = new Date("2025-06-01T00:00:00").getTime();

// const Countdown: React.FC = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: "00",
//     hours: "00",
//     minutes: "00",
//     seconds: "00",
//   });

//   useEffect(() => {
//     const updateTimer = () => {
//       const now = new Date().getTime();
//       const distance = targetDate - now;

//       if (distance <= 0) return;

//       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//       setTimeLeft({
//         days: String(days).padStart(2, "0"),
//         hours: String(hours).padStart(2, "0"),
//         minutes: String(minutes).padStart(2, "0"),
//         seconds: String(seconds).padStart(2, "0"),
//       });
//     };

//     const interval = setInterval(updateTimer, 1000);
//     updateTimer();

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="countdown-container">
//       <h1>Countdown to PeachHacks 🚀</h1>
//       <div className="countdown-timer">
//         {Object.entries(timeLeft).map(([label, value]) => (
//           <div key={label} className="countdown-block">
//             <span className="countdown-number">{value}</span>
//             <span className="countdown-label">{label}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Countdown;
// src/Countdown.tsx
import React, { useEffect, useState } from "react";
import "./Countdown.css"; // We'll add styling here

const targetDate = new Date("2025-06-01T00:00:00").getTime();

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) return;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    const interval = setInterval(updateTimer, 1000);
    updateTimer();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-container">
      <h1>Countdown to PeachHacks 🚀</h1>
      <div className="countdown-timer">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label} className="countdown-block">
            <span className="countdown-number">{value}</span>
            <span className="countdown-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;

