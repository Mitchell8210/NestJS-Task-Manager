import { IsIn, IsNotEmpty } from 'class-validator';
import { Environment } from '../enums/environment.enum';
import { StartingStage } from '../enums/starting-stage.enum';
import { StrainType } from '../enums/strain-type.enum';

export class CreateGrowDto {
  @IsNotEmpty()
  grow_name: String;

  @IsNotEmpty()
  @IsIn([StrainType.HYBRID, StrainType.INDICA, StrainType.SATIVA])
  strain_type: StrainType;

  @IsNotEmpty()
  strain_name: String;

  @IsNotEmpty()
  @IsIn([
    StartingStage.SEED,
    StartingStage.VEG,
    StartingStage.BLOOM,
    StartingStage.CLONE,
    StartingStage.MOTHER,
  ])
  starting_stage: StartingStage;

  @IsNotEmpty()
  number_of_plants: Number;

  @IsNotEmpty()
  @IsIn([Environment.INDOOR, Environment.OUTDOOR])
  environment: Environment;
}
