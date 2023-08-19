import { IsString, Length } from 'class-validator';

export class CreateTodoDto {
  @Length(10, 200)
  @IsString({ message: 'Description is required !' })
  description: string;
}
