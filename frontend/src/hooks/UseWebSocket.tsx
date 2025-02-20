import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';

import { InboundMessage } from '../models/socket';

export const WS_BASE_URL: string = import.meta.env.VITE_WS_BASE_URL;

const useWebSocket = () => {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<InboundMessage[]>([]);
  const { authenticated } = useAuth();

  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true; // Track mount state

    if (!authenticated) {
      console.warn('Not authenticated, skipping WebSocket connection.');
      return;
    }

    const socket = new WebSocket('ws://localhost:80/ws');

    socket.onopen = () => {
      console.log('WebSocket connected ✅');
    };

    socket.onmessage = (event) => {
      if (!isMounted.current) return;

      try {
        const parsedMessage: InboundMessage = JSON.parse(event.data);
        console.log('Message received:', parsedMessage);
        setMessages((prev) => [...prev, parsedMessage]);
      } catch (error) {
        console.warn('Failed to parse message:', event.data);
      }
    };

    socket.onclose = () => {
      console.log('WebSocket closed ❌');
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:');
      console.log(error);
    };

    setWs(socket);

    return () => {
      isMounted.current = false; // Prevent updates on unmounted components
      if (socket.readyState === WebSocket.OPEN) {
        socket.close();
      }
    };
  }, []);

  const sendMessage = (message: InboundMessage) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(message));
    } else {
      console.warn('WebSocket is not open!');
    }
  };

  return { ws, messages, sendMessage };
};

export default useWebSocket;
