import ITrigger from "../../domain/entities/ITrigger";
import ITriggerRepository from "../../domain/repositories/ITriggerRepository";
import prisma from '../../../../shared/prisma/prisma';
import ITriggerRequest from "../../domain/entities/ITriggerRequest";

class TriggerRepository implements ITriggerRepository {
    async index(userId: string): Promise<ITrigger[] | null> {
        return await prisma.trigger.findMany({
            where: {
                user_id: userId,
                deleted_at: null
            },
            orderBy: {
                created_at: 'desc'
            }
        });
    }

    async create(data: ITriggerRequest): Promise<ITrigger> {
        return await prisma.trigger.create({
            data
        });
    }

    async findById(id: string): Promise<ITrigger | null> {
        return await prisma.trigger.findUnique({
            where: {
                id
            }
        })
    }

    async findByIdAndUserId(id: string, userId: string): Promise<ITrigger | null> {
        return await prisma.trigger.findFirst({
            where: {
                id,
                user_id: userId,
                deleted_at: null
            }
        })
    }

    async delete(id: string): Promise<void> {
        await prisma.trigger.update({
            where: {
                id
            },
            data: {
                deleted_at: new Date()
            }
        });
    }

    async update(id: string, data: ITriggerRequest): Promise<ITrigger> {
        return await prisma.trigger.update({
            where: {
                id
            },
            data
        });
    }
}

export default TriggerRepository;