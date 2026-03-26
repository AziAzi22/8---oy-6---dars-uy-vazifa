import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDokument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()   
  name: string;

  @Prop()
  age: number;

  @Prop()
  brand: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
