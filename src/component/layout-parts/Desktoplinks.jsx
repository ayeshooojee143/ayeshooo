import { Link } from "react-router-dom";


function Desktoplinks() {
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
           {links.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="relative font-semibold text-blue-900
              after:absolute after:left-0 after:-bottom-1 after:h-[2px]
              after:w-0 after:bg-lime-600 after:transition-all after:duration-300
              hover:after:w-full hover:text-lime-600"
            >
              {item.name}
            </Link>
          ))}
        </>
    )
}

export default Desktoplinks
