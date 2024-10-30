import Body from "./body/Body";
import BottomPart from "./bottom-part/BottomPart";
import { CarouselProvider } from "./CarouselContext";
import Header from "./header/Header";
import useCarousel from "./useCarousel";

function Foreground() {
  return (
    <div className="relative h-full w-full max-w-[1700px] mx-auto flex z-10 text-white flex-col">
      <CarouselProvider>
        <AppBackgroundImage />

        <Header />
        <Body />
        <BottomPart />
      </CarouselProvider>
    </div>
  );
}

export default Foreground;

function AppBackgroundImage() {
  const { items, activeIndex } = useCarousel();

  const activeItem = items[activeIndex];

  if (!activeItem) return null;

  return (
    <div className="fixed inset-0 w-full h-full ">
      {activeItem.appBgImage}
      <div className="bg-slate-950 bg-opacity-50 absolute inset-0 z-10"></div>
    </div>
  );
}
