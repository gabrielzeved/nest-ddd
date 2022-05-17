import { FindConditions, FindManyOptions, Repository } from 'typeorm';

export abstract class ServiceBase<T> {
  constructor(protected repo: Repository<T>) {}

  async find(id: string): Promise<T> {
    return await this.repo.findOne(id);
  }

  async findAll(options: FindManyOptions<T> | FindConditions<T>): Promise<T[]> {
    return await this.repo.find(options);
  }

  async delete(id: string): Promise<boolean> {
    const deleteResult = await this.repo.delete(id);
    return deleteResult.affected > 0;
  }

  async findWithPage(options: FindManyOptions<T>) {
    return await this.repo.findAndCount(options);
  }

  async add(t: T): Promise<T> {
    const insertResult: Promise<T> = await this.repo.save(t as any);
    return insertResult;
  }

  async update(id: string, t: T): Promise<boolean> {
    const updateResult = await this.repo.update(id, t);
    return updateResult.affected > 0;
  }
}
