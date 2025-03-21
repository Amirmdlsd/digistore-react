import Joi from "joi";
import axiosInstance from "./../../axios/axiosInstance";

const joiSchema = Joi.object({
  phone: Joi.string()
    .length(11)
    .pattern(/^\d+$/) // Ensures only digits
    .required()
    .messages({
      "string.length": "شماره موبایل باید دقیقاً 11 رقم باشد",
      "any.required": "موبایل الزامی است",
      "string.empty": "موبایل الزامی است",
      "string.pattern.base": "شماره موبایل فقط باید شامل اعداد باشد",
    }),
});

export default async function registerService(phone, setError) {
  try {
    setError({ message: "", status: false }); // Reset error state

    const { error } = joiSchema.validate({ phone });

    if (error) {
      setError({
        message: error.details[0].message,
        status: true,
      });
      return;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
