import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Newspaper,
  Info,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* ABOUT */}
        <div>
          <h3 className="flex items-center gap-2 text-3xl font-bold mb-6 text-white">
            <span className="p-2 rounded-full bg-orange-600/20 text-orange-600">
              <Info size={18} />
            </span>
            About Us
          </h3>

          <ul className="space-y-4 text-sm text-white/90">
            <li className="flex gap-3 items-start">
              <MapPin className="text-orange-600 mt-1" size={40} />
              London – Capital city, England, southeastern UK, on the River Thames.
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="text-orange-600" size={16} />
              +92 300 1234567
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="text-orange-600" size={16} />
              info@primeestate.com
            </li>
          </ul>

          {/* Email Signup */}
          <div className="mt-6 flex">
            <input
              type="email"
              placeholder="Enter email address"
              className="flex-1 px-3 py-2 rounded-l-md bg-blue-800 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-orange-600"
            />
            <button className="px-4 bg-orange-600 text-white rounded-r-md hover:bg-orange-500 transition">
              →
            </button>
          </div>
        </div>

        {/* LATEST NEWS */}
        <div>
          <h3 className="flex items-center gap-2 text-3xl font-semibold mb-6 text-white">
            <span className="p-2 rounded-full bg-orange-600/20 text-orange-600">
              <Newspaper size={18} />
            </span>
            Latest News
          </h3>

          <div className="space-y-5">
            <NewsItem
              title="Best Areas to Buy Property in UK (2026)"
              date="Jan 10, 2026"
              link="/blog/best-areas-uk"
              img="/assets/lounch.webp"
            />
            <NewsItem
              title="Real Estate Market Trends in UK"
              date="Dec 28, 2025"
              link="/blog/market-trends"
              img="/assets/home img 6.jpg"
            />
          </div>
        </div>

        {/* INFORMATION */}
        <div>
          <h3 className="flex items-center gap-2 text-3xl font-semibold mb-6 text-white">
            <span className="p-2 rounded-full bg-orange-600/20 text-orange-600">
              <Info size={18} />
            </span>
            Information
          </h3>

          <ul className="space-y-4 text-sm ml-14 text-white/90">
           <FooterLink to="/home" text="Home" />
            <FooterLink to="/about" text="About Us" />
            <FooterLink to="/services" text="Our Services" />
            <FooterLink to="/gallary" text="Gallery" />
            <FooterLink to="/contact" text="Contact" />
           
          </ul>
        </div>

        {/* INSTAGRAM */}
        <div>
          <h3 className="flex items-center gap-2 text-3xl font-semibold mb-6 text-white">
            <span className="p-2 rounded-full bg-orange-600/20 text-orange-600">
              <Instagram size={18} />
            </span>
            Instagram
          </h3>

          <div className="grid grid-cols-3 gap-3">
            {[
              "/assets/home img 2.jfif",
              "/assets/home img 6.jpg",
              "/assets/home img 7.jfif",
              "/assets/home img 9.jfif",
              "/assets/home img 11.jfif",
              "/assets/home img 13.jfif",
            ].map((img, i) => (
              <a
                key={i}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="
                  aspect-square rounded-lg 
                  overflow-hidden
                  hover:scale-105 
                  hover:-translate-y-1
                  hover:shadow-lg 
                  hover:shadow-orange-600/40
                  transition-all duration-300
                "
              >
                <img
                  src={img}
                  alt={`Instagram ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom with Social Icons */}
      <div className="mt-16 border-t border-white/20 py-6 text-center text-sm text-white/70">
        
        {/* Social Icons Above Copyright */}
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-orange-600 text-white rounded-full hover:bg-white hover:text-orange-600 hover:scale-110 transition transform shadow-lg shadow-orange-600/40"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-orange-600 text-white rounded-full hover:bg-white hover:text-orange-600 hover:scale-110 transition transform shadow-lg shadow-orange-600/40"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-orange-600 text-white rounded-full hover:bg-white hover:text-orange-600 hover:scale-110 transition transform shadow-lg shadow-orange-600/40"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-orange-600 text-white rounded-full hover:bg-white hover:text-orange-600 hover:scale-110 transition transform shadow-lg shadow-orange-600/40"
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* Copyright */}
        © 2026 Prime Estate UK. All rights reserved.
      </div>
    </footer>
  );
};

/* Components */

const FooterLink = ({ to, text }) => (
  <li>
    <Link
      to={to}
      className="inline-block hover:text-orange-600 hover:translate-x-1 transition-all"
    >
      {text}
    </Link>
  </li>
);

const NewsItem = ({ title, date, link, img }) => (
  <Link
    to={link}
    className="flex gap-3 group bg-blue-800/40 hover:bg-blue-800/70 p-3 rounded-lg transition-all"
  >
    <img
      src={img}
      alt={title}
      className="w-12 h-12 rounded-md object-cover group-hover:scale-105 transition"
    />
    <div>
      <p className="text-sm font-medium text-white group-hover:text-orange-600 transition">
        {title}
      </p>
      <span className="text-xs text-white/60">{date}</span>
    </div>
  </Link>
);

export default Footer;
