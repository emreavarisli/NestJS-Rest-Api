import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { UserEntity } from "../users.entity";
import { Type } from "class-transformer";

export class CreatePersonDto {

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    gender: string;

    @Type(() => Number)
    @IsNumber()
    age: number;

    toEntity() {
        const entity = new UserEntity()
        entity.username = this.username
        entity.gender = this.gender
        entity.age = this.age
        return entity
    }
}