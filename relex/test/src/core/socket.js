import socketIO from "socket.io-client";
export const socket = socketIO('http://localhost:5000', { transports: ["websocket"] });
