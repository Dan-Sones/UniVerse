import { Avatar } from "@mui/material";
import styled from "styled-components";

interface ChatWrapperProps {
    isSent: boolean
}

const ChatWrapper = styled.div<ChatWrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 10px;
  justify-content: ${({ isSent }) => (isSent ? "flex-end" : "flex-start")};
`;


interface BubbleProps {
  isSent: boolean;
}

const Bubble = styled.div<BubbleProps>`
  max-width: 60%;
  padding: 12px 16px;
  border-radius: 18px;
  font-size: 14px;
  line-height: 1.4;
  color: ${({ isSent }) => (isSent ? "#fff" : "#000")};
  background: ${({ isSent }) => (isSent ? "#007AFF" : "#E5E5EA")};
  align-self: ${({ isSent }) => (isSent ? "flex-end" : "flex-start")};
  margin: 4px 8px;
  position: relative;

  ${({ isSent }) =>
    isSent
      ? `
      border-bottom-right-radius: 4px;
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        right: -6px;
        width: 12px;
        height: 12px;
        background: #007AFF;
        clip-path: polygon(0 0, 100% 100%, 0 100%);
      }
  `
      : `
      border-bottom-left-radius: 4px;
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: -6px;
        width: 12px;
        height: 12px;
        background: #E5E5EA;
        clip-path: polygon(100% 0, 0 100%, 100% 100%);
      }
  `}
`;

interface ChatProps {
  isSent: boolean;
  message: string;
}

const Chat = (props: ChatProps) => {
  const { isSent, message } = props;
  return (
    <ChatWrapper isSent={isSent}>
      {!isSent && (
        <Avatar
          alt={"yooo"}
          sx={{ width: 40, height: 40 }}
          src={
            "https://pub-1de51ae1e68144d78f7c582e1dda3ab1.r2.dev/clh8n0i2200wsmi08eyobfu35/7ee08a5b-8158-464b-b5da-d183e0e64831.webp"
          }
        />
      )}

      <Bubble isSent={props.isSent}>{message}</Bubble>

      {isSent && (
        <Avatar
          alt={"yooo"}
          sx={{ width: 40, height: 40 }}
          src={
            "https://pub-1de51ae1e68144d78f7c582e1dda3ab1.r2.dev/clh8n0i2200wsmi08eyobfu35/7ee08a5b-8158-464b-b5da-d183e0e64831.webp"
          }
        />
      )}
    </ChatWrapper>
  );
};

export default Chat;
