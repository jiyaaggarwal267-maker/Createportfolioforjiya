import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'Todo App',
    description: 'A feature-rich task management application with drag-and-drop functionality, categories, and priority levels. Built with React and local storage for data persistence.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['React', 'JavaScript', 'CSS'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Weather App',
    description: 'Real-time weather application displaying current conditions, 7-day forecasts, and interactive maps. Integrated with weather APIs for accurate data.',
    image: 'https://images.unsplash.com/photo-1630260667842-830a17d12ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwZm9yZWNhc3R8ZW58MXx8fHwxNzYxMTE1MDc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['JavaScript', 'API', 'HTML', 'CSS'],
    gradient: 'from-orange-500 to-pink-500',
  },
  {
    title: 'E-Commerce Web',
    description: 'Full-featured online shopping platform with product catalog, shopping cart, user authentication, and checkout process. Responsive design for all devices.',
    image: 'https://images.unsplash.com/photo-1727407209320-1fa6ae60ee05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NjEwOTgzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'JavaScript', 'CSS', 'HTML'],
    gradient: 'from-purple-500 to-pink-500',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Animated pulsing glow */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500`}
                animate={{
                  opacity: [0, 0.4, 0],
                  scale: [0.98, 1.02, 0.98],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300">
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  {/* Glowing overlay effect */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent group-hover:via-purple-500/10 transition-all duration-500`} />
                  
                  {/* Shine animation on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%', y: '-100%' }}
                    whileHover={{ x: '100%', y: '100%' }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="h-full w-full bg-gradient-to-br from-transparent via-white/20 to-transparent" />
                  </motion.div>
                </div>

                {/* Project details */}
                <div className="p-6 relative">
                  <motion.h3
                    className="text-white text-xl mb-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-400 mb-4 text-sm line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-slate-700/50 text-purple-400 rounded-full text-xs border border-purple-500/30 hover:border-purple-500/60 transition-colors cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all text-white text-sm relative overflow-hidden group/btn`}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </span>
                      {/* Button glow */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover/btn:opacity-100 blur-md transition-opacity`} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 py-2 border border-purple-500 rounded-lg hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/30 transition-all text-white"
                    >
                      <Github className="w-4 h-4" />
                    </motion.button>
                  </div>

                  {/* Inner card glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
