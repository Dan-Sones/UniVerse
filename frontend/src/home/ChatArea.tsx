
import ChatBar from "./components/ChatBar";
import styled from "styled-components";
import Chat from "./components/Chat";

const MessageArea = styled.div`
  height: 100%;
`;

const ChatArea = () => {
  return (
    <>
      <MessageArea>
        <Chat isSent={false} message="Wow UniVerse is the best chat app ever made"/>
        <Chat isSent={true} message="So true"/>
      </MessageArea>
      <ChatBar />
    </>
  );
};

export default ChatArea;
