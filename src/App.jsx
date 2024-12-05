import "./App.css";
import AppWindow from "./AppWindow";
import Background from "./Background";
import Foreground from "./Foreground";
import LauncherContextProvider from "./LauncherContext";

function App() {
  return (
    <BodyWrapper>
      <LauncherContextProvider>
        <Background />
        <Foreground />
        <AppWindow />
      </LauncherContextProvider>
    </BodyWrapper>
  );
}

export default App;

function BodyWrapper({ children }) {
  return (
    <div className="bg-sky-400 h-full text-white relative">{children}</div>
  );
}
