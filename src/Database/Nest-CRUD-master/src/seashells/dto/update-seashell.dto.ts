import { PartialType } from '@nestjs/mapped-types';
import { CreateSeashellDto } from './create-seashell.dto';

export class UpdateSeashellDto extends PartialType(CreateSeashellDto) {}
