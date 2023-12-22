"use client";
import React, { useCallback, useContext, useEffect } from "react";
import { io } from "socket.io-client";
type SocketProviderProps = {
  children?: React.ReactNode;
};

interface ISocketContext {
  sendMessage: (msg: string) => any;
}
const SocketContext = React.createContext<ISocketContext | null>(null);
//custom hook to useSocketContext

const useSocketContext = () => {
  const state = useContext(SocketContext);
  if (!state) {
    throw new Error("state is undefined");
  }
  return state;
};
export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const sendMessage: ISocketContext["sendMessage"] = useCallback((msg) => {
    console.log("send message", msg);
  }, []);
  useEffect(() => {
    const _socket = io("http://localhost:8000");
    return () => {
      _socket.disconnect();
    };
  }, []);
  return (
    <SocketContext.Provider value={null}>{children}</SocketContext.Provider>
  );
};
