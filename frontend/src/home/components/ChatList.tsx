import styled from 'styled-components';
import ChatPreview from './ChatPreview';
import SearchArea, { SearchResult } from './SearchArea';
import { Dispatch, useState } from 'react';
import { ChatRecepient, ChatType } from '../models/Chat';
import { ChatPreview as ChatPreviewType } from '../models/Chat';

const ChatListWrapper = styled.div`
  width: 30%;
  min-width: 250px;
  max-width: 400px;
  height: calc(100vh - 64px); /* Adjust 60px to match your header height */
  overflow-y: auto; /* Enables scrolling for overflowing chat items */
  border-right: 1px solid lightgray;

  @media (max-width: 768px) {
    width: 100%;
    height: 40vh; /* Ensures it doesn't take the whole screen on mobile */
    max-height: 40vh; /* Prevents it from growing too large */
  }
`;

interface ChatListProps {
  chatItems: Array<ChatPreviewType>;
  setActiveChat: Dispatch<React.SetStateAction<ChatType>>;
}

const ChatList = (props: ChatListProps) => {
  const { chatItems, setActiveChat } = props;
  const [activeSearch, setActiveSearch] = useState(false);

  const onBackButtonPress = () => {
    setActiveSearch(false);
  };

  const onSearchIntention = () => {
    setActiveSearch(true);
  };

  const onResultSelected = (result: SearchResult) => {
    setActiveSearch(false);
    setActiveChat({
      recepient: {
        username: result.username,
        profilePictureUrl: '',
      },
      messages: [],
    });
  };

  const onChatClick = (recepient: ChatRecepient) => {
    setActiveChat({
      messages: [],
      recepient: recepient,
    });
  };

  return (
    <ChatListWrapper>
      <SearchArea
        onSearchIntention={onSearchIntention}
        onBackButtonPress={onBackButtonPress}
        activeSearch={activeSearch}
        onResultSelected={onResultSelected}
      />

      {!activeSearch &&
        chatItems.map((chat) => {
          return <ChatPreview onClick={onChatClick} preview={chat} />;
        })}
    </ChatListWrapper>
  );
};

export default ChatList;
