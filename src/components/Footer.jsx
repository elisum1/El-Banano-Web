import React from 'react';

const Footer = () => {
  return (
    <footer className="azul text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-12">
        {/* First Column: Navigation */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold">Explore</h4>
          <ul className="space-y-2">
            <li><a href="/menu" className="hover:underline">Menu</a></li>
            <li><a href="/order" className="hover:underline">Order</a></li>
            <li><a href="/rewards" className="hover:underline">Rewards</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
          </ul>
        </div>

        {/* Second Column: More Links */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold">Company</h4>
          <ul className="space-y-2">
            <li><a href="/careers" className="hover:underline">Careers</a></li>
            <li><a href="/investors" className="hover:underline">Investors</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Third Column: Social Media */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" className="hover:text-yellow-500"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com" className="hover:text-yellow-500"><i className="fab fa-instagram"></i></a>
            <a href="https://www.twitter.com" className="hover:text-yellow-500"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

        {/* Fourth Column: Newsletter Signup */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold">Subscribe to our Newsletter</h4>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-gray-800"
            />
            <button className="w-full bg-yellow-500 text-gray-800 py-2 rounded hover:bg-yellow-400">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Links */}
      <div className="container mx-auto mt-12 text-center text-gray-400">
        <ul className="flex justify-center space-x-4">
          <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
          <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
          <li><a href="/cookies" className="hover:underline">Cookie Settings</a></li>
        </ul>
        <p className="mt-4">&copy; 2024 Restaurante El Banano. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
