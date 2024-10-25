import { useEffect, useMemo, useRef, useState } from "react";
import { KeyboardCaps } from "../bottom-part/BottomPart";

function Body() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // Track the active item index

  const items = [
    { app: "app1" },
    { app: "app2" },
    { app: "app3" },
    { app: "app4" },
    { app: "app5" },
    { app: "app6" },
  ];

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
      console.log("leftCondition: ", activeIndex === 0);
      newIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    } else {
      console.log("RightCondition: ", activeIndex === items.length - 1);
      newIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    }

    scrollToItem(newIndex);
  };

  return (
    <main className="grow flex flex-col pt-12 ">
      <TabFilters handleScroll={scroll} />
      <AppsCarousel
        scrollRef={scrollRef}
        items={items}
        activeIndex={activeIndex}
        scrollToItem={scrollToItem}
      />
      <AppInfo />
    </main>
  );
}

export default Body;

function TabFilters({ handleScroll }) {
  const [activeTab, setActiveTab] = useState("All Projects");

  const tabs = useMemo(() => ["All Projects", "Recents", "Favorites"], []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "q") {
        // Move to the left tab
        setActiveTab((prev) => {
          const currentIndex = tabs.indexOf(prev);
          const newIndex = (currentIndex - 1 + tabs.length) % tabs.length; // Wrap around
          return tabs[newIndex];
        });
      } else if (event.key === "e") {
        // Move to the right tab
        setActiveTab((prev) => {
          const currentIndex = tabs.indexOf(prev);
          const newIndex = (currentIndex + 1) % tabs.length; // Wrap around
          return tabs[newIndex];
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [tabs]);

  useEffect(() => {
    const handleKeyAandD = (event) => {
      if (event.key === "d") {
        // Move to the right tab

        handleScroll("right");
      } else if (event.key === "a") {
        handleScroll("left");
      }
    };

    window.addEventListener("keydown", handleKeyAandD);
    return () => {
      window.removeEventListener("keydown", handleKeyAandD);
    };
  }, [handleScroll]);

  return (
    <div className="p-3 flex items-center">
      <div className="flex items-center gap-2">
        <KeyboardCaps letter="Q" />

        <div className="flex items-center gap-2 mx-4 bg-slate-900 p-1 rounded-lg border border-slate-400/20 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`p-2 rounded-md px-3 focus:outline-none ${
                activeTab === tab
                  ? "bg-sky-600 text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <KeyboardCaps letter="E" />
      </div>

      <div className="ml-auto flex gap-3">
        <button
          className=" aspect-square bg-slate-800/60 border-slate-200/30 border p-3 rounded-full hover:bg-slate-900"
          onClick={() => handleScroll("left")}
        >
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
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <button
          onClick={() => handleScroll("right")}
          className=" aspect-square bg-slate-800/60 border-slate-200/30 border p-3 rounded-full hover:bg-slate-900"
        >
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
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

function AppsCarousel({ scrollRef, activeIndex, items, scrollToItem }) {
  return (
    <div className="app-carousel h-full max-h-80 flex items-center p-2 gap-2">
      <div
        className="scroll-content flex items-center h-full gap-4 overflow-hidden py-2 px-2 pl-4"
        ref={scrollRef}
        style={{ scrollBehavior: "smooth" }}
      >
        {items.map((item, index) => (
          <AppContainer
            key={index}
            index={index}
            activeIndex={activeIndex}
            onClick={() => {
              scrollToItem(index);
            }}
          >
            <p>index: {index}</p>
            <p>{item.app}</p>
            <p>act: {activeIndex}</p>
          </AppContainer>
        ))}

        <div className="h-[100px] min-w-[1000px]"></div>
      </div>
    </div>
  );
}

function AppContainer({ index, activeIndex, children, onClick }) {
  return (
    <div
      className={`carousel-item h-full flex flex-col aspect-square justify-center items-center bg-slate-950/40 border border-slate-400/40 backdrop-filter backdrop-blur-xl rounded-lg hover:cursor-pointer hover:outline outline-1 ${
        index === activeIndex
          ? "active-item outline outline-2 outline-offset-2 outline-sky-400"
          : ""
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

function AppInfo() {
  return (
    <div className="pl-6 p-1">
      <div className="p-4 flex flex-col gap-2 max-w-xl">
        <div className="flex justify-between mb-2">
          <h2 className="text-3xl font-semibold">Project Name</h2>
          <button className="py-1 px-3 text-sm text-slate-200 font-light border rounded-md">
            Favorite
          </button>
        </div>

        <h6 className="text-sm font-light text-slate-200">
          Vestibulum consectetur consectetur nulla sit amet condimentum. Proin
          sollicitudin dui eget odio placerat, eu lacinia leo malesuada. Cras in
          dolor ut magna aliquam suscipit. Aliquam non ligula mattis,
        </h6>

        <div className="mt-4 flex justify-between items-end">
          <div>
            <h4>Technology</h4>

            <div className="flex flex-wrap gap-5 text-slate-300 font-light">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-sm font-light text-slate-300">
              Date Created
            </span>
            <span>Oct 2, 2001</span>
          </div>
        </div>
      </div>
    </div>
  );
}
