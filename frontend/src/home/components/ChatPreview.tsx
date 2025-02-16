import { Avatar } from '@mui/material';
import styled from 'styled-components';

const ChatPreviewContainer = styled.div`
  height: 75px;
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  gap: 10px;

  border-bottom: 1px solid lightgray;

  @media (max-width: 500px) {
    flex-direction: column;
    height: auto;
    align-items: flex-start;
  }
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
  profilePictureUrl: string;
  username: string;
  message: string;
}

const ChatPreview = ({ username, message }: ChatPreviewProps) => {
  return (
    <ChatPreviewContainer>
      <AvatarContainer>
        <Avatar
          alt={username}
          src={
            'https://pub-1de51ae1e68144d78f7c582e1dda3ab1.r2.dev/clh8n0i2200wsmi08eyobfu35/7ee08a5b-8158-464b-b5da-d183e0e64831.webp'
          }
        />
      </AvatarContainer>
      <ChatDetails>
        <Name>{username}</Name>
        <Recent>{message} • 10m </Recent>
      </ChatDetails>
    </ChatPreviewContainer>
  );
};

export default ChatPreview;
