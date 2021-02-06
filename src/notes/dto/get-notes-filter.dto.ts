import { IsIn, IsOptional } from "class-validator";
import { SearchType } from "../enums/search-type.enum";

export class GetNotesFilter {

    @IsOptional()
    searchId: Number;

    @IsOptional()
    @IsIn([SearchType.BY_GROW, SearchType.BY_LOG, SearchType.BY_USER])
    searchType: SearchType;
}