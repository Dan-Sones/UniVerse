import ChatBar from './components/ChatBar';
import styled from 'styled-components';
import Chat from './components/Chat';
import { ChatType, Messages, MessageType } from './models/Chat';
import ActiveChatHeader from './components/ActiveChatHeader';
import useWebSocket from '../hooks/UseWebSocket';
import { useAuth } from '../context/AuthContext';
import { OutboundMessage } from '../models/socket';
import { Dispatch, useEffect, useRef } from 'react';

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
  setActiveChat: Dispatch<React.SetStateAction<ChatType>>;
  messages: Messages;
  setMessages: Dispatch<React.SetStateAction<Messages>>;
}

const ChatArea = (props: ChatAreaProps) => {
  const { chat, setMessages, messages } = props;
  const { sendMessage: send } = useWebSocket({ setMessages: setMessages });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const { user } = useAuth();

  const isSent = (fromId: number) => {
    if (user) {
      return user?.id === fromId;
    }
    return false;
  };

  const sendMessage = (message: string) => {
    if (user) {
      const toSend: OutboundMessage = {
        type: MessageType.TEXT,
        from: user.id,
        to: chat.recepient.id,
        content: message,
      };

      send(toSend);
      setMessages((prevMessages) => [...prevMessages, toSend]);
    }
  };

  return (
    <ChatAreaWrapper>
      <ActiveChatHeader recepient={props.chat.recepient} />
      <MessageArea>
        {messages.map((message, index) => {
          return (
            <Chat
              isSent={isSent(message.from)}
              message={message.content}
              key={message.Id ?? index}
            />
          );
        })}
        <div ref={messagesEndRef} />
      </MessageArea>
      <ChatBar addMessage={sendMessage} />
    </ChatAreaWrapper>
  );
};

export default ChatArea;
