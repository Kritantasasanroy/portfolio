'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SplineScene } from "@/components/ui/spline"
import { Spotlight } from "@/components/ui/spotlight"
import { motion } from "framer-motion"
import { useState } from "react"

export function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Card className="w-full h-[600px] bg-gradient-to-br from-black/[0.96] via-slate-900/[0.96] to-black/[0.96] relative overflow-hidden mb-8 border-slate-700/50">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="flex h-full">
          {/* Left content */}
          <motion.div
            className="flex-1 p-8 relative z-10 flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Kritanta Sasan Roy
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-xl text-blue-400 mb-4 font-medium">Computer Science Student • Developer • AI Innovator</p>
              <p className="text-neutral-300 max-w-lg mb-6 leading-relaxed">
                Passionate about tech innovation, intelligent systems, and entrepreneurship.
                Building the future through code and creativity.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col space-y-3 text-neutral-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                India
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <a href="mailto:kritantasasan@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                  kritantasasan@gmail.com
                </a>
              </div>
              <div className="flex space-x-6 mt-6">
                <motion.a
                  href="https://linkedin.com/in/kritantasasanroy"
                  className="px-6 py-2 bg-blue-600/20 text-blue-400 rounded-lg border border-blue-500/30 hover:bg-blue-600/30 hover:border-blue-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  LinkedIn
                </motion.a>
                <motion.a
                  href="https://github.com/Kritantasasanroy"
                  className="px-6 py-2 bg-slate-600/20 text-slate-300 rounded-lg border border-slate-500/30 hover:bg-slate-600/30 hover:border-slate-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </Card>
    </motion.div>
  )
}

