import ChatIcon from "@mui/icons-material/Chat";
import classes from "./ChatBoxIcon.module.css";
import ChatBox from "react-simple-chatbot";
import { wait } from "@testing-library/user-event/dist/utils";
import { ThemeProvider } from "styled-components";

const ChatBoxIcon = () => {
  const openChat = () => {
    console.log("hello");
  };

  const theme = {
    background: "#f5f8fb",
    fontFamily: "Helvetica Neue",
    headerBgColor: "#EF6C00",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#EF6C00",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };

  const steps = [
    {
      id: "Greet",
      message: "Hello, my name is ChattyChat",
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
      end: true,
    },
  ];
  return (
    <>
      <ThemeProvider theme={theme}>
        <ChatBox steps={steps} floating={true} />
      </ThemeProvider>
    </>
  );
};

export default ChatBoxIcon;
