import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, Target, Users, Zap } from 'lucide-react';
import Link from 'next/link';

const BUSINESS_RESOURCES = [
  { title: 'Content Strategy by Type', format: 'SWIPE PDF', icon: <Zap className="w-5 h-5" /> },
  { title: 'Offer Suite by Type', format: 'SWIPE PDF', icon: <Target className="w-5 h-5" /> },
  { title: 'Burnout Recovery Guide', format: 'MINI GUIDE', icon: <Users className="w-5 h-5" /> },
];

export default function ForBusinessPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="px-6 py-24 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3 text-brand-terracotta font-accent text-[10px] uppercase tracking-[0.2em] mb-8">
            <Briefcase className="w-4 h-4" /> <span>Human Design × Business</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-brand-inkblue mb-8 leading-tight">
            Build a business that doesn't <br className="hidden md:block" />
            <span className="italic">break you.</span>
          </h1>
          <p className="font-body text-lg text-brand-charcoal/70 mb-12">
            Human Design is the ultimate business strategy tool. Stop forcing marketing and offers
            that feel like sandpaper.
          </p>
          <Link href="/calculator">
            <Button
              size="lg"
              className="bg-brand-terracotta hover:bg-brand-inkblue text-brand-cream rounded-full px-10 py-7 font-accent text-xs uppercase tracking-widest"
            >
              Get Your Business Chart
            </Button>
          </Link>
        </section>

        {/* Content Blocks */}
        <section className="px-6 py-20 bg-white/40">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="font-display text-4xl text-brand-inkblue">
                Your Type × Your Business Model
              </h2>
              <p className="font-body text-brand-charcoal/70 leading-relaxed">
                A Projector running a high-volume agency is a recipe for exhaustion. A Generator
                without joy in their delivery is a recipe for frustration. We help you align your
                offers, your schedule, and your capacity with the way your energy actually
                functions.
              </p>
              <ul className="space-y-4 font-accent text-[10px] uppercase tracking-widest text-brand-inkblue">
                <li className="flex items-center">
                  <ArrowRight className="w-3 h-3 mr-3 text-brand-terracotta" /> Offers aligned with
                  energy
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-3 h-3 mr-3 text-brand-terracotta" /> Scheduling based on
                  capacity
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-3 h-3 mr-3 text-brand-terracotta" /> Marketing that feels
                  like relief
                </li>
              </ul>
            </div>
            <div className="bg-brand-blush/30 p-12 rounded-[60px] border border-brand-blush/50">
              <h3 className="font-display text-3xl text-brand-inkblue mb-6 italic text-center">
                "Stop trying to market like a Manifestor if you were built to guide like a
                Projector."
              </h3>
              <div className="h-px bg-brand-inkblue/10 w-24 mx-auto mb-6"></div>
              <p className="font-accent text-[10px] uppercase tracking-widest text-brand-charcoal/40 text-center">
                A Messy Middle Truth
              </p>
            </div>
          </div>
        </section>

        {/* Decision Making Section */}
        <section className="px-6 py-32 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl text-brand-inkblue mb-6">
              Decision-Making for Business
            </h2>
            <p className="font-body text-brand-charcoal/60 max-w-2xl mx-auto">
              Hiring, pricing, pivoting—all easier when you use your authority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Emotional', 'Sacral', 'Splenic'].map((auth) => (
              <div
                key={auth}
                className="bg-brand-cream border border-brand-inkblue/5 p-10 rounded-3xl hover:border-brand-terracotta transition-colors"
              >
                <h3 className="font-display text-2xl text-brand-inkblue mb-4">{auth} Authority</h3>
                <p className="font-body text-sm text-brand-charcoal/70 leading-relaxed mb-6">
                  Making business decisions on the fly? If you have {auth} authority, that's likely
                  why you're second-guessing yourself.
                </p>
                <Link
                  href="/calculator"
                  className="font-accent text-[10px] uppercase tracking-widest text-brand-terracotta hover:underline"
                >
                  Learn the strategy →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Resource Grid */}
        <section className="bg-brand-inkblue py-24 px-6 text-brand-cream">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-4xl mb-12">Business Resource Library</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {BUSINESS_RESOURCES.map((res) => (
                <div
                  key={res.title}
                  className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all cursor-pointer group"
                >
                  <div className="text-brand-gold mb-6">{res.icon}</div>
                  <h3 className="font-display text-2xl mb-2">{res.title}</h3>
                  <p className="font-accent text-[10px] text-brand-blush/50 uppercase tracking-widest mb-8">
                    {res.format}
                  </p>
                  <Button
                    variant="ghost"
                    className="p-0 text-brand-gold font-accent text-[10px] uppercase tracking-widest group-hover:translate-x-1 transition-transform"
                  >
                    Get It Free →
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
