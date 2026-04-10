"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Arafat Rahman",
    review: "Best fried chicken I’ve ever had! Super crispy and juicy 🔥",
    rating: 5,
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    review: "Loved the spicy chicken burger. Perfect taste balance 😍",
    rating: 4,
  },
  {
    id: 3,
    name: "Tanvir Hasan",
    review: "Affordable and delicious. My go-to chicken place now!",
    rating: 5,
  },
  {
    id: 4,
    name: "Mehedi Hasan",
    review: "Quality is amazing. Highly recommended for chicken lovers 🍗",
    rating: 5,
  },
  {
    id: 5,
    name: "Sadia Islam",
    review: "Their grilled chicken is next level healthy & tasty!",
    rating: 4,
  },
  {
    id: 6,
    name: "Imran Hossain",
    review: "Fast delivery and fresh food every time 👍",
    rating: 5,
  },
  {
    id: 7,
    name: "Jannat Ara",
    review: "The spicy wings are addictive 🔥🔥",
    rating: 5,
  },
  {
    id: 8,
    name: "Shakib Al Hasan",
    review: "Great portion size and excellent flavor.",
    rating: 4,
  },
  {
    id: 9,
    name: "Mim Akter",
    review: "Loved the packaging and food quality ❤️",
    rating: 5,
  },
  {
    id: 10,
    name: "Rakib Uddin",
    review: "Best chicken shop in town without a doubt!",
    rating: 5,
  },
];

const ReviewSection = () => {
  return (
    <section className="py-16 px-5 md:px-20">
        
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-[#ae1b27]">Customer Reviews</h2>
        <p className="text-gray-500 mt-3 font-light">
          What our chicken lovers say about us 🍗
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
        {reviews.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-gray-50 p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >

            <div className="w-12 h-12 rounded-full bg-[#ae1b27] text-white flex items-center justify-center font-bold mb-3">
              {item.name.charAt(0)}
            </div>

            <h3 className="font-semibold text-lg">{item.name}</h3>

            <div className="text-yellow-500 text-sm mb-2">
              {"⭐".repeat(item.rating)}
            </div>

            <p className="text-gray-600 text-sm">{item.review}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
