import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private readonly users = [
        {
            id: "123",
            username: "Fatih",
            age: 18,
        },
        {
            id: '321',
            username: 'Emre',
            age: 26,
        },
    ];

    findAll() {
        return this.users;
    }
}
