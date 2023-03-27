import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { UsersModule } from './users/users.module';
import { AuthModule } from './authentication';
import { RoutersModule } from './routers/router.module';
import { OrdersModule } from './orders/order.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb://localhost/tracking_app'),
    ScheduleModule.forRoot(),
    AuthModule,
    UsersModule,
    RoutersModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
