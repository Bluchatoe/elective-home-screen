import { NavLink } from "react-router-dom";
import Body from "./Body";
import LogoPicture from "../../assets/helmet_amber.png";

export default function Root() {
  return (
    <div className="expert-system w-full h-full max-h-full overflow-clip bg-stone-900 text-white flex flex-col">
      <Header />
      <Body />
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-amber-400/10 p-4 relative bg-stone-950/65">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          {/* Img */}
          <div className="max-h-10 max-w-10">
            <img
              src={LogoPicture}
              alt="PenaltyMoto Logo"
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="font-bold text-lg">PenaltyMoto PH</h2>
            <p className="text-sm text-amber-400/70 font-poppins">
              RA 11235 Expert System
            </p>
          </div>
        </div>

        {/* NAV */}
        <nav className="absolute inset-0 w-full ">
          <ul className="h-full flex justify-center items-center gap-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-500 font-medium hover:text-amber-700 flex items-center gap-2"
                    : "text-stone-400 hover:text-stone-200 flex items-center gap-2"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                </svg>
                Expert System
              </NavLink>
            </li>
            <li>
              <NavLink
                to="./law"
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-500 font-medium hover:text-amber-700 flex items-center gap-2"
                    : "text-stone-400 hover:text-stone-200 flex items-center gap-2"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  fill="currentColor"
                  className="size-5"
                >
                  <path d="M384 32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L398.4 96c-5.2 25.8-22.9 47.1-46.4 57.3L352 448l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0 0-294.7c-23.5-10.3-41.2-31.6-46.4-57.3L128 96c-17.7 0-32-14.3-32-32s14.3-32 32-32l128 0c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288l144.9 0L512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C627.2 382 574.9 416 512 416zM126.8 195.8L54.4 320l144.9 0L126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C242 382 189.7 416 126.8 416S11.7 382 .9 337.1z" />
                </svg>
                Law | RA 11235
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* RIGHT */}
        <div className="flex flex-col ">
          <h6 className="text-xs text-amber-500/80">
            CSELC03C - CS 401 Activity
          </h6>
          <div className="flex items-center gap-2 text-sm text-white/90">
            <h4>Keith Marpuri</h4>
            <div className="text-amber-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                width={20}
                height={20}
              >
                <path
                  fill="currentColor"
                  d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L550.2 352l41.8 0c26.5 0 48-21.5 48-48l0-128c0-26.5-21.5-48-48-48l-76 0-4 0-.7 0-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48-80 0c-26.5 0-48 21.5-48 48L0 304c0 26.5 21.5 48 48 48l108.2 0 91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123z"
                />
              </svg>
            </div>
            <h4>Kenneth Pedero</h4>
          </div>
        </div>
      </div>
    </header>
  );
}
