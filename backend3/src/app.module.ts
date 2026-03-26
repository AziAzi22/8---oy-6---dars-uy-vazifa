import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://aziazi22t_db_user:srmKxdhLlUuAyrmL@cluster0.i6nw2lj.mongodb.net/?appName=Cluster0',
    ),
    BookModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
