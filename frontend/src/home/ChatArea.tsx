import ChatBar from './components/ChatBar';
import styled from 'styled-components';
import Chat from './components/Chat';
import { ChatType } from './models/Chat';
import ActiveChatHeader from './components/ActiveChatHeader';
import useWebSocket from '../hooks/UseWebSocket';
import { useAuth } from '../context/AuthContext';
import { OutboundMessage } from '../models/socket';
import { useEffect } from 'react';

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
  const { ws, messages: wsMessages } = useWebSocket();

  const { chat } = props;

  const { user } = useAuth();

  const isSent = (fromId: number) => {
    if (user) {
      return user?.id === fromId;
    }
    return false;
  };

  // When the user loads the page load their most recent chat
  // As the user clicks each user (whether this be from the populated side bar or search feature)
  // Fetch recent message history and update chat area state to contain messages
  // Ensure that sendMessage function uses the correct id for messages
  // When the user recieves a message, update the state, appending it to the message history
  // If the user is does not have the chat selected, update the chat preview to be at the top of the chatList
  // with the most recent message previewed

  useEffect(() => {}, [wsMessages]);

  const sendMessage = (message: string) => {
    if (ws && ws.readyState === WebSocket.OPEN && user) {
      const toSend: OutboundMessage = {
        type: 'chat',
        from: user.id
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
        {wsMessages.map((message) => {
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
