import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Seashell } from './entities/seashell.entity';

@Injectable()
export class SeashellsService {
  constructor(
    @InjectRepository(Seashell)
    private seashellRepository: Repository<Seashell>,
  ) {}

  async create(seashell: Seashell): Promise<Seashell> {
    return await this.seashellRepository.save(seashell)
  }

  async findAll(): Promise<Seashell[]> {
    return await this.seashellRepository.find();
  }

  async findOne(id: number): Promise<Seashell> {
    return await this.seashellRepository.findOneBy({ id });
  }

  async update(id: number, seashell: Seashell): Promise<UpdateResult> {
    return this.seashellRepository.update(id, seashell);
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.seashellRepository.delete(id);
  }
}
