import { useEffect, useRef, useState } from "react";
import { dialogues } from "./dialogues";
import { sectionsList } from "./sections";
import LogoWhite from "../../assets/helmet_white.png";
import { useNavigate } from "react-router-dom";

export default function ExpertSystemBody() {
  return (
    <div className="w-full h-full max-h-full overflow-y-auto relative">
      <div className="max-w-4xl  mx-auto py-8 gap-4">
        <DialogueSystem />
      </div>
    </div>
  );
}

function DialogueSystem() {
  // State for storing current dialogue and selected options
  const [currentDialogue, setCurrentDialogue] = useState("start");
  const [dialogueHistory, setDialogueHistory] = useState([]);
  const [isThereAVerdict, setIsThereAVerdict] = useState(false);

  // Ref for auto-scroll
  const dialogueEndRef = useRef(null);

  // Function to handle option selection
  const handleOptionSelect = (nextDialogueId, optionText) => {
    // Find the next dialogue based on the selected option's ID
    const nextDialogue = dialogues.find((d) => d.id === nextDialogueId);

    if (nextDialogue === undefined) setCurrentDialogue("End");

    if (nextDialogue.penalty) setIsThereAVerdict(true);

    console.log(nextDialogue);

    // Add the current dialogue and selected option to history
    setDialogueHistory((prevHistory) => [
      ...prevHistory,
      {
        ...dialogues.find((d) => d.id === currentDialogue),
        selectedOption: optionText,
      },
    ]);

    // Set the next dialogue if exists
    if (nextDialogue) {
      setCurrentDialogue(nextDialogueId);
    }
  };

  // Scroll to the bottom of the dialogue history when it updates
  useEffect(() => {
    dialogueEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [dialogueHistory]);

  // Find the current dialogue object
  const activeDialogue = dialogues.find((d) => d.id === currentDialogue);

  return (
    <div className="dialogue-system flex flex-col gap-4">
      {/* Render history */}
      {dialogueHistory.length !== 0 && (
        <div className="dialogue-history flex flex-col bg-stone-800 border border-stone-400/10">
          <div className="flex items-center gap-2 px-2 py-2">
            <span>
              <ClockIcon />
            </span>
            <h3 className="text-lg">Dialogue History</h3>

            <button
              onClick={() => {
                setCurrentDialogue("start");
                setDialogueHistory([]);
                setIsThereAVerdict(false);
              }}
              className="ml-auto px-4 border border-stone-400 text-sm py-1 text-stone-300 hover:bg-amber-600 hover:text-white"
            >
              Restart
            </button>
          </div>

          <div className="flex flex-col bg-stone-900 py-5">
            {dialogueHistory.map((dialogue, index) => (
              <div key={index} className="dialogue-item px-4    relative">
                {index !== 0 && (
                  <div className=" h-px my-4 bg-stone-400/40"></div>
                )}
                <div className="flex items-start gap-4">
                  <div className="h-10 aspect-square bg-amber-300/90 flex justify-center items-center text-stone-800 font-bold text-xl">
                    {index + 1}
                  </div>

                  <div>
                    <div className="mb-2">
                      <span className="text-sm text-amber-500/75">
                        Question
                      </span>
                      <p className="text-stone-300">{dialogue.question}</p>
                    </div>
                    <p className="selected-option flex items-center">
                      <span className="mr-4 text-sm bg-amber-600/20 pl-1 pr-2 py-1 border-r border-amber-400 flex items-center text-stone-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-5 mr-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                        Selected
                      </span>
                      {dialogue.selectedOption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Render current dialogue */}
      {activeDialogue.question !== null && (
        <DialogueContainer
          activeDialogue={activeDialogue}
          handleOptionSelect={handleOptionSelect}
        />
      )}

      {/* VERDICT */}
      {isThereAVerdict && (
        <VerdictComponent
          setCurrentDialogue={setCurrentDialogue}
          setDialogueHistory={setDialogueHistory}
          setIsThereAVerdict={setIsThereAVerdict}
        >
          <p>{activeDialogue.penalty}</p>

          {activeDialogue.penalty.toLowerCase() !== "no penalty" && (
            <ReferenceLink
              sectionId={activeDialogue.reference
                .replace(" ", "")
                .toLowerCase()}
            />
          )}
        </VerdictComponent>
      )}

      <div className="min-h-10" ref={dialogueEndRef}></div>
    </div>
  );
}

function VerdictComponent({
  children,
  setCurrentDialogue,
  setDialogueHistory,
  setIsThereAVerdict,
}) {
  return (
    <>
      <div className="active-dialogue mt-4 bg-stone-800 border border-stone-400/10">
        <div className="flex items-start gap-4 mb-1 p-4">
          <div className="h-11 aspect-square bg-amber-600 p-2 outline outline-1 outline-offset-2 outline-amber-200/30">
            <img src={LogoWhite} alt="MotoGuideAvatar" />
          </div>
          <div className="flex flex-col items-start">
            <h4 className="text-amber-300/80 text-sm">
              MotoGuide&apos;s Verdict
            </h4>
            {children}
          </div>
        </div>
      </div>
      <div className="options flex flex-col gap-2  p-4 ">
        <p className="text-center mb-2">You reached the end of the Dialogue.</p>

        <button
          className="hover:bg-amber-600 hover:text-white text-amber-500 border border-amber-600/60 text-lg py-3"
          onClick={() => {
            setCurrentDialogue("start");
            setDialogueHistory([]);
            setIsThereAVerdict(false);
          }}
        >
          Restart
        </button>
      </div>
    </>
  );
}

function DialogueContainer({ activeDialogue, handleOptionSelect }) {
  // STARTING DIALOGUE
  if (activeDialogue.id === "start") {
    return (
      <div className="active-dialogue flex flex-col gap-4">
        {/* Dialogue Header */}
        <div className="mb-8">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent mb-2">
            Hello! I&apos;m MotoGuide,
          </h2>
          <p className="text-xl text-stone-300">
            Your Expert System for Understanding Penalties Under RA 11235
          </p>
        </div>

        <div className="flex items-start gap-4 mb-1">
          <div className="h-11 aspect-square bg-amber-600 p-2 outline outline-1 outline-offset-2 outline-amber-200/30">
            <img src={LogoWhite} alt="MotoGuideAvatar" />
          </div>
          <div>
            <h4 className="text-amber-300/80 text-sm">MotoGuide</h4>
            <p>First Question, {activeDialogue.question}?</p>
          </div>
        </div>

        <div className="options grid grid-areas-parent p-3 bg-stone-900 border-stone-100/10 border">
          {/* NUMBER PLATE */}
          <div
            className={`bg-amber-600 area-1`}
            key={activeDialogue.options[0].id}
            onClick={() =>
              handleOptionSelect(
                activeDialogue.options[0].id,
                activeDialogue.options[0].text
              )
            }
          >
            <div className="z-10 text-white absolute inset-0 p-4">
              <h4>Category 1</h4>

              <h2>{activeDialogue.options[0].text}</h2>
            </div>

            <div className="absolute inset-0 w-full h-full bg-black opacity-50 z-0"></div>

            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75 z-0"></div>

            <div className="absolute inset-0 bg-gradient-to-r from-amber-800 to-amber-100/30 opacity-20 z-0"></div>
          </div>

          {/* REGISTRATION */}
          <div
            className={`bg-amber-600 area-2`}
            key={activeDialogue.options[1].id}
            onClick={() =>
              handleOptionSelect(
                activeDialogue.options[1].id,
                activeDialogue.options[1].text
              )
            }
          >
            <div className="z-10 text-white absolute inset-0 p-4">
              <h4>Category 3</h4>

              <h2>{activeDialogue.options[1].text}</h2>
            </div>

            <div className="absolute inset-0 w-full h-full bg-black opacity-50 z-0"></div>

            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75 z-0"></div>

            <div className="absolute inset-0 bg-gradient-to-r from-amber-800 to-amber-100/30 opacity-20 z-0"></div>
          </div>

          {/* LAW ENFORCER */}
          <div
            className={`bg-amber-600 area-3`}
            key={activeDialogue.options[2].id}
            onClick={() =>
              handleOptionSelect(
                activeDialogue.options[2].id,
                activeDialogue.options[2].text
              )
            }
          >
            <div className="z-10 text-white absolute inset-0 p-4">
              <h4>Category 4</h4>

              <h2>{activeDialogue.options[2].text}</h2>
            </div>

            <div className="absolute inset-0 w-full h-full bg-black opacity-50 z-0"></div>

            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75 z-0"></div>

            <div className="absolute inset-0 bg-gradient-to-r from-amber-800 to-amber-100/30 opacity-20 z-0"></div>
          </div>

          {/* CRIME */}
          <div
            className={`bg-amber-600 area-4`}
            key={activeDialogue.options[3].id}
            onClick={() =>
              handleOptionSelect(
                activeDialogue.options[3].id,
                activeDialogue.options[3].text
              )
            }
          >
            <div className="z-10 text-white absolute inset-0 p-4">
              <h4>Category 2</h4>

              <h2>{activeDialogue.options[3].text}</h2>
            </div>

            <div className="absolute inset-0 w-full h-full bg-black opacity-50 z-0"></div>

            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75 z-0"></div>

            <div className="absolute inset-0 bg-gradient-to-r from-amber-800 to-amber-100/30 opacity-20 z-0"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="active-dialogue mt-4 bg-stone-800 border border-stone-400/10">
      <div className="flex items-start gap-4 mb-1 p-4">
        <div className="h-11 aspect-square bg-amber-600 p-2 outline outline-1 outline-offset-2 outline-amber-200/30">
          <img src={LogoWhite} alt="MotoGuideAvatar" />
        </div>
        <div>
          <h4 className="text-amber-300/80 text-sm">MotoGuide</h4>
          <p> {activeDialogue.question}</p>
        </div>
      </div>

      <div className="options flex flex-col gap-2 bg-stone-900 p-4 ">
        {activeDialogue.options?.map((option) => (
          <button
            className="hover:bg-amber-600 hover:text-white text-amber-500 border border-amber-600/60 text-lg py-3"
            key={option.id}
            onClick={() => handleOptionSelect(option.id, option.text)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}

function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

function ReferenceLink({ sectionId }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Programmatically navigate to the law page with the sectionNum as a query parameter
    navigate(`/law?id=${sectionId}`);
  };

  return (
    <div className="mt-4 p-2 pr-4 bg-amber-600/20 border-l border-amber-300 flex items-start gap-2">
      <div>
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
            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
          />
        </svg>
      </div>
      <div>
        <h3 className="text-sm text-amber-300">Reference</h3>
        <button
          onClick={handleClick}
          className="italic underline text-stone-200 hover:text-white text-start"
        >
          Section {sectionId?.match(/\d+/)[0]} -{" "}
          {sectionsList.find((item) => item.id === sectionId)?.title}
        </button>
      </div>
    </div>
  );
}
