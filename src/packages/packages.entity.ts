import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('packages')
export class PackagesEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    package_name: string;

    @Column()
    dowload: number;

    @Column()
    upload: number;

    @Column()
    price: number;
}
