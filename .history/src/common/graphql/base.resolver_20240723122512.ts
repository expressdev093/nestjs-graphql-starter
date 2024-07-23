import { Type } from '@nestjs/common';

export function BaseResolver<T extends Type<unknown>>(classRef: T): any {}
