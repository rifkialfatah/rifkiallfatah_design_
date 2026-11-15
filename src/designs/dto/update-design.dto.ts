import { PartialType } from '@nestjs/mapped-types';
import { CreateDesignDto } from './create-design.dto.js';

export class UpdateDesignDto extends PartialType(CreateDesignDto) {}
