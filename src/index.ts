import * as fn from './functions'
import * as commands from './commands'
import { bot } from './config';

let botName: string

const start = async () => {
  bot.getMe().then((user: any) => {
    botName = user.username!.toString()
  })

  bot.setMyCommands(commands.commandList)

  bot.on(`message`, async (msg: any) => {
    const text = msg.text!

    switch (text) {

      case `/token_ca`:
        await fn.TokenInfo.tokenInfoMSG(msg)
        break;

      default:
        if (text != "" && text != undefined) {
          switch (text.split(" ")[0]) {
            case `/token_ca`:
              await fn.TokenInfo.tokenInfoFn(msg)
              break;

            default:
              break;
          }
        }
        break;
    }
  })
}

start()