import ITriggerRepository from "../../domain/repositories/ITriggerRepository";
import IUserRepository from "../../../sessions/domain/entities/IUserRepository";
import ITrigger from "../../domain/entities/ITrigger";

class GetTriggerService {
    constructor(
        private triggerRepository: ITriggerRepository,
        private userRepository: IUserRepository,
    ) { }

    async execute(userId: string, triggerId: string): Promise<ITrigger> {
        const user = await this.userRepository.findById(userId);

        if (!user) {
            throw new Error("User not found");
        }

        const trigger = await this.triggerRepository.findByIdAndUserId(triggerId, userId);

        if (!trigger) {
            throw new Error("Trigger not found");
        }

        return trigger;
    }
}

export default GetTriggerService;