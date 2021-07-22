import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Area } from './area.entity';

@Injectable()
export class AreaService {
  constructor(
    @InjectRepository(Area) private areaRepository: Repository<Area>,
  ) {}

  async findAll(): Promise<Area[]> {
    return this.areaRepository.find({ name: 'NPI-290' });
  }

  async findOne(id: number): Promise<Area> {
    return this.areaRepository.findOneOrFail(id);
  }

  async create(area: Area): Promise<Area> {
    area.company = 1;
    area.userCreate = 1;
    return this.areaRepository.save(area);
  }

  async update(id: number, area: Area): Promise<Area> {
    area.id = id;
    return this.areaRepository.save(area);
  }
}
