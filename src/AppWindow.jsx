import { useLauncherContext } from "./hooks/context";
import ImageClassifier from "./projects/image-classifier/ImageClassifier";

const AppWindow = () => {
  const {
    isLauncherWindowOpen,
    setIsLauncherWindowOpen,
    runningAppDetails,
    setRunningAppDetails,
  } = useLauncherContext();

  if (!isLauncherWindowOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 w-full h-full z-50 flex justify-center items-center ">
      <div className="w-[90%] h-[90%] bg-white text-black rounded-lg flex flex-col overflow-clip border border-slate-600">
        {/* Menu Bar */}
        <div className="w-full bg-slate-800 h-10 flex items-center relative">
          <div className="px-3 flex items-center gap-2">
            <button
              className="rounded-full bg-sky-400 flex items-center justify-center w-4 h-4 border border-slate-100/50"
              onClick={() => {
                setIsLauncherWindowOpen(false);
                setRunningAppDetails({});
              }}
            >
              <CloseIcon
                className={`size-3  text-sky-400 hover:text-slate-800`}
              />
            </button>
            <button className="rounded-full bg-sky-300 flex items-center justify-center w-4 h-4 text-sky-300 hover:text-slate-800 border-slate-100/50">
              <SquareIcon className={`size-3`} />
            </button>
            <button
              className="rounded-full bg-sky-200 flex items-center justify-center w-4 h-4 text-sky-200 hover:text-slate-800 border-slate-100/50"
              onClick={() => {
                setIsLauncherWindowOpen(false);
              }}
            >
              <MinusIcon className={`size-3`} />
            </button>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-300 font-light">
            {runningAppDetails?.appName}.exe
          </div>
        </div>

        {/* App Body */}
        <div className="w-full h-full max-h-full overflow-clip bg-slate-200">
          {runningAppDetails?.appName === "Image Classifier" && (
            <ImageClassifier />
          )}
          {runningAppDetails?.appName === "GemBots" && <p>GEMBOTS</p>}
          {runningAppDetails?.appName === "PenaltyMoto PH" && (
            <p>penalty moto</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppWindow;

const CloseIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
    </svg>
  );
};

const SquareIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5Z"></path>
    </svg>
  );
};

const MinusIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M5 11V13H19V11H5Z"></path>
    </svg>
  );
};
