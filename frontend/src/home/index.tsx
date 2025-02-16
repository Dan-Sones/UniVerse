import { useState } from 'react';
import ChatArea from './ChatArea';
import styled from 'styled-components';
import { ChatType } from './models/Chat';
import ChatList from './components/ChatList';

const HomeWrapper = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 64px); /* Same as ChatList to keep alignment */
  overflow-y: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ChatAreaWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  padding-left: 10px;
`;

const chatItems = [
  {
    profilePictureUrl: 'https://example.com/pic1.jpg',
    username: 'Daniel Sones',
    message: 'You are epic',
  },
  {
    profilePictureUrl: 'https://example.com/pic2.jpg',
    username: 'Jeff',
    message: 'Hello there!',
  },
  {
    profilePictureUrl: 'https://example.com/pic3.jpg',
    username: 'Alice',
    message: "Let's go climbing!",
  },
];

const Home = () => {
  const [chat, setChat] = useState<ChatType>({
    recepient: {
      name: '',
      profilePictureURL: '',
    },
    messages: [],
  });

  const addMessage = (message: string) => {
    setChat((prevChat) => {
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
      <ChatList chatItems={chatItems} />
      <ChatAreaWrapper>
        <ChatArea chat={chat} addMessage={addMessage} />
      </ChatAreaWrapper>
    </HomeWrapper>
  );
};

export default Home;
