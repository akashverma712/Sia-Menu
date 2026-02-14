import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuData = {
   Drinks: [
    { id: 1, name: "Cold Drink", price: 40 },
    { id: 2, name: "Masala Cold Drink", price: 80 },
    { id: 3, name: "Fresh Lime Water", price: 80 },
    {
      id: 4,
      name: "Fresh Lime Soda (Sweet / Salted / Mixed)",
      price: 140,
    },
    { id: 5, name: "Chocolate Milkshake", price: 140 },
    { id: 6, name: "Oreo Milkshake", price: 140 },
    { id: 7, name: "Kit Kat Milkshake", price: 180 },
    { id: 8, name: "Virgin Mojito", price: 120 },
    { id: 9, name: "Blue Berry Mojito", price: 140 },
    { id: 10, name: "Kacha Aam Shake", price: 120 },
    {
      id: 11,
      name: "Pina Colada (Pineapple Ice Cream)",
      price: 160,
    },
    { id: 12, name: "Summer Cooler", price: 120 },
    { id: 13, name: "Red Berry Blast", price: 120 },
  ],
  
  Dessert: [
    { id: 201, name: "Ice Cream (2 scoops)", price: "80" },
    { id: 202, name: "Gulab Jamun (1 pc)", price: "40" },
    { id: 203, name: "Rasgulla (2 pcs)", price: "30" },
  ],
  

  Bread: [
    { id: 17, name: "Tandoori Roti", price: "₹25 (Plain) / ₹30 (Butter)" },
    { id: 18, name: "Butter Naan", price: "₹50" },
    { id: 19, name: "Masala Kulcha", price: "₹60 (Plain) / ₹65 (Butter) / ₹70 (Stuffed)" },
    { id: 20, name: "Garlic Naan", price: "₹60" },
    { id: 21, name: "Missi Roti", price: "₹50" },
    { id: 22, name: "Paneer Paratha (2 pcs)", price: "₹140" },
    { id: 23, name: "Aloo Paratha", price: "₹60" },
    { id: 24, name: "Lachha Paratha", price: "₹50" },
    { id: 25, name: "Tawa Roti", price: "₹15 (Plain) / ₹20 (Butter)" },
    { id: 26, name: "Roomali Roti", price: "₹60 (Plain) / ₹70 (Butter)" },
  ],


  "Indian Starters": [
  { id: 11, name: "Paneer Tikka", price: "220" },

  { id: 12, name: "Paneer Pakoda", price: "150" },
  { id: 13, name: "Pyaz Pakoda", price: "120" },
  { id: 14, name: "Chicken Pakoda", price: "200" },
  { id: 15, name: "Fish Pakoda", price: "180" },

  {
    id: 16,
    name: "Egg Cutlet",
    price: "150 (Veg) / 180 (Paneer) / 210 (Chicken)",
  },

  { id: 17, name: "Finger Fry", price: "130" },

  {
    id: 18,
    name: "Veg Sandwich (Grill)",
    price: "100 (Veg) / 130 (Chicken)",
  },

  { id: 19, name: "Cheese Sandwich", price: "130" },
  { id: 20, name: "Corn Sandwich", price: "130" },

  { id: 21, name: "Veg Pakoda", price: "180" },
],


  "Chinese Starters": [
  {
    id: 101,
    name: "Spring Roll",
    price: "150 (Veg) / 200 (Chicken)",
  },

  { id: 102, name: "American Corn Salt & Pepper", price: "200" },
  { id: 103, name: "Paneer Chilli", price: "200" },
  { id: 104, name: "Baby Corn Chilli Dry", price: "200" },
  { id: 105, name: "Mushroom Chilli Dry", price: "260" },

  { id: 106, name: "Paneer 65", price: "220" },
  { id: 107, name: "Chicken 65", price: "250" },

  { id: 108, name: "American Corn Chilli", price: "250" },
  { id: 109, name: "Potato Chilli", price: "150" },
  { id: 110, name: "Heavy Chilli Potato", price: "180" },

  {
    id: 111,
    name: "Veg Manchurian",
    price: "180 (Baked) / 190 (Grilled)",
  },

  { id: 112, name: "Cheese Ball", price: "200" },
  { id: 113, name: "Cheese Nuggets", price: "180" },

  { id: 114, name: "Paneer Chinese Kasturi", price: "250" },
  {
    id: 115,
    name: "Paneer Drums of Heaven (4 pcs)",
    price: "250",
  },

  {
    id: 116,
    name: "Chicken Lollipop (4 pcs)",
    price: "300",
  },

  {
    id: 117,
    name: "Chicken Chilli Bones",
    price: "240 / 250",
  },

  { id: 118, name: "Mushroom Chilli Kasturi", price: "250" },
  { id: 119, name: "Egg Chilli", price: "160" },
  { id: 120, name: "Mushroom Stick Chilli", price: "280" },

  {
    id: 121,
    name: "Veg Lollipop (6 pcs)",
    price: "230",
  },

  { id: 122, name: "Lemon Chicken", price: "260" },
  { id: 123, name: "Garlic Chicken Chilli", price: "270" },
  { id: 124, name: "Szechuan Chicken Chilli", price: "260" },

  { id: 125, name: "Pan Manchurian", price: "220" },
  { id: 126, name: "Chilli Manchurian", price: "250" },
  { id: 127, name: "Mas-Manchurian", price: "250" },

  { id: 128, name: "Mutton Salt & Pepper", price: "220" },
  { id: 129, name: "Chicken Chilli Kasturi", price: "260" },
  { id: 130, name: "Chicken Crispy", price: "250" },
],


Rice: [
  { id: 301, name: "Steam Rice", price: "120" },
  { id: 302, name: "Jeera Rice", price: "150" },

  {
    id: 303,
    name: "Veg Fried Rice",
    price: "160 (Veg) / 200 (Non-Veg)",
  },

  {
    id: 304,
    name: "Schezwan Fried Rice",
    price: "180 (Veg) / 220 (Non-Veg)",
  },

  { id: 305, name: "Veg Biryani", price: "200" },
  { id: 306, name: "Chicken Biryani", price: "250" },
  { id: 307, name: "Egg Biryani", price: "200" },

  {
    id: 308,
    name: "Hyderabadi Biryani",
    price: "250 (Veg) / 280 (Chicken)",
  },

  { id: 309, name: "Paneer Biryani", price: "250" },
  { id: 310, name: "Paneer Tikka Biryani", price: "300" },
  { id: 311, name: "Chicken Tikka Biryani", price: "300" },
],


  "Chinese Noodles": [
  {
    id: 701,
    name: "Veg Hakka Noodles",
    price: "160 (Veg) / 200 (Non-Veg)",
  },
  { id: 702, name: "Paneer Noodles", price: "180" },
  { id: 703, name: "Veg Schezwan Noodles", price: "170" },
  { id: 704, name: "Chicken Schezwan Noodles", price: "220" },
  { id: 705, name: "Veg Mix Noodles", price: "180" },
  { id: 706, name: "Chicken Mix Noodles", price: "220" },

  { id: 707, name: "Veg Mix Fried Rice", price: "180" },
  { id: 708, name: "Chicken Mix Fried Rice", price: "200" },
  { id: 709, name: "Egg Fried Rice", price: "180" },
  { id: 710, name: "Veg Schezwan Fried Rice", price: "180" },
  { id: 711, name: "Chicken Schezwan Fried Rice", price: "200" },

  { id: 712, name: "Veg Pulao", price: "180" },
  { id: 713, name: "ABC Pulao", price: "200" },
  { id: 714, name: "Kashmiri Pulao", price: "220" },
  { id: 715, name: "Lemon Rice", price: "200" },
  { id: 716, name: "Shahi Pulao", price: "220" },
],

  Salad: [
    { id: 501, name: "Onion Salad", price: "60" },
    { id: 502, name: "Green Salad", price: "100" },
    { id: 503, name: "ABC Salad", price: "60" },
    { id: 504, name: "Cucumber Salad", price: "100" },
    { id: 505, name: "Fruit Salad", price: "200" },
    { id: 506, name: "Papad", price: "20" },
    { id: 507, name: "Masala Papad", price: "50" },
  ],
  

  Raita: [
    { id: 801, name: "Mix Raita", price: "100" },
    { id: 802, name: "Pineapple Raita", price: "150" },
    { id: 803, name: "Onion Raita", price: "100" },
    { id: 804, name: "Curd Raita", price: "50" },
    { id: 805, name: "ABC Raita", price: "100" },
  ],
  

  "Tea/Coffee": [
  { id: 901, name: "Black Tea", price: "50" },
  { id: 902, name: "Tea", price: "60" },
  { id: 903, name: "Coffee", price: "80" },
  { id: 904, name: "ABC", price: "80" },
  { id: 905, name: "Green Tea", price: "50" },
  { id: 906, name: "Hot Chocolate", price: "120" },
  { id: 907, name: "Cold Coffee", price: "120" },
  { id: 908, name: "Cold Coffee with Ice Cream", price: "140" },
  { id: 909, name: "XYZ", price: "40" },
  { id: 910, name: "Masala Kulhad Tea", price: "40" },
],



  Soup: [
    { id: 601, name: "Veg Hot and Sour Soup", price: "120" },
    { id: 602, name: "Veg Manchow Soup", price: "140" },
    { id: 603, name: "Garlic Soup", price: "100" },
    { id: 604, name: "Chi Soup", price: "110" },
    { id: 605, name: "Lemon Coriander Soup", price: "100" },
    { id: 606, name: "Corn Soup", price: "100" },
    { id: 607, name: "Tomato Soup", price: "100" },
    { id: 608, name: "ABC Soup", price: "90" },
    { id: 609, name: "XYZ Soup", price: "100" },
  ],
  

 "Tandoor Starters": [
  { id: 1001, name: "Chicken Tikka (8 pcs)", price: "280" },
  { id: 1002, name: "Chicken Reshmi Tikka (8 pcs)", price: "300" },
  { id: 1003, name: "Chicken Kasturi Kebab (8 pcs)", price: "280" },
  { id: 1004, name: "Chicken Malai Tikka", price: "280" },
  { id: 1005, name: "Chicken Kali Mirch Tikka (8 pcs)", price: "300" },
  { id: 1006, name: "Chicken Afghani Tikka (8 pcs)", price: "300" },

  { id: 1007, name: "Chicken Tangdi Kabab (2 pcs)", price: "250" },

  {
    id: 1008,
    name: "Chicken Tandoori",
    price: "300 (2 pcs) / 550 (4 pcs)",
  },
  {
    id: 1009,
    name: "Chicken Afghan",
    price: "300 (2 pcs) / 550 (4 pcs)",
  },

  { id: 1010, name: "Leg Kebab (2 pcs)", price: "350" },

  { id: 1011, name: "Paneer Tikka", price: "250" },
  { id: 1012, name: "Mushroom Tikka", price: "250" },
  { id: 1013, name: "Mushroom Stuffing", price: "280" },

  { id: 1014, name: "Veg Hara Bhara Kebab (8 pcs)", price: "250" },
  { id: 1015, name: "Paneer Achari Tikka (8 pcs)", price: "240" },

  { id: 1016, name: "Chicken Achari Tikka (8 pcs)", price: "300" },
  { id: 1017, name: "Chicken Garlic Tikka (8 pcs)", price: "300" },
  { id: 1018, name: "Chicken Mini Tikka (8 pcs)", price: "280" },

  { id: 1019, name: "Baby Corn Seekh Kebab", price: "250" },
  { id: 1020, name: "Veg Cocktail Kebab", price: "350" },
],


  "Indian Main Course": [
  { id: 401, name: "Chicken Handi", price: "250" },
  { id: 402, name: "Chicken Kadhai", price: "250" },
  { id: 403, name: "Chicken Do Pyaza", price: "240" },
  { id: 404, name: "Chicken Kashmiri", price: "260" },
  { id: 405, name: "Chicken Patiala", price: "270" },
  { id: 406, name: "Chicken Masala", price: "280" },
  { id: 407, name: "Chicken Tikka Masala", price: "350" },
  { id: 408, name: "Chicken Qeshmi Masala", price: "350" },
  { id: 409, name: "Chicken Bharta", price: "250" },

  { id: 410, name: "Chicken Dehati (4 pcs)", price: "270" },
  { id: 411, name: "Chicken Bhentda (8 pcs)", price: "280" },
  { id: 412, name: "Chicken Curry (4 pcs)", price: "240" },
  { id: 413, name: "Chicken Methi (4 pcs)", price: "250" },
  { id: 414, name: "Chicken Masala (4 pcs)", price: "270" },
  { id: 415, name: "Chicken Lassa (4 pcs)", price: "250" },

  { id: 416, name: "Chicken Chatpata", price: "250" },
  { id: 417, name: "Chicken Maharaja", price: "300" },
  { id: 418, name: "Chicken Sultani (4 pcs)", price: "300" },

  { id: 419, name: "Egg Curry", price: "140" },
  { id: 420, name: "Egg Do Pyaza", price: "160" },

  { id: 421, name: "Mix Veg", price: "200" },
  { id: 422, name: "Veg Jhal Frenzy", price: "240" },
  { id: 423, name: "Veg Kadhai", price: "250" },
  { id: 424, name: "Veg Kolhapuri", price: "200" },

  { id: 425, name: "Shahi Paneer", price: "250" },
  { id: 426, name: "Matar Paneer", price: "240" },
],
};

