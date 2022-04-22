import IUserRepository from "../../../sessions/domain/entities/IUserRepository";
import IConfiguration from "../../domain/entitites/IConfiguration";
import IConfigurationRespository from "../../domain/repositories/IConfigurationRespository";

class ReadConfigurationsService {
    constructor(
        private configurationRepository: IConfigurationRespository,
        private userRepository: IUserRepository,
    ) { }

    async execute(userId: string): Promise<IConfiguration> {
        const user = await this.userRepository.findById(userId);

        if (!user) {
            throw new Error("User not found");
        }

        return await this.configurationRepository.findOrCreateByUserId(userId);

    }
}

export default ReadConfigurationsService;