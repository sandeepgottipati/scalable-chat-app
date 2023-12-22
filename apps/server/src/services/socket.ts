import { Server } from "socket.io";

export class SocketService {
  private _io: Server;
  constructor() {
    console.log("INIT socket service");
    this._io = new Server({
      cors: {
        allowedHeaders: ["*"],
        origin: "*",
      },
    });
  }
  //initialize listeners on the socker
  public initListeners() {
    const io = this.io;
    console.log("Socket Listeners ...");
    io.on("connect", (socket) => {
      console.log(`New socket Connected on ${socket.id}`);
      socket.on("event:message", async ({ message }: { message: string }) => {
        console.log("New message received", message);
      });
    });
  }
  get io() {
    return this._io;
  }
}
