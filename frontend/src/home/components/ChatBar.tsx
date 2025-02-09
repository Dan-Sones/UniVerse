import { Button, TextField } from '@mui/material';
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

const ChatBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-right: 10px;
  display: flex;
  gap: 10px;
`;

interface ChatBarProps {
  addMessage: (message: string) => void;
}

const ChatBar = (props: ChatBarProps) => {
  const { addMessage } = props;

  const [messageToSend, setMessageToSend] = useState<string |  null>();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessageToSend(event.target.value);
  };

  const handleSendPress = () => {
    setMessageToSend('')
    if (messageToSend != null && messageToSend != undefined && messageToSend !== '') {
      addMessage(messageToSend);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSendPress();
    }
  };

  return (
    <ChatBarWrapper>
      <Button
        variant="contained"
        sx={{
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          minWidth: '50px',
        }}
      >
        <AddIcon />
      </Button>
      <TextField
        id="outlined-basic"
        variant="outlined"
        value={messageToSend}
        fullWidth
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
      <Button
        sx={{ height: '45px' }}
        variant="contained"
        endIcon={<SendIcon />}
        onClick={handleSendPress}
      >
        Send
      </Button>
    </ChatBarWrapper>
  );
};

export default ChatBar;
