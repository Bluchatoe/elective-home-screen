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
  return (
    <div className="z-20 flex items-center gap-8">
      <div className="flex items-center gap-4">
        <KeyboardCaps letter="A" />
        <p>Previous</p>
      </div>

      <div className="flex items-center gap-4">
        <KeyboardCaps letter="D" />
        <p>Next</p>
      </div>

      <div className="flex items-center gap-4">
        <EnterkeyIcon letter="D" />
        <p>Lauch App</p>
      </div>
    </div>
  );
}

export function KeyboardCaps({ letter }) {
  return (
    <div
      className="border border-white rounded-lg px-3 py-2 text-sm bg-slate-900/80 select-none"
      style={{ boxShadow: "0 3px 0 0 white" }}
    >
      {letter}
    </div>
  );
}

function EnterkeyIcon() {
  return (
    <div
      className="border border-white rounded-lg px-4 py-2 text-sm bg-slate-900/80 select-none flex items-center gap-1"
      style={{ boxShadow: "0 3px 0 0 white" }}
    >
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
        <img src="/src/assets/computer.png" alt="computer icon" />
      </div>
      <div className="max-h-8 max-w-8">
        <img
          className="-rotate-45"
          src="/src/assets/mouse-no-bg.png"
          alt="computer icon"
        />
      </div>
    </div>
  );
}