export default function App({ menuData }) {
  const categories = Object.keys(menuData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="min-h-screen bg-[#9a2f0b]">
      {/* HEADER */}
      <header className="py-20 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-[0.4em] text-[#facc15] uppercase mb-2">
          Menu Card
        </h1>
        <img
          src="/sia.png"
          alt="SIA"
          className="h-28 md:h-36 object-contain drop-shadow-2xl"
        />
      </header>

      {/* CATEGORY BUTTONS */}
      <div className="flex flex-wrap justify-center gap-3 px-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition
              ${
                activeCategory === cat
                  ? "bg-orange-600 text-white shadow-lg"
                  : "bg-[#f3e2d8] text-[#7c2d12] hover:bg-orange-200"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* WHITE MENU CARD */}
      <div className="flex justify-center px-4 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-3xl bg-white rounded-[2.5rem] px-8 md:px-12 py-14 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.4)]"
          >
            {/* CATEGORY TITLE */}
            <h2 className="text-center text-sm font-extrabold tracking-[0.45em] text-[#7c2d12] mb-12 uppercase">
              {activeCategory}
            </h2>

            {/* ITEMS */}
            <div className="flex flex-col gap-6">
              {menuData[activeCategory].map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className="flex items-center gap-3"
                >
                  {/* NAME */}
                  <span className="text-sm font-semibold uppercase tracking-wide text-slate-800 whitespace-nowrap">
                    {item.name}
                  </span>

                  {/* DOTTED LINE (FIXED) */}
                  <span className="flex-1 border-b border-dotted border-slate-300 min-w-0" />

                  {/* PRICE */}
                  <span className="shrink-0 min-w-[90px] text-center text-sm font-bold text-[#7c2d12] bg-orange-100 px-4 py-1 rounded-full">
                    {item.price}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}