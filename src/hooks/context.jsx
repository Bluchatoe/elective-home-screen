import { useContext } from "react";
import { LauncherContext } from "../LauncherContext";

// Create a custom hook to use the context
export const useLauncherContext = () => {
  const context = useContext(LauncherContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
