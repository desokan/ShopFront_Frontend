import ChatIcon from "@mui/icons-material/Chat";
import classes from "./ChatBoxIcon.module.css";
import ChatBox from "react-simple-chatbot";
import { wait } from "@testing-library/user-event/dist/utils";

const ChatBoxIcon = () => {
  const openChat = () => {
    console.log("hello");
  };

  const steps = [
    {
        id: "Greet",
        message: "Hello, my name is ChattyChat",
        trigger: "Ask Name"
    },
    {
        id: "Ask Name",
        message: "Please enter your name",
        trigger: 'waiting1'
    },
    {
        id: "waiting1",
        user: true,
        end: true
    }
  ]
  return (
    <>
      <ChatBox steps ={steps}/>
      <div className={classes.chatBoxContainer} onClick={openChat}>
        <ChatIcon
          sx={{
            backgroundColor: "#eba37a",
            color: "white",
            width: "30px",
            height: " 30px",
            placeSelf: "center",
          }}
        />
      </div>
    </>
  );
};

export default ChatBoxIcon;
