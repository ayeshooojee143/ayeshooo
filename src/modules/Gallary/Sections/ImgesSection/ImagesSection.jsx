import React, { useState } from "react";

const imagesData = [
  { id: 1, category: "Interior", img: "/assets/interior.jpg" },
  { id: 2, category: "Interior", img: "/assets/interior1.jpg" },
  { id: 3, category: "Interior", img: "/assets/interior 2.jfif" },

  { id: 4, category: "Exterior", img: "/assets/exterior.jpg" },
  { id: 5, category: "Exterior", img: "/assets/exterior1.jpg" },
  { id: 6, category: "Exterior", img: "/assets/exterior2.jpg" },

  { id: 7, category: "Living Room", img: "/assets/living room.jpg" },
  { id: 8, category: "Living Room", img: "/assets/living room1.jpg" },
  { id: 9, category: "Living Room", img: "/assets/living room2.avif" },

  { id: 10, category: "Bedroom", img: "/assets/rooms.jpg" },
  { id: 11, category: "Bedroom", img: "/assets/rooms1.jpg" },
  { id: 12, category: "Bedroom", img: "/assets/rooms2.avif" },

  { id: 13, category: "Kitchen", img: "/assets/kitechen.avif" },
  { id: 14, category: "Kitchen", img: "/assets/kitechen1.webp" },
  { id: 15, category: "Kitchen", img: "/assets/kitechen2.jfif" },
];

const categories = ["All", "Interior", "Exterior", "Living Room", "Bedroom", "Kitchen"];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openImage, setOpenImage] = useState(null);

  const filteredImages =
    selectedCategory === "All"
      ? imagesData.slice(0, 6)
      : imagesData.filter(img => img.category === selectedCategory).slice(0, 3);

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full border transition
                ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-blue-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.map(item => (
            <div
              key={item.id}
              onClick={() => setOpenImage(item.img)}
              className="relative group rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={item.img}
                alt=""
                className="w-full h-64 object-cover"
              />

              {/* ✅ BLACK OVERLAY + ICON */}
              <div className="
                absolute inset-0
                bg-black/50
                opacity-0 group-hover:opacity-100
                transition
                flex items-center justify-center
              ">
                <span className="text-white text-4xl">🔍</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ FULL SCREEN IMAGE */}
      {openImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setOpenImage(null)}
        >
          <img
            src={openImage}
            alt=""
            className="max-w-[90%] max-h-[85vh] rounded-lg"
          />
        </div>
      )}
    </>
  );
};

export default GalleryPage;
