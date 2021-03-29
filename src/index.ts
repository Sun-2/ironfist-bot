import Discord, { Client, TextChannel } from "discord.js";
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

    if (
      matches.jakPanJezusPowiedzial(ev.content) &&
      (ev.content.simplify().startsWith("jak") ||
        ev.content.simplify().startsWith("ajak"))
    ) {
      ev.channel.send("Tak Pan Jezus powiedział.");
      return;
    }

    if (
      matches.takPanJezusPowiedzial(ev.content) &&
      ev.content.simplify().startsWith("tak")
    ) {
      ev.channel.send("A jak Pan Jezus powiedział?");
      return;
    }

    if (ev.content.simplify() === "tak" || ev.content.simplify() === "atak") {
      ev.channel.send("A jak?");
      return;
    }
  });

  const pester = () => {
    const channel = client.guilds.cache
      .first()!
      .channels.cache.find(
        channel => channel.name === "dżeneral"
      ) as TextChannel;
    const member = channel.members.get(channel.members.randomKey())!;
    channel.send(`HELLOU <@${member.user.id}>`);
  };

  client.login(process.env.TOKEN);

  setInterval(() => {}, 3600 * 1000 * 2);
})();
