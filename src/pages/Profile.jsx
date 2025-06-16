import React, { useState, useEffect } from "react";
import img from "../assets/images/img.png";
import logo from "../assets/images/Logo.png";
import API from "../api";

const ProfileUpdate = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Fetch profile on mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const { data } = await API.get("profile/");
        setFormData({
          username: data.username || "",
          email: data.email || "",
          mobile: data.phone_number || "",
          address: data.address || "",
          city: data.city || "",
          state: data.state || "",
          country: data.country || "",
          zip: data.zip_code || "",
        });
      } catch (error) {
        console.error("Failed to fetch profile", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // Handle input changes
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      await API.patch("profile/", {
        username: formData.username,
        email: formData.email,
        phone_number: formData.mobile,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        zip_code: formData.zip,
      });

      setSuccessMessage("Profile updated successfully.");
    } catch (error) {
      console.error("Profile update failed", error);
    } finally {
      setLoading(false);
    }
  };
  const Logout = () =>{
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    window.location.href  = "/";
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="w-full md:w-1/2 px-6 lg:px-30 flex flex-col items-start mx-auto">
        <img src={logo} alt="Logo" className="w-40 mt-10 mb-12" />

        <h2 className="text-sm font-semibold tracking-widest mb-6">
          PROFILE UPDATE
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
          <input
            type="text"
            name="username"
            placeholder="User Name"
            value={formData.username}
            onChange={handleChange}
            className="border-b w-full outline-none pb-2 text-sm"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border-b w-full outline-none pb-2 text-sm"
            required
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="border-b w-full outline-none pb-2 text-sm"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="border-b w-full outline-none pb-2 text-sm"
            required
          />

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="border-b w-full outline-none pb-2 text-sm"
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              className="border-b w-full outline-none pb-2 text-sm"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              className="border-b w-full outline-none pb-2 text-sm"
              required
            />
            <input
              type="text"
              name="zip"
              placeholder="Zip"
              value={formData.zip}
              onChange={handleChange}
              className="border-b w-full outline-none pb-2 text-sm"
              required
            />
          </div>
          <div className="flex justify-between items-center ">
            <button
            type="submit"
            disabled={loading}
            className="mt-6 px-6 py-2 bg-black text-white text-sm font-semibold w-fit hover:bg-white hover:text-black border border-black transition"
          >
            {loading ? "Updating..." : "UPDATE PROFILE"}
          </button>
          <button
            onClick={() => {Logout()}}
            disabled={loading}
            className="mt-6 px-6 py-2 bg-black text-white text-sm font-semibold w-fit hover:bg-white hover:text-black border border-black transition"
          >
            Logout
          </button>
          </div>
          

          {successMessage && (
            <p className="text-green-600 text-sm mt-2">{successMessage}</p>
          )}
        </form>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-5 lg:px-20 py-10">
        <img
          src={img}
          alt="Fashion Model"
          className="w-full h-auto max-h-[600px] object-cover"
        />
      </div>
    </div>
  );
};

export default ProfileUpdate;
