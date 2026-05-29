import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Book, Layout, Heart, AlertCircle, TrendingUp, Lightbulb } from 'lucide-react';
import Link from 'next/link';

interface TypeData {
  name: string;
  essence: string;
  description: string;
  energy: string;
  messyMiddle: string;
  business: string;
  life: string;
  decision: string;
  color: string;
}

const TYPES_DATA: Record<string, TypeData> = {
  projector: {
    name: 'Projector',
    essence: 'You were built to guide, not grind.',
    description:
      "Projectors are about 20% of the population. Unlike the majority (Generators), you don't have a sustainable source of energy in your Sacral center. You aren't here to 'do' more; you are here to see more. You have a focused, penetrating aura that can see deeply into others and systems.",
    energy:
      "Your energy works in spurts. You are highly efficient and can often do in 3 hours what takes a Generator 8 hours, but you require significant rest and 'alone time' to discharge other people's energy. Overworking is your fastest path to bitterness.",
    messyMiddle:
      "The hardest part of being a Projector woman is the feeling that you're 'lazy' because you can't keep up with the hustle culture. You might feel overlooked or unappreciated when you share your wisdom without being invited first.",
    business:
      "Your business strategy is 'Waiting for the Invitation.' This doesn't mean doing nothing; it means building your authority and being visible so that the right people recognize you and ask for your guidance.",
    life: "In relationships, you need partners who recognize your value and ask for your input. Parenting as a Projector requires carving out 'me-time' where no one is in your aura so you can find your own frequency again.",
    decision:
      "Your Authority (Splenic, Emotional, etc.) tells you how to say 'yes' once the invitation arrives. Listen to that internal signal over your logical brain.",
    color: 'bg-brand-sage',
  },
  generator: {
    name: 'Generator',
    essence: 'The sustainable engine of the world.',
    description:
      'Generators make up about 35% of the population. You have a defined Sacral center—a motor that generates consistent energy when you are doing things that light you up. You are the builders and the sustainers of life.',
    energy:
      "When you love what you're doing, your energy is virtually limitless. However, if you are 'should-ing' your way through life, that energy turns into frustration. Your body literally has a battery that needs to be used up completely each day for good sleep.",
    messyMiddle:
      "The messy part? Saying yes to things out of obligation. You end up frustrated and drained because you're using your motor for things that don't satisfy your soul.",
    business:
      "Your strategy is 'To Respond.' You aren't meant to initiate from scratch. You're meant to wait for life to bring you something—a client inquiry, a post, a conversation—and then check if your gut says 'uh-huh' (yes) or 'un-un' (no).",
    life: "In life, satisfaction is your signature. If you feel satisfied at the end of the day, you're on track. If you feel frustrated, look at where you're forcing things.",
    decision:
      'Most Generators have Sacral or Emotional authority. Your gut response is your most honest guide.',
    color: 'bg-brand-terracotta',
  },
  // Additional types would be defined here...
};

export async function generateStaticParams() {
  return [
    { type: 'projector' },
    { type: 'generator' },
    { type: 'manifesting-generator' },
    { type: 'manifestor' },
    { type: 'reflector' },
  ];
}

export default async function TypePage({ params }: { params: { type: string } }) {
  const { type } = await params;
  const data = TYPES_DATA[type] || TYPES_DATA.projector; // Fallback to projector for demo

  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-20">
        {/* Hero */}
        <header className="mb-20">
          <div className={`w-16 h-16 rounded-full ${data.color} mb-8 opacity-80`}></div>
          <h1 className="font-display text-5xl md:text-7xl text-brand-inkblue mb-4">
            The {data.name}
          </h1>
          <p className="font-handwriting text-3xl text-brand-terracotta">{data.essence}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-2 space-y-16">
            <section className="space-y-6">
              <div className="flex items-center space-x-3 text-brand-terracotta font-accent text-[10px] uppercase tracking-[0.2em]">
                <Book className="w-4 h-4" /> <span>The Essence</span>
              </div>
              <div className="font-body text-brand-charcoal/80 leading-relaxed space-y-4 text-lg">
                <p>{data.description}</p>
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex items-center space-x-3 text-brand-terracotta font-accent text-[10px] uppercase tracking-[0.2em]">
                <TrendingUp className="w-4 h-4" /> <span>Your Energy</span>
              </div>
              <p className="font-body text-brand-charcoal/80 leading-relaxed">{data.energy}</p>
            </section>

            <section className="bg-brand-inkblue text-brand-cream p-12 rounded-[40px] space-y-6">
              <div className="flex items-center space-x-3 text-brand-gold font-accent text-[10px] uppercase tracking-[0.2em]">
                <AlertCircle className="w-4 h-4" /> <span>The Messy Middle</span>
              </div>
              <h2 className="font-display text-3xl">Real talk about the hard parts</h2>
              <p className="font-body text-brand-blush/80 leading-relaxed">{data.messyMiddle}</p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="bg-white p-10 rounded-3xl border border-brand-blush/30 space-y-4">
                <Layout className="text-brand-terracotta w-6 h-6 mb-2" />
                <h3 className="font-display text-2xl text-brand-inkblue">In Business</h3>
                <p className="font-body text-sm text-brand-charcoal/70 leading-relaxed">
                  {data.business}
                </p>
              </section>
              <section className="bg-white p-10 rounded-3xl border border-brand-blush/30 space-y-4">
                <Heart className="text-brand-sage w-6 h-6 mb-2" />
                <h3 className="font-display text-2xl text-brand-inkblue">In Life</h3>
                <p className="font-body text-sm text-brand-charcoal/70 leading-relaxed">
                  {data.life}
                </p>
              </section>
            </div>

            <section className="space-y-6 py-10 border-t border-brand-inkblue/5">
              <div className="flex items-center space-x-3 text-brand-terracotta font-accent text-[10px] uppercase tracking-[0.2em]">
                <Lightbulb className="w-4 h-4" /> <span>Decision-Making</span>
              </div>
              <h2 className="font-display text-3xl text-brand-inkblue">Your Authority</h2>
              <p className="font-body text-brand-charcoal/80 leading-relaxed">{data.decision}</p>
            </section>
          </div>

          {/* Sidebar CTA */}
          <div className="md:col-span-1">
            <div className="sticky top-12 bg-brand-blush/20 p-8 rounded-[40px] border border-brand-blush/40 text-center space-y-6">
              <h4 className="font-display text-2xl text-brand-inkblue">Ready to dive deeper?</h4>
              <p className="font-body text-sm text-brand-charcoal/70">
                Download the free {data.name} Starter Guide with 20+ pages of type-specific wisdom.
              </p>
              <Button className="w-full bg-brand-terracotta hover:bg-brand-inkblue text-brand-cream rounded-full py-6 font-accent text-[10px] uppercase tracking-widest">
                Download Guide
              </Button>
              <Link
                href="/calculator"
                className="block font-accent text-[10px] uppercase tracking-widest text-brand-charcoal hover:text-brand-terracotta"
              >
                ← Back to calculator
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
