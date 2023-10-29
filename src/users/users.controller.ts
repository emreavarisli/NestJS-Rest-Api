import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-users-dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private x: UsersService) { }

    @Get()
    getAll() {
        return this.x.findAll();
    }

    @Get(":id")
    getOne(@Param("id") id) {
        return `This id ${id}`;
    }

    @Post()
    create(@Body() allProps: CreatePersonDto) {
        return `User created: Username is: ${allProps.username}`
    }
}
