import React, { useEffect, useState } from "react";
import { BsChatDots, BsX } from "react-icons/bs";
import axios from "axios"
const Chatbot = () => {

    async function getData() {
        try {

          const response=await axios.post("http://localhost:4000/app/v1/answer",{
            question :"Tell me a joke."
          })

          const answer = await response.data.answer;
          console.log(answer);

        } catch (e) {
            console.log(e.message);
        } 
    }

    useState(()=>{
        getData();
    },[])

  const [userMessage, setUserMessage] = useState("");
  const [isChatbotVisible, setChatbotVisible] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      role: "incoming",
      message: "Hi there! How can I assist you today?",
    },
  ]);

  const inputInitHeight = 55; // Initial input height

  const createChatLi = (message, isClient) => {
    return {
      role: isClient ? "client" : "chatbot",
      message: message,
    };
  };

  const dummyQuestions = [
    "What is the weather today?",
    "Tell me a joke.",
    "Who won the last world cup?",
    "JavaScript program that logs Hello, World! to the console.",
  ];

  const dummyAnswers = [
    "The weather today is sunny with a high of 75°F.",
    "Why did the chicken cross the road? To get to the other side!",
    "France won the last world cup in 2018.",
    "console.log(Hello, World!);"
  ];

  const generateResponse = () => {
    const trimmedMessage = userMessage.trim().toLowerCase();

    // Check if the user's message matches any of the dummy questions
    const index = dummyQuestions.findIndex(
      (question) => question.toLowerCase() === trimmedMessage
    );

    if (index !== -1) {
      // If a matching question is found, get the corresponding dummy answer
      const responseMessage = dummyAnswers[index];
      setChatMessages((prevMessages) => [
        ...prevMessages,
        createChatLi(trimmedMessage, "incoming"), // Store the question
        createChatLi(responseMessage, "outgoing"), // Store the answer
      ]);
    } else {
      // If no matching question is found, use a default response
      const defaultResponse = "I'm sorry, I don't have an answer for that.";
      setChatMessages((prevMessages) => [
        ...prevMessages,
        createChatLi(trimmedMessage, "incoming"), // Store the question
        createChatLi(defaultResponse, "outgoing"), // Store the default response
      ]);
    }

    // Clear the input textarea and set its height to default
    setUserMessage("");
  };

  const handleUserMessageChange = (e) => {
    setUserMessage(e.target.value);

    // Adjust the height of the input textarea based on its content
    e.target.style.height = `${inputInitHeight}px`;
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const toggleChatbotVisibility = () => {
    setChatbotVisible(!isChatbotVisible);
  };

  return (
    <div>
      {isChatbotVisible && (
        <div className="chatbot fixed gap-6 right-[40px] bottom-[100px] w-[320px] overflow-hidden bg-white rounded-2xl shadow-2xl z-50">
          <header className="bg-[#0077b6] p-5 text-center">
            <h2 className="text-white font-bold text-2xl">Chatbot</h2>
          </header>
          <ul className="chatbox h-[310px] p-4 overflow-y-auto flex flex-col  pb-16">
            {chatMessages.map((message, index) => (
              <li
                key={index}
                className={`chat flex mb-2 ${
                  message.role === "client" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-2 max-w-[75%] rounded-lg bg-${
                    message.role === "client" ? "text-white" : "bg-[#41b0ec]"
                  } text-${
                    message.role === "client" ? "text-black" : "bg-white"
                  } text-sm shadow-md`}
                >
                  {message.message}
                </div>
              </li>
            ))}
          </ul>
          <div className=" absolute bottom-0 w-full bg-white border-t-2 border-gray-500 border-solid flex items-center">
            <textarea
              className="w-[93%] border-none outline-none text-sm resize-none p-2 pt-3 required: flex justify-center items-center"
              placeholder="Enter a message..."
              spellCheck="false"
              required
              onChange={handleUserMessageChange}
              value={userMessage}
            ></textarea>
            <span
              id="send-btn"
              className="material-symbols-rounded cursor-pointer text-[#0077b6]"
              onClick={generateResponse}
            >
              send
            </span>
          </div>
        </div>
      )}
      <div
  className="flex justify-center items-center fixed right-[40px] bottom-[40px] h-12 w-12 rounded-[50%] border-none outline-none cursor-pointer text-white bg-[#0077b6]"
  onClick={toggleChatbotVisibility}
>
  <span className={`absolute text-center rounded-lg flex justify-center items-center ${isChatbotVisible ? "opacity-0" : "opacity-1"}`}>
    <BsChatDots size={34} /> 
  </span>
  <span className={`text-center rounded-lg flex justify-center items-center ${isChatbotVisible ? "opacity-1" : "opacity-0"}`}>
    <BsX size={34} /> 
  </span>
</div>
    </div>
  );
};

export default Chatbot;