"use client"

import { motion } from "framer-motion"
import { Play, Eye, Calendar, ExternalLink, Youtube } from "lucide-react"
import { useState } from "react"

// YouTube video data - replace with your actual video IDs and information
const videos = [
  {
    id: "Oa4MW66Kt1E", // Replace with actual video ID
    title: "Unreal Engine 4 | How to Program Leaning and Shooting",
    description:
      "Deep dive into creating procedural leaning and shooting in UE4.",
    thumbnail: "https://img.youtube.com/vi/Oa4MW66Kt1E/maxresdefault.jpg",
    duration: "16:04",
    views: "100",
    publishedAt: "2020-01-01",
    category: "Unreal Engine",
    featured: true,
  },
  {
    id: "wGdcOQnNnmY", // Replace with actual video ID
    title: "How to Create a Realistic Sniper Scope in Unreal Engine 4",
    description:
      "Complete tutorial on how to implement a Picture-in-Picture Scope in Unreal Engine 4.",
    thumbnail: "https://img.youtube.com/vi/wGdcOQnNnmY/maxresdefault.jpg",
    duration: "24:14",
    views: "52",
    publishedAt: "2020-10-20",
    category: "Unreal Engine",
    featured: true,
  },
  {
    id: "fEfxIOpAiUI", // Replace with actual video ID
    title: "How to Create Double Jumping In Unreal Engine 4",
    description:
      "A tutorial one how to implement a basic Double Jumping mechanic in Unreal Engine 4.",
    thumbnail: "https://img.youtube.com/vi/fEfxIOpAiUI/maxresdefault.jpg",
    duration: "18:45",
    views: "15.7K",
    publishedAt: "2024-01-28",
    category: "Unreal Engine",
    featured: false,
  },
  {
    id: "44wYPLva3mM", // Replace with actual video ID
    title: "How to Create a JetPack Mechanic in Unreal Engine 4",
    description: "a comprehensive guide on implementing a JetPack mechanic and thrust particle effect, in Unreal Engine 4.",
    thumbnail: "https://img.youtube.com/vi/44wYPLva3mM/maxresdefault.jpg",
    duration: "12:24",
    views: "6.9K",
    publishedAt: "2023-12-10",
    category: "Unreal Engine",
    featured: false,
  },
  {
    id: "i-4TZbgEXmk", // Replace with actual video ID
    title: "How to create a Line Plot from a CSV file in Python using Matplotlib",
    description: "A step-by-step guide on how to create a line plot from a CSV file in Python using Matplotlib.",
    thumbnail: "https://img.youtube.com/vi/i-4TZbgEXmk/maxresdefault.jpg",
    duration: "25:12",
    views: "4.2K",
    publishedAt: "2024-02-20",
    category: "Python",
    featured: false,
  },
  {
    id: "31bzZtuSlV8", // Replace with actual video ID
    title: "How to Create a Line Plot chart in Python using Matplotlib",
    description: "A comprehensive guide on how to create a line plot chart in Python using Matplotlib.",
    thumbnail: "https://img.youtube.com/vi/31bzZtuSlV8/maxresdefault.jpg",
    duration: "19:33",
    views: "9.1K",
    publishedAt: "2024-01-05",
    category: "Python",
    featured: false,
  },
  {
    id: "LkO2WaX4SOc", // Replace with actual video ID
    title: "How to Program Advanced Third Person Shooter In Unreal Engine 4 (Part 1)",
    description:
      "An indepth and comprehensive guide on how to program advanced third person shooter mechanics in Unreal Engine 4.",
    thumbnail: "https://img.youtube.com/vi/LkO2WaX4SOc/maxresdefault.jpg",
    duration: "28:15",
    views: "3.8K",
    publishedAt: "2023-11-22",
    category: "Unreal Engine",
    featured: false,
  },
  {
    id: "v9cBHocjgCA", // Replace with actual video ID
    title: "UE4 Tool that Will Help You",
    description:
      "A tool that helped me alot.",
    thumbnail: "https://img.youtube.com/vi/v9cBHocjgCA/maxresdefault.jpg",
    duration: "16:42",
    views: "11.3K",
    publishedAt: "2024-03-01",
    category: "Unreal Engine",
    featured: false,
  },
   {
    id: "DneDoJgrtHs", // Replace with actual video ID
    title: "How To Create a Third Person Shooter in Unreal Engine 4",
    description:
      "A comprehensive guide on how to create a third person shooter in Unreal Engine 4.",
    thumbnail: "https://img.youtube.com/vi/DneDoJgrtHs/maxresdefault.jpg",
    duration: "16:42",
    views: "11.3K",
    publishedAt: "2024-03-01",
    category: "Unreal Engine",
    featured: false,
  },
   {
    id: "g96pJl-pAP0", // Replace with actual video ID
    title: "How To Code an XO Game in Xcode using Swift",
    description:
      "A comprehensive guide on how to code an XO game in Xcode using Swift.",
    thumbnail: "https://img.youtube.com/vi/g96pJl-pAP0/maxresdefault.jpg",
    duration: "16:42",
    views: "11.3K",
    publishedAt: "2024-03-01",
    category: "XCode",
    featured: false,
  },
   {
    id: "P0gdm1aeYHI", // Replace with actual video ID
    title: "How to make your events replicated in Unreal Engine 4",
    description:
      "a video to demonstrate how to make your events replicated in Unreal Engine 4.",
    thumbnail: "https://img.youtube.com/vi/P0gdm1aeYHI/maxresdefault.jpg",
    duration: "16:42",
    views: "11.3K",
    publishedAt: "2024-03-01",
    category: "Unreal Engine",
    featured: false,
  },
   {
    id: "7appq8SiZr8", // Replace with actual video ID
    title: "How to create a Card Game in Xcode using Swift Part 1",
    description:
      "First part of a comprehensive guide on how to create a card game in Xcode using Swift.",
    thumbnail: "https://img.youtube.com/vi/7appq8SiZr8/maxresdefault.jpg",
    duration: "16:42",
    views: "11.3K",
    publishedAt: "2024-03-01",
    category: "XCode",
    featured: false,
  },
  
  {
    id: "A5dlDFqOOHM", // Replace with actual video ID
    title: "How to create a Card Game in Xcode using Swift Part 2",
    description:
      "Second part of a comprehensive guide on how to create a card game in Xcode using Swift.",
    thumbnail: "https://img.youtube.com/vi/A5dlDFqOOHM/maxresdefault.jpg",
    duration: "16:42",
    views: "11.3K",
    publishedAt: "2024-03-01",
    category: "XCode",
    featured: false,
  },
  {
    id: "IbKkmcLxw1M", // Replace with actual video ID
    title: "How To Create Parachute Jumping in Unity",
    description:
      "A tutorial that demonstrates how to create parachute jumping in Unity.",
    thumbnail: "https://img.youtube.com/vi/IbKkmcLxw1Ma/maxresdefault.jpg",
    duration: "16:42",
    views: "11.3K",
    publishedAt: "2024-03-01",
    category: "Unity",
    featured: false,
  },
  {
    id: "0GTHnTyMbKM", // Replace with actual video ID
    title: "How to Create an AI Controller in Uneal Engine 4",
    description:
      "A comprehensive guide on how to create an AI controller in Unreal Engine 4.",
    thumbnail: "https://img.youtube.com/vi/0GTHnTyMbKM/maxresdefault.jpg",
    duration: "16:42",
    views: "1.4K",
    publishedAt: "2024-03-01",
    category: "Unreal Engine",
    featured: true,
  },
]

