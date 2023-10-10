import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import img from "../../assets/chatbot.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { ThemeProvider } from "styled-components";
import "./Chat.css";
import { useTranslation } from "react-i18next";

const Chat = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(true);

  const theme = {
    background: "#f5f8fb",
    fontFamily: "Poppins, sans-serif",
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
      message: t("chat.hello"),
      trigger: "2",
    },
    {
      id: "2",
      options: [
        { value: 1, label: t("chat.option1"), trigger: "3" },
        { value: 2, label: t("chat.option2"), trigger: "4" },
        { value: 3, label: t("chat.option3"), trigger: "5" },
      ],
    },
    {
      id: "3",
      message: t("chat.answer1"),
      trigger: "2",
    },
    {
      id: "4",
      message: t("chat.answer2"),
      trigger: "2",
    },
    {
      id: "5",
      message: t("chat.answer3"),
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
            placeholder=""
          ></ChatBot>
        </ThemeProvider>
      ) : (
        <div className="chatbot-toggle" onClick={toggleChat}>
          <img src={img} alt="Chatbot Avatar" className="chatbot-avatar" />
        </div>
      )}
    </div>
  );
};

export default Chat;
