import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Twitter, Heart } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Mail, href: 'mailto:jiya.agrawal@example.com', label: 'Email' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-purple-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-white text-xl mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Jiya Agrawal
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Web Developer passionate about creating beautiful and functional web experiences. 
              Let's collaborate and bring your ideas to life!
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Skills', 'Projects', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white mb-4">Get In Touch</h3>
            <div className="space-y-3 mb-4">
              <p className="text-gray-400 text-sm">
                <span className="text-purple-400">Email:</span> jiya.agrawal@example.com
              </p>
              <p className="text-gray-400 text-sm">
                <span className="text-purple-400">Location:</span> Available for remote work
              </p>
            </div>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-slate-800 border border-purple-500/30 rounded-lg flex items-center justify-center hover:bg-purple-500/10 hover:border-purple-500 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-500/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Jiya Agrawal. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> and lots of code
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
