"use client"

import { motion } from "framer-motion"
import { Code, Database, Gamepad2, Brain, Wrench, Award } from "lucide-react"

const skillCategories = [
  {
    title: "Game Development",
    icon: Gamepad2,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Unreal Engine 5", level: 95 },
      { name: "C++", level: 75 },
      { name: "Blueprint Visual Scripting", level: 95 },
      { name: "Game Physics & Animation", level: 90 },
      { name: "3D Modeling (Blender)", level: 75 },
      { name: "Procedural Animation", level: 80 },
    ],
  },
  {
    title: "Programming Languages",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "C++", level: 75 },
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "C", level: 80 },
      { name: "JavaScript", level: 70 },
      { name: "TypeScript", level: 60 },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "TensorFlow", level: 80 },
      { name: "PyTorch", level: 85 },
      { name: "Computer Vision (YOLO)", level: 90 },
      { name: "Natural Language Processing", level: 75 },
      { name: "Deep Learning (LSTM, CNN)", level: 90 },
      { name: "Data Analysis & Visualization", level: 85 },
    ],
  },
  {
    title: "Web Development",
    icon: Database,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "React", level: 75 },
      { name: "Node.js", level: 80 },
      { name: "Next.js", level: 80 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Jupyter Notebook", level: 95 },
      { name: "Power BI", level: 85 },
      { name: "Matplotlib/Seaborn", level: 85 },
      { name: "OpenCV", level: 85 },
      { name: "Docker", level: 70 },
    ],
  },
]

const achievements = [
  {
    title: "JSYP 2024 GameJam Winner",
    description: 'Led team to 1st place with "Hakaya Emma" among 50+ participants',
    icon: Award,
    year: "2024",
  },
  {
    title: "YouTube Community",
    description: "Built a community of 413 followers sharing game development tutorials",
    icon: Gamepad2,
    year: "2021-Present",
  },
  {
    title: "Published Game Developer",
    description: 'Successfully released "The Wendigo Lurks" on Itch.io',
    icon: Gamepad2,
    year: "2021",
  },
]

export default function Skills() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise across game development, artificial intelligence, and
            software engineering.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-semibold">{category.title}</h2>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Achievements & Recognition</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{achievement.description}</p>
                <span className="text-xs text-blue-400 font-medium">{achievement.year}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">Continuous Learning</h2>
          <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto">
            I'm constantly expanding my skill set and staying up-to-date with the latest technologies in AI, game
            development, and software engineering. My passion for learning drives me to explore new frameworks,
            experiment with cutting-edge tools, and contribute to open-source projects.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
