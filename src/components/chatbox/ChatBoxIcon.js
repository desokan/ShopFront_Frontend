import classes from "./ChatBoxIcon.module.css";
import ChatBox from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const ChatBoxIcon = () => {

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
    backgroundColor: "#ffc084"
  }

  const steps = [
    {
      id: "Greet",
      message: "Hello, welcome to UOM!",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "Please enter your name",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "How can we help you {previousValue}",
      trigger: "Help Options"
    },
    {
      id: "Help Options",
      options: [
        { value: 1, label: 'Customer Support', trigger: 'Customer Support' },
        { value: 2, label: 'Track Order', trigger: 'Track Order' },
        { value: 3, label: 'Returns & Refunds', trigger: 'Returns & Refunds' },
        { value: 4, label: 'Contact Details', trigger: 'Contact Details' }
      ],
    },
    {
      id: "Customer Support",
      message: "bye",
      trigger: "Bye"
    },
    {
      id: "Track Order",
      message: "bye",
      trigger: "Bye"
    },
    {
      id: "Returns & Refunds",
      message: "bye",
      trigger: "Bye"
    },
    {
      id: "Contact Details",
      message: "You can contact us by email: sale@uomo.com, phone: +1 246-345-0695 or feel free to write us a letter addressed to: 1418 River Drive, Suite 35 Cottonhall, CA 9622 United States",
      trigger: "Bye"
    },
    {
      id: "Bye",
      message: "If you need more help, just repeat this conversation, Goodbye",
      end: true
    }
  ];
  return (
    <>
      <ThemeProvider theme={theme}>
        <ChatBox steps={steps} floating={true} hideBotAvatar={true} hideUserAvatar={true} bubbleOptionStyle={bubbleOptionStyle} />
      </ThemeProvider>
    </>
  );
};

export default ChatBoxIcon;
