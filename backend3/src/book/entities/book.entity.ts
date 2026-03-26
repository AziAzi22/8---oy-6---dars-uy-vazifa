import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDokument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop()   
  title: string;

  @Prop()
  author: string;

  @Prop()
  price: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);
