import {
  FaHeart,
  FaPlus,
  FaExpand,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMapMarkerAlt,
} from "react-icons/fa";

const PropertyCard = ({ item }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 h-full flex flex-col">

      {/* IMAGE */}
      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          className="h-64 w-full object-cover cursor-pointer transform transition-transform duration-500 hover:scale-110"
        />

        {/* 🔹 Top badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-blue-950 text-white text-xs px-2 py-1 rounded">
            FOR RENT
          </span>
         
        </div>

        {/* 🔹 Location (bottom on image) */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/70 text-white text-xs px-2 py-1 rounded">
          <FaMapMarkerAlt />
          <span>{item.location || "New York, USA"}</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4 flex-grow">
        <p className="text-orange-700 font-semibold">{item.price}</p>

        <h3 className="font-bold  text-blue-950 text-2xl mt-1">{item.title}</h3>

        {/* paragraph */}
        <p className="text-sm font-medium text-blue-950 mt-2">
          Beautiful modern apartment with high quality finishing,
          open living space and excellent surroundings.
        </p>

        {/* INFO */}
        <div className="flex items-center justify-between text-sm font-medium text-blue-950 mt-4 border-t pt-6">
          <div className="flex items-center gap-1">
            <FaBed className="text-orange-600" />
            <span>{item.beds} Bedrooms</span>
          </div>

          <span className="h-4 w-px bg-gray-300"></span>

          <div className="flex items-center gap-1">
            <FaBath className="text-orange-600" />
            <span>{item.baths} Bathrooms</span>
          </div>

          <span className="h-4 w-px bg-gray-300"></span>

          <div className="flex items-center gap-1">
            <FaRulerCombined className="text-orange-600" />
            <span>{item.area} ft²</span>
          </div>
        </div>
      </div>

      {/* AGENT FOOTER */}
      <div className="flex items-center justify-between px-4 py-3 border-t">
        <div className="flex items-center gap-2">
          <img
            src={item.agent.avatar}
            alt={item.agent.name}
            className="w-9 h-9 rounded-full object-cover"
          />
          <div>
            <p className="text-sm text-blue-950 font-bold">{item.agent.name}</p>
            <p className="text-xs text-blue-950 font-bold">Estate Agent</p>
          </div>
        </div>

        <div className="flex gap-3 text-orange-600 ">
          <FaExpand className="cursor-pointer hover:text-orange-500" />
          <FaHeart className="cursor-pointer hover:text-orange-500" />
          <FaPlus className="cursor-pointer hover:text-orange-500" />
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