const categories = ["All", "Unreal Engine", "Unity", "XCode" ,"Python", ]

interface VideoPlayerProps {
  videoId: string
  title: string
  onClose: () => void
}

function VideoPlayer({ videoId, title, onClose }: VideoPlayerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </motion.div>
    </motion.div>
  )
}

export default function Videos() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null)

  const filteredVideos =
    selectedCategory === "All" ? videos : videos.filter((video) => video.category === selectedCategory)

  const featuredVideos = videos.filter((video) => video.featured)
  const otherVideos = videos.filter((video) => !video.featured)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

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
            The <span className="gradient-text">Younger Yuman</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Tutorials, breakdowns, and behind-the-scenes content covering exclusively game development
          </p>

          {/* YouTube Channel Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <a
              href="https://www.youtube.com/@yaman4189/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300 group"
            >
              <Youtube className="w-6 h-6 text-red-500" />
              <span>Subscribe to my YouTube Channel</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category ? "bg-red-600 text-white" : "glass hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Videos */}
        {selectedCategory === "All" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8">Featured Videos</h2>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {featuredVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredVideo(video.id)}
                  onMouseLeave={() => setHoveredVideo(null)}
                  className="glass rounded-xl overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedVideo(video.id)}
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                      </motion.div>
                    </div>

                    {/* Duration */}
                    <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 bg-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                      {video.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">{video.description}</p>

                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{video.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(video.publishedAt)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Videos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {selectedCategory === "All" && <h2 className="text-3xl font-bold mb-8">All Videos</h2>}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredVideo(video.id)}
                onMouseLeave={() => setHoveredVideo(null)}
                className="glass rounded-lg overflow-hidden group cursor-pointer"
                onClick={() => setSelectedVideo(video.id)}
              >
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <Play className="w-4 h-4 text-white ml-0.5" fill="currentColor" />
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-semibold mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                    {video.title}
                  </h3>

                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{video.views}</span>
                    </div>
                    <span>{formatDate(video.publishedAt)}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Channel Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="glass rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-6">Channel Statistics</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-red-500 mb-2">413</div>
                <div className="text-gray-300">Subscribers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-500 mb-2">{videos.length}+</div>
                <div className="text-gray-300">Videos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-500 mb-2">50K+</div>
                <div className="text-gray-300">Total Views</div>
              </div>
            </div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              Join my growing community of developers and creators. I share tutorials, project breakdowns, and insights
              from my journey in game development and AI.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Video Player Modal */}
      {selectedVideo && (
        <VideoPlayer
          videoId={selectedVideo}
          title={videos.find((v) => v.id === selectedVideo)?.title || ""}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  )
}
