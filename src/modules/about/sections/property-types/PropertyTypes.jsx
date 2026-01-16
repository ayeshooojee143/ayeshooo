import React from "react";
import { propertyData } from "./PropertyData";

const PropertyTypes = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {propertyData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-xl transition-transform duration-300 hover:scale-110"
              />

              <div className="py-4 text-center">
                <h3 className="text-blue-950 font-bold text-lg">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;
