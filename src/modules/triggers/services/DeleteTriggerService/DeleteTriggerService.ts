import ITriggerRepository from "../../domain/repositories/ITriggerRepository";
import IUserRepository from "../../../sessions/domain/entities/IUserRepository";

class DeleteTriggerService {
    constructor(
        private triggerRepository: ITriggerRepository,
        private userRepository: IUserRepository,
    ) { }

    async execute(userId: string, triggerId: string): Promise<void> {
        const user = await this.userRepository.findById(userId);

        if (!user) {
            throw new Error("User not found");
        }

        const trigger = await this.triggerRepository.findById(triggerId);

        if (!trigger) {
            throw new Error("Trigger not found");
        }

        await this.triggerRepository.delete(triggerId);
    }
}

export default DeleteTriggerService;