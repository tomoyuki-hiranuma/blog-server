import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { PostService } from './services/post.service';
import { PrismaService } from './services/prisma.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [PrismaService, AppService, PostService],
})
export class AppModule {}
