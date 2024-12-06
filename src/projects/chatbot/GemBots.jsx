import SparklesSvg from "../../assets/sparkles.svg";
import BlueBot from "../../assets/bluebot.png";
import PaperplaneIcon from "../../assets/paper-plane-top.svg";
import InfoIcon from "../../assets/info-icon.svg";
import LoadingIcon from "../../assets/loading-spin.gif";
import bg from "../../assets/bg.jpg";
import { useEffect, useRef, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";

const API_KEY = import.meta.env.VITE_API_KEY;

const GemBots = () => {
  const [genAiModel, setGenAiModel] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [messageHistory, setMessageHistory] = useState([]);

  const chatContainerRef = useRef(null);

  const [userInput, setUserInput] = useState("");

  const handleUserInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleUserInputSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    setUserInput("");

    setMessageHistory((prev) => [...prev, { text: userInput, type: "user" }]);

    const result = await generateContent(userInput);

    console.log("Submit", result);

    setMessageHistory((prev) => [...prev, { text: result, type: "chatbot" }]);

    setIsLoading(false);
  };

  const generateContent = async (userInput) => {
    if (genAiModel) {
      const result = await genAiModel.generateContent([userInput]);
      console.log(result.response.text());

      return result.response.text();
    }
  };

  useEffect(() => {
    const genAi = new GoogleGenerativeAI(API_KEY);
    const model = genAi.getGenerativeModel({ model: "gemini-1.5-flash" });

    setGenAiModel(model);
  }, []);

  // Scroll to the bottom div whenever messageHistory changes
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the bottom div
    }
  }, [messageHistory]); // Trigger scroll when messageHistory changes

  return (
    <div className="h-full w-full flex justify-center items-center relative">
      <img src={bg} alt="" className="absolute inset-0 object-cover" />
      <div className="chat-wrapper">
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="window-btns">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div className="sidebar-title">
              <div className="sidebar-icon">
                <img src={SparklesSvg} alt="Sparkles Icon" />
              </div>
              <div>
                <h3>GemBots</h3>
                <p>powered by Google AI</p>
              </div>
            </div>

            <div className="chatbot-lists">
              <h3>Chatbot</h3>

              <div className="chatbot-card active">
                <div className="chatbot-avatar">
                  <img src={BlueBot} alt="Moon Chatbot Avatar" />
                </div>
                <div className="chatbot-info">
                  <h4 className="chatbot-name">BlueBot</h4>
                  <p className="chatbot-description">
                    Kenneth Pedero&#39;s Test Chatbot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-chat w-full flex flex-col">
          <div className="chat-header">
            <div className="chatbot-avatar">
              <img src={BlueBot} alt="Moon Chatbot Avatar" />
            </div>
            <div className="chatbot-info">
              <h4 className="chatbot-name">BlueBot</h4>
              <p className="chatbot-description">
                Kenneth Pedero&#39;s Test Chatbot.
              </p>
            </div>

            <div className="window-buttons">
              <button className="transparent-button">
                <img width="30" height="30" src={InfoIcon} alt="" />
              </button>
            </div>
          </div>

          <div className="chat-container">
            {messageHistory.length !== 0 &&
              messageHistory.map((m, i) => {
                return (
                  <MessageBubble
                    key={i}
                    text={m.text}
                    isUser={m.type === "user"}
                  />
                );
              })}

            {isLoading && (
              <p className="text-white pl-2">
                BlueBot is Generating a Response...
              </p>
            )}

            {messageHistory.length === 0 && (
              <GenerateRandomPrompts
                generateContent={generateContent}
                model={genAiModel}
                setMessageHistory={setMessageHistory}
                setIsLoading={setIsLoading}
              />
            )}

            <div className="w-full h-10" ref={chatContainerRef} />
          </div>

          <div className="typing-container w-full">
            <div className="typing-content">
              <div className="typing-textarea flex items-center">
                <UserInput
                  handleUserInputChange={handleUserInputChange}
                  userInput={userInput}
                  handleUserInputSubmit={handleUserInputSubmit}
                />

                <TypingButtons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GemBots;

const MessageBubble = ({ text, isUser }) => {
  const messageTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={isUser ? "user-message-group" : "chatbot-message-group"}>
      <div
        className={`message-bubble ${
          isUser ? "user-bubble" : "chatbot-bubble"
        }`}
      >
        {!isUser && <h3 className="font-medium text-sky-300 mb-2">BlueBot</h3>}
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
      {isUser && <span className="message-time">{messageTime}</span>}
    </div>
  );
};

const UserInput = ({
  handleUserInputSubmit,
  userInput,
  handleUserInputChange,
}) => {
  return (
    <form onSubmit={handleUserInputSubmit} className="w-full">
      <input
        className="bg-transparent w-full px-4 focus:outline-none text-white"
        type="text"
        id="chat-input"
        spellCheck="false"
        placeholder="Enter your message..."
        value={userInput}
        onChange={handleUserInputChange}
      />
    </form>
  );
};

const GenerateRandomPrompts = ({
  model,
  generateContent,
  setMessageHistory,
  setIsLoading,
}) => {
  const [loading, setLoading] = useState(false);
  const [prompts, setPrompts] = useState([]);

  const handlePromptClick = async (prompt) => {
    // Simulate filling input and executing the API handler

    setMessageHistory((prev) => [...prev, { text: prompt, type: "user" }]);

    setIsLoading(true);

    const result = await generateContent(prompt);

    setMessageHistory((prev) => [...prev, { text: result, type: "chatbot" }]);

    setIsLoading(false);
  };

  useEffect(() => {
    const fetchPrompts = async () => {
      setLoading(true);

      try {
        // Fetch prompts and clean them
        const fetchedPrompts = await generateContent(
          "Give me 4 short random open-ended questions for the chatbot."
        );

        // Split into an array using regex
        const promptsArray = fetchedPrompts
          ?.trim() // Remove any leading or trailing whitespace
          ?.split(/\d+\.\s+/) // Split on numbers followed by a period and whitespace
          ?.filter(Boolean); // Remove empty strings

        console.log("promptsArray", promptsArray);

        setPrompts(promptsArray);
      } catch (error) {
        console.error("Error fetching prompts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrompts(); // Fetch prompts when the component mounts
  }, [model]);

  console.log("prompts", prompts);

  if (loading) {
    return (
      <div className="loading-prompts">
        <img src={LoadingIcon} alt="Loading..." />
        <p>Loading prompts</p>
      </div>
    );
  }

  return (
    <div className="prompt-container">
      <div className="opening-message">
        <h3>Greetings! I am BlueBot, your AI Test Chatbot.</h3>
        <p>Here are some things you can ask me:</p>
      </div>
      <div className="button-container">
        {prompts?.map((prompt, index) => (
          <button
            key={index}
            className="prompt-button"
            onClick={() => handlePromptClick(prompt)}
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
};

const TypingButtons = () => {
  return (
    <div className="typing-buttons">
      <span id="emote-btn" aria-label="emote">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="svg-icon"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <span id="send-btn" aria-label="Send message">
        <img
          id="send-icon"
          width={25}
          height={25}
          src={PaperplaneIcon}
          alt="Send message icon"
        />
      </span>
    </div>
  );
};
