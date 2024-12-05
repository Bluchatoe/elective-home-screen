const GemBots = () => {
  return (
    <div className="h-full w-full">
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
                <img src="assets/sparkles.svg" alt="Sparkles Icon" />
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
                  <img src="assets/bluebot.png" alt="Moon Chatbot Avatar" />
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

        <div className="main-chat">
          <div className="chat-header">
            <div className="chatbot-avatar">
              <img src="assets/bluebot.png" alt="Moon Chatbot Avatar" />
            </div>
            <div className="chatbot-info">
              <h4 className="chatbot-name">BlueBot</h4>
              <p className="chatbot-description">
                Kenneth Pedero&#39;s Test Chatbot.
              </p>
            </div>

            <div className="window-buttons">
              <button className="transparent-button">
                <img width="30" height="30" src="assets/info-icon.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="chat-container"></div>

          <div className="typing-container">
            <div className="typing-content">
              <div className="typing-textarea">
                <textarea
                  id="chat-input"
                  rows="1"
                  spellCheck="false"
                  placeholder="Enter your message..."
                  required
                ></textarea>

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
                      src="assets/paper-plane-top.svg"
                      alt="Send message icon"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="collapsible-column">
          <h2>Collapsible</h2>
          <p>Additional content here</p>
        </div>
      </div>
    </div>
  );
};

export default GemBots;
