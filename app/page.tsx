import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-30" />
        <div className="container-narrow text-center relative z-10 pt-24 pb-20">
          <AnimatedSection>
            <p className="label-caps mb-6">Systems Architect</p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="heading-display text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
              Build your first real<br />
              <span className="text-teal italic">business system.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="font-inter text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Foundation OS gives you everything you need to start signing clients
              — funnel, payments, booking, and automation — built for you or with you.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="btn-primary">
                Book Your Foundation Call
                <span>→</span>
              </Link>
              <Link href="/foundation-os" className="btn-secondary">
                Explore Foundation OS
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-section-clay">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="label-caps mb-4">The Problem</p>
            <h2 className="heading-display text-3xl md:text-5xl mb-8">
              Right now, your business<br />is <span className="italic text-sage">fragmented.</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              { pain: 'You have an offer', gap: 'but nowhere to sell it' },
              { pain: 'You have ideas', gap: 'but no system' },
              { pain: "You're posting", gap: 'but not converting' },
              { pain: "You're busy", gap: 'but not making consistent money' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="card-base p-6">
                  <p className="font-inter text-base">
                    <span className="font-semibold text-charcoal">{item.pain}</span>
                    <span className="text-charcoal/50">… {item.gap}</span>
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <p className="font-playfair text-2xl md:text-3xl text-center italic text-charcoal/80">
              You don&apos;t need more effort.<br />
              <span className="text-teal">You need a system.</span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="section-padding">
        <div className="container-wide">
          <AnimatedSection>
            <p className="label-caps text-center mb-4">The Solution</p>
            <h2 className="heading-display text-3xl md:text-5xl text-center mb-6">
              Foundation OS
            </h2>
            <p className="font-inter text-lg text-charcoal/60 text-center max-w-2xl mx-auto mb-16">
              Your complete business infrastructure — from first lead to first client.
            </p>
          </AnimatedSection>

          {/* Visual Flow */}
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 mb-20">
              {['Lead', 'Funnel', 'Payment', 'Booking', 'Client'].map(
                (step, i) => (
                  <div key={step} className="flex items-center gap-2 md:gap-2">
                    <div className="bg-white border-2 border-teal/40 rounded-2xl px-6 py-4 text-center hover-lift">
                      <p className="font-playfair text-lg font-semibold text-charcoal">
                        {step}
                      </p>
                    </div>
                    {i < 4 && (
                      <span className="text-teal text-2xl hidden md:block">→</span>
                    )}
                  </div>
                )
              )}
            </div>
          </AnimatedSection>

          {/* Deliverables Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🎯',
                title: 'Offer Structuring',
                desc: 'Clarify your offer, define pricing, and position for conversion.',
              },
              {
                icon: '🔗',
                title: 'Funnel System',
                desc: 'Landing page, offer page, and thank-you page — built to convert.',
              },
              {
                icon: '💰',
                title: 'Monetization Setup',
                desc: 'Stripe integration and product or service setup — ready to collect.',
              },
              {
                icon: '📅',
                title: 'Booking System',
                desc: 'Calendar, automated confirmations, reminders, and rescheduling.',
              },
              {
                icon: '⚡',
                title: 'Smart Automations',
                desc: 'Email confirmations, lead capture, reminder sequences, and delivery.',
              },
              {
                icon: '🚀',
                title: 'Launch Ready',
                desc: 'Built and launched in 7–14 days. Start signing clients immediately.',
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="card-base hover-lift h-full">
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h3 className="font-playfair text-lg font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="font-inter text-sm text-charcoal/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Two Tiers */}
      <section className="section-padding bg-section-dark text-cream">
        <div className="container-wide">
          <AnimatedSection>
            <p className="label-caps text-center mb-4">Your Journey</p>
            <h2 className="font-playfair font-bold text-3xl md:text-5xl text-center text-cream mb-4">
              Two levels. <span className="italic text-teal">One transformation.</span>
            </h2>
            <p className="font-inter text-lg text-cream/50 text-center max-w-2xl mx-auto mb-16">
              Start where you are. Scale when you&apos;re ready.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="border border-cream/10 rounded-2xl p-8 md:p-10 hover:border-teal/40 transition-all duration-300 h-full">
                <p className="label-caps text-teal/80 mb-4">Level 1</p>
                <h3 className="font-playfair text-3xl font-bold text-cream mb-4">
                  Activation
                </h3>
                <p className="font-inter text-cream/50 mb-6 leading-relaxed">
                  Build your first system. Get your infrastructure live and start
                  accepting clients.
                </p>
                <hr className="gold-rule mb-6" />
                <ul className="space-y-3 mb-8">
                  {[
                    'Offer structuring & pricing',
                    '1 conversion funnel',
                    'Stripe integration',
                    'Booking system',
                    'Basic automations',
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="font-inter text-sm text-cream/70 flex items-center gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/foundation-os"
                  className="btn-ghost text-teal hover:text-cream"
                >
                  Learn more →
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="border border-teal/30 rounded-2xl p-8 md:p-10 bg-teal/5 hover:border-teal/60 transition-all duration-300 h-full">
                <p className="label-caps text-teal mb-4">Level 2</p>
                <h3 className="font-playfair text-3xl font-bold text-cream mb-4">
                  Ascension
                </h3>
                <p className="font-inter text-cream/50 mb-6 leading-relaxed">
                  Turn your business into a machine that runs, scales, and
                  converts — with AI and advanced automation.
                </p>
                <hr className="gold-rule mb-6" />
                <ul className="space-y-3 mb-8">
                  {[
                    'Full business audit',
                    'Advanced GHL workflows & CRM',
                    'AI integration & auto responses',
                    'Conversion tracking & KPIs',
                    'Monthly optimization',
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="font-inter text-sm text-cream/70 flex items-center gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/ascension"
                  className="btn-ghost text-teal hover:text-cream"
                >
                  Learn more →
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="label-caps text-center mb-4">Client Results</p>
            <h2 className="heading-display text-3xl md:text-4xl text-center mb-16">
              What they&apos;re saying
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  'I went from scattered ideas to a fully functional system in 10 days. I booked my first client the same week.',
                name: 'Client Name',
                role: 'Service-Based Entrepreneur',
              },
              {
                quote:
                  "She didn't just build me a funnel — she restructured my entire offer and now it actually sells.",
                name: 'Client Name',
                role: 'Online Coach',
              },
            ].map((t, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="card-base p-8">
                  <p className="font-playfair italic text-lg text-charcoal/80 mb-6 leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-inter text-sm font-semibold text-charcoal">
                      {t.name}
                    </p>
                    <p className="font-inter text-xs text-charcoal/50">{t.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-section-clay">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-display text-3xl md:text-5xl mb-6">
              Stop guessing.<br />
              <span className="italic text-teal">Start building.</span>
            </h2>
            <p className="font-inter text-lg text-charcoal/60 max-w-xl mx-auto mb-10">
              Your business doesn&apos;t need another course. It needs a system.
              Let&apos;s build yours.
            </p>
            <Link href="/book" className="btn-primary">
              Book Your Foundation Call
              <span>→</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
