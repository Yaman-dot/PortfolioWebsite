"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, GraduationCap, Award } from "lucide-react"

const timelineEvents = [
  {
    year: "2020-2023",
    title: "High School Diploma",
    subtitle: "Al Alson International School",
    description: "Graduated with a GPA of 4.0, developing foundational skills in mathematics and computer science.",
    icon: GraduationCap,
    type: "education",
  },
  {
    year: "2019-2021",
    title: "Game Developer",
    subtitle: "SanForge Studio (Remote, Netherlands)",
    description:
      "Worked as the key programmer for several projects using UE4 and C++. Delivered high-fidelity interactions and system pipelines in a collaborative indie environment.",
    icon: Calendar,
    type: "work",
  },
  {
    year: "2021-Present",
    title: "Freelance Developer",
    subtitle: "Independent",
    description:
      'Created and released "The Wendigo Lurks" on Itch.io using UE5 and C++. Took on various freelancing projects from clients, building a community of 413 followers.',
    icon: Calendar,
    type: "work",
  },
  {
    year: "2023-Present",
    title: "AI & Data Science Developer",
    subtitle: "Independent Research & Development",
    description:
      "Built multiple data science projects using Python, Jupyter, and various ML libraries. Specialized in computer vision, NLP, and deep learning applications.",
    icon: Calendar,
    type: "work",
  },
  {
    year: "2023-2027",
    title: "Bachelor's Degree",
    subtitle: "Al Hussein Technical University",
    description:
      "Currently pursuing B.Sc. in Artificial Intelligence & Data Analysis, focusing on machine learning, deep learning, and data science applications.",
    icon: GraduationCap,
    type: "education",
  },
  {
    year: "2024",
    title: "JSYP GameJam Winner",
    subtitle: "Best Game Award",
    description:
      'Led the BitterSweet Team to win 1st Place at Jordan\'s national JSYP 2024 GameJam with "Hakaya Emma", a narrative-driven puzzle adventure game showcasing Jordanian landmarks.',
    icon: Award,
    type: "achievement",
  },
]

export default function About() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm an accomplished AI & Data Science student and professional game developer, passionate about creating
            innovative solutions that bridge the gap between artificial intelligence and interactive entertainment.
          </p>
        </motion.div>

        {/* Personal Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-2xl p-8 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Amman, Jordan</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <span>AI & Data Science Student (2023-2027)</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Current Focus</h2>
              <p className="text-gray-300 leading-relaxed">
                Currently pursuing my Bachelor's degree in Artificial Intelligence & Data Analysis at Al Hussein
                Technical University while working on cutting-edge projects in machine learning, computer vision, and
                game development with Unreal Engine 5.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">My Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-blue-500 rounded-full transform md:-translate-x-1/2 z-10" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <div className="glass rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <event.icon
                          className={`w-6 h-6 ${
                            event.type === "education"
                              ? "text-green-400"
                              : event.type === "work"
                                ? "text-blue-400"
                                : "text-yellow-400"
                          }`}
                        />
                        <span className="text-sm font-medium text-gray-400">{event.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <h4 className="text-blue-400 font-medium mb-3">{event.subtitle}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">What Drives Me</h2>
          <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto">
            I'm passionate about pushing the boundaries of what's possible with technology. Whether it's training neural
            networks to understand human speech in Arabic, creating immersive gaming experiences with realistic physics,
            or developing AI-powered solutions for real-world problems, I thrive on challenges that require both
            technical expertise and creative thinking.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
