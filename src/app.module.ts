import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { User } from 'database/models/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule,
    TypeOrmModule.forRoot({

      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: null,
      database: "nestjs",
      entities: [User],
      synchronize: true
      }),
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
