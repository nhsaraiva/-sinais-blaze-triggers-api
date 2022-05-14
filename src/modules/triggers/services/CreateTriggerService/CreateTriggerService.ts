import ITriggerRequest from "../../domain/entities/ITriggerRequest";
import ITrigger from "../../domain/entities/ITrigger";
import ITriggerRepository from "../../domain/repositories/ITriggerRepository";
import IConfigurationRespository from "../../../configurations/domain/repositories/IConfigurationRespository";
import IUserRepository from "../../../sessions/domain/entities/IUserRepository";

class CreateTriggerService {
    constructor(
        private triggerRepository: ITriggerRepository,
        private configurationRepository: IConfigurationRespository,
        private userRepository: IUserRepository,
    ) { }

    async execute(data: ITriggerRequest): Promise<ITrigger> {
        const user = await this.userRepository.findById(data.user_id);

        if (!user) {
            throw new Error("User not found");
        }

        const configuration = await this.configurationRepository.findOrCreateByUserId(data.user_id);

        const triggers = await this.triggerRepository.index(data.user_id);

        if (triggers && triggers.length >= configuration.max_triggers) {
            throw new Error('Max sequence created');
        }

        const sequence = data.sequence;

        const sequenceArray = sequence.split('');

        const permitedSequence = ['B', 'W', 'R'];

        const sequenceFilter = sequenceArray.filter((item) => !permitedSequence.includes(item));

        if (sequenceFilter.length > 0) {
            throw new Error('Invalid sequence');
        }

        const winColors = data.win_colors;

        const winColorsArray = winColors.split('');

        const winColorsPermited = winColorsArray.filter((item) => !permitedSequence.includes(item));
        
        if (winColorsPermited.length > 0) {
            throw new Error('Invalid sequence on win colors');
        }

        const trigger = await this.triggerRepository.create(data);

        return trigger;
    }
}

export default CreateTriggerService;