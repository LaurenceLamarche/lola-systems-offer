import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { BrainIcon, SparklesIcon, ZapIcon } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Not just a coach. Not just a developer. A Systems Architect for human performance and business.',
}

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="label-caps mb-4">About</p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="heading-display text-4xl md:text-6xl mb-8">
              Not just a coach.<br />
              Not just a developer.<br />
              <span className="italic text-teal">A Systems Architect.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="max-w-2xl">
              <p className="font-inter text-lg text-charcoal/70 leading-relaxed mb-6">
                We&apos;re Aligned Systems. A team of systems thinkers and builders. We
                help people go from scattered ideas to scalable businesses
                through structured, intelligent systems.
              </p>
              <p className="font-inter text-lg text-charcoal/70 leading-relaxed mb-6">
                Our background spans health &amp; wellness, longevity, and
                high-performance coaching. We&apos;ve seen firsthand how the
                right systems transform not just businesses. But lives.
              </p>
              <p className="font-inter text-lg text-charcoal/70 leading-relaxed">
                We believe in building with intention. Every funnel, every
                automation, every system we create is designed to work{' '}
                <em>for you</em>, so you can focus on what you do best.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Photo Placeholder */}
      <section className="pb-20">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="aspect-[16/9] md:aspect-[21/9] bg-sage/30 rounded-2xl flex items-center justify-center border border-sage/50">
              <p className="font-inter text-sm text-charcoal/30">
                [ Your photo here ]
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-section-clay">
        <div className="container-wide">
          <AnimatedSection>
            <p className="label-caps mb-4">What We Stand For</p>
            <h2 className="heading-display text-3xl md:text-4xl mb-16">
              The principles behind the systems.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Clarity Over Complexity',
                desc: 'Simple systems that actually work beat complicated ones that collect dust. We build what you need. Nothing more, nothing less.',
              },
              {
                title: 'Structure Meets Flow',
                desc: 'Business should feel powerful and aligned. The right systems create space for creativity, not stress.',
              },
              {
                title: 'Results, Not Theory',
                desc: 'Everything we build is designed to convert, to save time, to make money. No fluff. No busywork. Real outcomes.',
              },
              {
                title: 'Feminine Intelligence',
                desc: 'Intuition and data aren\'t opposites. We combine strategic thinking with deep understanding of how people actually work.',
              },
              {
                title: 'Ownership',
                desc: 'Your business should work for you, not the other way around. We build systems that give you back your time and control.',
              },
              {
                title: 'Excellence, Not Burnout',
                desc: 'High performance doesn\'t mean grinding 24/7. Smart systems let you operate at your best without burning out.',
              },
            ].map((val, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="card-base hover-lift h-full">
                  <h3 className="font-playfair text-lg font-semibold mb-3">
                    {val.title}
                  </h3>
                  <p className="font-inter text-sm text-charcoal/60 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* The Edge */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="label-caps mb-4">Our Unique Edge</p>
            <h2 className="heading-display text-3xl md:text-5xl mb-8">
              Where strategy meets <span className="italic text-teal">execution.</span>
            </h2>
            <p className="font-inter text-lg text-charcoal/60 max-w-2xl mx-auto leading-relaxed mb-12">
              Most coaches can&apos;t build. Most developers can&apos;t
              strategize. Most marketers can&apos;t do either. We do all three.
              Which means your system isn&apos;t just built, it&apos;s built
              <em> right</em>.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Strategy', Icon: BrainIcon },
                { label: 'Design', Icon: SparklesIcon },
                { label: 'Technology', Icon: ZapIcon },
              ].map((skill, i) => (
                <div
                  key={i}
                  className="card-base p-6 text-center hover-lift"
                >
                  <div className="flex justify-center mb-3">
                    <skill.Icon className="w-8 h-8 text-teal" />
                  </div>
                  <p className="font-inter text-sm font-medium">{skill.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Connect */}
      <section className="section-padding bg-section-dark text-cream">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="label-caps text-teal/80 mb-4">Let&apos;s Connect</p>
            <h2 className="font-playfair font-bold text-3xl md:text-5xl text-cream mb-6">
              Follow the journey.
            </h2>
            <p className="font-inter text-lg text-cream/50 max-w-xl mx-auto mb-8">
              We share insights on longevity, business systems, and building a
              life on your terms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.instagram.com/lola.systems"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-teal text-charcoal font-inter font-semibold px-8 py-4 rounded-[10px] hover:bg-cream transition-all duration-300"
              >
                @lola.systems on Instagram →
              </a>
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 border border-cream/30 text-cream font-inter font-medium px-8 py-4 rounded-[10px] hover:bg-cream/10 transition-all duration-300"
              >
                Book a Call
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
