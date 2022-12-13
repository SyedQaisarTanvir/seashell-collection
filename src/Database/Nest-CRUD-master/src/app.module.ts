import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeashellsModule } from './seashells/seashells.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seashell } from './seashells/entities/seashell.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Syed687@',
      database: 'projectdb',
      entities: [Seashell],
      synchronize: true,
    }),
    SeashellsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
