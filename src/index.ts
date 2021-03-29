import Discord, { Client } from "discord.js";
import dotenv from "dotenv";

/* Initialize prototype extensions. */
import "./utils/initExtensions";
import { matches } from "./utils/matches";

dotenv.config();

(async () => {
  const client = new Client();

  console.log("Starting");

  client.on("message", async ev => {
    if (ev.author.bot) return;

    console.log(`Msg ${ev.content} from ${ev.author.username}`);

    if (matches.ginKurwo(ev.content)) {
      ev.channel.send(
        `${ev.mentions.users.array().join(" ")}`,
        new Discord.MessageAttachment(
          "https://media.tenor.com/images/fa1413635da20b66859dc93fef418302/tenor.gif"
        )
      );
    }

    if (matches.jakPanJezusPowiedzial(ev.content)) {
      ev.channel.send("Tak Pan Jezus powiedział.");
    }

    if (ev.content.simplify() === "ajakpanjezuspowiedzial") {
    }
  });

  client.login(process.env.TOKEN);
})();
