import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './models/user/module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.6llyrr2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&authSource=admin`,
    ),
    UserModule,
  ],
})
export class AppModule {}
