import { Module } from '@nestjs/common';
import { SeashellsService } from './seashells.service';
import { SeashellsController } from './seashells.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seashell } from './entities/seashell.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Seashell])],
  controllers: [SeashellsController],
  providers: [SeashellsService]
})
export class SeashellsModule {}
