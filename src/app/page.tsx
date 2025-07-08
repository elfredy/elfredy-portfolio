"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function EnhancedHero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row-reverse items-center justify-between gap-10 px-8 pt-20 max-w-7xl mx-auto relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Sağ Taraf (Yazılar) */}
      <div className="flex-1 text-center md:text-left z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Salam, mən{" "}
            <span className="text-blue-600 dark:text-blue-400 relative">
              Farid
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </span>
          </motion.h1>
        </motion.div>
        
        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-6"
        >
          <TypeAnimation
            sequence={[
              'Front-end Developer',
              2000,
              'IT Mütəxəssisi',
              2000,
              'React Specialist',
              2000,
              'Next.js Developer',
              2000,
              'UI/UX Enthusiast',
              2000,
            ]}
            wrapper="h2"
            speed={50}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium"
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg mt-4 max-w-2xl leading-relaxed"
        >
          Milli Aviasiya Akademiyasında bakalavr, Odlar Yurdu Universitetində magistr təhsili almış 
          <span className="text-blue-600 dark:text-blue-400 font-semibold"> Front-end developer</span> və 
          <span className="text-purple-600 dark:text-purple-400 font-semibold"> IT mütəxəssisi</span>.
          <br />
          <br />
          4+ illik təcrübəmlə React və Next.js kimi texnologiyalarla funksional və estetik layihələr hazırlayıram.
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex gap-4 mt-8 justify-center md:justify-start"
        >
          {[
            { icon: FaGithub, href: "https://github.com/elfredy", color: "hover:text-gray-900 dark:hover:text-white" },
            { icon: FaLinkedin, href: "#", color: "hover:text-blue-600" },
            { icon: FaTwitter, href: "#", color: "hover:text-blue-400" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start"
        >
          <motion.a
            href="/projects"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Layihələrimə göz at
          </motion.a>
          
          <motion.a
            href="/contact"
            className="inline-block px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 font-medium"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Əlaqə saxla
          </motion.a>
        </motion.div>
      </div>

      {/* Sol Taraf (Görsel) */}
      <div className="flex-1 relative z-10">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Glowing effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-xl opacity-20 animate-pulse"></div>
          
          <motion.img
            src="/hero.png"
            alt="Farid Najafov - Front-end Developer"
            className="relative w-full max-w-md mx-auto md:mx-0 rounded-xl shadow-2xl dark:shadow-blue-500/30"
            whileHover={{ 
              scale: 1.05,
              rotate: 2,
              transition: { type: "spring", stiffness: 300 }
            }}
          />
          
          {/* Floating badges */}
          <motion.div
            className="absolute -top-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
            whileHover={{ scale: 1.1 }}
          >
            4+ Years
          </motion.div>
          
          <motion.div
            className="absolute -bottom-4 -left-4 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, type: "spring" }}
            whileHover={{ scale: 1.1 }}
          >
            React Expert
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}