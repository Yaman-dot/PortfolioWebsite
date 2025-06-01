"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "The Wendigo Lurks",
    category: "Game Development",
    description:
      "A horror adventure game created and released on Itch.io using Unreal Engine 5 and C++. Features atmospheric gameplay and immersive storytelling.",
    technologies: ["Unreal Engine 5", "C++", "Blueprint"],
    image: "/placeholder.svg?height=300&width=500",
    links: {
      demo: "#",
      github: "#",
    },
    featured: true,
  },
  {
    id: 2,
    title: "Hakaya Emma",
    category: "Game Development",
    description:
      "Award-winning narrative-driven puzzle adventure game showcasing Jordanian landmarks. Won 1st Place at JSYP 2024 GameJam.",
    technologies: ["Unreal Engine 5", "C++", "Facial Motion Capture"],
    image: "/placeholder.svg?height=300&width=500",
    links: {
      demo: "#",
    },
    featured: true,
  },
  {
    id: 3,
    title: "GCNN Object Detection",
    category: "AI & Machine Learning",
    description:
      "Trained YOLOv11 model for firearm and human detection with real-time webcam implementation for security applications.",
    technologies: ["Python", "YOLOv11", "OpenCV", "PyTorch"],
    image: "/placeholder.svg?height=300&width=500",
    links: {
      github: "#",
    },
    featured: true,
  },
  {
    id: 4,
    title: "AI Speech-To-Speech (Arabic)",
    category: "AI & Machine Learning",
    description:
      "Trained Kyutai Moshi STS model on Arabic language from scratch, enabling natural speech-to-speech conversations.",
    technologies: ["Python", "Moshi", "TensorFlow", "NLP"],
    image: "/placeholder.svg?height=300&width=500",
    links: {
      github: "#",
    },
    featured: false,
  },
  {
    id: 5,
    title: "Realistic Physics Flight Simulator",
    category: "Game Development",
    description:
      "Recreated War Thunder's flight mechanics with JSBSim physics plugin. Features 1:1 Earth replica with Montreal to NYC flight demo.",
    technologies: ["Unreal Engine 5", "C++", "JSBSim", "Physics Simulation"],
    image: "/placeholder.svg?height=300&width=500",
    links: {
      demo: "#",
    },
    featured: false,
  },
  {
    id: 6,
    title: "Tactical Shooter System",
    category: "Game Development",
    description:
      "Recreated Escape from Tarkov's modular gun customization using recursion and optimized algorithms with multiplayer support.",
    technologies: ["Unreal Engine 5", "C++", "Networking", "Procedural Animation"],
    image: "/placeholder.svg?height=300&width=500",
    links: {
      demo: "#",
    },
    featured: false,
  },
  {
    id: 7,
    title: "Biomass Production Analysis",
    category: "Data Science",
    description:
      "Comprehensive data analysis on biomass production with LSTM networks, decision trees, and genetic algorithm optimization.",
    technologies: ["Python", "Jupyter", "LSTM", "Genetic Algorithms"],
    image: "/placeholder.svg?height=300&width=500",
    links: {
      github: "#",
    },
    featured: false,
  },
  {
    id: 8,
    title: "Dental Appointment Website",
    category: "Web Development",
    description: "Full-stack dental website with scheduling system built using MERN stack and SQL database.",
    technologies: ["React", "Node.js", "MongoDB", "SQL"],
    image: "/placeholder.svg?height=300&width=500",
    links: {
      demo: "#",
      github: "#",
    },
    featured: false,
  },
]

const categories = ["All", "Game Development", "AI & Machine Learning", "Data Science", "Web Development"]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

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
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my work spanning game development, artificial intelligence, data science, and web development.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category ? "bg-blue-600 text-white" : "glass hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        {selectedCategory === "All" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="glass rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-4">
                        {project.links.demo && (
                          <a
                            href={project.links.demo}
                            className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                          >
                            <ExternalLink className="w-6 h-6" />
                          </a>
                        )}
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                          >
                            <Github className="w-6 h-6" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-blue-400 font-medium">{project.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {selectedCategory === "All" && <h2 className="text-3xl font-bold mb-8">All Projects</h2>}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="glass rounded-xl overflow-hidden group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-blue-400 font-medium">{project.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-white/10 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs text-gray-400">+{project.technologies.length - 3} more</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
