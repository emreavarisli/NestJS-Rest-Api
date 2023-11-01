import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-users-dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    async getAll() {
        return await this.usersService.getUsers()
    }

    @Get(":id")
    async getOne(@Param("id") id) {
        return await this.usersService.getUserById(id)
    }

    @Post()
    async createUser(@Body() data: CreatePersonDto) {
        return await this.usersService.createUser(data)
    }

    @Put(':id')
    async updateUser(
        @Param('id') id: number,
        @Body() data: CreatePersonDto) {
        return await this.usersService.updateUser(id, data)
    }

    @Delete(':id')
    async deleteUser(
        @Param('id') id: number) {
        return await this.usersService.deleteUser(id)
    }
}
