import { Telegraf } from "telegraf";

class HasChatAccess {
    async execute(chatId: number): Promise<boolean> {
        try {
            const bot = new Telegraf(process.env.BOT_TOKEN as string);

            await bot.telegram.getChat(chatId.toString());

            return true;
        } catch (error: any) {
            return false;
        }
    }
}

export default HasChatAccess;