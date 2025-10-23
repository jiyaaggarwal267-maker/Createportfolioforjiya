import { motion } from 'motion/react';
import { Monitor, Smartphone, ShoppingCart, Palette, Code2, Zap } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Website Development',
    description: 'Custom responsive websites built with modern technologies, optimized for performance and user experience.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Mobile-first designs that look perfect on all devices, from smartphones to desktop screens.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Full-featured online stores with shopping carts, payment integration, and inventory management.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed with the user in mind, creating engaging digital experiences.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Interactive, dynamic web applications using React, JavaScript, and modern CSS frameworks.',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed up your website with code optimization, lazy loading, and best practices implementation.',
    color: 'from-pink-500 to-purple-500',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Services Offered
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300 h-full">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-white text-xl mb-3">{service.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`} />
                </div>

                {/* External glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
