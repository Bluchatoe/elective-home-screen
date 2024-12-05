import { createContext, useState } from "react";

// Create the context
export const LauncherContext = createContext(undefined);

// Create a provider component
const LauncherContextProvider = ({ children }) => {
  const [isLauncherWindowOpen, setIsLauncherWindowOpen] = useState(false);
  const [runningAppDetails, setRunningAppDetails] = useState({});

  const launcherValues = {
    isLauncherWindowOpen,
    setIsLauncherWindowOpen,
    runningAppDetails,
    setRunningAppDetails,
  };

  return (
    <LauncherContext.Provider value={launcherValues}>
      {children}
    </LauncherContext.Provider>
  );
};

export default LauncherContextProvider;
