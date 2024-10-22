function BottomPart() {
  return (
    <div className="w-full border border-white/40 text-center flex justify-between items-center relative p-5">
      <Controls />
      <KeyboardAndMouseIcon />
    </div>
  );
}

export default BottomPart;

function Controls() {
  return <div className="z-20">Controls</div>;
}

function KeyboardAndMouseIcon() {
  return <div className="z-20">Keyboard Mouse Icon</div>;
}
