import { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import img from "../assets/images/login.png";
import logo from "../assets/images/Logo.png";
import { API, API_URL } from '../api';
import { AuthContext } from "../components/context/AuthContext";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Login = () => {
  const { setIsAuthenticated, getuser } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    API.post("token/", formData)
      .then(res => {
        setIsLoading(false);
        setIsAuthenticated(true);
        getuser();
        localStorage.setItem("access", res.data.access);
        localStorage.setItem("refresh", res.data.refresh);
        setFormData({ email: "", password: "" });
        setError("");
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch(() => {
        setIsLoading(false);
        setError("Invalid email or password");
      });
  };
  const googleLogin = useGoogleLogin({
  onSuccess: async (tokenResponse) => {
        console.log("googleAccessToken",tokenResponse.access_token);

    try {
      const res = await axios.post(`${API_URL}/rest-auth/google/`, {
        access_token: tokenResponse.access_token,
      });
      console.log("google Login response:",res.data);
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh",res.data.refresh);

      setIsAuthenticated(true);
      getuser();
      setError("");

      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    } catch (err) {
      console.error("Google login error:", err);
      setError("Google login failed");
    }
  },
  onError: () => setError("Google login was cancelled or failed"),
});


  const handleGuestLogin = async () => {
    const timestamp = Date.now();
    const guestEmail = `guest${timestamp}@gmail.com`;
    const guestUsername = `guest${timestamp}`;
    const guestPassword = "Guest@123";

    try {
      // 1. Register the guest user
      await API.post("user/register/", {
        username: guestUsername,
        email: guestEmail,
        mobile: "0000000000",
        password: guestPassword,
        password2: guestPassword,
      });

      // 2. Log in the guest user
      const res = await API.post("token/", {
        email: guestEmail,
        password: guestPassword,
      });

      setIsAuthenticated(true);
      getuser();
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      setError("");

      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    } catch (err) {
      setError("Guest login failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="w-full md:w-1/2 px-6 lg:py-12 py-6 flex flex-col items-start max-w-md mx-auto">
        <img src={logo} alt="Logo" className="lg:mb- w-40" />

        <div className="text-xs text-gray-700 mt-10 mb-6">
          <a href="/login" className="underline mr-2">LOG IN</a> /
          <a href="/signup" className="ml-2 mr-2">SIGN UP</a> /
          <span
            className="ml-2 cursor-pointer underline hover:text-gray-900"
            onClick={handleGuestLogin}
          >
            GUEST LOGIN
          </span>
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form id="login-form" onSubmit={handleSubmit} className="w-full">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="EMAIL"
            required
            className="w-full border-b border-gray-400 mb-4 pb-4 outline-none bg-transparent text-sm"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="PASSWORD"
            required
            className="w-full border-b border-gray-400 mb-2 pb-2 outline-none bg-transparent text-sm"
          />
          <a href="/forgot-password" className="text-xs text-gray-600 underline mb-8 inline-block">
            Have you forgotten your password?
          </a>

          <div className="flex items-center justify-between mt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="border border-black px-12 cursor-pointer py-2 text-sm hover:bg-black hover:text-white transition duration-200"
            >
              {isLoading ? "Signing in..." : "LOG IN"}
            </button>

            <div className="text-xs text-gray-400">/</div>

            <button
              type="button"
              className="border border-gray-400 px-12 py-2 text-sm flex cursor-pointer items-center gap-2"
              onClick={() => googleLogin()}
            >
              <span className="text-xs text-[#4285F4]">GOOGLE</span>
            </button>
          </div>
        </form>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center px-6 lg:mt-30 py-1 lg:py-12">
        <img
          src={img}
          alt="Fashion"
          className="object-cover w-full max-h-[600px]"
        />
      </div>
    </div>
  );
};

export default Login;
