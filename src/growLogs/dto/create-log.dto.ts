import { IsNotEmpty } from "class-validator";

export class CreateLogDto {

    @IsNotEmpty()
    name: String;

    @IsNotEmpty()
    grow_id: Number;

    @IsNotEmpty()
    notes: String;

}