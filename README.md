# Token bot

A Discord bot to show token prices.

## Developer quick start 👩‍💻

`npm run dev` will launch the bot locally, with hot reloading included.

There are a few other scripts provided:

- `start`: Starts up the bot without hot reloading; used for the Heroku deployment.

### Configuration 🔧

First, install the dependencies:
`npm install`
`npm install -D`

For the bot to run, it needs these variables, laid out in the `.env.sample` file:

- `DISCORD_API_TOKEN`: Your discord API token. [See this guide on how to obtain one](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token).
- `TOKEN_ID`: Your token's contract address
- `SOURCE_ADDRESS`: Address of the liquidity pool you will base your price on
- `BASE_ADDRESS`: Address of the other token in the liquidity pool
- `TOKEN_DECIMALS`: The difference in decimals between the base token and your token. Example provided below:

I originally wrote this bot to price MAG based on the MAG-MIM liquidity pool. MIM has 18 decimals whereas MAG has 9 decimals. As such my `TOKEN_DECIMALS` value is 9. If you were to use this bot for a token that has 18 decimals, the difference would be 0.
