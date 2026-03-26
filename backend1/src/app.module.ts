import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product/entities/product.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      entities: [Product],
      autoLoadEntities: true,
      synchronize: true
    }),
    ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
