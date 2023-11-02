import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PackagesEntity } from './packages.entity';
import { Repository } from 'typeorm';
import { PackagesDto } from './dto/package-dto';
@Injectable()
export class PackagesService {

    constructor(
        @InjectRepository(PackagesEntity)
        private readonly packagesRepository: Repository<PackagesEntity>
    ) {
    }

    async getPackages() {
        try {
            return await this.packagesRepository.find()
        } catch (e) {
            throw new InternalServerErrorException(e.message || e)
        }
    }

    async getPackagesById(id: number) {
        try {
            const packages = await this.packagesRepository.findOne({
                where: {
                    id
                }
            })

            if (!packages) {
                throw new InternalServerErrorException('Id değerine sahip package bulunamadı.')
            }

            return packages
        } catch (e) {
            throw new InternalServerErrorException(e.message || e)
        }
    }

    async createPackages(data: PackagesDto) {
        try {
            return await this.packagesRepository.save(data.toEntity())
        } catch (e) {
            throw new InternalServerErrorException(e.message || e)
        }
    }

    async updatePackages(id: number, data: PackagesDto) {
        try {
            const packages = await this.getPackagesById(id)
            packages.package_name = data.package_name
            packages.dowload = data.dowload
            packages.upload = data.upload
            packages.price = data.price

            return await this.packagesRepository.save(packages)
        } catch (e) {
            throw new InternalServerErrorException(e.message || e)
        }
    }

    async deletePackages(id: number) {
        try {
            const user = await this.getPackagesById(id)

            await this.packagesRepository.delete(user.id)

            return user
        } catch (e) {
            throw new InternalServerErrorException(e.message || e)
        }
    }
}
