import ChatBar from './components/ChatBar';
import styled from 'styled-components';
import Chat from './components/Chat';
import { ChatType } from './models/Chat';
import ActiveChatHeader from './components/ActiveChatHeader';
import useWebSocket from '../hooks/UseWebSocket';
import { useAuth } from '../context/AuthContext';
import { OutboundMessage } from '../models/socket';

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
}

const ChatArea = (props: ChatAreaProps) => {
  const { ws, messages } = useWebSocket();

  const { chat } = props;

  const { user } = useAuth();

  const isSent = (fromId: number) => {
    if (user) {
      return user?.id === fromId;
    }
    return false;
  };

  const sendMessage = (message: string) => {
    if (ws && ws.readyState === WebSocket.OPEN && user) {
      const toSend: OutboundMessage = {
        type: 'chat',
        from: user.id,
        to: chat.recepient.id,
        content: message,
      };
      ws.send(JSON.stringify(toSend));
    }
  };

  return (
    <ChatAreaWrapper>
      <ActiveChatHeader recepient={props.chat.recepient} />
      <MessageArea>
        {messages.map((message) => {
          return (
            <Chat
              isSent={isSent(message.from)}
              message={message.content}
              key={message.content}
            />
          );
        })}
      </MessageArea>
      <ChatBar addMessage={sendMessage} />
    </ChatAreaWrapper>
  );
};

export default ChatArea;
