import useCarousel from "../useCarousel";

import ComputerIcon from "../assets/computer.png";
import MouseIcon from "../assets/mouse-no-bg.png";

function BottomPart() {
  return (
    <div className="w-full text-center flex justify-between items-center relative p-5">
      <Controls />
      <KeyboardAndMouseIcon />
    </div>
  );
}

export default BottomPart;

function Controls() {
  const { scroll } = useCarousel();

  const { items, activeIndex } = useCarousel();

  return (
    <div className="z-20 flex items-center gap-8">
      <div className="flex items-center gap-4">
        <KeyboardCaps
          letter="A"
          keyId="key-a"
          onClick={() => {
            scroll("left");
          }}
        />
        <p>Previous</p>
      </div>

      <div className="flex items-center gap-4">
        <KeyboardCaps
          letter="D"
          keyId="key-d"
          onClick={() => {
            scroll("right");
          }}
        />
        <p>Next</p>
      </div>

      {items[activeIndex] !== null && (
        <div className="flex items-center gap-4">
          <EnterkeyIcon />
          <p>Lauch App</p>
        </div>
      )}
    </div>
  );
}

export function KeyboardCaps({ letter, onClick, keyId }) {
  return (
    <div
      id={keyId}
      className="border border-slate-300/60 rounded-lg px-3 py-2 text-sm bg-slate-900/50 select-none aspect-square bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 hover:cursor-pointer hover:bg-slate-900/80 keyboard-caps-btn"
      onClick={onClick}
    >
      {letter}
    </div>
  );
}

function EnterkeyIcon() {
  return (
    <div className="border border-slate-300/60 rounded-lg px-4 py-2 text-sm bg-slate-900/50 select-none flex items-center gap-1 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 hover:cursor-pointer hover:bg-slate-900/80 keyboard-caps-btn">
      Enter
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
            d="m7.49 12-3.75 3.75m0 0 3.75 3.75m-3.75-3.75h16.5V4.499"
          />
        </svg>
      </span>
    </div>
  );
}

function KeyboardAndMouseIcon() {
  return (
    <div className="z-20 flex items-center gap-4">
      <div className="max-h-14 max-w-14">
        <img src={ComputerIcon} alt="computer icon" />
      </div>
      <div className="max-h-8 max-w-8">
        <img className="-rotate-45" src={MouseIcon} alt="computer icon" />
      </div>
    </div>
  );
}
