import IConfiguration from "../entitites/IConfiguration";

interface IConfigurationRespository {
    findOrCreateByUserId(userId: string): Promise<IConfiguration>;
    update(chatIdTelegram: number, userId: string, show_placar: boolean): Promise<IConfiguration>;
}

export default IConfigurationRespository;