import { Button, TextField } from "@mui/material";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";

const ChatBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  gap: 20px;
`;

const ChatBar = () => {
  return (
    <ChatBarWrapper>
      <Button
        variant="contained"
        sx={{
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          minWidth: "50px",
        }}
      >
        <AddIcon />
      </Button>
      <TextField id="outlined-basic" variant="outlined" fullWidth />
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>{" "}
    </ChatBarWrapper>
  );
};

export default ChatBar;
