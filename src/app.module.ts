import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PackagesModule } from './packages/packages.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // Veritabanı tipi PostgreSQL olarak ayarlanmalıdır.
      host: 'localhost', // Veritabanı sunucusunun adresi
      port: 5432, // PostgreSQL varsayılan portu genellikle 5432'dir
      username: 'postgres', // PostgreSQL kullanıcı adınız
      password: '6108', // PostgreSQL şifreniz
      database: 'nestjs', // Bağlanmak istediğiniz veritabanının adı
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Veritabanı varlık (entity) dosyalarının yolunu belirtmek için, uygun şekilde güncellenmelidir.
      synchronize: true, // Bu seçenek geliştirme aşamasında kullanılabilir, fakat üretimde false olarak ayarlanması daha güvenlidir.
    }),
    PackagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }