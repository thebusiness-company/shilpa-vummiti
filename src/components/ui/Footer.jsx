import React from 'react';
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-white text-black px-6 py-12 md:px-16 border-t text-sm  ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* ABOUT SHILPA VUMMITI */}
        <div className="space-y-6">
          
          <ul className="space-y-6">
            <div><Link to={'/about'}><h3 className="font-bold uppercase text-xs tracking-widest">About Shilpa Vummiti</h3></Link></div>
            <div><Link to={'/about'}><li className="hover:opacity-70 transition-opacity duration-300 cursor-pointer">Press</li></Link></div>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="space-y-6">
          <h3 className="font-bold uppercase text-xs tracking-widest">Services</h3>
          <ul className="space-y-2">
          <div><Link to={'/personalization'}><li className="hover:opacity-70 transition-opacity duration-300 cursor-pointer">Customization</li></Link></div>
          <div><Link to={'/shipping-policy'}><li className="hover:opacity-70 transition-opacity duration-300 cursor-pointer">Shipping & Return Policy</li></Link></div>
            <div><Link to={'/authenticity'}><li className="hover:opacity-70 transition-opacity duration-300 cursor-pointer">Authenticity</li></Link></div>
          </ul>
        </div>

        {/* HELP */}
        <div className="space-y-6">
          <h3 className="font-bold uppercase text-xs tracking-widest">Help</h3>
          <ul className="space-y-2">
          <div><a
        href="https://wa.me/919876543210" // Replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      ><li className="hover:opacity-70 transition-opacity duration-300 cursor-pointer">Chat With Advisor</li></a></div>
            <div><Link to={'/privacy'}><li className="hover:opacity-70 transition-opacity duration-300 cursor-pointer">Privacy Policy</li></Link></div>
            <div><Link to={'/care'}><li className="hover:opacity-70 transition-opacity duration-300 cursor-pointer">Product Care</li></Link></div>
          </ul>
        </div>

        {/* CONNECT */}
        <div className="space-y-6">
          <h3 className="font-bold uppercase text-xs tracking-widest">Connect</h3>
          <a
              href="https://www.google.com/maps/place/Shilpa+Vummiti/@12.9494135,80.2572095,20.6z/data=!4m6!3m5!1s0x3a525d3570739b3b:0x47e1dd7f8cb185b4!8m2!3d12.9493885!4d80.2574075!16s%2Fg%2F11vq7jqy08?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="leading-relaxed hover:opacity-70 block cursor-pointer"
            >
              <span className="block">206 & 201, Ground Floor, 1st Cross Rd,</span>
              <span className="block">Sri Kapaleeswarar Nagar, Neelankarai,</span>
              <span className="block">Chennai, Tamil Nadu 600041</span>
            </a>

          <div className="flex items-center space-x-3 mt-2">
            <a href="#" className="hover:opacity-70 transition-opacity duration-300">
              <FaInstagram size={16} />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity duration-300">
              <FaFacebookF size={16} />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity duration-300">
              <FaYoutube size={16} />
            </a>
          </div>

          <Link to={'/terms'}><p className="mt-4 hover:opacity-70 transition-opacity duration-300 cursor-pointer">
            Terms & Conditions
          </p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
