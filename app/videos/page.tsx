"use client"

import { motion } from "framer-motion"
import { Play, Eye, Calendar, ExternalLink, Youtube } from "lucide-react"
import { useState } from "react"

// YouTube video data - replace with your actual video IDs and information
const videos = [
  {
    id: "lE4A109EdFo",
    title: "Gun Attachment System UI Update",
    description: "expect better stuff in the future",
    thumbnail: "https://img.youtube.com/vi/lE4A109EdFo/maxresdefault.jpg",
    duration: "2:33",
    views: "134",
    publishedAt: "May 4, 2025",
    category: "Unknown",
    featured: true
  },
  {
    id: "laEI0PYveZ8",
    title: "Extremely Modular Gun Customization System in Unreal Engine",
    description: "This is the first version of the system so call it v0.0.1",
    thumbnail: "https://img.youtube.com/vi/laEI0PYveZ8/maxresdefault.jpg",
    duration: "6:23",
    views: "257",
    publishedAt: "Apr 1, 2025",
    category: "Unknown"
  },
  {
    id: "HLrVkP2wt9c",
    title: "Unreal Engine Reinforcement Learning AI",
    description: "Used Reinforcement learning to teach AI how to drive a car around a track.",
    thumbnail: "https://img.youtube.com/vi/HLrVkP2wt9c/maxresdefault.jpg",
    duration: "7:14",
    views: "150",
    publishedAt: "Jun 2, 2024",
    category: "Unknown",
    featured: true
  },
  {
    id: "-ypd8nYjtZ8",
    title: "Parkour System in UE5 using motion warping",
    description: "nothing fancy just motion warping",
    thumbnail: "https://img.youtube.com/vi/-ypd8nYjtZ8/maxresdefault.jpg",
    duration: "0:25",
    views: "11.9K",
    publishedAt: "N/A",
    category: "Game Development"
  },
  {
    id: "nLM2qWPNqn8",
    title: "Flying from Montreal to New York In Unreal Engine 5",
    description: "I am using the open-source Jsbsim flight dynamic model for the aircraft's physics and aerodynamics https://github.com/JSBSim-Team/jsbsim",
    thumbnail: "https://img.youtube.com/vi/nLM2qWPNqn8/maxresdefault.jpg",
    duration: "11:46",
    views: "1.3K",
    publishedAt: "N/A",
    category: "Unknown",
    featured: true
  },
  {
    id: "eSjTgJvztxg",
    title: "UE 5.1 Motion Matching Test #2",
    description: "made with the help of pose search and motion trajectories plugin.",
    thumbnail: "https://img.youtube.com/vi/eSjTgJvztxg/maxresdefault.jpg",
    duration: "2:08",
    views: "3.1K",
    publishedAt: "N/A",
    category: "Unknown"
  },
  {
    id: "KWXGDoILTf8",
    title: "UE5.1 Motion Matching",
    description: "made with the help of pose search and motion trajectories plugin.",
    thumbnail: "https://img.youtube.com/vi/KWXGDoILTf8/maxresdefault.jpg",
    duration: "2:45",
    views: "3.7K",
    publishedAt: "N/A",
    category: "Game Development"
  },
  {
    id: "5O28Z527vcQ",
    title: "Procedural Walking Tutorial UE5",
    description: "This Video explains the logic and the method to achieve procedural walking, I have done only the front leg and not the back to demonstrate the methods. I explained what you need to do to rotate...",  
    thumbnail: "https://img.youtube.com/vi/5O28Z527vcQ/maxresdefault.jpg",
    duration: "48:04",
    views: "3.6K",
    publishedAt: "N/A",
    category: "Game Development"
  },
  {
    id: "klFlgJ_Vs8c",
    title: "Ue5 procedural walking",
    description: "This is a test of procedural walking, I will make a tutorial on how to do it in the future.",
    thumbnail: "https://img.youtube.com/vi/klFlgJ_Vs8c/maxresdefault.jpg",
    duration: "2:07",
    views: "2.2K",
    publishedAt: "N/A",
    category: "Game Development"
  },
  {
    id: "z0u9c3iysYI",
    title: "Deadzone Aim with procedural ADS Test in UE5",
    description: "really un-optimized when i go to ads as this is all done in blueprint and not cpp.",
    thumbnail: "https://img.youtube.com/vi/z0u9c3iysYI/maxresdefault.jpg",
    duration: "1:03",
    views: "2.0K",
    publishedAt: "N/A",
    category: "Game Development"
  },
  {
    id: "3xYobBSVuTQ",
    title: "Jet Flight Test in UE5 with warthunder style mouse flight",
    description: "mouse controls inspired by Warthunder",
    thumbnail: "https://img.youtube.com/vi/3xYobBSVuTQ/maxresdefault.jpg",
    duration: "1:29",
    views: "4.8K",
    publishedAt: "N/A",
    category: "Game Development"
  },
  {
    id: "FykyVE7VAQs",
    title: "Alsv4 Sword Locomotion Test",
    description: "Had this idea in my mind for a while and really wanted to see it work, so here it is, animations are from the marketplace. I won't work on it full time and I will return working on my tactical...",   
    thumbnail: "https://img.youtube.com/vi/FykyVE7VAQs/maxresdefault.jpg",
    duration: "1:59",
    views: "1.2K",
    publishedAt: "N/A",
    category: "Unknown"
  },
  {
    id: "UzcZzP88yRI",
    title: "Unnamed Shooter Update 1.0.2",
    description: "Updated the game with a new map, new weapons, and a new UI, also added a new features.",
    thumbnail: "https://img.youtube.com/vi/UzcZzP88yRI/maxresdefault.jpg",
    duration: "3:07",
    views: "2.5K",
    publishedAt: "May 4, 2025",
    category: "Unknown",
    featured: true
  },
  {
    id: "eZ5KYQ0HYts",
    title: "Backrooms Found Footage",
    description: "Found Footage, recorded by Mark White 07/11/2006 made in blender",
    thumbnail: "https://img.youtube.com/vi/eZ5KYQ0HYts/maxresdefault.jpg",
    duration: "0:23",
    views: "279",
    publishedAt: "N/A",
    category: "Unknown"
  },
  {
    id: "ynYAZ-JK_uo",
    title: "Procedural Weapon Sway",
    description: "Will optimize it more in the future, its not replicated because it would take a lot of bandwidth",
    thumbnail: "https://img.youtube.com/vi/ynYAZ-JK_uo/maxresdefault.jpg",
    duration: "1:05",
    views: "7.4K",
    publishedAt: "N/A",
    category: "Unknown"
  },
  {
    id: "SqqIn9sE8t4",
    title: "Network replication test Server to Client | UE5",
    description: "for some reason replicating the aim offset doesn't work from server to client, i am not sure why.",
    thumbnail: "https://img.youtube.com/vi/SqqIn9sE8t4/maxresdefault.jpg",
    duration: "1:09",
    views: "6.5K",
    publishedAt: "N/A",
    category: "Game Development"
  },
  {
    id: "0jZRSYCXpqo",
    title: "Procedural Leaning",
    description: "N/A",
    thumbnail: "https://img.youtube.com/vi/0jZRSYCXpqo/maxresdefault.jpg",
    duration: "2:38",
    views: "1.2K",
    publishedAt: "N/A",
    category: "Unknown"
  },
  {
    id: "UkV8U7uTnWk",
    title: "Procedural Recoil Tutorial (Blueprint) | UE4",
    description: "going to make a tut in cpp in the future",
    thumbnail: "https://img.youtube.com/vi/UkV8U7uTnWk/maxresdefault.jpg",
    duration: "16:03",
    views: "4.0K",
    publishedAt: "N/A",
    category: "Unknown"
  },
  {
    id: "Ymu_jeBIdjc",
    title: "Procedural Sight Cycling | UE4",
    description: "Cycling sights in ue4 procedurally super simple",
    thumbnail: "https://img.youtube.com/vi/Ymu_jeBIdjc/maxresdefault.jpg",
    duration: "0:45",
    views: "2.8K",
    publishedAt: "N/A",
    category: "Unknown"
  },
  {
    id: "x2w00WlVZOY",
    title: "Procedural and Animated recoil combined.",
    description: "N/A",
    thumbnail: "https://img.youtube.com/vi/x2w00WlVZOY/maxresdefault.jpg",
    duration: "0:58",
    views: "4.0K",
    publishedAt: "N/A",
    category: "Unknown"
  }
]

const categories = ["All", "Game Development", "AI & Machine Learning", "Data Science"]

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
            My <span className="gradient-text">Videos</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Tutorials, breakdowns, and behind-the-scenes content covering game development, AI, and software
            engineering.
          </p>

          {/* YouTube Channel Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <a
              href="https://www.youtube.com/@yaman./videos"
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
