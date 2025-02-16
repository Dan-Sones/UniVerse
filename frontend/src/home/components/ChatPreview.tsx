import { Avatar } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import { ChatPreview as ChatPreviewType, ChatRecepient } from '../models/Chat';
import { dateToAgoString } from '../chatHelpers';

const ChatPreviewContainer = styled.div<{ hover?: boolean }>`
  height: 75px;
  display: flex;
  align-items: center;

  padding-left: 15px;
  gap: 10px;

  @media (max-width: 500px) {
    flex-direction: column;
    height: auto;
    align-items: flex-start;
  }

  background-color: ${(p) => (p.hover ? 'rgba(236, 236, 236, 0.75)' : '')};
  cursor: ${(p) => (p.hover ? 'pointer' : '')};
`;

const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const ChatDetails = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

const Name = styled.p`
  font-weight: 400;
  font-size: medium;
  margin: 0;
`;

const Recent = styled.p`
  font-size: small;
  color: gray;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export interface ChatPreviewProps {
  preview: ChatPreviewType;
  onClick: (recepient: ChatRecepient) => void;
}

const ChatPreview = (props: ChatPreviewProps) => {
  const [hover, setHover] = useState(false);

  const { preview, onClick } = props;

  const handleClick = () => {
    onClick(preview.recepient);
  };

  return (
    <ChatPreviewContainer
      onClick={handleClick}
      hover={hover}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <AvatarContainer>
        <Avatar
          alt={preview.recepient.username}
          src={
            'https://pub-1de51ae1e68144d78f7c582e1dda3ab1.r2.dev/clh8n0i2200wsmi08eyobfu35/7ee08a5b-8158-464b-b5da-d183e0e64831.webp'
          }
        />
      </AvatarContainer>
      <ChatDetails>
        <Name>{preview.recepient.username}</Name>
        <Recent>
          {preview.recentMessage.message} •{' '}
          {dateToAgoString(preview.recentMessage.timestamp)}{' '}
        </Recent>
      </ChatDetails>
    </ChatPreviewContainer>
  );
};

export default ChatPreview;
