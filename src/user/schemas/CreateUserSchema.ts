import * as Joi from 'joi';

export const CreateUserSchema = Joi.object({
  username: Joi.string().required().min(5).max(30),
  password: Joi.string().required(),
  avatar: Joi.string(),
  email: Joi.string().email().required(),
});
