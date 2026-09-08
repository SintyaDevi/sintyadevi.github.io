import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SectionOne = () => {
  // State untuk melacak posisi mouse agar background interaktif mengikuti kursor
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 50, damping: 20 },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen bg-[#050816] flex items-center justify-center overflow-hidden py-24 lg:py-0"
    >
      {/* 1. Interactive Mouse Follower Glow (Cahaya yang mengikuti kursor mouse) */}
      <motion.div 
        className="pointer-events-none absolute w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/15 to-violet-500/15 rounded-full blur-[120px] z-0"
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 100 }}
      />

      {/* 2. Static Background Orbs dengan Animasi Floating */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-violet-500/20 rounded-full blur-[100px] pointer-events-none" 
      />

      {/* Container utama */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 z-10 w-full">
        
        {/* Frame Foto */}
        <motion.div 
          className="w-full lg:w-5/12 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div 
            variants={floatingVariants}
            animate="animate"
            className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-88 lg:h-88 rounded-full p-2 bg-gradient-to-tr from-cyan-500 to-violet-500 shadow-[0_0_30px_rgba(34,211,238,0.2)]"
          >
            <div className="w-full h-full bg-[#050816] rounded-full overflow-hidden border-4 border-[#050816]">
              <img 
                src="/Profile.jpeg" 
                alt="Sintya Profile" 
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Konten Teks */}
        <motion.div 
          className="w-full lg:w-7/12 flex flex-col gap-4 text-center lg:text-left items-center lg:items-start px-2 sm:px-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={textVariants}>
            <h1 className="text-white font-black text-2xl sm:text-4xl lg:text-5xl leading-snug sm:leading-tight">
              Hi, I'm <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-400">
                Sintya Devi Laksana Putri
              </span>
            </h1>
          </motion.div>

          <motion.div variants={textVariants}>
            <h2 className="text-sm sm:text-xl text-gray-300 font-medium">
              UI/UX Designer & Web Developer
            </h2>
          </motion.div>

          <motion.div variants={textVariants}>
            <p className="text-gray-400 text-xs sm:text-base leading-relaxed max-w-xl">
             I am an Informatics Management graduate with a strong interest in UI/UX Design, QA Testing, and Web Development.
             I enjoy analyzing problems, improving user experiences, and creating effective digital solutions.
             I am passionate about information systems and technology, while continuously developing my technical, communication, and collaboration skills.
            </p>
          </motion.div>

          {/* Skills Badges */}
          <motion.div variants={textVariants} className="flex flex-wrap justify-center lg:justify-start gap-2 mt-1">
            {['HTML', 'Tailwind CSS', 'Javascript','Database (MySQQL, SqlServer)', 'Figma', 'Canva', 'Balsamiq', 'Draw.io', 'React basic', 'Python Basic'].map((skill, index) => (
              <span 
                key={index}
                className="px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-cyan-300 bg-cyan-900/30 border border-cyan-500/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-shadow cursor-default"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          {/* Tombol Aksi */}
          <motion.div variants={textVariants} className="flex flex-wrap justify-center lg:justify-start gap-3 mt-3">
            <a 
              href="#contact"
              className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-xl text-white font-semibold backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-xs sm:text-base"
            >
              Contact Me
            </a>
            <a 
              href="/CV_Sintya Devi Laksana Putri.pdf" 
              className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-xl text-[#050816] font-semibold bg-gradient-to-r from-cyan-400 to-violet-500 hover:scale-105 transition-transform animate-pulse text-xs sm:text-base"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default SectionOne;