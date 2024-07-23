import * as Joi from 'joi';

const envVarsSchema = Joi.object({
  PORT: Joi.number().default(3000),
  DATABASE_HOST: Joi.string().default('localhost'),
  DATABASE_PORT: Joi.number().default(5432),
  DATABASE_USER: Joi.string().default('root'),
  DATABASE_PASSWORD: Joi.string().default('root'),
  DATABASE_NAME: Joi.string().default('graphql_dev'),
}).unknown(true);

export default envVarsSchema;
