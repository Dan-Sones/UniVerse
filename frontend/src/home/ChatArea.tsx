import { TextField } from "@mui/material";
import ChatBar from "./components/ChatBar";
import styled from "styled-components";

const MessageArea = styled.div`
  height: 100%;
`;

const ChatArea = () => {
  return (
    <>
      <MessageArea>
        <p>Yo This is epic chat area bruv</p>
      </MessageArea>
      <ChatBar />
    </>
  );
};

export default ChatArea;
