import ITriggerRepository from "../../domain/repositories/ITriggerRepository";
import IUserRepository from "../../../sessions/domain/entities/IUserRepository";
import ITrigger from "../../domain/entities/ITrigger";
import ITriggerRequest from "../../domain/entities/ITriggerRequest";

class UpdateTriggerService {
    constructor(
        private triggerRepository: ITriggerRepository,
        private userRepository: IUserRepository,
    ) { }

    async execute(id: string, data: ITriggerRequest): Promise<ITrigger> {
        const user = await this.userRepository.findById(data.user_id);

        if (!user) {
            throw new Error("User not found");
        }
        
        const sequence = data.sequence;

        const sequenceArray = sequence.split('');

        const permitedSequence = ['B', 'W', 'R'];

        const sequenceFilter = sequenceArray.filter((item) => !permitedSequence.includes(item));

        if (sequenceFilter.length > 0) {
            throw new Error('Invalid sequence');
        }

        const trigger = await this.triggerRepository.findByIdAndUserId(id, data.user_id);

        if (!trigger) {
            throw new Error("Trigger not found");
        }

        return await this.triggerRepository.update(id, data);
    }
}

export default UpdateTriggerService;