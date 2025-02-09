
import ChatBar from "./components/ChatBar";
import styled from "styled-components";
import Chat from "./components/Chat";

const MessageArea = styled.div`
  height: calc(100vh - 64px);
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
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
