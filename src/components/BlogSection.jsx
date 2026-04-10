"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import blogImg from "../../public/hero.jpg";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Why Chicken is the Ultimate Comfort Food",
    desc: "Discover why chicken dishes are loved worldwide and how they bring comfort to every bite.",
    img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
    date: "April 2026",
  },
  {
    id: 2,
    title: "Top 5 Spicy Chicken Recipes You Must Try",
    desc: "From fried to grilled, explore the most mouth-watering spicy chicken recipes.",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    date: "March 2026",
  },
  {
    id: 3,
    title: "Healthy Chicken Meals for Fitness Lovers",
    desc: "High protein, low fat – perfect chicken meals for your fitness journey.",
    img: "https://images.unsplash.com/photo-1605475121461-2a0b1b6c4b72",
    date: "February 2026",
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 px-5 md:px-20 ">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl text-[#ae1b27] italic">
          Chicken World Blog
        </h2>
        <p className="text-gray-500 mt-3 font-light">
          Delicious recipes, tips, and stories for chicken lovers 🍗
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden group"
          >
            <div className="overflow-hidden">
              <Image src={blogImg} alt={blog.title}></Image>
            </div>

            <div className="p-5">
              <p className="text-sm text-gray-400">{blog.date}</p>

              <h3 className="text-xl font-semibold mt-2 group-hover:text-[#ae1b27] transition">
                {blog.title}
              </h3>

              <p className="text-gray-500 mt-3 text-sm">{blog.desc}</p>
              <Link href={"/blogs/details"}>
                <button className="mt-4 text-[#ae1b27] font-semibold hover:underline">
                  Read More →
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
