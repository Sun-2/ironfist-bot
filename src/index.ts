import { Client } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

(async () => {

  const client = new Client();

  console.log("Starting");

  client.on("message", ev => {
    console.log("msg", ev.content);
    if (ev.content === "A można?") {
      ev.channel.send("Jeszcze jak!");
    }
  });

  client.login(process.env.TOKEN);
})();
