import * as Vosk from "../../solyarisoftware/voskjs/index";
import { model } from "./../index";

type TranscriptResult = {
  result: [];
  text: string;
};

export function Transcript(buffer: Buffer): Promise<TranscriptResult> {
  const newPromise: Promise<TranscriptResult> = new Promise(
    (resolve, reject) => {
      const result = Vosk.transcriptFromBuffer(buffer, model);

      if (result) {
        resolve(result);
      } else {
        reject(new Error("Oops!.. Number must be less than 5"));
      }
    }
  );
  return newPromise;
}
