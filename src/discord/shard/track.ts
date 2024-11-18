import type { VoiceConnection } from "@discordjs/voice";
import {
  VoiceConnectionStatus,
  entersState,
  getVoiceConnection,
} from "@discordjs/voice";
import type { VoiceBasedChannel } from "discord.js";
import { CreateListeningStream } from "../recording";

/**
 * @todo
 * add support for handling multiple workers
 */
const { Worker, isMainThread, parentPort } = require("worker_threads");

export async function TrackingVoice(
  newUserId: string,
  channel: VoiceBasedChannel
) {
  try {
    const connection: VoiceConnection | undefined = getVoiceConnection(
      channel.guildId
    );

    const receiver = connection?.receiver;
    if (connection !== undefined) {
      receiver?.speaking.on("start", async (userId) => {
        console.log("Fire!");
        await entersState(
          connection as VoiceConnection,
          VoiceConnectionStatus.Ready,
          20_000
        );
        if (userId === newUserId) {
          CreateListeningStream(receiver, newUserId, channel.guildId);
        }
      });
    }
  } catch (error) {
    console.warn(error);
  }
}
