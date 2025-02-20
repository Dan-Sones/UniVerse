import styled from 'styled-components';
import ChatPreview from './ChatPreview';
import SearchArea from './SearchArea';
import { Dispatch, useState } from 'react';
import { ChatRecepient, ChatType, SearchUser } from '../models/Chat';
import { ChatPreview as ChatPreviewType } from '../models/Chat';

const ChatListWrapper = styled.div`
  width: 30%;
  min-width: 250px;
  max-width: 400px;
  height: calc(100vh - 64px);
  overflow-y: auto;
  border-right: 1px solid lightgray;

  @media (max-width: 768px) {
    width: 100%;
    height: 40vh;
    max-height: 40vh;
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

  const onResultSelected = (result: SearchUser) => {
    setActiveSearch(false);
    setActiveChat({
      recepient: {
        username: result.username,
        profilePictureUrl: result.profilePictureUrl,
        id: result.id,
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
          return (
            <ChatPreview
              onClick={onChatClick}
              preview={chat}
              key={chat.recentMessage.message}
            />
          );
        })}
    </ChatListWrapper>
  );
};

export default ChatList;
