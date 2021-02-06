import { IsNotEmpty } from "class-validator";

export class CreateNoteDto {
    @IsNotEmpty()
    message: String;

    @IsNotEmpty()
    logId: Number;
}