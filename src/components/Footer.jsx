import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          GLIMPSE
        </h1>
        <p className="py-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaYoutubeSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-12">
        <div>
          <ul>
            <li className="py-2 text-sm">FAQ</li>
            <li className="py-2 text-sm">Investor Relations</li>
            <li className="py-2 text-sm">Ways to Watch</li>
            <li className="py-2 text-sm">Corporate Information</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="py-2 text-sm">Help Center</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Terms of Use</li>
            <li className="py-2 text-sm">Contact Us</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="py-2 text-sm">Account</li>
            <li className="py-2 text-sm">Redeem Gift Cards</li>
            <li className="py-2 text-sm">Privacy</li>
            <li className="py-2 text-sm">Speed Test</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="py-2 text-sm">Media Center</li>
            <li className="py-2 text-sm">Buy Gift Cards</li>
            <li className="py-2 text-sm">Cookie Preferences</li>
            <li className="py-2 text-sm">Legal Notices</li>
          </ul>
        </div>
      </div>
      <h6>&copy; Maulana Akbar Yudistika</h6>
    </div>
  );
};

export default Footer;
