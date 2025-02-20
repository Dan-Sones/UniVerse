import ChatBar from './components/ChatBar';
import styled from 'styled-components';
import Chat from './components/Chat';
import { ChatType } from './models/Chat';
import ActiveChatHeader from './components/ActiveChatHeader';

const MessageArea = styled.div`
  height: 100%;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const ChatAreaWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  min-height: 100%;
  max-height: 100%;
  flex-direction: column;
`;

interface ChatAreaProps {
  chat: ChatType;
  addMessage: (message: string) => void;
}

const ChatArea = (props: ChatAreaProps) => {
  const { messages } = props.chat;

  return (
    <ChatAreaWrapper>
      <ActiveChatHeader recepient={props.chat.recepient} />
      <MessageArea>
        {messages.map((message) => {
          return (
            <Chat
              isSent={message.isSent}
              message={message.message}
              key={message.message}
            />
          );
        })}
      </MessageArea>
      <ChatBar addMessage={props.addMessage} />
    </ChatAreaWrapper>
  );
};

export default ChatArea;
