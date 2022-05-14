import IConfiguration from "../../domain/entitites/IConfiguration";
import IConfigurationRespository from "../../domain/repositories/IConfigurationRespository";
import prisma from "../../../../shared/prisma/prisma";

class ConfigurationRespository implements IConfigurationRespository {
    async findOrCreateByUserId(userId: string): Promise<IConfiguration> {
        let configurationByUser = await prisma.configuration.findUnique({
            where: {
                user_id: userId
            }
        });

        if (!configurationByUser) {
            configurationByUser = await prisma.configuration.create({
                data: {
                    user_id: userId
                }
            })
        }

        return {
            id: configurationByUser.id,
            max_triggers: configurationByUser.max_triggers,
            telegram_channel_id: Number(configurationByUser.telegram_channel_id),
            user_id: configurationByUser.user_id,
            show_placar: configurationByUser.show_placar
        };
    }


    async update(chatIdTelegram: number, userId: string, show_placar: boolean): Promise<IConfiguration> {
        const configuration = await this.findOrCreateByUserId(userId);

        const newConfiguration = await prisma.configuration.update({
            where: {
                id: configuration.id,
            },
            data: {
                telegram_channel_id: chatIdTelegram,
                show_placar: show_placar
            }
        })

        return {
            id: newConfiguration.id,
            max_triggers: newConfiguration.max_triggers,
            telegram_channel_id: Number(newConfiguration.telegram_channel_id),
            user_id: newConfiguration.user_id,
            show_placar: newConfiguration.show_placar
        };
    }

}

export default ConfigurationRespository;