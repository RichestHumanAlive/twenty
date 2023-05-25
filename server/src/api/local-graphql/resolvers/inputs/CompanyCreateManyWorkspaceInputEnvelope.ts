import * as TypeGraphQL from '@nestjs/graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { CompanyCreateManyWorkspaceInput } from './CompanyCreateManyWorkspaceInput';

@TypeGraphQL.InputType('CompanyCreateManyWorkspaceInputEnvelope', {
  isAbstract: true,
})
export class CompanyCreateManyWorkspaceInputEnvelope {
  @TypeGraphQL.Field((_type) => [CompanyCreateManyWorkspaceInput], {
    nullable: false,
  })
  data!: CompanyCreateManyWorkspaceInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}