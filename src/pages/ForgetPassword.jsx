import { useState } from "react";
import { API } from "../api";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("forgot-password/", { email });
      setMessage("If this email exists, a reset link has been sent.");
    } catch {
      setMessage("Something went wrong.");
    }
  };

  return (
    <div className="p-6">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
        />
        <button className="bg-black text-white px-4 py-2" type="submit">
          Send Reset Link
        </button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
};

export default ForgotPassword;
