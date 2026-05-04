import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Globe, Mail, Share2 } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary/30 selection:text-primary">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-outline/20">
        <nav className="max-w-[1440px] mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link to="/" className="text-2xl font-bold tracking-tight text-white">Your Teacher</Link>
            <div className="hidden md:flex items-center gap-8">
              <Link to="/services" className="text-secondary hover:text-primary transition-colors text-sm font-medium">Courses</Link>
              <Link to="/pricing" className="text-secondary hover:text-primary transition-colors text-sm font-medium">Pricing</Link>
              <a href="#" className="text-secondary hover:text-white transition-colors text-sm font-medium">Mentors</a>
              <a href="#" className="text-secondary hover:text-white transition-colors text-sm font-medium">Resources</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-secondary hover:text-white transition-colors text-sm font-medium">Login</button>
            <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold hover:bg-primary-dim transition-all active:scale-95">
              Join Now
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-outline py-20">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1">
            <span className="text-2xl font-bold text-white block mb-6">Your Teacher</span>
            <p className="text-secondary text-sm leading-relaxed mb-8">
              The premier destination for executive education and professional mentorship. We shape the leaders of tomorrow.
            </p>
            <div className="flex gap-6">
              <Globe className="w-5 h-5 text-secondary cursor-pointer hover:text-primary transition-colors" />
              <Mail className="w-5 h-5 text-secondary cursor-pointer hover:text-primary transition-colors" />
              <Share2 className="w-5 h-5 text-secondary cursor-pointer hover:text-primary transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Learning</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-secondary hover:text-primary transition-colors">Courses</Link></li>
              <li><Link to="/pricing" className="text-secondary hover:text-primary transition-colors">Pricing</Link></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors">Mentors</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors">Curriculum</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors">Resources</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-secondary hover:text-primary transition-colors">Newsletter</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors">Community</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors">Support</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-secondary hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto px-8 mt-20 pt-8 border-t border-outline">
          <p className="text-secondary text-center text-sm">
            © {new Date().getFullYear()} Your Teacher. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