export function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const highlights = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
        </svg>
      ),
      text: "Computer Science Engineering at KL University",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-400/80"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
        </svg>
      ),
      text: "CGPA: 8.35 (2023-2027)",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-400/80"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      text: "Award-winning competitions participant",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-500/10 to-orange-500/10",
      borderColor: "border-yellow-400/80"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
        </svg>
      ),
      text: "Authored book chapter on AI/ML in Fintech",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-400/80"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="perspective-1000"
    >
      <Card className="w-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-cyan-500/80 mb-8 shadow-2xl shadow-cyan-500/20 backdrop-blur-sm transform-gpu hover:shadow-cyan-500/30 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
        <CardHeader className="relative overflow-hidden pb-8">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
                "linear-gradient(225deg, rgba(147, 51, 234, 0.1), rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))",
                "linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <CardTitle className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              About Me
            </CardTitle>
          </motion.div>
        </CardHeader>
        <CardContent className="text-slate-100 space-y-8 relative px-8 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              className="relative p-8 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 rounded-2xl border border-slate-600/30 shadow-xl backdrop-blur-sm"
              whileHover={{ scale: 1.01, rotateY: 1 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 to-blue-500/3 rounded-2xl"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <p className="text-lg leading-relaxed relative z-10 text-slate-200">
                I'm a Computer Science Engineering student at KL University, Vaddeswaram (2023-2027) with a CGPA of 8.35,
                passionate about tech innovation, intelligent systems, and entrepreneurship.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    rotateY: index % 2 === 0 ? 5 : -5,
                    z: 50,
                    transition: { duration: 0.3 }
                  }}
                  onHoverStart={() => setHoveredPoint(index)}
                  onHoverEnd={() => setHoveredPoint(null)}
                  className={`bg-gradient-to-br ${highlight.bgColor} rounded-xl p-6 border-2 ${highlight.borderColor} shadow-lg transform-gpu preserve-3d relative overflow-hidden transition-all duration-500`}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${highlight.color} opacity-0`}
                    animate={hoveredPoint === index ? { opacity: 0.1 } : { opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"
                    animate={hoveredPoint === index ? { x: [-100, 100] } : {}}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-2">
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-r ${highlight.color} rounded-xl flex items-center justify-center shadow-lg`}
                        animate={hoveredPoint === index ? {
                          scale: [1, 1.2, 1],
                          rotate: [0, 15, -15, 0]
                        } : {}}
                        transition={{ duration: 0.6 }}
                      >
                        {highlight.icon}
                      </motion.div>
                      <h3 className={`text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r ${highlight.color}`}>
                        {highlight.text}
                      </h3>
                    </div>
                  </div>
                  {hoveredPoint === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
                      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                      exit={{ opacity: 0, scale: 0.8, rotateX: 90 }}
                      className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1 rounded-full shadow-lg z-50"
                    >
                      ⭐ Featured
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <motion.div
                className="p-8 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 rounded-2xl border border-slate-600/30 shadow-xl backdrop-blur-sm"
                whileHover={{ scale: 1.01, rotateX: 1 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-lg leading-relaxed mb-6 text-slate-200">
                  My interests span across full-stack development, AI/ML, hardware engineering, and product innovation.
                  I've participated in award-winning competitions and authored a book chapter on AI and ML in Fintech.
                </p>

                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0,
                    rotateX: isExpanded ? 0 : -90
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  {isExpanded && (
                    <div className="border-t border-slate-600/50 pt-6 mt-6">
                      <p className="text-slate-200 leading-relaxed">
                        I believe in the power of technology to solve real-world problems and am constantly exploring new ways
                        to create impactful solutions through code and innovation. My goal is to bridge the gap between
                        cutting-edge technology and practical applications that can make a difference in people's lives.
                      </p>
                    </div>
                  )}
                </motion.div>

                <motion.button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-6 px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl border border-cyan-400/30 hover:border-cyan-300/50 transition-all duration-300 shadow-lg font-semibold text-sm backdrop-blur-sm"
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(6, 182, 212, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.svg
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block mr-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                  </motion.svg>
                  {isExpanded ? "Show Less" : "Read More"}
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function EducationSection() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const educationData = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "KL University, Vaddeswaram",
      period: "2023 - 2027",
      cgpa: "8.35",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
        </svg>
      ),
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-400/80"
    },
    {
      degree: "Higher Secondary Education",
      institution: "Army Public School",
      period: "2011 - 2023",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
        </svg>
      ),
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-400/80"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="perspective-1000"
    >
      <Card className="w-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-green-500/80 mb-8 shadow-2xl shadow-green-500/20 backdrop-blur-sm transform-gpu hover:shadow-green-500/30 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
        <CardHeader className="relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1))",
                "linear-gradient(225deg, rgba(20, 184, 166, 0.1), rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1))",
                "linear-gradient(45deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1))"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <CardTitle className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
              Education
            </CardTitle>
          </motion.div>
        </CardHeader>
        <CardContent className="text-slate-100 relative">
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: index % 2 === 0 ? -45 : 45 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                whileHover={{
                  scale: 1.03,
                  rotateY: index % 2 === 0 ? 3 : -3,
                  z: 40,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredItem(index)}
                onHoverEnd={() => setHoveredItem(null)}
                className={`relative p-6 bg-gradient-to-r ${edu.bgColor} rounded-xl border-2 ${edu.borderColor} shadow-lg transform-gpu preserve-3d overflow-hidden`}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-0`}
                  animate={hoveredItem === index ? { opacity: 0.1 } : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"
                  animate={hoveredItem === index ? { x: [-100, 100] } : {}}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-r ${edu.color} rounded-xl flex items-center justify-center shadow-lg`}
                        animate={hoveredItem === index ? {
                          scale: [1, 1.1, 1],
                          rotate: [0, 10, -10, 0]
                        } : {}}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="text-2xl">{edu.icon}</div>
                      </motion.div>
                      <div>
                        <motion.h3
                          className={`text-xl font-bold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}
                          animate={hoveredItem === index ? { scale: 1.05 } : { scale: 1 }}
                        >
                          {edu.degree}
                        </motion.h3>
                        <p className="text-slate-300 font-medium">{edu.institution}</p>
                      </div>
                    </div>

                    <motion.div
                      className={`px-4 py-2 bg-gradient-to-r ${edu.color} rounded-lg shadow-md`}
                      whileHover={{ scale: 1.1, rotateZ: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-white font-bold text-sm">{edu.period}</div>
                    </motion.div>
                  </div>

                  {edu.cgpa && (
                    <motion.div
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    >
                      <div className="flex items-center space-x-2">
                        <div className="text-slate-300">Performance:</div>
                        <motion.div
                          className={`font-bold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent text-lg`}
                          animate={hoveredItem === index ? { scale: [1, 1.2, 1] } : {}}
                          transition={{ duration: 0.4 }}
                        >
                          {edu.cgpa}
                        </motion.div>
                      </div>

                      {hoveredItem === index && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0, rotateZ: -180 }}
                          animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
                          exit={{ opacity: 0, scale: 0, rotateZ: 180 }}
                          className="flex space-x-1"
                        >
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1, duration: 0.3 }}
                              className="text-yellow-400 text-lg"
                            >
                              ⭐
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </div>

                {hoveredItem === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1 rounded-full shadow-lg z-50 flex items-center space-x-1"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    Achievement
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function SkillsSection() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C", "JavaScript", "HTML", "CSS", "React", "SQL", "MongoDB", "Rust (basic)"],
      gradient: "from-red-400 to-orange-400",
      bgGradient: "from-red-500/30 to-orange-500/30",
      borderColor: "border-red-400/80",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76zM13 17.5H6.5V11l4.74-4.74a4 4 0 0 1 5.65 5.66L13 17.5z" />
          <circle cx="15.5" cy="8.5" r="1.5" />
        </svg>
      )
    },
    {
      title: "Systems & Tools",
      skills: ["Docker", "Kubernetes", "Git", "CI/CD", "REST APIs", "gRPC", "FastAPI", "Firebase", "Packet Tracer"],
      gradient: "from-blue-400 to-cyan-400",
      bgGradient: "from-blue-500/30 to-cyan-500/30",
      borderColor: "border-blue-400/80",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
        </svg>
      )
    },
    {
      title: "Concepts",
      skills: ["Full-stack development", "ML", "Model deployment", "API integration", "Cloud", "Networking"],
      gradient: "from-purple-400 to-pink-400",
      bgGradient: "from-purple-500/30 to-pink-500/30",
      borderColor: "border-purple-400/80",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    },
    {
      title: "Soft Skills",
      skills: ["Problem solving", "Analytical reasoning", "Debugging", "Simplification mindset", "Teamwork", "Communication", "English fluency"],
      gradient: "from-green-400 to-emerald-400",
      bgGradient: "from-green-500/30 to-emerald-500/30",
      borderColor: "border-green-400/80",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-.83.67-1.5 1.5-1.5S12 9.67 12 10.5V18h2v-4h3v4h2V10.5c0-1.93-1.57-3.5-3.5-3.5S12 8.57 12 10.5V18H4z" />
        </svg>
      )
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="perspective-1000"
    >
      <Card className="w-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-purple-500/80 mb-8 hover:border-purple-400 transition-all duration-500 shadow-2xl shadow-purple-500/20 backdrop-blur-sm transform-gpu hover:shadow-purple-500/30 hover:scale-[1.02] hover:-translate-y-2">
        <CardHeader className="relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1), rgba(147, 51, 234, 0.1))",
                "linear-gradient(225deg, rgba(236, 72, 153, 0.1), rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))",
                "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1), rgba(147, 51, 234, 0.1))"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <CardTitle className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
              Skills
            </CardTitle>
          </motion.div>
        </CardHeader>
        <CardContent className="relative">
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${category.bgGradient} rounded-xl p-6 border-2 ${category.borderColor} transition-all duration-500 shadow-md transform-gpu preserve-3d`}
                initial={{ opacity: 0, y: 30, rotateY: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  rotateY: 5,
                  z: 50,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredCategory(index)}
                onHoverEnd={() => setHoveredCategory(null)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <motion.span
                    className="text-2xl"
                    animate={hoveredCategory === index ? {
                      scale: [1, 1.3, 1],
                      rotate: [0, 15, -15, 0]
                    } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    {category.icon}
                  </motion.span>
                  <h3 className={`text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r ${category.gradient}`}>
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className={`bg-gradient-to-r ${category.bgGradient} text-white px-3 py-1 rounded-full text-sm border-2 ${category.borderColor} cursor-default shadow-sm relative overflow-hidden`}
                      initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
                      whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                      transition={{ duration: 0.4, delay: 0.05 * skillIndex }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.15,
                        z: 20,
                        rotateZ: 5,
                        transition: { duration: 0.2 }
                      }}
                      onHoverStart={() => setHoveredSkill(skill)}
                      onHoverEnd={() => setHoveredSkill(null)}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                        animate={hoveredSkill === skill ? { x: [-100, 100] } : {}}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />
                      <div className="relative z-10">{skill}</div>
                      {hoveredSkill === skill && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                          className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-20"
                        >
                          Click to explore
                        </motion.div>
                      )}
                    </motion.span>
                  ))}
                </div>
                {hoveredCategory === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotateX: 90 }}
                    className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1 rounded-full shadow-lg z-10"
                  >
                    ⭐ Featured
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const projects = [
    {
      name: "HawkVance AI",
      summary: "Real-time screen-aware desktop assistant using Gemini API for dynamic Q&A",
      technologies: ["Python", "Gemini API", "Desktop Development"],
      github: "https://github.com/Kritantasasanroy/HawkVanceAI",
      details: "An intelligent desktop assistant that can analyze screen content in real-time and provide contextual responses using Google's Gemini API. Features include screen capture, AI-powered analysis, and interactive Q&A capabilities.",
      gradient: "from-blue-400 to-purple-400",
      bgGradient: "from-blue-500/10 to-purple-500/10"
    },
    {
      name: "Mutual Fund Investing Demo App",
      summary: "Flutter app for simulating mutual fund investments with real-time data",
      technologies: ["Flutter", "Dart", "Real-time APIs"],
      github: null,
      details: "A comprehensive mobile application that allows users to simulate mutual fund investments with live market data. Includes portfolio tracking, performance analytics, and investment recommendations.",
      gradient: "from-green-400 to-emerald-400",
      bgGradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      name: "Fashion Outfit Recommendation Tool",
      summary: "API for personalized outfit suggestions combining ML and rules",
      technologies: ["Python", "FastAPI", "scikit-learn", "Machine Learning"],
      github: null,
      details: "An intelligent recommendation system that combines machine learning algorithms with rule-based logic to provide personalized fashion outfit suggestions based on user preferences, weather, and occasion.",
      gradient: "from-pink-400 to-rose-400",
      bgGradient: "from-pink-500/10 to-rose-500/10"
    },
    {
      name: "Shopify AI SEO Tool",
      summary: "Generates SEO-optimized product titles/descriptions for better Google rankings",
      technologies: ["Python", "OpenAI API", "Shopify API", "SEO"],
      github: null,
      details: "An automated tool that leverages OpenAI's language models to generate SEO-optimized product titles and descriptions for Shopify stores, helping merchants improve their search engine rankings and visibility.",
      gradient: "from-orange-400 to-red-400",
      bgGradient: "from-orange-500/10 to-red-500/10"
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="perspective-1000"
    >
      <Card className="w-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-cyan-500/80 mb-8 shadow-2xl shadow-cyan-500/20 backdrop-blur-sm transform-gpu hover:shadow-cyan-500/30 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
        <CardHeader className="relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
                "linear-gradient(225deg, rgba(147, 51, 234, 0.1), rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))",
                "linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <CardTitle className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Projects
            </CardTitle>
          </motion.div>
        </CardHeader>
        <CardContent className="text-slate-100 relative">
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${project.bgGradient.replace('/10', '/30')} rounded-xl p-6 border-2 border-slate-500/80 shadow-lg transform-gpu preserve-3d relative overflow-hidden`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  y: -10,
                  rotateY: index % 2 === 0 ? 3 : -3,
                  z: 50,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient.replace('400', '500')} opacity-0`}
                  whileHover={{ opacity: 0.05 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"
                  whileHover={{ x: [-100, 100] }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <motion.h3
                      className={`text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`}
                      whileHover={{ scale: 1.05, rotateZ: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.name}
                    </motion.h3>
                    <motion.button
                      onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg border-2 border-blue-400/80 hover:from-blue-500 hover:to-blue-600 hover:border-blue-300 transition-all duration-300 text-sm shadow-md"
                      whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.span
                        animate={{ rotate: expandedProject === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="inline-block mr-2"
                      >
                        ▼
                      </motion.span>
                      {expandedProject === index ? 'Show Less' : 'Show More'}
                    </motion.button>
                  </div>

                  <p className="text-slate-100 mb-4 leading-relaxed">{project.summary}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="bg-gradient-to-r from-slate-600 to-slate-700 text-slate-100 px-3 py-1 rounded-full text-sm border-2 border-slate-400/80 hover:border-slate-300 transition-all duration-300 shadow-sm relative overflow-hidden"
                        initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
                        whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                        transition={{ duration: 0.4, delay: 0.05 * techIndex }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.15, z: 20, rotateZ: 3 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                          whileHover={{ x: [-50, 50] }}
                          transition={{ duration: 0.5 }}
                        />
                        <div className="relative z-10">{tech}</div>
                      </motion.span>
                    ))}
                  </div>

                  {project.github && (
                    <motion.a
                      href={project.github}
                      className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300"
                      whileHover={{ x: 5, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div>View on GitHub</div>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </motion.a>
                  )}

                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedProject === index ? "auto" : 0,
                      opacity: expandedProject === index ? 1 : 0,
                      rotateX: expandedProject === index ? 0 : -90
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    {expandedProject === index && (
                      <div className="border-t border-slate-500/80 pt-4 mt-4">
                        <p className="text-slate-100 leading-relaxed">{project.details}</p>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function ExperienceSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="perspective-1000"
    >
      <Card className="w-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-emerald-500/80 mb-8 hover:border-emerald-400 transition-all duration-500 shadow-lg shadow-emerald-500/20 transform-gpu hover:shadow-2xl hover:shadow-emerald-500/30 hover:scale-[1.02] hover:-translate-y-2">
        <CardHeader className="relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-emerald-500/10"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <CardTitle className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Experience
            </CardTitle>
          </motion.div>
        </CardHeader>
        <CardContent className="relative">
          <motion.div
            className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-6 border-2 border-slate-500/80 shadow-lg transform-gpu preserve-3d relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, rotateY: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
              y: -10,
              rotateY: 2,
              z: 30,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"
              whileHover={{ x: [-100, 100] }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <motion.h3
                    className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2"
                    whileHover={{ scale: 1.05, rotateZ: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    Backend and AI Tool Developer
                  </motion.h3>
                  <motion.p
                    className="text-blue-400 font-medium mb-1"
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    Nexus Point Luxe
                  </motion.p>
                  <motion.p
                    className="text-slate-400"
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    Texas, USA
                  </motion.p>
                </div>
                <div className="text-right">
                  <motion.div
                    className="bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 px-4 py-2 rounded-lg border-2 border-emerald-400/80 relative overflow-hidden"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 8px 20px rgba(16, 185, 129, 0.3)",
                      rotateZ: -1
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20"
                      whileHover={{ x: [-50, 50] }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="text-emerald-300 font-medium text-sm relative z-10">May 2025 – Present</div>
                  </motion.div>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  "Built modular backend systems powering AI-driven fashion tools",
                  "Designed APIs for recommendations and SEO automation",
                  "Simplified workflows, ensured scalability and maintainability",
                  "Collaborated with UX and frontend teams for user-focused solutions"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3 group"
                    initial={{ opacity: 0, x: -20, rotateX: -30 }}
                    whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.p
                      className="text-slate-100 leading-relaxed"
                      whileHover={{ color: "#f1f5f9" }}
                    >
                      {item}
                    </motion.p>
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 text-emerald-400 text-sm font-bold"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function AchievementsSection() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null)

  const achievements = [
    {
      title: "IIM Lucknow Shark It Up — 1st Prize",
      description: "National innovation competition",
      details: "Won first prize in a prestigious national innovation competition organized by IIM Lucknow, showcasing innovative business solutions and entrepreneurial thinking.",
      gradient: "from-yellow-400 to-orange-400",
      bgGradient: "from-yellow-500/10 to-orange-500/10"
    },
    {
      title: "Smart India Hackathon — Finalist",
      description: "National recognition for prototype development",
      details: "Reached the finals of Smart India Hackathon, one of India's largest hackathons, with a innovative prototype solution addressing real-world challenges.",
      gradient: "from-blue-400 to-indigo-400",
      bgGradient: "from-blue-500/10 to-indigo-500/10"
    },
    {
      title: "Book Chapter Author",
      description: "AI and Machine Learning in Fintech",
      details: "Authored a chapter on 'Artificial Intelligence and Machine Learning in Fintech: Transforming Financial Services through Intelligent Technologies'",
      link: "https://play.google.com/store/books/details?id=OE2CEQAAQBAJ",
      gradient: "from-purple-400 to-pink-400",
      bgGradient: "from-purple-500/10 to-pink-500/10"
    }
  ]

  const certifications = [
    {
      title: "Accenture UK: Developer & Tech Job Simulation",
      provider: "Forage",
      date: "Dec 2024",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      title: "Google Analytics Certification",
      provider: "Google",
      date: "Sep 2024 – Sep 2025",
      gradient: "from-green-400 to-emerald-400"
    },
    {
      title: "Introduction to Packet Tracer",
      provider: "Cisco",
      date: "Jun 2024",
      gradient: "from-orange-400 to-red-400"
    },
    {
      title: "Networking Essentials",
      provider: "Cisco",
      date: "Jun 2024",
      gradient: "from-red-400 to-pink-400"
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="perspective-1000"
    >
      <Card className="w-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-yellow-500/80 mb-8 hover:border-yellow-400 transition-all duration-500 shadow-lg shadow-yellow-500/20 transform-gpu hover:shadow-2xl hover:shadow-yellow-500/30 hover:scale-[1.02] hover:-translate-y-2">
        <CardHeader className="relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-yellow-500/10"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <CardTitle className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Achievements & Certifications
            </CardTitle>
          </motion.div>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <motion.h3
                className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Achievements
              </motion.h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className={`bg-gradient-to-br ${achievement.bgGradient.replace('/10', '/30')} rounded-xl p-6 border-2 border-slate-500/80 hover:border-slate-400 transition-all duration-500 shadow-md`}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <motion.h4
                        className={`text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r ${achievement.gradient}`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {achievement.title}
                      </motion.h4>
                      <motion.button
                        onClick={() => setExpandedItem(expandedItem === index ? null : index)}
                        className="px-4 py-2 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-lg border-2 border-yellow-400/80 hover:from-yellow-500 hover:to-orange-500 hover:border-yellow-300 transition-all duration-300 text-sm shadow-md"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {expandedItem === index ? 'Show Less' : 'Show More'}
                      </motion.button>
                    </div>
                    <p className="text-slate-100 mb-3 leading-relaxed">{achievement.description}</p>
                    {achievement.link && (
                      <motion.a
                        href={achievement.link}
                        className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <div>View Publication</div>
                        <div>→</div>
                      </motion.a>
                    )}
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedItem === index ? "auto" : 0,
                        opacity: expandedItem === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      {expandedItem === index && (
                        <div className="mt-4 pt-4 border-t border-slate-500/80">
                          <p className="text-slate-100 leading-relaxed">{achievement.details}</p>
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <motion.h3
                className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Certifications
              </motion.h3>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-6 border-2 border-slate-500/80 hover:border-slate-400 transition-all duration-500 shadow-md"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <motion.h4
                      className={`text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r ${cert.gradient} mb-2`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {cert.title}
                    </motion.h4>
                    <p className="text-blue-400 mb-2 font-medium">{cert.provider}</p>
                    <p className="text-slate-400 text-sm">{cert.date}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function ContactSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="perspective-1000"
    >
      <Card className="w-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-indigo-500/80 hover:border-indigo-400 transition-all duration-500 shadow-lg shadow-indigo-500/20 transform-gpu hover:shadow-2xl hover:shadow-indigo-500/30 hover:scale-[1.02] hover:-translate-y-2">
        <CardHeader className="relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <CardTitle className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Contact
            </CardTitle>
          </motion.div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-3">
                  Get in Touch
                </h3>
                <p className="text-slate-100 leading-relaxed">
                  I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
                </p>
              </div>
              <div className="space-y-4">
                <motion.div
                  className="flex items-center space-x-4 p-3 bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg border-2 border-green-500/80 hover:border-green-400 transition-all duration-300 shadow-md"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                  <a href="mailto:kritantasasan@gmail.com" className="text-blue-300 hover:text-blue-200 transition-colors duration-300 font-medium">
                    kritantasasan@gmail.com
                  </a>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-4 p-3 bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg border-2 border-blue-500/80"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
                  <div className="text-slate-100 font-medium">India</div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
                Connect Online
              </h3>
              <div className="space-y-4">
                <motion.a
                  href="https://linkedin.com/in/kritantasasanroy"
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-600/30 to-blue-700/30 rounded-lg border-2 border-blue-500/80 hover:border-blue-400 transition-all duration-300 group shadow-md"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <div className="w-5 h-5 bg-white rounded-sm"></div>
                  </div>
                  <div>
                    <div className="text-blue-300 group-hover:text-blue-200 font-medium transition-colors duration-300">
                      LinkedIn Profile
                    </div>
                    <p className="text-slate-300 text-sm">Professional network</p>
                  </div>
                </motion.a>
                <motion.a
                  href="https://github.com/Kritantasasanroy"
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-slate-600/30 to-slate-700/30 rounded-lg border-2 border-slate-500/80 hover:border-slate-400 transition-all duration-300 group shadow-md"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg flex items-center justify-center">
                    <div className="w-5 h-5 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-slate-200 group-hover:text-slate-100 font-medium transition-colors duration-300">
                      GitHub Profile
                    </div>
                    <p className="text-slate-300 text-sm">Code repositories</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}