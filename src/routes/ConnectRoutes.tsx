import { useEffect, useRef, useState } from 'react';
import { Client, IMessage, StompSubscription } from '@stomp/stompjs';

let stompClient: Client | null = null;

const ConnectRoutes = () => {
  const socketRef = useRef<WebSocket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    // WebSocket 연결
    const ws = new WebSocket('wss://danji-talk-frontend-rosy.vercel.app/api/ws/chat'); // 실제 주소로 변경
    socketRef.current = ws;

    ws.onopen = () => {
      console.log('✅ WebSocket connected');
    };

    ws.onmessage = (event) => {
      console.log('📨 Received:', event.data);
      setMessages((prev) => [...prev, event.data]); // 폴딩
    };

    ws.onclose = () => {
      console.log('❌ WebSocket closed');
    };

    ws.onerror = (err) => {
      console.error('⚠️ WebSocket error', err);
    };

    return () => {
      ws.close();
    };
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
