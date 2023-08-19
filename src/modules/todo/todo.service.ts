import { Injectable } from '@nestjs/common';
import { Prisma } from 'src/common/PrismaClient';
import { CreateM } from './@types/create';

@Injectable()
export class TodoService {
  async create(input: CreateM.Input): Promise<CreateM.Output> {
    return Prisma.todo.create({
      data: {
        description: input.description,
      },
    });
  }

  async findAll(): Promise<Array<CreateM.Output>> {
    return await Prisma.todo.findMany();
  }

  async findOne(id: string): Promise<CreateM.Output> {
    return await Prisma.todo.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string) {
    return await Prisma.todo.update({
      where: {
        id,
      },
      data: {
        done: true,
        done_at: new Date().toISOString(),
      },
    });
  }
}
