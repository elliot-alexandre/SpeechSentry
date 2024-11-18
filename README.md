# Speech Sentry

> This is a Discord bot that uses **Node.js** and the **Vosk speech recognition library** to detect specific keywords from the audio streams of users in a channel. The bot triggers specific actions or events when keywords are detected.

## Features

- **Audio Streaming:** Captures real-time audio streams from users in a Discord channel.
- **Speech Recognition:** Processes audio using the Vosk speech-to-text engine to detect predefined keywords.
- **Trigger Actions:** Executes custom actions/events when a keyword is detected.
- **Customizable Keywords:** Easily configure keywords and their corresponding actions.

## Tech Stack

- **Node.js:** Server-side runtime.
- **Vosk:** Offline speech recognition library.
- **Discord.js:** API wrapper for interacting with the Discord API.
- **Docker:** Container

## Prerequisites

Before getting started, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later)
- [Docker](https://www.docker.com/)
- Python (for installing Vosk dependencies)
- [Pnpm](https://pnpm.io/)
- Download a Model from Vosk [website](https://alphacephei.com/vosk/models)

## Installation

1. **Clone the Repository:**
   ```bash
   git clone git@github.com:elliot-alexandre/SpeechSentry.git
   ```
2. **Install Dependencies:**
   ```bash
   pnpm install
   ```
3. **Set Up Vosk Model:**
   Download a Vosk speech recognition model from Vosk models. Extract the downloaded model and place it in the models directory.
4. **Environment:**
   Create a .env file in the project root with the following variables:

   ```bash
   CLIENT_ID=your-client-id
   SECRET_KEY=your-secret-key
   PUBLIC_KEY=your-public-key
   TOKEN=your-token
   ENV_URL=http://localhost:3000
   PREFIX=!
   TEST_USER_ID=your-user-discord-id
   ```

## Future Enhancements / TODO

- Add support for multi-language models.
- Integrate a custom webhook trigger as an action.
- Handle multiple action and condition at once.
- Create a proprer commands interface with permissioning of with discord roles.

## Reference and documentation

- [Voskjs](https://github.com/solyarisoftware/voskJs), I had to integrate this dependency in the project for the meantime, considering it does not support a higher version of nodejs than 16.x.x

- Vosk-Api use a different approch of voice recognition without using the speech recognistion webkit.
  - https://github.com/alphacep/vosk-api/tree/master/nodejs
  - https://alphacephei.com/vosk/

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
