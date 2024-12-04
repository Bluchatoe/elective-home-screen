import "./App.css";
import AppWindow from "./AppWindow";
import Background from "./Background";
import Foreground from "./Foreground";

function App() {
  return (
    <BodyWrapper>
      <Background />
      <Foreground />
      <AppWindow />
    </BodyWrapper>
  );
}

export default App;

function BodyWrapper({ children }) {
  return (
    <div className="bg-sky-400 h-full text-white relative">{children}</div>
  );
}
