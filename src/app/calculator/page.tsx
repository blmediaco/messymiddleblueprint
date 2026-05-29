'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Loader2, Info } from 'lucide-react';

export default function CalculatorPage() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call for now
    setTimeout(() => {
      setResults({
        type: 'Projector',
        profile: '4/6',
        authority: 'Splenic',
        defined_centers: ['Head', 'Ajna', 'Spleen'],
        undefined_centers: ['Throat', 'G-Center', 'Heart', 'Sacral', 'Solar Plexus', 'Root'],
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-20">
        <header className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl text-brand-inkblue mb-6">
            Your chart has been <br />
            <span className="italic text-brand-terracotta">waiting.</span> Let's pull it up.
          </h1>
          <p className="font-body text-brand-charcoal/70 max-w-lg mx-auto">
            Free, accurate, and actually explained in plain English. No astrology degree required.
          </p>
        </header>

        {!results && !loading && (
          <Card className="bg-white/80 border-brand-blush/30 shadow-xl shadow-brand-terracotta/5 rounded-[40px] p-8 md:p-12 overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label
                    htmlFor="name"
                    className="font-accent text-[10px] uppercase tracking-widest text-brand-inkblue ml-1"
                  >
                    First Name (Optional)
                  </Label>
                  <Input
                    id="name"
                    placeholder="e.g. Alexandra"
                    className="bg-brand-cream/50 border-brand-blush/50 h-12 rounded-xl focus:border-brand-terracotta transition-colors"
                  />
                </div>
                <div className="space-y-3">
                  <Label
                    htmlFor="dob"
                    className="font-accent text-[10px] uppercase tracking-widest text-brand-inkblue ml-1"
                  >
                    Date of Birth
                  </Label>
                  <Input
                    id="dob"
                    type="date"
                    required
                    className="bg-brand-cream/50 border-brand-blush/50 h-12 rounded-xl focus:border-brand-terracotta transition-colors"
                  />
                </div>
                <div className="space-y-3">
                  <Label
                    htmlFor="time"
                    className="font-accent text-[10px] uppercase tracking-widest text-brand-inkblue ml-1"
                  >
                    Time of Birth
                  </Label>
                  <Input
                    id="time"
                    type="time"
                    required
                    className="bg-brand-cream/50 border-brand-blush/50 h-12 rounded-xl focus:border-brand-terracotta transition-colors"
                  />
                </div>
                <div className="space-y-3">
                  <Label
                    htmlFor="city"
                    className="font-accent text-[10px] uppercase tracking-widest text-brand-inkblue ml-1"
                  >
                    City of Birth
                  </Label>
                  <Input
                    id="city"
                    placeholder="City, Country"
                    required
                    className="bg-brand-cream/50 border-brand-blush/50 h-12 rounded-xl focus:border-brand-terracotta transition-colors"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-brand-sage/5 p-4 rounded-xl border border-brand-sage/20">
                <input type="checkbox" id="no-time" className="accent-brand-terracotta" />
                <Label htmlFor="no-time" className="font-body text-xs text-brand-charcoal/70">
                  I don't know my birth time (Results will be approximate)
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-brand-terracotta hover:bg-brand-inkblue text-brand-cream h-16 rounded-2xl font-accent text-xs uppercase tracking-widest transition-all"
              >
                Reveal My Design <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </Card>
        )}

        {loading && (
          <div className="flex flex-col items-center justify-center py-20 space-y-8">
            <div className="relative w-32 h-32">
              <svg
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-pulse text-brand-terracotta opacity-20"
              >
                <path d="M100 10L120 40H80L100 10Z" stroke="currentColor" strokeWidth="2" />
                <rect x="80" y="50" width="40" height="30" stroke="currentColor" strokeWidth="2" />
                <rect x="75" y="90" width="50" height="40" stroke="currentColor" strokeWidth="2" />
                <path d="M100 140L130 170H70L100 140Z" stroke="currentColor" strokeWidth="2" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-brand-terracotta" />
              </div>
            </div>
            <p className="font-handwriting text-2xl text-brand-terracotta animate-pulse">
              Calculating your energy blueprint...
            </p>
          </div>
        )}

        {results && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Text Results */}
              <div className="space-y-10">
                <div className="border-l-4 border-brand-terracotta pl-6 py-2">
                  <h2 className="font-accent text-[10px] uppercase tracking-widest text-brand-terracotta mb-1">
                    Your Type
                  </h2>
                  <p className="font-display text-5xl text-brand-inkblue">{results.type}</p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-accent text-[10px] uppercase tracking-widest text-brand-charcoal/50 mb-2">
                      Profile
                    </h3>
                    <p className="font-display text-2xl text-brand-inkblue">{results.profile}</p>
                  </div>
                  <div>
                    <h3 className="font-accent text-[10px] uppercase tracking-widest text-brand-charcoal/50 mb-2">
                      Authority
                    </h3>
                    <p className="font-display text-2xl text-brand-inkblue">{results.authority}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/50 p-6 rounded-2xl border border-brand-blush/30">
                    <h4 className="font-accent text-[10px] uppercase tracking-widest text-brand-inkblue mb-4">
                      Plain English Insight
                    </h4>
                    <p className="font-body text-brand-charcoal/80 leading-relaxed text-sm">
                      As a {results.type}, you aren't here to do all the heavy lifting. You're here
                      to see what others miss. Your role is to guide energy, not just expend it. In
                      business, this means your "strategy" is waiting for recognition before sharing
                      your wisdom.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-accent text-[10px] uppercase tracking-widest text-brand-inkblue ml-1">
                      Defined Centers
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {results.defined_centers.map((center: string) => (
                        <span
                          key={center}
                          className="bg-brand-terracotta/10 text-brand-terracotta font-accent text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-brand-terracotta/20"
                        >
                          {center}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8 space-y-4">
                  <Button className="w-full bg-brand-inkblue hover:bg-brand-terracotta text-brand-cream rounded-xl h-14 font-accent text-[10px] uppercase tracking-widest">
                    Download PDF Summary
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-brand-blush/50 text-brand-inkblue rounded-xl h-14 font-accent text-[10px] uppercase tracking-widest hover:bg-brand-cream"
                  >
                    Share to Instagram
                  </Button>
                </div>
              </div>

              {/* Visual Bodygraph SVG Placeholder/Renderer */}
              <div className="bg-white/40 p-12 rounded-[40px] border border-brand-blush/30 relative">
                <svg viewBox="0 0 200 300" className="w-full max-w-sm mx-auto drop-shadow-2xl">
                  {/* Bodygraph Outline & Centers */}
                  <g className="text-brand-inkblue">
                    {/* Head */}
                    <path
                      d="M100 20L130 60H70L100 20Z"
                      fill={results.defined_centers.includes('Head') ? '#C4674A' : 'transparent'}
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    {/* Ajna */}
                    <path
                      d="M70 70H130L100 110L70 70Z"
                      fill={results.defined_centers.includes('Ajna') ? '#C4674A' : 'transparent'}
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    {/* Throat */}
                    <rect
                      x="75"
                      y="120"
                      width="50"
                      height="40"
                      fill={results.defined_centers.includes('Throat') ? '#C4674A' : 'transparent'}
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    {/* G Center */}
                    <rect
                      x="85"
                      y="170"
                      width="30"
                      height="30"
                      transform="rotate(45 100 185)"
                      fill={
                        results.defined_centers.includes('G-Center') ? '#C4674A' : 'transparent'
                      }
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    {/* Heart */}
                    <path
                      d="M115 175L135 175L125 195L115 175Z"
                      fill={results.defined_centers.includes('Heart') ? '#C4674A' : 'transparent'}
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    {/* Sacral */}
                    <rect
                      x="80"
                      y="210"
                      width="40"
                      height="40"
                      fill={results.defined_centers.includes('Sacral') ? '#C4674A' : 'transparent'}
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    {/* Root */}
                    <rect
                      x="80"
                      y="260"
                      width="40"
                      height="30"
                      fill={results.defined_centers.includes('Root') ? '#C4674A' : 'transparent'}
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    {/* Spleen */}
                    <path
                      d="M40 210L65 210L52.5 250L40 210Z"
                      fill={results.defined_centers.includes('Spleen') ? '#C4674A' : 'transparent'}
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    {/* Solar Plexus */}
                    <path
                      d="M135 210L160 210L147.5 250L135 210Z"
                      fill={
                        results.defined_centers.includes('Solar Plexus') ? '#C4674A' : 'transparent'
                      }
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />

                    {/* Channels Connectors */}
                    <line
                      x1="100"
                      y1="60"
                      x2="100"
                      y2="70"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      strokeDasharray="2 2"
                    />
                    <line
                      x1="100"
                      y1="110"
                      x2="100"
                      y2="120"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      strokeDasharray="2 2"
                    />
                    <line
                      x1="100"
                      y1="160"
                      x2="100"
                      y2="170"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      strokeDasharray="2 2"
                    />
                  </g>
                </svg>

                <div className="absolute bottom-6 right-6 flex items-center space-x-2 text-[10px] font-accent uppercase tracking-widest text-brand-charcoal/40">
                  <Info className="w-3 h-3" />
                  <span>Personalized for You</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
