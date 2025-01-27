import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello,Jaishikha </span>
              </p>
              <p>How Can I Help You Today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on upcoming road trip</p>
                <img src={assets.compass_icon} />
              </div>
              <div className="card">
                <p>Breifly Summarize the topic please</p>
                <img src={assets.bulb_icon} />
              </div>
              <div className="card">
                <p>Brain strom team activity for work </p>
                <img src={assets.message_icon} />
              </div>
              <div className="card">
                <p>Improve readabilty of the following code</p>
                <img src={assets.code_icon} />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-Data">
              <img src={assets.gemini_icon} />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a message"
            />
            <div>
              <img src={assets.gallery_icon} />
              <img src={assets.mic_icon} />
             {input ? <img onClick={() => onSent()} src={assets.send_icon} /> : null} 
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display accurate info , including people and many more
            topics of your choice
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
