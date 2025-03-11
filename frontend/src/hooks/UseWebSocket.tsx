import { Dispatch, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';

import { InboundMessage, OutboundMessage } from '../models/socket';
import { Messages } from '../home/models/Chat';
export const WS_BASE_URL: string = import.meta.env.VITE_API_BASE_URL + '/ws';

interface UseWebSocketProps {
  setMessages: Dispatch<React.SetStateAction<Messages>>;
}

const useWebSocket = (props: UseWebSocketProps) => {
  const { setMessages } = props;
  const { authenticated } = useAuth();

  const socketRef = useRef<WebSocket | null>(null);

  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;

    if (!authenticated) {
      console.warn('Not authenticated, skipping WebSocket connection.');
      return;
    }

    if (!socketRef.current) {
      const socket = new WebSocket(WS_BASE_URL);
      socketRef.current = socket;

      socket.onopen = () => {
        console.log('WebSocket connected ✅');
      };

      socket.onclose = () => {
        console.log('WebSocket closed ❌');
      };

      socket.onerror = (error) => {
        console.error('WebSocket error:');
        console.log(error);
      };
    }

    socketRef.current.onmessage = null;

    socketRef.current.onmessage = (event) => {
      try {
        const parsedMessage: InboundMessage = JSON.parse(event.data);
        console.log('Message received:', parsedMessage);
        setMessages((prev) => [...prev, parsedMessage]);
      } catch (error) {
        console.warn('Failed to parse message:', event.data);
      }
    };

    return () => {
      if (socketRef.current) {
        socketRef.current.onmessage = null;
        socketRef.current.close();
        socketRef.current = null;
      }
    };
  }, [authenticated]);

  const sendMessage = (message: OutboundMessage) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify(message));
    }
  };

  return { sendMessage };
};

export default useWebSocket;
