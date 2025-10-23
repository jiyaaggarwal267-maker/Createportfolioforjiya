import { motion } from 'motion/react';
import { Code, Palette, Zap, Layers, Terminal } from 'lucide-react';
import { Progress } from './ui/progress';

const skills = [
  { name: 'HTML', level: 100, icon: Code, color: 'from-orange-500 to-red-500' },
  { name: 'CSS', level: 100, icon: Palette, color: 'from-blue-500 to-cyan-500' },
  { name: 'JavaScript', level: 65, icon: Zap, color: 'from-yellow-500 to-amber-500' },
  { name: 'React', level: 35, icon: Layers, color: 'from-cyan-500 to-blue-500' },
  { name: 'Python', level: 65, icon: Terminal, color: 'from-green-500 to-emerald-500' },
];

const levelLabels: { [key: number]: string } = {
  100: 'Expert',
  65: 'Intermediate',
  35: 'Beginner',
};

export function TechStack() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My expertise across various technologies and frameworks
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                {/* Animated outer glow */}
                <motion.div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-xl opacity-0 group-hover:opacity-50 blur-lg transition-all duration-500`}
                  animate={{
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
                  {/* Icon and title */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`p-3 rounded-lg bg-gradient-to-br ${skill.color} shadow-lg relative`}
                      >
                        <Icon className="w-6 h-6 text-white relative z-10" />
                        {/* Icon glow */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-lg blur-md opacity-50`} />
                      </motion.div>
                      <div>
                        <h3 className="text-white text-xl">{skill.name}</h3>
                        <p className="text-sm text-gray-400">{levelLabels[skill.level]}</p>
                      </div>
                    </div>
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                      className="text-purple-400"
                    >
                      {skill.level}%
                    </motion.span>
                  </div>

                  {/* Progress bar */}
                  <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    >
                      {/* Progress bar glow */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} blur-sm`} />
                    </motion.div>
                  </div>

                  {/* Inner glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                  
                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
