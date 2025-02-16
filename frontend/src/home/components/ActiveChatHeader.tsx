import { Avatar } from '@mui/material';
import styled from 'styled-components';
import { ChatRecepient } from '../models/Chat';

const ActiveChatHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 15px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
`;

interface ActiveChatHeaderProps {
  recepient: ChatRecepient;
}

const ActiveChatHeader = (props: ActiveChatHeaderProps) => {
  const { recepient } = props;
  return (
    <ActiveChatHeaderWrapper>
      <Avatar
        sx={{
          marginLeft: '10px', // Keeps space from the left side
          height: '36px',
          width: '36px',
        }}
        alt={recepient.username}
        src={
          'https://pub-1de51ae1e68144d78f7c582e1dda3ab1.r2.dev/clh8n0i2200wsmi08eyobfu35/7ee08a5b-8158-464b-b5da-d183e0e64831.webp'
        }
      />
      <p>{recepient.username}</p>
    </ActiveChatHeaderWrapper>
  );
};

export default ActiveChatHeader;
