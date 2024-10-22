import { useState } from "react";
import { useEffect } from "react";

function Header() {
  return (
    <header className="w-full border border-white/40 text-center flex justify-between items-center relative p-5">
      <Logo />
      <TimeAndDate />
      <Profile />
    </header>
  );
}

export default Header;

function Logo() {
  return <div className="z-20">Logo</div>;
}

function TimeAndDate() {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const date = new Date();
      // Format the date and time as needed
      const formattedDate = `${
        date.getMonth() + 1
      }/${date.getDate()}/${date.getFullYear()} - ${date
        .toLocaleString("en-US", { weekday: "short" })
        .toUpperCase()} - ${date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })}`;

      setDateTime(formattedDate);
    };

    // Update the date and time immediately
    updateDateTime();
    // Update the date and time every minute
    const intervalId = setInterval(updateDateTime, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="absolute inset-0 w-full flex justify-center items-center">
      {dateTime || "Loading..."}
    </div>
  );
}

function Profile() {
  return <div className="z-20">Profile</div>;
}
