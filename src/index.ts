import Discord, { Client } from "discord.js";
import dotenv from "dotenv";

/* Initialize prototype extensions. */
import "./utils/initExtensions";

dotenv.config();

(async () => {
  const client = new Client();

  console.log("Starting");

  client.on("message", async ev => {
    console.log("msg", ev.content);
    if (ev.content === "A można?") {
      ev.channel.send("Jeszcze jak!");
    }

    if (ev.content.endsWith("wo")) {
      console.log("TERMINATE");
      ev.channel.send(
        `${ev.mentions.users.array().join(" ")}`,
        new Discord.MessageAttachment(
          "https://media.tenor.com/images/fa1413635da20b66859dc93fef418302/tenor.gif"
        )
      );
    }

    if (ev.content.simplify() === "ajakpanjezuspowiedzial") {
    }
  });

  client.login(process.env.TOKEN);
})();
