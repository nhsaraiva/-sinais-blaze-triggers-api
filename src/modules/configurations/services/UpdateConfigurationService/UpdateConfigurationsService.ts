import HasChatAccess from "../../../../shared/providers/bot/HasChatAccess";
import IUserRepository from "../../../sessions/domain/entities/IUserRepository";
import IConfiguration from "../../domain/entitites/IConfiguration";
import IConfigurationRespository from "../../domain/repositories/IConfigurationRespository";

class UpdateConfigurationsService {
    constructor(
        private configurationRepository: IConfigurationRespository,
        private userRepository: IUserRepository,
    ) { }

    async execute(chatIdTelegram: number, userId: string): Promise<IConfiguration> {
        const user = await this.userRepository.findById(userId);

        if (!user) {
            throw new Error("User not found");
        }

        const hasChatAccessService = new  HasChatAccess();
        
        const hasChatAccess = await hasChatAccessService.execute(chatIdTelegram)

        if (!hasChatAccess) {
            throw new Error("Bot not has access to this chat");            
        }

        const configuration = await this.configurationRepository.update(chatIdTelegram, userId);

        return configuration;

    }
}

export default UpdateConfigurationsService;