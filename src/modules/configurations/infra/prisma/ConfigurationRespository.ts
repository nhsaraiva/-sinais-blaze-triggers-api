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

        return configurationByUser;
    }


    async update(chatIdTelegram: number, userId: string): Promise<IConfiguration> {
        const configuration = await this.findOrCreateByUserId(userId);

        const newConfiguration = await prisma.configuration.update({
            where: {
                id: configuration.id,
            },
            data: {
                telegram_channel_id: chatIdTelegram
            }
        })

        return newConfiguration;
    }

}

export default ConfigurationRespository;