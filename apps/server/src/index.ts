import http from "http";
import { SocketService } from "./services/socket";

const init = async () => {
  const socketService = new SocketService();
  const httpServer = http.createServer();
  const port = process.env.PORT ? process.env.PORT : 8000;
  socketService.io.attach(httpServer);
  httpServer.listen(port, () => {
    console.log(`http server started on ${port}`);
  });
  socketService.initListeners();
};
init();
