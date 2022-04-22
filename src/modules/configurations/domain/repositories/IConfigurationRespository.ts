import IConfiguration from "../entitites/IConfiguration";

interface IConfigurationRespository {
    findOrCreateByUserId(userId: string): Promise<IConfiguration>;
}

export default IConfigurationRespository;