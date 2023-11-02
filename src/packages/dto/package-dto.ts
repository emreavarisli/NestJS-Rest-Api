import { IsNumber, IsString } from "class-validator";
import { PackagesEntity } from "../packages.entity";
import { Type } from "class-transformer";

export class PackagesDto {

    @IsString()
    package_name: string;

    @Type(() => Number)
    @IsNumber()
    dowload: number;

    @Type(() => Number)
    @IsNumber()
    upload: number;

    @Type(() => Number)
    @IsNumber()
    price: number;

    toEntity() {
        const entity = new PackagesEntity()
        entity.package_name = this.package_name
        entity.dowload = this.dowload
        entity.upload = this.upload
        entity.price = this.price
        return entity
    }
}