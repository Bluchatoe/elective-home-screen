import { useEffect, useRef, useState } from "react";
import * as tmImage from "@teachablemachine/image";

const ImageClassifier = () => {
  const webcamRef = useRef(null);
  const [model, setModel] = useState(null);
  const [maxPredictions, setMaxPredictions] = useState(0);
  const [predictions, setPredictions] = useState([]);
  const URL = "https://teachablemachine.withgoogle.com/models/42ES1U83Q/";

  const init = async () => {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // Load the model and metadata
    const loadedModel = await tmImage.load(modelURL, metadataURL);
    setModel(loadedModel);
    setMaxPredictions(loadedModel.getTotalClasses());

    // Setup the webcam
    const flip = true; // Flip the webcam
    const webcam = new tmImage.Webcam(400, 400, flip);
    await webcam.setup(); // Request access to webcam
    await webcam.play();
    webcamRef.current = webcam;

    // Start the prediction loop
    window.requestAnimationFrame(() => loop(webcam, loadedModel));
  };

  const loop = async (webcam, model) => {
    webcam.update(); // Update webcam frame
    await predict(webcam, model);
    window.requestAnimationFrame(() => loop(webcam, model));
  };

  const predict = async (webcam, model) => {
    const prediction = await model.predict(webcam.canvas);
    setPredictions(prediction);
  };

  return (
    <main
      className="w-full h-full flex justify-center items-center"
      style={{
        backgroundImage: "linear-gradient(160deg, #0093e9 0%, #80d0c7 100%)",
      }}
    >
      <div className="flex flex-col w-full h-[700px] max-w-[1200px] overflow-hidden bg-white rounded-lg">
        <div className="flex justify-between border-b border-slate-300 px-3 py-3">
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center w-10 bg-sky-500 aspect-square rounded-lg border border-slate-200 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 mb-[-4px]">
                Teachable Machine
              </h4>
              <p className="text-slate-500 text-sm">Image Model</p>
            </div>
          </div>

          <div className="flex items-center gap-1 pr-2">
            <div className="text-sky-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-10"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-[-3px]">Kenneth Pedero</h4>
              <p className="text-xs bg-slate-700 inline text-white px-2 rounded-lg">
                CS 401
              </p>
            </div>
          </div>
        </div>

        <div className="classification-body flex bg-slate-100 h-full p-2 gap-2">
          <div
            className="cam-section w-[70%] h-full bg-slate-800 rounded-md flex justify-center items-center text-white"
            style={{
              background: `linear-gradient(
          109.6deg,
          rgb(36, 45, 57) 11.2%,
          rgb(16, 37, 60) 51.2%,
          rgb(0, 0, 0) 98.6%
        )`,
            }}
          >
            <div id="webcam-container">
              {webcamRef.current && (
                <canvas
                  ref={(el) => el && el.appendChild(webcamRef.current.canvas)}
                />
              )}
              <div id="cam-placeholder">
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-40"
                  >
                    <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                    <path
                      fillRule="evenodd"
                      d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-center text-slate-200">
                  Camera will appear here. <br />
                  Click{" "}
                  <b className="text-white">&#34;Start Classifying&#34;</b> to
                  open camera.
                </p>
              </div>
            </div>
          </div>

          <div className="stats-section w-[30%] h-full">
            <div
              id="label-container"
              className="bg-white border rounded shadow-sm p-4"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-lg">Classification</h3>
                <p className="text-sm text-slate-600">4 classes in total</p>
              </div>

              <div id="classes" className="flex flex-col gap-4 pb-2">
                {predictions.map((pred, index) => (
                  <ImageClass
                    key={index}
                    classModelName={pred.className}
                    percentage={pred.probability * 100}
                  />
                ))}
                <ImageClass />
                <ImageClass />
                <ImageClass />
                <ImageClass />
              </div>
            </div>
            <button
              className="start w-full py-3 bg-sky-500 hover:bg-sky-600 text-white mt-2 rounded-md"
              type="button"
              onClick={() => {
                init();
              }}
            >
              Start Classifying
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ImageClassifier;

const ImageClass = ({ classModelName = "Class Name", percentage = 0 }) => {
  return (
    <div>
      <div className="flex justify-between">
        <h4 className="text-slate-700">{classModelName}</h4>
        <h3 className="font-bold">{percentage.toFixed(2)}%</h3>
      </div>

      <div className="progress-container w-full h-3 bg-slate-300 rounded-full border border-slate-400">
        <div className="progress-bar"></div>
      </div>
    </div>
  );
};
