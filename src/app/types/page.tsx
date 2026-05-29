import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const TYPES = [
  {
    name: 'Projector',
    essence: 'The Guide',
    desc: 'You were built to guide, not grind. You see the world differently.',
    color: 'bg-brand-sage',
    slug: 'projector',
  },
  {
    name: 'Generator',
    essence: 'The Builder',
    desc: 'The engine of the world when in joy. Satisfaction is your compass.',
    color: 'bg-brand-terracotta',
    slug: 'generator',
  },
  {
    name: 'Manifesting Generator',
    essence: 'The Multi-Hyphenate',
    desc: 'Efficient, fast, and multi-passionate. You move at the speed of light.',
    color: 'bg-brand-gold',
    slug: 'manifesting-generator',
  },
  {
    name: 'Manifestor',
    essence: 'The Initiator',
    desc: 'The spark that starts the fire. You are here to impact, not ask permission.',
    color: 'bg-brand-inkblue',
    slug: 'manifestor',
  },
  {
    name: 'Reflector',
    essence: 'The Mirror',
    desc: 'The rare soul who mirrors the community. You are the heart of the world.',
    color: 'bg-brand-blush',
    slug: 'reflector',
  },
];

export default function TypesPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-20">
        <header className="mb-20 text-center max-w-2xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl text-brand-inkblue mb-8 leading-tight">
            The 5 <span className="italic text-brand-terracotta">Types.</span>
          </h1>
          <p className="font-body text-lg text-brand-charcoal/70">
            Every human belongs to one of these five energetic archetypes. Understanding yours is
            the first step to a life that actually fits.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TYPES.map((type) => (
            <Link
              key={type.name}
              href={`/types/${type.slug}`}
              className="group bg-white p-12 rounded-[40px] border border-brand-cream hover:border-brand-terracotta hover:shadow-xl hover:shadow-brand-terracotta/5 transition-all flex flex-col justify-between h-full"
            >
              <div>
                <div
                  className={`w-14 h-14 rounded-full ${type.color} mb-10 opacity-80 group-hover:opacity-100 transition-opacity`}
                ></div>
                <h2 className="font-display text-3xl text-brand-inkblue mb-2">{type.name}</h2>
                <p className="font-accent text-[10px] uppercase tracking-[0.2em] text-brand-terracotta mb-6">
                  {type.essence}
                </p>
                <p className="font-body text-brand-charcoal/60 leading-relaxed mb-10">
                  {type.desc}
                </p>
              </div>
              <div className="flex items-center text-brand-inkblue font-accent text-[10px] uppercase tracking-widest pt-6 border-t border-brand-cream">
                Deep dive into this type{' '}
                <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <section className="mt-32 text-center bg-brand-inkblue text-brand-cream p-16 md:p-24 rounded-[60px] relative overflow-hidden">
          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="font-display text-4xl mb-8">Not sure which one you are?</h2>
            <p className="font-body text-brand-blush/70 mb-10">
              Pull your free chart in seconds and get a plain-English breakdown of your type,
              profile, and authority.
            </p>
            <Link href="/calculator">
              <Button
                size="lg"
                className="bg-brand-terracotta hover:bg-brand-gold text-brand-cream rounded-full px-10 py-7 font-accent text-xs uppercase tracking-widest"
              >
                Reveal My Type
              </Button>
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full -mr-32 -mt-32"></div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Button({ children, className, size }: any) {
  return (
    <button className={`inline-flex items-center justify-center transition-colors ${className}`}>
      {children}
    </button>
  );
}
