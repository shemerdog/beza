import {Entity, model, property} from '@loopback/repository';

@model()
export class Problem extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;


  constructor(data?: Partial<Problem>) {
    super(data);
  }
}

export interface ProblemRelations {
  // describe navigational properties here
}

export type ProblemWithRelations = Problem & ProblemRelations;
