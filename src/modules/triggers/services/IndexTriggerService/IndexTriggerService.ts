import IUserRepository from "../../../sessions/domain/entities/IUserRepository";
import ITrigger from "../../domain/entities/ITrigger";
import ITriggerRepository from "../../domain/repositories/ITriggerRepository";

class IndexTriggerService {
    constructor(
        private triggerRepository: ITriggerRepository,
        private userRepository: IUserRepository
    ) { }

    async execute(userId: string): Promise<ITrigger[] | null> {
        const user = await this.userRepository.findById(userId);

        if (!user) {
            throw new Error("User not found");
        }

        const triggers = await this.triggerRepository.index(userId);

        return triggers;
    }
}

export default IndexTriggerService;