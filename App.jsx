import React, { useContext, useEffect, useState } from 'react'
import './App.css'
import va from './assets/aliceimg.png'
import { ImMic } from "react-icons/im";
import { dataContext } from './context/UserContext';
import speak_img from "./assets/speak.gif"
import ai_voice from "./assets/voice.gif"
import bg from "./assets/background.png"


const App = () => {
  const { 
    recognize,
    speaking,
    setSpeaking,
    userResponse,
    setUserResponse,
    aiResponse,
    setAiResponse
   } = useContext(dataContext);

  const startListening = () => {
  if (!recognize) {
    alert("Speech Recognition is not supported in this browser.");
    return;
  }

  try {
    window.speechSynthesis.cancel();

    setUserResponse("Listening...");
    setAiResponse(false);
    setSpeaking(true);

    recognize.stop();
    setTimeout(()=>{
      recognize.start();
    },150);
  } catch (error) {
    console.error("Speech Recognition Error:", error);
    setSpeaking(false);
    setAiResponse(false);
  }
};

  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className = 'img-container'>
        <img src={va} alt="Alice" id="alice" />
        <span>I'm Alice, Your personal AI assistant.</span>

        {!speaking ? (
          <button onClick={startListening}>
            Click me <ImMic />
          </button>
        ) : (
            <div className="response"> 
              <p>{userResponse}</p>

            {!aiResponse ? (
               <img src={speak_img} alt="Listening" id="speak" /> 
            ) : (
               <img src={ai_voice} alt="AI Speaking" id="ai_response" />
            )}  
            </div>
        )} 
      </div>   
    </div> 
  );
};

export default App
