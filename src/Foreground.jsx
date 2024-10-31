import Body from "./body/Body";
import BottomPart from "./bottom-part/BottomPart";
import { CarouselProvider } from "./CarouselContext";
import Header from "./header/Header";
import useCarousel from "./useCarousel";
import { motion, AnimatePresence } from "framer-motion";

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
    <AnimatePresence mode="wait">
      <motion.div
        key={activeItem.appName}
        className="fixed inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {activeItem.appBgImage}
        <div className="bg-slate-950 bg-opacity-50 absolute inset-0 z-10"></div>
      </motion.div>
    </AnimatePresence>
  );
}
