import { useState } from "react";
import Joi from "joi";
import registerService from "./RegisterService";
import { Navigate, useNavigate } from "react-router";
import Button from "../Button";

export default function Register() {
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ message: "", status: false });
  const navigate = useNavigate();

  const handleSetMobile = (e) => {
    setMobile(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await registerService(mobile, setError, setLoading);
    if (res) navigate("/otp-code");
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
              className="w-full border border-gray-300 rounded-md py-2 px-4
               bg-gray-50 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
            />
            {error.status && (
              <span className="text-sm font-bold text-red-600 block mt-1">
                {error.message}
              </span>
            )}
          </div>
          <Button loading={loading} msg="ورود" />
        </form>
      </div>
    </div>
  );
}
