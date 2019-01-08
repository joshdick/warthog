import { Authorized } from 'type-graphql';

import { BaseModel, EmailField, Model, StringField } from '../../../../../src';

@Model()
export class User extends BaseModel {
  @StringField({ maxLength: 30 })
  firstName?: string;

  @StringField({ maxLength: 50, minLength: 2 })
  lastName?: string;

  @EmailField()
  email?: string;

  @StringField({ maxLength: 30, nullable: true })
  nickName?: string;

  @Authorized('user:admin')
  @StringField({ nullable: true })
  privateField?: string;
}