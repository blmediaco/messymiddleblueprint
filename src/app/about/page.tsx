import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Star, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-20">
        <header className="mb-20 text-center">
          <h1 className="font-display text-5xl md:text-7xl text-brand-inkblue mb-8 italic">
            Uncharted, Loved.
          </h1>
          <p className="font-accent text-xs uppercase tracking-[0.3em] text-brand-terracotta">
            Human Design for the Messy Middle
          </p>
        </header>

        <div className="space-y-16">
          <section className="space-y-8">
            <h2 className="font-display text-4xl text-brand-inkblue">The Story</h2>
            <p className="font-body text-lg text-brand-charcoal/80 leading-relaxed">
              Uncharted, Loved was born from a simple realization: the world doesn't need more
              "high-vibe" fluff or corporate productivity hacks. It needs women who are deeply
              connected to their own design, building lives that actually fit who they are.
            </p>
            <p className="font-body text-lg text-brand-charcoal/80 leading-relaxed">
              We're here for the women who are simultaneously building empires and raising humans.
              The ones who are tired of being sold a path that wasn't designed for them.
            </p>
          </section>

          <section className="bg-brand-inkblue text-brand-cream p-12 md:p-20 rounded-[60px] relative overflow-hidden">
            <div className="relative z-10">
              <Star className="text-brand-gold w-10 h-10 mb-8" />
              <h3 className="font-display text-4xl mb-8 italic">
                "We aren't here to be perfect. We're here to be aligned."
              </h3>
              <p className="font-body text-brand-blush/70 leading-relaxed max-w-xl">
                Human Design isn't a goal; it's a relief. It's the permission slip you didn't know
                you needed to stop trying to be everything to everyone and start being the specific
                version of yourself you were designed to be.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mb-32"></div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-4xl text-brand-inkblue">Our Approach</h2>
              <p className="font-body text-brand-charcoal/70 leading-relaxed">
                We strip away the jargon and the "woo-woo" to give you the practical application of
                Human Design. If it doesn't help you on your actual Tuesday, we don't talk about it.
              </p>
              <ul className="space-y-4 font-accent text-[10px] uppercase tracking-widest text-brand-inkblue">
                <li className="flex items-center">
                  <ArrowRight className="w-3 h-3 mr-3 text-brand-terracotta" /> Warm authority
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-3 h-3 mr-3 text-brand-terracotta" /> Plain English
                  translation
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-3 h-3 mr-3 text-brand-terracotta" /> Real-life
                  application
                </li>
              </ul>
            </div>
            <div className="bg-brand-sage/10 p-12 rounded-[40px] border border-brand-sage/20 aspect-square flex items-center justify-center">
              <div className="text-center">
                <p className="font-handwriting text-5xl text-brand-sage mb-4 italic">
                  Design & Unfiltered
                </p>
                <p className="font-accent text-[10px] uppercase tracking-widest text-brand-charcoal/40">
                  Our guiding philosophy
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
