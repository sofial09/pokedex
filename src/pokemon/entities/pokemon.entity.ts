import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Pokemon extends Document {

    @Prop({
        unique: true,
        index: true,
    })
    code: number;

    @Prop({
        unique: true,
        index: true,
    })
    name: string; 
}
export const PokemonSchema = SchemaFactory.createForClass(Pokemon);