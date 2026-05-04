import { motion } from "motion/react";
import { CheckCircle, X, Check, Share2, MessageSquare, Mail } from "lucide-react";

export default function Pricing() {
  return (
    <div className="bg-background text-on-background">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 pt-20 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-display-lg font-bold text-white mb-6">
            Invest in your <span className="text-primary">future self</span>
          </h1>
          <p className="text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
            Choose the path that fits your learning journey. From self-paced exploration to high-impact mentorship, we have a plan designed for your success.
          </p>
        </motion.div>
      </section>

      {/* Pricing Bento Grid */}
      <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        {/* Basic Plan */}
        <PricingCard
          title="Basic"
          tag="Self-Paced"
          price="49"
          features={[
            { text: "Full access to course library", included: true },
            { text: "Interactive coding exercises", included: true },
            { text: "Community forum access", included: true },
            { text: "1-on-1 Mentor sessions", included: false },
          ]}
          buttonText="Get Started"
        />

        {/* Pro Plan (Featured) */}
        <PricingCard
          title="Pro"
          tag="Guided Learning"
          price="99"
          isFeatured
          features={[
            { text: "Everything in Basic", included: true },
            { text: "2 Mentor sessions per month", included: true },
            { text: "Project code reviews", included: true },
            { text: "Verified Certifications", included: true },
          ]}
          buttonText="Start 7-Day Trial"
        />

        {/* Elite Plan */}
        <PricingCard
          title="Elite"
          tag="Career Focus"
          price="249"
          features={[
            { text: "Unlimited Mentor sessions", included: true },
            { text: "Job placement assistance", included: true },
            { text: "Private Slack channel access", included: true },
            { text: "Exclusive alumni network", included: true },
          ]}
          buttonText="Contact Sales"
        />
      </section>

      {/* Feature Comparison Table */}
      <section className="max-w-5xl mx-auto px-8 mb-32">
        <h2 className="text-headline-lg font-bold text-white mb-16 text-center">Compare features</h2>
        <div className="overflow-x-auto rounded-3xl border border-outline bg-surface">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-outline">
                <th className="py-8 px-8 text-secondary font-bold uppercase tracking-widest text-xs w-1/2">Features</th>
                <th className="py-8 px-8 text-center text-secondary font-bold uppercase tracking-widest text-xs">Basic</th>
                <th className="py-8 px-8 text-center text-primary font-bold uppercase tracking-widest text-xs">Pro</th>
                <th className="py-8 px-8 text-center text-secondary font-bold uppercase tracking-widest text-xs">Elite</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline/50">
              <ComparisonRow label="Monthly Mentor Hours" v1="0" v2="4" v3="Unlimited" />
              <ComparisonRow label="Premium Content Access" v1={<Check className="text-primary w-5 h-5 mx-auto" />} v2={<Check className="text-primary w-5 h-5 mx-auto" />} v3={<Check className="text-primary w-5 h-5 mx-auto" />} />
              <ComparisonRow label="Downloadable Resources" v1="-" v2={<Check className="text-primary w-5 h-5 mx-auto" />} v3={<Check className="text-primary w-5 h-5 mx-auto" />} />
              <ComparisonRow label="Certification of Completion" v1="-" v2={<Check className="text-primary w-5 h-5 mx-auto" />} v3={<Check className="text-primary w-5 h-5 mx-auto" />} />
              <ComparisonRow label="Personal Portfolio Review" v1="-" v2="-" v3={<Check className="text-primary w-5 h-5 mx-auto" />} />
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="relative overflow-hidden bg-surface border border-outline rounded-[2.5rem] p-20 flex flex-col items-center text-center group">
          <div className="absolute inset-0 opacity-10 pointer-events-none transition-transform duration-700 group-hover:scale-105">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPqll4G45GLSsM5QGpF4o7cU6uKsHJcDSGe2MCmvivA3ji5SCQarZ57C9UvC1ELMDVKkzN_OD2mx6yk_C0A83JVVM3tKfB6YLaEPuDjUlJYkQUv8xDDBU9XFf-3T5nz24Rsl4FKNkMjk-xRpH8_Q_djYEuc_2Dq8VfLTs04flG66dXoDIz6Ojfb6Jnqe7xQ8gO9SD3hruKZZH_K9uTpJTwlTZZsvYeI8YqH8b_FgTsrWYqzUMG2ZdWokywBGahCgJw1JnESD9lbuQ"
              referrerPolicy="no-referrer"
              alt="Education Environment"
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-headline-lg font-bold text-white mb-6">Still not sure?</h2>
            <p className="text-lg text-secondary mb-12 max-w-xl mx-auto">
              Schedule a 15-minute consultation with our mentors to find the perfect plan for your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-12 py-5 bg-white text-black font-bold text-lg rounded-xl hover:bg-gray-200 transition-all active:scale-95 shadow-xl">
                Book a Call
              </button>
              <button className="px-12 py-5 border border-outline text-white font-bold text-lg rounded-xl hover:bg-outline transition-all active:scale-95">
                Browse Curriculum
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function PricingCard({ title, tag, price, features, buttonText, isFeatured = false }: any) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className={`bg-surface border p-10 rounded-2xl flex flex-col transition-all relative ${isFeatured ? 'border-primary ring-1 ring-primary/20 scale-105 z-10 shadow-[0_0_50px_rgba(255,107,0,0.15)]' : 'border-outline hover:border-surface-bright'}`}
    >
      {isFeatured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-5 py-1.5 text-xs font-black uppercase tracking-widest rounded-full shadow-lg">
          Most Popular
        </div>
      )}
      <div className="mb-10">
        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-outline/50 text-secondary rounded-full">
          {tag}
        </span>
        <h3 className="text-3xl font-bold text-white mt-6">{title}</h3>
        <div className="flex items-baseline gap-2 mt-4">
          <span className="text-5xl font-bold text-white">${price}</span>
          <span className="text-secondary font-medium lowercase">/mo</span>
        </div>
      </div>
      <ul className="space-y-5 mb-12 flex-grow">
        {features.map((feature: any, idx: number) => (
          <li key={idx} className={`flex items-center gap-4 ${!feature.included ? 'opacity-40' : ''}`}>
            {feature.included ? (
              <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
            ) : (
              <X className="text-secondary w-5 h-5 flex-shrink-0" />
            )}
            <span className={`text-lg ${feature.included ? 'text-on-background' : 'text-secondary'}`}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-5 rounded-xl font-bold text-lg transition-all active:scale-95 shadow-lg ${isFeatured ? 'bg-primary text-white hover:bg-primary-dim shadow-primary/20' : 'border border-outline text-white hover:bg-white hover:text-black'}`}>
        {buttonText}
      </button>
    </motion.div>
  );
}

function ComparisonRow({ label, v1, v2, v3 }: any) {
  return (
    <tr className="hover:bg-white/5 transition-colors">
      <td className="py-8 px-8 text-on-background font-medium text-lg">{label}</td>
      <td className="py-8 px-8 text-center text-secondary font-medium">{v1}</td>
      <td className="py-8 px-8 text-center text-white font-bold text-lg">{v2}</td>
      <td className="py-8 px-8 text-center text-secondary font-medium">{v3}</td>
    </tr>
  );
}
