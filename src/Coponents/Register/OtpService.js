import Joi from "joi";
export const optSchema = Joi.object({
  code: Joi.string().max(4).required(),
});

export default function optService(code) {
  const { error } = optSchema.validate(code);
  if (error) {
    return false;
  }
  return true;
}
