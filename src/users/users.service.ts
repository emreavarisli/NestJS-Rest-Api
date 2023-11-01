import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './users.entity';
import { Repository } from 'typeorm';
import { CreatePersonDto } from './dto/create-users-dto';
@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {
    }

    async getUsers() {
        try {
            return await this.userRepository.find()
        } catch (e) {
            throw new InternalServerErrorException(e.message || e)
        }
    }

    async getUserById(id: number) {
        try {
            const user = await this.userRepository.findOne({
                where: {
                    id
                }
            })

            if (!user) {
                throw new InternalServerErrorException('Id değerine sahip user bulunamadı.')
            }

            return user
        } catch (e) {
            throw new InternalServerErrorException(e.message || e)
        }
    }

    async createUser(data: CreatePersonDto) {
        try {
            return await this.userRepository.save(data.toEntity())
        } catch (e) {
            throw new InternalServerErrorException(e.message || e)
        }
    }


    async updateUser(id: number, data: CreatePersonDto) {
        try {
            const user = await this.getUserById(id)
            user.username = data.username
            user.gender = data.gender
            user.age = data.age

            return await this.userRepository.save(user)
        } catch (e) {
            throw new InternalServerErrorException(e.message || e)
        }
    }


    async deleteUser(id: number) {
        try {
            const user = await this.getUserById(id)

            await this.userRepository.delete(user)

            return user
        } catch (e) {
            throw new InternalServerErrorException(e.message || e)
        }
    }

}
