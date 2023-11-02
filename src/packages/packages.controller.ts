import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { PackagesService } from './packages.service';
import { PackagesDto } from './dto/package-dto';

@Controller('packages')
export class PackagesController {
    constructor(private packagesService: PackagesService) { }

    @Post()
    async createUser(@Body() data: PackagesDto) {
        return await this.packagesService.createPackages(data)
    }

    @Put(':id')
    async updateUser(
        @Param('id') id: number,
        @Body() data: PackagesDto) {
        return await this.packagesService.updatePackages(id, data)
    }

    @Delete(':id')
    async deleteUser(
        @Param('id') id: number) {
        return await this.packagesService.deletePackages(id)
    }
}
