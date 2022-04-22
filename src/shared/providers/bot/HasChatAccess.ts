import { Telegraf } from "telegraf";

class HasChatAccess {
    async execute(chatId: number): Promise<boolean> {
        try {
            const bot = new Telegraf(process.env.BOT_TOKEN as string);
    
            console.log('env', process.env.BOT_TOKEN );
            console.log('chatId', chatId);            

            const resultGetChat = await bot.telegram.getChat(chatId.toString());

            console.log(resultGetChat);

            return true;
        } catch (error: any) {
            console.error(error.message);
            
            return false;
        }
    }
}

export default HasChatAccess;