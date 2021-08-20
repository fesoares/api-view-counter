import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { CounterModule } from './counter/counter.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://user:PKTdLLqEmxcX4agH@cluster0.sptgg.mongodb.net/counter?retryWrites=true&w=majority',
    ),
    UserModule,
    CounterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
