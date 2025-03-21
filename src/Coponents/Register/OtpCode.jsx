import React, { useState } from "react";
import optService from "./OtpService";
import Input from "../Input";
import Button from "../Button";

function OtpCode() {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSetCode = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    optService(code);
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-96 bg-white shadow-lg border border-gray-200 rounded-lg p-6">
        <img
          src="/digistore.webp"
          className="w-24 mx-auto mb-4"
          alt="DigiStore Logo"
        />
        <h3 className="text-md mt-2 font-bold text-center">
          کدتایید برای شماره شما ارسال شده است
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label className="block text-gray-700 text-sm mb-1">
              <h3 className="text-md mt-2 font-bold">لطفاکد را وارد کنید</h3>
            </label>
            <Input value={code} onChange={handleSetCode} error={error} />
            <Button msg={"تایید"} loading={loading} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default OtpCode;
