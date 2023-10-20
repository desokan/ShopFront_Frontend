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
    backgroundColor: "#ffc084",
  };
  const styleArrow = {
    fill: "#eba37a",
    shapeFill: "even"
  }

  const steps = [
    {
      id: "Greet",
      message: "Hello, welcome to UOMO!",
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
      trigger: "Help Options",
    },
    {
      id: "Help Options",
      options: [
        { value: 1, label: "Customer Support", trigger: "Customer Support" },
        { value: 2, label: "Track Order", trigger: "Track Order" },
        { value: 3, label: "Returns & Refunds", trigger: "Returns & Refunds" },
        { value: 4, label: "Contact Details", trigger: "Contact Details" },
      ],
    },
    {
      id: "Customer Support",
      message: "How can we help you today?",
      trigger: "Customer Rep",
    },
    {
      id: "Customer Rep",
      options: [
        { value: 1, label: "Track Order", trigger: "Track Order" },
        { value: 2, label: "Returns & Refunds", trigger: "Returns & Refunds" },
        { value: 3, label: "Talk to a Customer Agent", trigger: "Contact Rep" },
      ],
    },
    {
      id: "Track Order",
      message: "What is your order number",
      trigger: "Order",
    },
    {
      id: "Order",
      user: true,
      trigger: "OrderNum",
    },
    {
      id: "OrderNum",
      message: "We couldn't locate the order with the number {previousValue}.",
      trigger: "Customer Rep",
    },
    {
      id: "Returns & Refunds",
      message: "What is your purchase code",
      trigger: "return1",
    },

    {
      id: "return1",
      user: true,
      trigger: "PurchaseCode",
    },
    {
      id: "PurchaseCode",
      message: "We couldn't find a purchase with the code {previousValue}.",
      trigger: "Customer Rep",
    },

    {
      id: "Contact Rep",
      message:
        "All of our customer representatives are busy with other clients at the moment. Please use our options so we can still support you.",
      trigger: "Help Options",
    },
    {
      id: "Contact Details",
      message:
        "You can contact us by email: sale@uomo.com, phone: +1 246-345-0695 or feel free to write us a letter addressed to: 1418 River Drive, Suite 35 Cottonhall, CA 9622 United States",
      trigger: "Help",
    },
    {
      id: "Help",
      message: "Please let me know if you need anything else",
      trigger: "Anything Else",
    },
    {
      id: "Anything Else",
      options: [
        { value: 1, label: "Additional Help", trigger: "Help Options" },
        { value: 2, label: "Not for now", trigger: "Bye" },
      ],
    },

    {
      id: "Bye",
      message: "Goodbye, have a nice day",
      trigger: "End",
    },
    {
      id: "End",
      options: [
        { value: 1, label: "Start Over", trigger: "Greet" },
        { value: 2, label: "End Chat", trigger: "End Chat" },
      ],
    },
    {
      id: "End Chat",
      message: "The chat is closed",
      end: true,
    },
  ];
  return (
    <>
      <ThemeProvider theme={theme}>
        <ChatBox
          headerTitle={"Uomo Chat"}
          steps={steps}
          floating={true}
          hideBotAvatar={true}
          hideUserAvatar={true}
          bubbleOptionStyle={bubbleOptionStyle}
          submitButtonStyle={styleArrow}
        />
      </ThemeProvider>
    </>
  );
};

export default ChatBoxIcon;
