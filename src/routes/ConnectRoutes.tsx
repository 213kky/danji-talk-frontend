import { useEffect, useRef, useState } from 'react';
import { Client, IMessage, StompSubscription } from '@stomp/stompjs';

let stompClient: Client | null = null;

const ConnectRoutes = () => {
  const socketRef = useRef<WebSocket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    // WebSocket 연결
    stompClient = new Client({
        brokerURL: '/api/ws/chat',
        reconnectDelay: 600000,
        debug: (str: string) => console.log('[STOMP]', str),
    
        onConnect: () => {
          console.log('🟢 STOMP connected');
        },
        onStompError: (frame) => {
          console.error('❌ STOMP error:', frame);
        },
        onWebSocketClose: () => {
          console.warn('🔌 WebSocket connection closed');
        },
      });
    
      stompClient.activate();
  }, []);

  const sendMessage = () => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send('Hello from client!');
    }
  };

  return (
    <div>
      <h2>📨 Messages</h2>
      <ul>
        {messages.map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default ConnectRoutes;
