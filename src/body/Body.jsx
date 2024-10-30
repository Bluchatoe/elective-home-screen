import { useEffect, useMemo, useState } from "react";
import { KeyboardCaps } from "../bottom-part/BottomPart";
import useCarousel from "../useCarousel";

function Body() {
  const { scrollRef, activeIndex, items, scroll, scrollToItem } = useCarousel();

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
    const qKey = document.getElementById("key-q");
    const eKey = document.getElementById("key-e");

    const handleKeyDown = (event) => {
      if (event.key === "q") {
        qKey.classList.add("keyboard-caps-btn-active");

        // Move to the left tab
        setActiveTab((prev) => {
          const currentIndex = tabs.indexOf(prev);
          const newIndex = (currentIndex - 1 + tabs.length) % tabs.length; // Wrap around
          return tabs[newIndex];
        });
      } else if (event.key === "e") {
        eKey.classList.add("keyboard-caps-btn-active");

        // Move to the right tab
        setActiveTab((prev) => {
          const currentIndex = tabs.indexOf(prev);
          const newIndex = (currentIndex + 1) % tabs.length; // Wrap around
          return tabs[newIndex];
        });
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === "q") {
        qKey.classList.remove("keyboard-caps-btn-active");
      } else if (event.key === "e") {
        eKey.classList.remove("keyboard-caps-btn-active");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);
    };
  }, [tabs]);

  useEffect(() => {
    const aKey = document.getElementById("key-a");
    const dKey = document.getElementById("key-d");

    const handleKeyAandD = (event) => {
      if (event.key === "d" || event.key === "ArrowRight") {
        dKey.classList.add("keyboard-caps-btn-active");

        // Move to the right tab
        handleScroll("right");
      } else if (event.key === "a" || event.key === "ArrowLeft") {
        aKey.classList.add("keyboard-caps-btn-active");

        handleScroll("left");
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === "d" || event.key === "ArrowRight") {
        dKey.classList.remove("keyboard-caps-btn-active");
      } else if (event.key === "a" || event.key === "ArrowLeft") {
        aKey.classList.remove("keyboard-caps-btn-active");
      }
    };

    window.addEventListener("keydown", handleKeyAandD);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyAandD);
      window.addEventListener("keyup", handleKeyUp);
    };
  }, [handleScroll]);

  return (
    <div className="p-3 flex items-center">
      <div className="flex items-center gap-2">
        <KeyboardCaps
          letter="Q"
          keyId="key-q"
          onClick={() => {
            setActiveTab((prev) => {
              const currentIndex = tabs.indexOf(prev);
              const newIndex = (currentIndex - 1 + tabs.length) % tabs.length; // Wrap around
              return tabs[newIndex];
            });
          }}
        />

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

        <KeyboardCaps
          letter="E"
          keyId="key-e"
          onClick={() => {
            setActiveTab((prev) => {
              const currentIndex = tabs.indexOf(prev);
              const newIndex = (currentIndex + 1) % tabs.length; // Wrap around
              return tabs[newIndex];
            });
          }}
        />
      </div>

      <div className="ml-auto flex gap-3 z-20">
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
            {item !== null && <>{item.appImage}</>}
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
      className={`carousel-item h-full flex flex-col aspect-square justify-center items-center bg-slate-950/40 border border-slate-400/40 backdrop-filter backdrop-blur-xl rounded-lg hover:cursor-pointer hover:outline outline-1 overflow-clip ${
        index === activeIndex
          ? "breathing-animation outline outline-offset-2 outline-sky-400"
          : ""
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

function AppInfo() {
  const { items, activeIndex } = useCarousel();

  const activeItem = items[activeIndex];

  if (!activeItem) return null;

  return (
    <div className="pl-6 p-1 z-20">
      <div className="p-4 flex flex-col gap-2 max-w-xl">
        <div className="flex justify-between mb-2">
          <h2 className="text-3xl font-semibold">{activeItem.appName}</h2>
          <button className="py-1 px-3 text-sm text-slate-200 font-light border rounded-md">
            Favorite
          </button>
        </div>

        <h6 className="text-sm font-light text-slate-200">
          {activeItem.description}
        </h6>

        <div className="mt-4 flex flex-col gap-5">
          <div>
            <h4 className="mb-1">Technology</h4>

            <div className="flex flex-wrap gap-4 text-slate-300 font-light">
              {activeItem.technologies.map((tech) => tech)}
            </div>
          </div>

          <div className="flex flex-col ">
            <span className="text-sm font-light text-slate-300">
              Date Created
            </span>
            <span>{activeItem.dateCreated}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
