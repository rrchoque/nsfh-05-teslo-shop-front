import "./style.css";
import { connectToServer } from "./socket-client.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h2>Websocket - Client</h2>
    <br/>
    <span id="server-status">offline</span>

    <ul id="clients-ul"></ul>
    
  </div>
`;

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
connectToServer();
