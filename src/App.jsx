import React from "react";
import Register from "./Coponents/Register/Register";
import { Route, Routes } from "react-router";
import OtpCode from "./Coponents/Register/OtpCode";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Register />} />
        <Route path="/otp-code" element={<OtpCode />} />
        <Route path="/*" element={<p>404</p>} />
      </Routes>
    </div>
  );
}
