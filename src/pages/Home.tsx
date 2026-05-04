import { motion } from "motion/react";
import { 
  ArrowRight, 
  GraduationCap, 
  Users, 
  ShieldCheck, 
  Star, 
  ChevronLeft, 
  ChevronRight,
  Globe,
  Mail,
  Share2
} from "lucide-react";

const IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1HN6BDXc8Gp0RMyv60g0ZedCqbfIcPVYR4hUdTqlwtnmIj-yj0tIaPzs7OUazvEn5lUXkeddR-1hGb-zvJzLBN3PXWoUvobDWdSwO3wRUxo6kBSrFNsDphZ3PxAnP_LT4IpxOiliueuLsPhgpjIyMoqtCxOJxakBycsjV-hhZXIM7r3IJSaQR5t2xYWr8LKJ1z0uxVCDJkXeU3jbqLoNyCwB91t87qXLiokoe3fsR0OagH-8zOtXK98rh4Xpuc6Lv2NGz6_Rtpq0",
  course1: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWzJuCByFonrdYgGypPkqTrH0lZNnQGHeI3DqtBaE8uyY92b4BLee1FDR8aoDiNEX-G8Emly6PACFDr9465xeNJ7WnwvlyFeaCTKYfJWmSbpZmAiuehKrKZyQ15MiEku_XBCWxUzqVUtZqgyOXKyn9VDVK6R2UB7wUK26t8oXAIXlqwEFjA0nHXpFuCADkWZMroyugggxeWKwgnlyNEYD-ye3i9OL4QpoETjXmiasKZzNr_2gg7Vk2C0EXgQYdO5IAkt0TRDGbqE0",
  course2: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkJjrvLOeQI1Y6rVnPCpmtUz1lBn-J8EE9hr7HL4HLDtGAk5YwU2sKcybCpiEmuMbwIF3a1QZT9i7WigTVAFztrUktajGKD0wogube7shW4T7mMqdmB5irabbS-YeH7V7zKkdJkujCqDvFu1LpgopK2zOSoE0BlEFO5BVIfXk9NgA7yccyPG05AubwIxFE2inskfAXrQa0dj7lrDP4mellUytY2iIquAcbo09fTPDR_XQUSpjeAUlLxzwNkfaSCZodDWtXraQ0aj4",
  course3: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfxGDqGY_ESCOWmqbVE34ERKdvoBe_h_BfOo4nkRIJiwcgdarm_GDAduImTPOd_OIJYQttZxGb7KpnAsrf6MqkJYHoIeTAcw4Vt5uHPeWet89gxhJYenVZfaXR5hRHaeDy5ttBE3UPZcMc7D5bTnekyk-NeJJQBJLa6PMceWMx2DflFAcMycOkLhRt52u1_lG-F9m29330?auto=format&fit=crop&q=80&w=400&h=500",
  avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAF-4iiiUMdygztnFVuJ9edZ1aPl9QQX09jgYnTfrscPYgsx5xa6dN4sBjIqYRmMhgTk-P9Lb5f1-wE5A6T0DOQQORRQADqhxyRBZPQEmO-wz6pBgNxZ0R1VWtrf4CB47Fc6eEnR5K5X72bx6SyUEbe0t3h2O20GijY6LnGQ1BNuBxZ4ed7ZlYM9bww3pjksahnE6i_r1aBDF59b4VROJd3PQO32BXdpfYK35h9GvkyXdLrqhY0ygeeWTT-v6zN5Pxt3RYpbRGR6ZM"
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt="Executive Office" 
            className="w-full h-full object-cover opacity-40 grayscale-[0.2]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        
        <div className="container max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-medium uppercase tracking-[0.2em] text-sm mb-6 block">
              Elite Professional Mentorship
            </span>
            <h1 className="text-display-xl font-bold text-white mb-8 leading-tight">
              Master Your Future with Expert Mentors
            </h1>
            <p className="text-lg text-secondary mb-12 max-w-xl leading-relaxed">
              Accelerate your career with executive-level training. Gain direct access to industry titans and a curriculum designed for the next generation of global leaders.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20">
                Join Now
              </button>
              <button className="border border-outline text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-background transition-all active:scale-95">
                View Courses
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Props Bento Grid */}
      <section className="py-24 bg-background">
        <div className="container max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-8 bg-surface border border-outline p-12 rounded-2xl flex flex-col justify-between group cursor-default"
            >
              <div>
                <GraduationCap className="text-primary w-12 h-12 mb-6 transition-transform group-hover:scale-110" />
                <h3 className="text-3xl font-bold text-white mb-4">Elite Academic Foundation</h3>
                <p className="text-secondary max-w-md text-lg">Our curriculum is built by world-class educators and industry practitioners to ensure you learn only what truly matters in today's executive landscape.</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-4 bg-primary p-12 rounded-2xl text-white flex flex-col justify-between group cursor-default"
            >
              <div>
                <Users className="w-12 h-12 mb-6 transition-transform group-hover:scale-110" />
                <h3 className="text-2xl font-bold mb-4">Direct Mentorship</h3>
                <p className="opacity-90 text-lg">Skip the line by learning directly from professionals who have already achieved what you aspire to reach.</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-4 bg-surface border border-outline p-12 rounded-2xl group cursor-default"
            >
              <ShieldCheck className="text-primary w-12 h-12 mb-6 transition-transform group-hover:scale-110" />
              <h3 className="text-2xl font-bold text-white mb-4">Global Network</h3>
              <p className="text-secondary text-lg text-pretty">Access an exclusive community of high-achievers and alumni from Fortune 500 companies.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-8 bg-surface border border-outline p-12 rounded-2xl flex items-center gap-12 group cursor-default"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">Measurable Growth</h3>
                <p className="text-secondary text-lg">Track your progress with our advanced analytics dashboard, designed to highlight your strengths and target your professional development areas.</p>
              </div>
              <div className="hidden md:flex flex-shrink-0 w-32 h-32 border-4 border-outline border-t-primary rounded-full items-center justify-center relative">
                <span className="text-white font-bold text-2xl">85%</span>
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-[spin_3s_linear_infinite]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 bg-background">
        <div className="container max-w-[1440px] mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-headline-lg font-bold text-white mb-4">Curated Excellence</h2>
              <p className="text-lg text-secondary">Our most sought-after programs for high-impact leadership.</p>
            </div>
            <a href="#" className="text-primary font-bold flex items-center gap-2 group">
              Explore all courses 
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CourseCard 
              title="Executive Leadership in Tech"
              description="Master the art of leading large-scale engineering teams and driving digital transformation."
              price="1,299"
              tag="Strategy"
              image={IMAGES.course1}
            />
            <CourseCard 
              title="The Art of Negotiation"
              description="Advanced strategies for high-stakes deal-making and conflict resolution in global markets."
              price="949"
              tag="Management"
              image={IMAGES.course2}
              isFeatured
            />
            <CourseCard 
              title="Scalable Growth Systems"
              description="Leverage data-driven methodologies to build resilient, exponential growth for startups and enterprises."
              price="1,499"
              tag="Growth"
              image={IMAGES.course3}
            />
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-24 bg-background border-t border-outline/10">
        <div className="container max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg font-bold text-white mb-4">World-Class Mentors</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Learn from the experts who have built and scaled the world's most successful organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <MentorCard 
              name="David Richardson"
              role="Engineering Director"
              expertise="Distributed Systems"
              bio="Former Principal Engineer at AWS with 15+ years of experience scaling global infrastructure."
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=500"
            />
            <MentorCard 
              name="Sarah Jenkins"
              role="Product Strategy Lead"
              expertise="Growth & Monetization"
              bio="Led product growth teams at Pinterest and Airbnb. Specialist in user psychology and viral loops."
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=500"
            />
            <MentorCard 
              name="Mudasir Hussain"
              role="CEO, Thorne Advisory"
              expertise="Executive Presence"
              bio="Executive coach for Fortune 500 CEOs. Expert in high-stakes negotiation and crisis leadership."
              image=" IMG_1735.jpg"
            />
            <MentorCard 
              name="Dr. Elena Rossi"
              role="Head of AI Research"
              expertise="Machine Learning"
              bio="PhD in Computer Science. Leading breakthrough research in generative models and AI ethics."
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500"
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-background/50">
        <div className="container max-w-[1440px] mx-auto px-8">
          <div className="bg-surface border border-outline p-16 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-[0.03] translate-x-1/4 -translate-y-1/4 pointer-events-none">
              <svg width="600" height="600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21Z" />
                <path d="M14.017 21C14.017 14.3726 18.0464 9 23.017 9V6C16.3896 6 11.017 11.3726 11.017 18V21C11.017 22.1046 11.9124 23 13.017 23H14.017" />
                <path d="M3.0166 21L3.0166 18C3.0166 16.8954 3.91203 16 5.0166 16H8.0166C9.12117 16 10.0166 16.8954 10.0166 18V21C10.0166 22.1046 9.12117 23 8.0166 23H5.0166C3.91203 23 3.0166 22.1046 3.0166 21Z" />
                <path d="M3.0166 21C3.0166 14.3726 7.04602 9 12.0166 9V6C5.3892 6 0.0166016 11.3726 0.0166016 18V21C0.0166016 22.1046 0.912032 23 2.0166 23H3.0166" />
              </svg>
            </div>

            <div className="relative z-10 max-w-4xl">
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-primary fill-primary" />
                ))}
              </div>
              <h3 className="text-headline-lg font-semibold italic text-white mb-12 leading-tight">
                "The quality of mentorship at Your Teacher is unparalleled. I was able to transition from a Senior Manager to a VP role within six months of completing the curriculum."
              </h3>
              <div className="flex items-center gap-6">
                <img 
                  src={IMAGES.avatar} 
                  alt="Alexandra Chen" 
                  className="w-16 h-16 rounded-full border-2 border-primary object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="text-white font-bold text-xl">Alexandra Chen</p>
                  <p className="text-secondary">VP of Product, MetaConnect</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-8">
              <button className="w-14 h-14 rounded-full border border-outline flex items-center justify-center text-white hover:bg-outline/50 transition-colors">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="w-14 h-14 rounded-full border border-outline flex items-center justify-center text-white hover:bg-outline/50 transition-colors">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container max-w-[1440px] mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center border border-outline p-20 rounded-[2.5rem] bg-gradient-to-b from-surface to-background relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h2 className="text-headline-lg font-bold text-white mb-6">Ready to lead?</h2>
            <p className="text-xl text-secondary mb-12 max-w-2xl mx-auto">
              Applications for our Fall Executive Program are now open. Secure your spot among the next cohort of industry pioneers.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <button className="bg-primary text-white px-12 py-5 rounded-xl font-bold text-xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/30">
                Join Now
              </button>
              <button className="border border-outline text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-white hover:text-background transition-all active:scale-95">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function MentorCard({ name, role, expertise, bio, image }: any) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-surface border border-outline rounded-2xl overflow-hidden group"
    >
      <div className="h-72 relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 rounded bg-primary text-white text-[10px] font-bold uppercase tracking-wider">
            {expertise}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{name}</h4>
        <p className="text-secondary text-sm font-medium mb-4">{role}</p>
        <p className="text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
          {bio}
        </p>
        <div className="flex gap-4 pt-4 border-t border-outline">
          <button className="text-secondary hover:text-primary transition-colors">
            <Globe className="w-4 h-4" />
          </button>
          <button className="text-secondary hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
          </button>
          <button className="text-secondary hover:text-primary transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function CourseCard({ title, description, price, tag, image, isFeatured = false }: any) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className={`relative bg-surface rounded-2xl overflow-hidden border ${isFeatured ? 'border-primary ring-1 ring-primary/20' : 'border-outline'} group`}
    >
      {isFeatured && (
        <div className="absolute top-0 right-8 bg-primary text-white px-4 py-1 rounded-b-lg text-[10px] font-black uppercase tracking-widest z-10">
          Best Seller
        </div>
      )}
      <div className="h-64 relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${isFeatured ? 'bg-primary text-white' : 'bg-background/80 text-white'}`}>
            {tag}
          </span>
        </div>
      </div>
      <div className="p-8">
        <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{title}</h4>
        <p className="text-secondary mb-8 text-lg leading-relaxed">{description}</p>
        <div className="flex justify-between items-center pt-8 border-t border-outline">
          <span className="text-white font-bold text-2xl">${price}</span>
          <button className="text-primary font-bold hover:underline flex items-center gap-1">
            Learn More
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
