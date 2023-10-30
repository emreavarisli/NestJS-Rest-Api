import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // Veritabanı tipi PostgreSQL olarak ayarlanmalıdır.
      host: 'localhost', // Veritabanı sunucusunun adresi
      port: 5432, // PostgreSQL varsayılan portu genellikle 5432'dir
      username: 'your_username', // PostgreSQL kullanıcı adınız
      password: 'your_password', // PostgreSQL şifreniz
      database: 'your_database_name', // Bağlanmak istediğiniz veritabanının adı
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Veritabanı varlık (entity) dosyalarının yolunu belirtmek için, uygun şekilde güncellenmelidir.
      synchronize: true, // Bu seçenek geliştirme aşamasında kullanılabilir, fakat üretimde false olarak ayarlanması daha güvenlidir.
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }