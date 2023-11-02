import { Module } from '@nestjs/common';
import { PackagesController } from './packages.controller';
import { PackagesService } from './packages.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PackagesEntity } from './packages.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PackagesEntity])
  ],
  controllers: [PackagesController],
  providers: [PackagesService]
})
export class PackagesModule { }
