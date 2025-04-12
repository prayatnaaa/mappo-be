import { IsString } from 'class-validator';

export class CreatePlaceDto {
  @IsString()
  public readonly name: string;

  @IsString()
  public readonly desc?: string;

  public readonly latitude: number;
  public readonly longitude: number;
}
