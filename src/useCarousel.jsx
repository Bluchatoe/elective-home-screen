import { useContext } from "react";
import { CarouselContext } from "./CarouselContext";

// Custom hook to use the CarouselContext
const useCarousel = () => {
  return useContext(CarouselContext);
};

export default useCarousel;
