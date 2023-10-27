import ChatBox from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Language } from "../../pages/HomePage";

const ChatBoxIcon = () => {
  const [selectedLanguage, setSelectedLanguage] = useContext(Language);
  const [langMod, setLangMod] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
    setLangMod(true);
  }, [selectedLanguage]);

  const { t } = useTranslation();

  const theme = {
    background: "#f5f8fb",
    fontFamily: "Roboto",
    headerBgColor: "#ffc084",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#eba37a",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };

  const bubbleOptionStyle = {
    backgroundColor: "#ffc084",
  };
  const styleArrow = {
    fill: "#eba37a",
    shapeFill: "even",
  };

  const steps = [
    {
      id: "Greet",
      message: `${t("chatbox.messages.greet")}`,
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: `${t("chatbox.messages.name")}`,
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: `${t("chatbox.messages.help")} {previousValue}`,
      trigger: "Help Options",
    },
    {
      id: "Help Options",
      options: [
        { value: 1, label: `${t("chatbox.labels.support")}`, trigger: "Customer Support" },
        { value: 2, label: `${t("chatbox.labels.order")}`, trigger: "Track Order" },
        { value: 3, label: `${t("chatbox.labels.returns")}`, trigger: "Returns & Refunds" },
        { value: 4, label: `${t("chatbox.labels.contact")}`, trigger: "Contact Details" },
      ],
    },
    {
      id: "Customer Support",
      message: `${t("chatbox.messages.help")}`,
      trigger: "Customer Rep",
    },
    {
      id: "Customer Rep",
      options: [
        { value: 1, label: `${t("chatbox.labels.order")}`, trigger: "Track Order" },
        { value: 2, label: `${t("chatbox.labels.returns")}`, trigger: "Returns & Refunds" },
        { value: 3, label: `${t("chatbox.labels.Rep")}`, trigger: "Contact Rep" },
      ],
    },
    {
      id: "Track Order",
      message: `${t("chatbox.messages.orderNum")}`,
      trigger: "Order",
    },
    {
      id: "Order",
      user: true,
      trigger: "OrderNum",
    },
    {
      id: "OrderNum",
      message: `${t("chatbox.messages.locateOrder")} {previousValue}`,
      trigger: "Customer Rep",
    },
    {
      id: "Returns & Refunds",
      message:`${t("chatbox.messages.purchaseCode")}`,
      trigger: "return1",
    },

    {
      id: "return1",
      user: true,
      trigger: "PurchaseCode",
    },
    {
      id: "PurchaseCode",
      message: `${t("chatbox.messages.locatePurchase")} {previousValue}`,
      trigger: "Customer Rep",
    },

    {
      id: "Contact Rep",
      message: `${t("chatbox.messages.RepsBusyMessage")}`,
      trigger: "Help Options",
    },
    {
      id: "Contact Details",
      message: `${t("chatbox.messages.contactDetails")}`,
      trigger: "Help",
    },
    {
      id: "Help",
      message: `${t("chatbox.messages.additionalHelp")}`,
      trigger: "Anything Else",
    },
    {
      id: "Anything Else",
      options: [
        { value: 1, label:  `${t("chatbox.labels.helpMore")}`, trigger: "Help Options" },
        { value: 2, label:  `${t("chatbox.labels.notNow")}`, trigger: "Bye" },
      ],
    },

    {
      id: "Bye",
      message:  `${t("chatbox.messages.byeMessage")}`,
      trigger: "End",
    },
    {
      id: "End",
      options: [
        { value: 1, label:  `${t("chatbox.labels.startOver")}`, trigger: "Greet" },
        { value: 2, label:  `${t("chatbox.labels.endChat")}`, trigger: "End Chat" },
      ],
    },
    {
      id: "End Chat",
      message:  `${t("chatbox.messages.closeChat")}`,
      end: true,
    },
  ];
  return (
    <>
      <ThemeProvider theme={theme}>
        {langMod && (
          <ChatBox
            headerTitle={"Uomo Chat"}
            steps={steps}
            floating={true}
            hideBotAvatar={true}
            hideUserAvatar={true}
            bubbleOptionStyle={bubbleOptionStyle}
            submitButtonStyle={styleArrow}
            key={key}
          />
        )}
      </ThemeProvider>
    </>
  );
};

export default ChatBoxIcon;