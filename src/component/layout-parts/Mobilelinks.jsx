import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonAll from "../buttons/ButtonAll";

function MobileLinks() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Department", path: "/department" },
    { name: "Doctors", path: "/doctors" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Menu Button */}
      <div>
        <button className={`md:hidden  p-2 rounded-xl ${open ? 'bg-white text-black' : 'bg-lime-600 text-white'} `} onClick={() => setOpen(true)}>
          {open ? '' : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-50 flex transition-all duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Sliding menu */}
        <div
          className={`w-[90%] h-full bg-white p-6 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* CLOSE BUTTON */}
          <div className="flex justify-end mb-8 text-lime-600">
            <button onClick={() => setOpen(false)}>
              <X size={28} />
            </button>
          </div>

          {/* LINKS */}
          <div className="flex flex-col gap-6">
            {links.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className="text-xl font-medium text-blue-900 border-b pb-2"
              >
                {item.name}
              </Link>
            ))}
            <ButtonAll text={"Get an Appointment"} type="greenblue" />
          </div>
        </div>

        {/* 10% RIGHT GAP */}
        <div className="w-[10%]" onClick={() => setOpen(false)} />
      </div>
    </>
  );
}

export default MobileLinks;
