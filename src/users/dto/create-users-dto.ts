import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { UserEntity } from "../users.entity";

export class CreatePersonDto {

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    gender: string;

    @IsOptional()
    age: number;

    toEntity() {
        const entity = new UserEntity()
        entity.username = this.username
        entity.gender = this.gender
        entity.age = this.age
        return entity
    }
}