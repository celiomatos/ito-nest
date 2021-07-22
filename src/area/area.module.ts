import { Area } from './area.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AreaController } from './area.controller';
import { AreaService } from './area.service';

@Module({
  controllers: [AreaController],
  providers: [AreaService],
  imports: [TypeOrmModule.forFeature([Area])],
})
export class AreaModule {}
