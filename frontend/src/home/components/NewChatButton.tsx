import { Button } from '@mui/material';
import styled from 'styled-components';

const NewChatButtonWrapper = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface NewChatButtonProps {
  onClick: VoidFunction;
}

const NewChatButton = (props: NewChatButtonProps) => {
  const { onClick } = props;
  return (
    <NewChatButtonWrapper>
      <Button variant="outlined" onClick={onClick}>
        New Chat
      </Button>
    </NewChatButtonWrapper>
  );
};

export default NewChatButton;
