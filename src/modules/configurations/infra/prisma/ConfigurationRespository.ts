import IConfiguration from "../../domain/entitites/IConfiguration";
import IConfigurationRespository from "../../domain/repositories/IConfigurationRespository";
import prisma from "../../../../shared/prisma/prisma";

class ConfigurationRespository implements IConfigurationRespository{
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

}

export default ConfigurationRespository;