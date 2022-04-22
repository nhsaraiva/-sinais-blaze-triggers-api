import ITriggerRequest from "../entities/ITriggerRequest";
import ITrigger from "../entities/ITrigger";

interface ITriggerRepository {
    index(userId: string): Promise<ITrigger[] | null>;
    create(data: ITriggerRequest): Promise<ITrigger>;
    findById(id: string): Promise<ITrigger | null>;
    findByIdAndUserId(id: string, userId: string): Promise<ITrigger | null>;
    delete(id: string): Promise<void>;
    update(id: string, data: ITriggerRequest): Promise<ITrigger>;
}

export default ITriggerRepository;