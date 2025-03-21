import { useState } from "react";
import Joi from "joi";
import registerService from "./RegisterService";

export default function Register() {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState({ message: "", status: false });

  const handleSetMobile = (e) => {
    setMobile(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    registerService(mobile, setError);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 bg-white shadow-lg border border-gray-200 rounded-lg p-6">
        <img
          src="/digistore.webp"
          className="w-24 mx-auto mb-4"
          alt="DigiStore Logo"
        />
        <h3 className="font-bold text-lg text-center mb-4">ورود | ثبت نام</h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 text-sm mb-1">
              لطفا شماره تلفن خود را وارد کنید
            </label>
            <input
              onChange={handleSetMobile}
              type="text"
              name="mobile"
              value={mobile}
              className="w-full border border-gray-300 rounded-md py-2 px-4 bg-gray-50 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
            />
            {error.status && (
              <span className="text-sm font-bold text-red-600 block mt-1">
                {error.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md text-center text-lg font-medium transition duration-300 hover:bg-red-700"
          >
            ورود
          </button>
        </form>
      </div>
    </div>
  );
}
