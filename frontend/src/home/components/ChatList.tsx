import styled from 'styled-components';
import ChatPreview from './ChatPreview';
import SearchArea from './SearchArea';
import { Dispatch, useEffect, useState } from 'react';
import { ChatType, ChatRecepient, Messages } from '../models/Chat';
import { ChatPreview as ChatPreviewType } from '../models/Chat';
import { useQuery } from '@tanstack/react-query';
import ChatQueryMethods from '../../api/queries/chatQueries';
import { convertChatHistoryToMessages } from '../chatHelpers';

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
  setLoading: Dispatch<React.SetStateAction<boolean>>;
  setMessages: Dispatch<React.SetStateAction<Messages>>;
}

const CHAT_HISTORY_QUERY_KEY = 'CHAT_HISTORY_QUERY_KEY';

const ChatList = (props: ChatListProps) => {
  const { chatItems, setActiveChat, setLoading, setMessages } = props;
  const [activeSearch, setActiveSearch] = useState(false);

  const [selectedRecepient, setSelectedRecepient] =
    useState<ChatRecepient | null>(null);

  const { data: history, isPending } = useQuery({
    queryKey: [CHAT_HISTORY_QUERY_KEY, selectedRecepient?.id],
    queryFn: () =>
      selectedRecepient
        ? ChatQueryMethods.getChatHistory(selectedRecepient.id)
        : Promise.resolve([]),
    enabled: !!selectedRecepient,
  });

  useEffect(() => {
    setLoading(true);
  }, [isPending]);

  useEffect(() => {
    if (selectedRecepient && history) {
      setActiveChat({
        recepient: {
          username: selectedRecepient.username,
          profilePictureUrl: selectedRecepient.profilePictureUrl,
          id: selectedRecepient.id,
        },
      });

      setMessages(convertChatHistoryToMessages(history));
    }
  }, [selectedRecepient, history]);

  const onBackButtonPress = () => {
    setActiveSearch(false);
  };

  const onSearchIntention = () => {
    setActiveSearch(true);
  };

  const onSearchResultSelected = (result: ChatRecepient) => {
    setActiveSearch(false);
    onChatClick(result);
  };

  const onChatClick = (recepient: ChatRecepient) => {
    setSelectedRecepient(recepient);
  };

  return (
    <ChatListWrapper>
      <SearchArea
        onSearchIntention={onSearchIntention}
        onBackButtonPress={onBackButtonPress}
        activeSearch={activeSearch}
        onResultSelected={onSearchResultSelected}
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
