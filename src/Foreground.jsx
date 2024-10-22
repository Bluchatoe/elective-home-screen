import Body from "./body/Body";
import BottomPart from "./bottom-part/BottomPart";
import Header from "./header/Header";

function Foreground() {
  return (
    <div className="relative h-full w-full max-w-[1700px] mx-auto flex z-10 text-white flex-col">
      <Header />
      <Body />
      <BottomPart />
    </div>
  );
}

export default Foreground;
