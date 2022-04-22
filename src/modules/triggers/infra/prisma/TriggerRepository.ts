import ITrigger from "../../domain/entities/ITrigger";
import ITriggerRepository from "../../domain/repositories/ITriggerRepository";
import prisma from '../../../../shared/prisma/prisma';
import ITriggerRequest from "../../domain/entities/ITriggerRequest";

class TriggerRepository implements ITriggerRepository {
    async index(userId: string): Promise<ITrigger[] | null> {
        return await prisma.trigger.findMany({
            where: {
                user_id: userId
            }
        });
    }
    
    async create(data: ITriggerRequest): Promise<ITrigger> {
        return await prisma.trigger.create({
            data
        });
    }
}

export default TriggerRepository;