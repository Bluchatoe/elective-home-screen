import { useState } from "react";
import { useEffect } from "react";

function Header() {
  return (
    <header className="w-full flex justify-between items-center relative p-4">
      <Logo />
      <TimeAndDate />
      <Profile />
    </header>
  );
}

export default Header;

function Logo() {
  return (
    <div className="z-20 flex items-center gap-3">
      <div className="max-h-12 max-w-12 bg-white  p-1 rounded-lg">
        <img src="/src/assets/ai-icon.png" alt="Logo icon" />
      </div>

      <div>
        <h3 className="font-medium text-lg mb-[-4px]">
          CS Elective <span className="text-sky-500 ">AI</span>
        </h3>
        <p className="text-sm text-slate-300 flex items-center gap-1">
          CSELC03C{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>
          </span>
        </p>
      </div>
    </div>
  );
}

function TimeAndDate() {
  const [dateTime, setDateTime] = useState({
    month: "",
    day: "",
    year: "",
    weekday: "",
    time: "",
    period: "",
  });

  useEffect(() => {
    const updateDateTime = () => {
      const date = new Date();

      // Get the month as a 3-letter string
      const month = date.toLocaleString("en-US", { month: "short" });

      // Get the day, year, and weekday
      const day = date.getDate();
      const year = date.getFullYear();
      const weekday = date
        .toLocaleString("en-US", { weekday: "short" })
        .toUpperCase();

      // Get the time and period (AM/PM)
      const timeString = date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      // Split the time and AM/PM
      const [time, period] = timeString.split(" ");

      setDateTime({ month, day, year, weekday, time, period });
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="absolute inset-0 w-full flex justify-center items-center">
      {dateTime ? (
        <div className="flex space-x-2 items-center gap-2">
          <div className="flex gap-1 items-center border border-slate-400/20 text-white bg-slate-950/20 p-2 px-3 rounded-full font-semibold bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
            </span>
            <span className="text-sky-500">{dateTime.month.toUpperCase()}</span>
            <span className="font-normal">{dateTime.year}</span>
          </div>

          <div className="flex flex-col items-center ">
            <span className="text-xs mb-[-4px] text-slate-300">
              {dateTime.weekday}
            </span>
            <span className="font-bold text-lg">{dateTime.day}</span>
          </div>

          <div className="flex items-center gap-1">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
            <span>{dateTime.time}</span>
            <span>{dateTime.period}</span>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

function Profile() {
  return (
    <div className="z-20 flex items-center gap-4">
      <div className="max-h-12 max-w-12 bg-white rounded-full outline outline-2 outline-sky-400 outline-offset-2 p-1 relative">
        <div className="absolute h-4 w-4 aspect-square bg-sky-400 left-[70%] bottom-[70%] rounded-full  border-white border-2"></div>

        <img src="/src/assets/sick.png" alt="avatar img" />
      </div>

      <div>
        <h3 className="flex items-center gap-1 text-lg">
          Joshua{" "}
          <span className="px-1 bg-sky-200 text-slate-950 text-xs font-medium rounded-sm">
            CS: 401
          </span>
        </h3>
        <p className="text-xs text-slate-300">@Blooblulub#02</p>
      </div>
    </div>
  );
}
