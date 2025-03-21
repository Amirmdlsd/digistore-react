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

export default async function registerService(phone, setError, setLoading) {
  try {
    setError({ message: "", status: false });
    setLoading(true); // Reset error state

    const { error } = joiSchema.validate({ phone });

    if (error) {
      setError({
        message: error.details[0].message,
        status: true,
      });
      setLoading(false);
      return false;
    }

    // Assuming you'll make an API request here
    // const response = await axiosInstance.post("/register", { phone });
    // Simulate success for now
    setLoading(false);
    return true; // Return true if registration is successful
  } catch (error) {
    setLoading(false);
    setError({
      message: error.response
        ? error.response.data.message
        : "An error occurred",
      status: true,
    });
    return false;
  }
}
