"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; // optional animation library

export default function DishErrorPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 text-center px-4">
      {/* Animated Dish Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: [0, 15, -15, 0], scale: 1 }}
        transition={{ type: "tween", duration: 1.2, ease: "easeInOut" }}
        className="mb-6"
      >
        <span className="inline-block text-7xl md:text-[8rem] animate-bounce">
          🍲
        </span>
      </motion.div>

      {/* Error Text */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-[#8e1c19] mb-4"
      >
        404 – Dish Not Cooked!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-lg md:text-xl text-gray-700 mb-8"
      >
        Sorry, this delicious dish isn’t ready yet. Please try again later! 🍽️
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex gap-4 flex-wrap justify-center"
      >
        <button
          onClick={() => router.back()}
          className="px-6 py-2 bg-[#8e1c19] text-white rounded-lg shadow-lg hover:bg-red-700 transition-colors duration-300"
        >
          Go Back
        </button>
        <Link
          href="/"
          className="px-6 py-2 border-2 border-[#8e1c19] text-[#8e1c19] rounded-lg shadow-lg hover:bg-[#8e1c19] hover:text-white transition-all duration-300"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
}
