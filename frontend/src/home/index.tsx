import { useState } from 'react';
import ChatArea from './ChatArea';
import styled from 'styled-components';
import { ChatPreview, ChatType, Messages } from './models/Chat';
import ChatList from './components/ChatList';

const HomeWrapper = styled.div`
  display: flex;
  width: 100%;
  max-height: calc(100vh - 64px);
  overflow-y: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const chatItems: Array<ChatPreview> = [
  {
    recepient: {
      username: 'john_doe',
      profilePictureUrl: 'https://example.com/profiles/john_doe.jpg',
      id: 1,
    },
    recentMessage: {
      message: 'Hey, how are you?',
      timestamp: '2025-02-16T14:30:00Z',
    },
  },
];

const Home = () => {
  const [activeChat, setActiveChat] = useState<ChatType>({
    recepient: {
      username: '',
      profilePictureUrl: '',
      id: 1,
    },
  });

  const [messages, setMessages] = useState<Messages>([]);

  const [loading, setLoading] = useState<boolean>(false);

  if (loading) {
    console.log();
  }

  return (
    <HomeWrapper>
      <ChatList
        setMessages={setMessages}
        chatItems={chatItems}
        setActiveChat={setActiveChat}
        setLoading={setLoading}
      />
      <ChatArea
        chat={activeChat}
        setActiveChat={setActiveChat}
        messages={messages}
        setMessages={setMessages}
      />
    </HomeWrapper>
  );
};

export default Home;
