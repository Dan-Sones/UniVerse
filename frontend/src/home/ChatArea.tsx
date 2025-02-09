
import ChatBar from "./components/ChatBar";
import styled from "styled-components";
import Chat from "./components/Chat";
import { ChatType } from "./models/Chat";

const MessageArea = styled.div`
  height: calc(100vh - 64px);
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

interface ChatAreaProps {
    chat: ChatType;
    addMessage: (message: string) => void;
}


const ChatArea = (props: ChatAreaProps) => {


    const {messages} = props.chat;

  return (
    <>
      <MessageArea>
        {messages.map((message) => {
            return <Chat isSent={message.isSent} message={message.message}/>
        })}
      </MessageArea>
      <ChatBar addMessage={props.addMessage} />
    </>
  );
};

export default ChatArea;
