import { motion } from "motion/react";
import { 
  CheckCircle, 
  X, 
  ArrowRight, 
  Users, 
  BookOpen, 
  UserPlus,
  Check,
  Search,
  Globe,
  Mail,
  Share2
} from "lucide-react";

export default function Services() {
  return (
    <div className="bg-background text-on-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-medium uppercase tracking-[0.2em] text-sm mb-4 block">Educational Programs</span>
            <h1 className="text-display-xl font-bold text-white mb-8">Elevate Your Career with Elite Mentorship.</h1>
            <p className="text-secondary text-lg mb-12 max-w-2xl leading-relaxed">
              Choose from tailored learning paths designed by industry veterans. From intense personal coaching to collaborative masterclasses, we provide the framework for your excellence.
            </p>
          </motion.div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-30 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-l from-primary/10 to-transparent" />
        </div>
      </section>

      {/* Services Grid (Bento Style) */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* 1-on-1 Coaching */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 bg-surface border border-outline rounded-2xl p-12 flex flex-col justify-between group hover:border-primary/50 transition-all duration-300"
          >
            <div>
              <div className="flex justify-between items-start mb-10">
                <div className="bg-primary/10 p-4 rounded-xl">
                  <UserPlus className="text-primary w-10 h-10" />
                </div>
                <span className="bg-outline text-white text-xs px-4 py-1.5 rounded-full font-bold uppercase tracking-wider">Limited Availability</span>
              </div>
              <h3 className="text-4xl font-bold text-white mb-6">1-on-1 Coaching</h3>
              <p className="text-secondary text-lg mb-10 max-w-2xl">
                Accelerate your progress with personalized attention. Our mentors work directly with you to solve complex problems and build executive-level skills.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary w-5 h-5" />
                  <span className="text-on-background font-medium">Tailored Curriculum</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary w-5 h-5" />
                  <span className="text-on-background font-medium">Weekly Video Calls</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary w-5 h-5" />
                  <span className="text-on-background font-medium">Direct Messenger Access</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary w-5 h-5" />
                  <span className="text-on-background font-medium">Portfolio Reviews</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-10 border-t border-outline">
              <div className="flex flex-col">
                <span className="text-secondary text-xs uppercase font-bold tracking-widest mb-1">Duration</span>
                <span className="text-white text-2xl font-bold">12 Weeks</span>
              </div>
              <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary-dim transition-all active:scale-95 shadow-lg shadow-primary/20">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Group Masterclasses */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 bg-surface border border-outline rounded-2xl p-10 group hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <Users className="text-primary w-8 h-8 mb-8" />
              <h3 className="text-3xl font-bold text-white mb-6">Group Masterclasses</h3>
              <p className="text-secondary text-lg mb-8">Learn alongside a curated cohort of peers. Intensive workshops focused on collaborative excellence.</p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-on-background">
                  <ArrowRight className="text-primary w-4 h-4" />
                  <span>Peer-to-peer feedback</span>
                </li>
                <li className="flex items-center gap-3 text-on-background">
                  <ArrowRight className="text-primary w-4 h-4" />
                  <span>Live group Q&A</span>
                </li>
                <li className="flex items-center gap-3 text-on-background">
                  <ArrowRight className="text-primary w-4 h-4" />
                  <span>Networking events</span>
                </li>
              </ul>
            </div>
            <div className="pt-8 border-t border-outline">
              <span className="text-secondary text-xs uppercase font-bold tracking-widest mb-1 block">Duration</span>
              <span className="text-white text-2xl font-bold block mb-8">6 Weeks</span>
              <button className="w-full border border-outline text-white px-6 py-4 rounded-xl font-bold hover:bg-white hover:text-black transition-all active:scale-95">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Self-Paced Courses */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 bg-surface border border-outline rounded-2xl p-10 group hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <BookOpen className="text-primary w-8 h-8 mb-8" />
              <h3 className="text-3xl font-bold text-white mb-6">Self-Paced Courses</h3>
              <p className="text-secondary text-lg mb-8">High-quality video modules and resources you can access anytime, anywhere at your own speed.</p>
            </div>
            <div className="pt-8 border-t border-outline">
              <span className="text-secondary text-xs uppercase font-bold tracking-widest mb-1 block">Access</span>
              <span className="text-white text-2xl font-bold block mb-8">Lifetime</span>
              <button className="w-full border border-outline text-white px-6 py-4 rounded-xl font-bold hover:bg-white hover:text-black transition-all active:scale-95">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Image Decorative Card */}
          <div className="md:col-span-8 min-h-[400px] overflow-hidden rounded-2xl relative group border border-outline">
            <img 
              alt="Educational Environment" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuBLeFIBvscd0r45VfGSh3st9uLE9bjIlR-aEyglqnLB9ZrY9gnKiP9JnztB8kjpdu38GplpCBFYkRkDpDhHbNBoD23qEvMDEkQpXuis_JZnO35l5NeD0uCHsKcWQsYH4aZu3BEUCNdSJ1lMESKKFYnFqs4l8fEPclqDT5lKPD033b-sNJD6yq3pqactFFAsur4oVFqgp1GM71mgQxxKoC9wBn8CRLd2evZSrhsGJwzuwJPC-6k5EMrwWrwjcyMSilgqZ50IIwT2E"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-12 left-12">
              <p className="text-white text-3xl font-bold mb-2">Join over 10,000+ graduates</p>
              <p className="text-secondary text-lg">Our alumni now work at top global enterprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features Comparison */}
      <section className="py-24 bg-background/50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-headline-lg font-bold text-white mb-16 text-center">Compare Programs</h2>
          <div className="overflow-x-auto rounded-3xl border border-outline bg-surface">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-outline">
                  <th className="py-8 px-8 text-left text-secondary font-bold uppercase tracking-widest text-xs">Feature</th>
                  <th className="py-8 px-8 text-center text-white font-bold">Self-Paced</th>
                  <th className="py-8 px-8 text-center text-white font-bold">Masterclass</th>
                  <th className="py-8 px-8 text-center text-primary font-bold">1-on-1 Coaching</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline/50">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-6 px-8 text-on-background font-medium">Video Content</td>
                  <td className="py-6 px-8 text-center"><Check className="text-primary w-6 h-6 mx-auto" /></td>
                  <td className="py-6 px-8 text-center"><Check className="text-primary w-6 h-6 mx-auto" /></td>
                  <td className="py-6 px-8 text-center"><Check className="text-primary w-6 h-6 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-6 px-8 text-on-background font-medium">Community Access</td>
                  <td className="py-6 px-8 text-center"><Check className="text-primary w-6 h-6 mx-auto" /></td>
                  <td className="py-6 px-8 text-center"><Check className="text-primary w-6 h-6 mx-auto" /></td>
                  <td className="py-6 px-8 text-center"><Check className="text-primary w-6 h-6 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-6 px-8 text-on-background font-medium">Live Q&A Sessions</td>
                  <td className="py-6 px-8 text-center"><X className="text-outline w-6 h-6 mx-auto opacity-30" /></td>
                  <td className="py-6 px-8 text-center"><Check className="text-primary w-6 h-6 mx-auto" /></td>
                  <td className="py-6 px-8 text-center"><Check className="text-primary w-6 h-6 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-6 px-8 text-on-background font-medium">1-on-1 Mentoring</td>
                  <td className="py-6 px-8 text-center"><X className="text-outline w-6 h-6 mx-auto opacity-30" /></td>
                  <td className="py-6 px-8 text-center"><X className="text-outline w-6 h-6 mx-auto opacity-30" /></td>
                  <td className="py-6 px-8 text-center"><Check className="text-primary w-6 h-6 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-6 px-8 text-on-background font-medium">Personal Career Roadmap</td>
                  <td className="py-6 px-8 text-center"><X className="text-outline w-6 h-6 mx-auto opacity-30" /></td>
                  <td className="py-6 px-8 text-center"><X className="text-outline w-6 h-6 mx-auto opacity-30" /></td>
                  <td className="py-6 px-8 text-center"><Check className="text-primary w-6 h-6 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8">
        <motion.div 
          whileInView={{ scale: [0.98, 1], opacity: [0, 1] }}
          className="max-w-5xl mx-auto bg-primary rounded-[2.5rem] p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/40"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to transform your future?</h2>
            <p className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Don't wait for opportunity. Create it with the guidance of masters. Enrollment for the next cohort is now open.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-black px-12 py-5 rounded-xl font-bold text-lg hover:bg-black hover:text-white transition-all shadow-xl active:scale-95">
                Browse Programs
              </button>
              <button className="border-2 border-white text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-black transition-all active:scale-95">
                Book a Discovery Call
              </button>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -left-20 -top-20 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-pulse" />
        </motion.div>
      </section>
    </div>
  );
}
