import { createContext, useRef, useState } from "react";
import AppList from "./AppsList";

// Create the context
export const CarouselContext = createContext();

// Provider component
export const CarouselProvider = ({ children }) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // Track the active item index

  const items = AppList;

  // Scroll to specific item
  const scrollToItem = (index) => {
    const scrollContainer = scrollRef.current;
    const itemWidth =
      scrollContainer.querySelector(".carousel-item").offsetWidth;

    scrollContainer.scrollTo({
      left: itemWidth * index, // Scroll to the exact position of the item
      behavior: "smooth",
    });
    setActiveIndex(index); // Update active index
  };

  // Handle clicking the left/right buttons
  const scroll = (direction) => {
    let newIndex = activeIndex;

    if (direction === "left") {
      newIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    } else {
      newIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    }

    scrollToItem(newIndex);
  };

  return (
    <CarouselContext.Provider
      value={{ scrollRef, activeIndex, items, scroll, scrollToItem }}
    >
      {children}
    </CarouselContext.Provider>
  );
};
