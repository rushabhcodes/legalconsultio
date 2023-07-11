import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { faPhone, faEnvelope, faHome, faClock } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      {/* create a responsive footer with 5 columns using grid the backgroung color should be black */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 bg-black text-white p-4">
        {/* column 1 */}
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl">legalconsultio</h1>
          <div className="flex justify-start p-2">
            <FontAwesomeIcon className="h-8 pt-1" icon={faPhone} />
            <h3 className="px-3">+91 8149722555</h3>
          </div>
          <div className="flex justify-start p-2">
            <FontAwesomeIcon className="h-8 pt-1" icon={faEnvelope} />
            <h3 className="px-3">legalconsultio@gmail.com</h3>
          </div>
          <div className="flex justify-start p-2">
            <FontAwesomeIcon className="h-8 pt-1" icon={faHome} />
            <div className="flex flex-col">
              <h5 className="px-3 pb-3">Office Address</h5>
              <h5 className="px-3">B/109,Saras Capital,</h5>
              <h5 className="px-3">Besides, State Bank of India</h5>
              <h5 className="px-3">Opp. Axis Bank,</h5>
              <h5 className="px-3">Dahanu,Tal-Dahanu,</h5>
              <h5 className="px-3">Pin code: 401602</h5>
            </div>
          </div>
          <div className="flex justify-start p-2">
            <FontAwesomeIcon className="h-8 pt-1" icon={faClock} />
            <h3 className="px-3">Mon-Fri: 9:00AM to 7:00PM</h3>
            <h3 className="px-3">Sat-Sun: 9:00AM to 12:00PM</h3>
          </div>
        </div>
        {/* column 2 */}
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl">Quick Links</h1>
          <div className="py-4 flex-col text-xl">
            <Link href="/">
              <h3 className="p-2 hover:underline-offset-1">&#62; Home</h3>
            </Link>
            <Link href="/courtAndForums">
              <h3 className="p-2 hover:underline-offset-1">&#62; Court And Forums</h3>
            </Link>
            <Link href="/articles">
              <h3 className="p-2 hover:underline-offset-1">&#62; Articles</h3>
            </Link>
            <Link href="/dv">
              <h3 className="p-2 hover:underline-offset-1">&#62; DV</h3>
            </Link>
            <Link href="/138">
              <h3 className="p-2 hover:underline-offset-1">&#62; 138</h3>
            </Link>
            <Link href="/about">
              <h3 className="p-2 hover:underline-offset-1">&#62; About</h3>
            </Link>
            <Link href="/contact">
              <h3 className="p-2 hover:underline-offset-1">&#62; Contact</h3>
            </Link>
          </div>
        </div>
        {/* column 3 */}
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl">Social Media</h1>
          <Link href={"https://www.instagram.com/legalconsultio/?igshid=MzRlODBiNWFlZA%3D%3D"}>
            <div className="flex justify-start p-2 pt-4">
              <FontAwesomeIcon className="py-2" icon={faInstagram} />
              <h3 className="px-3">Instagram</h3>
            </div>
          </Link>

          <Link href={"https://wa.me/+918149722555"}>
            <div className="flex justify-start p-2">
              <FontAwesomeIcon className="py-2" icon={faWhatsapp} />
              <h3 className="px-3">WhatsApp</h3>
            </div>
          </Link>
        </div>
        {/* column 4 */}
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl">FAQ</h1>
          <Link href="/faq">
          <ul className="my-4 list-disc">
            <li className="py-1 hover:underline">
              Is legalconsultio the right law firm for me? / Why should I trust your firm with my case?
            </li>
            <li className="py-1 hover:underline">
              What types of cases does your law firm handle?
            </li>
            <li className="py-1 hover:underline">
              Do I need to come into your office and meet you in person to retain you, or to receive legal services?
            </li>
            <li className="py-1 hover:underline">
              What are your business hours?
            </li>
            <li className="py-1 hover:underline">
              How can I become a client of your firm?
            </li>
            <li className="py-1 hover:underline">
              What do I do when I have a question?
            </li>
            <li className="py-1 hover:underline">
              What is expected of me as a client of your firm?
            </li>
            <li className="py-1 hover:underline">
              How will I be kept informed of my case?
            </li>
            <li className="py-1 hover:underline">
              What are your business hours?
            </li>
          </ul>
          </Link>
        </div>
        {/* column 5 */}
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl pb-4">Law Office</h1>

          <div className="flex justify-center mb-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234.3407333184006!2d72.74118393818598!3d19.98954677793644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be727b540dbd845%3A0x2ace4b33fd05cf1f!2sAdv%20Prakash%20Thakkar!5e0!3m2!1sen!2sin!4v1686458000111!5m2!1sen!2sin"
              className="h-60 w-60 rounded shadow-white shadow-2xl"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
