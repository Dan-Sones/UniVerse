import { useState } from 'react';
import ChatArea from './ChatArea';
import styled from 'styled-components';
import { ChatPreview, ChatType } from './models/Chat';
import ChatList from './components/ChatList';

const HomeWrapper = styled.div`
  display: flex;
  width: 100%;
  max-height: calc(100vh - 64px); /* Same as ChatList to keep alignment */
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
    },
    recentMessage: {
      message: 'Hey, how are you?',
      timestamp: '2025-02-16T14:30:00Z',
    },
  },
  {
    recepient: {
      username: 'alice_wonderland',
      profilePictureUrl: 'https://example.com/profiles/alice.jpg',
    },
    recentMessage: {
      message: "Let's meet at 5 PM.",
      timestamp: '2025-02-16T13:45:00Z',
    },
  },
  {
    recepient: {
      username: 'tech_guru',
      profilePictureUrl: 'https://example.com/profiles/tech_guru.jpg',
    },
    recentMessage: {
      message: 'Check out this new framework!',
      timestamp: '2025-02-16T12:15:00Z',
    },
  },
  {
    recepient: {
      username: 'emma_writer',
      profilePictureUrl: 'https://example.com/profiles/emma_writer.jpg',
    },
    recentMessage: {
      message: 'I sent you the document',
      timestamp: '2025-02-16T11:00:00Z',
    },
  },
];

const Home = () => {
  const [activeChat, setActiveChat] = useState<ChatType>({
    recepient: {
      username: '',
      profilePictureUrl: '',
    },
    messages: [],
  });

  const addMessage = (message: string) => {
    setActiveChat((prevChat) => {
      return {
        ...prevChat,
        messages: [
          ...prevChat.messages,
          {
            message: message,
            isSent: true,
          },
        ],
      };
    });
  };

  return (
    <HomeWrapper>
      <ChatList chatItems={chatItems} setActiveChat={setActiveChat} />
      <ChatArea addMessage={addMessage} chat={activeChat} />
    </HomeWrapper>
  );
};

export default Home;
