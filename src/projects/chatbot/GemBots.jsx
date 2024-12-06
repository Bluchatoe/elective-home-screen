import SparklesSvg from "../../assets/sparkles.svg";
import BlueBot from "../../assets/bluebot.png";
import PaperplaneIcon from "../../assets/paper-plane-top.svg";
import InfoIcon from "../../assets/info-icon.svg";
import bg from "../../assets/bg.jpg";
import { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

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
    setIsLoading(true);
    setUserInput("");
    event.preventDefault();

    const result = await generatePrompt(userInput);

    console.log("Submit", result);

    setIsLoading(false);
  };

  const generatePrompt = async (userInput) => {
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

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messageHistory]);

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
                return <div key={i}>{m.message}</div>;
              })}
          </div>

          <div className="typing-container w-full">
            <div className="typing-content">
              <div className="typing-textarea flex items-center">
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
        {!isUser && <h3>BlueBot</h3>}
        <p>{text}</p>
      </div>
      {isUser && <span className="message-time">{messageTime}</span>}
    </div>
  );
};

const GenerateRandomPrompts = ({ askModelFor4RandomPrompts, APIHandler }) => {
  const [loading, setLoading] = useState(false);
  const [prompts, setPrompts] = useState([]);
  const [showPromptContainer, setShowPromptContainer] = useState(true);

  const fetchPrompts = async () => {
    setLoading(true);

    try {
      // Fetch prompts and clean them
      const fetchedPrompts = await askModelFor4RandomPrompts();
      const cleanedPrompts = fetchedPrompts.map((prompt) =>
        prompt.replace(/^\d+\.\s*/, "")
      );

      // Randomize and select 4 prompts
      const selectedPrompts = cleanedPrompts
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);

      setPrompts(selectedPrompts);
    } catch (error) {
      console.error("Error fetching prompts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePromptClick = (prompt) => {
    // Simulate filling input and executing the API handler
    APIHandler(prompt);
    setShowPromptContainer(false); // Hide the prompt container
  };

  useEffect(() => {
    fetchPrompts(); // Fetch prompts when the component mounts
  }, []);

  if (loading) {
    return (
      <div className="loading-prompts">
        <img src="/assets/loading-spin.gif" alt="Loading..." />
        <p>Loading prompts</p>
      </div>
    );
  }

  if (!showPromptContainer || prompts.length === 0) {
    return null; // Hide container if dismissed or no prompts
  }

  return (
    <div className="prompt-container">
      <div className="opening-message">
        <h3>Greetings! I am BlueBot, your AI Test Chatbot.</h3>
        <p>Here are some things you can ask me:</p>
      </div>
      <div className="button-container">
        {prompts.map((prompt, index) => (
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
