import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import img from "../../assets/chatbot.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { ThemeProvider } from "styled-components";
import "./Chat.css";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(true);

  const theme = {
    background: "#f5f8fb",
    fontFamily: "Poppins",
    headerBgColor: "#ffc27d",
    headerFontColor: "#000",
    headerFontSize: "15px",
    botBubbleColor: "#ffc27d",
    botFontColor: "#000",
    userBubbleColor: "#ffd27d",
    userFontColor: "#020",
  };

  const steps = [
    {
      id: "1",
      message: "Hello there! How can I help?",
      trigger: "2",
    },
    {
      id: "2",
      options: [
        { value: 1, label: "Nice to meet you!", trigger: "3" },
        { value: 2, label: "I want to order!", trigger: "4" },
        { value: 3, label: "I don't know what to eat!", trigger: "5" },
      ],
    },
    {
      id: "3",
      message: "Nice to meet you too :)",
      trigger: "2",
    },
    {
      id: "4",
      message:
        "Sure! You can go to Order in the navigation bar, then choose Wolt or Foodora to order!",
      trigger: "2",
    },
    {
      id: "5",
      message:
        "I will recommend you to try Saigon Grilled Meat, which is the best seller of our store!",
      trigger: "2",
    },
  ];

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`chatbot-container ${isOpen ? "open" : "closed"}`}>
      {isOpen ? (
        <ThemeProvider theme={theme}>
          <div className="chatbot-header">
            <AiOutlineClose className="close-button" onClick={toggleChat} />
          </div>
          <ChatBot
            steps={steps}
            botAvatar={img}
            headerTitle="Saigon Sandwich Bakery"
            hideSubmitButton="true"
          ></ChatBot>
        </ThemeProvider>
      ) : (
        <div className="chatbot-toggle" onClick={toggleChat}>
          <h6>Saigon Sandwich Bakery</h6>
        </div>
      )}
    </div>
  );
};

export default Chat;
