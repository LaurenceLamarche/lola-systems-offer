import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Foundation OS',
  description:
    'Your first revenue system — built to convert. Offer structuring, funnel, payments, booking, and automation in 7–14 days.',
}

export default function FoundationOS() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="label-caps mb-4">Level 1 — Activation</p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="heading-display text-4xl md:text-6xl mb-6">
              Foundation <span className="italic text-gold">OS</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="font-inter text-lg md:text-xl text-brown/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Your first revenue system — built to convert. Everything you need
              to go from scattered ideas to signed clients.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <Link href="/book" className="btn-primary">
              Book Your Foundation Call →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding bg-section-clay">
        <div className="container-wide">
          <AnimatedSection>
            <p className="label-caps mb-4">What&apos;s Included</p>
            <h2 className="heading-display text-3xl md:text-4xl mb-16">
              Everything to launch your business system.
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              {
                num: '01',
                title: 'Offer Structuring',
                desc: 'This is where the magic starts. We clarify your offer, define your pricing, and position it for maximum conversion. Most entrepreneurs skip this — and it costs them everything.',
                highlight: true,
              },
              {
                num: '02',
                title: 'Funnel System',
                desc: 'One complete conversion funnel: landing page, offer or booking page, and thank-you page. Clean, professional, built to convert — not just look pretty.',
              },
              {
                num: '03',
                title: 'Monetization Setup',
                desc: 'Stripe integration with your product or service configured and ready. Accept payments from day one — no more "DM me for details."',
              },
              {
                num: '04',
                title: 'Booking System',
                desc: 'If you&apos;re service-based: calendar setup with automated confirmations, reminders, rescheduling, and cancellation logic. Your clients book themselves.',
              },
              {
                num: '05',
                title: 'Smart Automations',
                desc: 'Email confirmations, lead capture, reminder sequences, and product/service delivery — all running while you sleep.',
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div
                  className={`rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-6 ${
                    item.highlight
                      ? 'bg-white border-2 border-gold/30'
                      : 'card-base'
                  }`}
                >
                  <div className="flex-shrink-0">
                    <span className="font-playfair text-4xl font-bold text-gold/30">
                      {item.num}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold mb-3">
                      {item.title}
                      {item.highlight && (
                        <span className="ml-3 text-xs bg-gold/10 text-gold px-3 py-1 rounded-full font-inter font-medium">
                          High Value
                        </span>
                      )}
                    </h3>
                    <p className="font-inter text-brown/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* The Method */}
      <section className="section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="label-caps text-center mb-4">The Method</p>
            <h2 className="heading-display text-3xl md:text-4xl text-center mb-16">
              Assess. Align. <span className="italic text-gold">Activate.</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-12">
            {[
              {
                icon: '🔍',
                phase: 'Phase 1',
                title: 'Assess',
                desc: 'We audit your business and offer. Deep-dive call to understand where you are, what you have, and what needs to happen. Information gathering — logos, testimonials, product details.',
              },
              {
                icon: '🎯',
                phase: 'Phase 2',
                title: 'Align',
                desc: 'We structure your system for conversion. First draft presented, feedback incorporated, revisions made. System integrations connected — Stripe, calendar, automations.',
              },
              {
                icon: '⚙️',
                phase: 'Phase 3',
                title: 'Activate',
                desc: 'Your system goes live. Funnel tested, payments verified, booking confirmed. You&apos;re ready to receive leads and sign clients.',
              },
            ].map((step, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="flex gap-6 md:gap-10 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-2xl">
                    {step.icon}
                  </div>
                  <div>
                    <p className="label-caps text-gold mb-2">{step.phase}</p>
                    <h3 className="font-playfair text-2xl font-semibold mb-3">
                      {step.title}
                    </h3>
                    <p className="font-inter text-brown/60 leading-relaxed max-w-xl">
                      {step.desc}
                    </p>
                  </div>
                </div>
                {i < 2 && (
                  <div className="ml-8 h-12 border-l-2 border-dashed border-gold/20" />
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-section-dark text-ivory">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="label-caps text-gold/80 mb-4">Timeline</p>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-ivory mb-4">
              7–14 days.
            </h2>
            <p className="font-inter text-lg text-ivory/50">
              Built and launched. Start signing clients.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding">
        <div className="container-wide">
          <AnimatedSection>
            <p className="label-caps text-center mb-4">Investment</p>
            <h2 className="heading-display text-3xl md:text-4xl text-center mb-16">
              Choose your path.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tier: 'DIY',
                price: '$97–$297',
                desc: 'Templates & guides to build it yourself.',
                features: [
                  'Funnel templates',
                  'Setup guides',
                  'Email templates',
                  'Self-paced',
                ],
                cta: 'Get Started',
                featured: false,
              },
              {
                tier: 'Done With You',
                price: '$500–$1,500',
                desc: 'We build it together. Strategy + execution.',
                features: [
                  'Strategy calls',
                  'Guided build',
                  'Offer structuring',
                  'Full system setup',
                  'Revisions included',
                ],
                cta: 'Book a Call',
                featured: true,
              },
              {
                tier: 'Done For You',
                price: '$2,000–$5,000',
                desc: 'We handle everything. You show up and launch.',
                features: [
                  'Complete system build',
                  'Premium design',
                  'Advanced automations',
                  'Priority support',
                  'Launch strategy',
                  'Post-launch check-in',
                ],
                cta: 'Apply Now',
                featured: false,
              },
            ].map((plan, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div
                  className={`rounded-2xl p-8 h-full flex flex-col ${
                    plan.featured
                      ? 'bg-brown text-ivory border-2 border-gold/30 relative'
                      : 'card-base'
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-brown text-xs font-inter font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <p
                    className={`label-caps mb-2 ${
                      plan.featured ? 'text-gold' : ''
                    }`}
                  >
                    {plan.tier}
                  </p>
                  <p
                    className={`font-playfair text-3xl font-bold mb-3 ${
                      plan.featured ? 'text-ivory' : 'text-brown'
                    }`}
                  >
                    {plan.price}
                  </p>
                  <p
                    className={`font-inter text-sm mb-6 ${
                      plan.featured ? 'text-ivory/60' : 'text-brown/60'
                    }`}
                  >
                    {plan.desc}
                  </p>
                  <hr
                    className={`mb-6 ${
                      plan.featured ? 'border-ivory/10' : 'border-clay/50'
                    }`}
                  />
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((f, j) => (
                      <li
                        key={j}
                        className={`font-inter text-sm flex items-center gap-3 ${
                          plan.featured ? 'text-ivory/70' : 'text-brown/60'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/book"
                    className={`text-center font-inter font-semibold px-6 py-3.5 rounded-full transition-all duration-300 ${
                      plan.featured
                        ? 'bg-gold text-brown hover:bg-ivory'
                        : 'bg-brown text-ivory hover:bg-gold hover:text-brown'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-section-clay">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="label-caps text-center mb-4">FAQ</p>
            <h2 className="heading-display text-3xl md:text-4xl text-center mb-16">
              Common questions.
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              {
                q: 'What if I don\'t have my offer figured out yet?',
                a: 'That\'s exactly what Phase 1 is for. Offer structuring is the first thing we do — we\'ll clarify what you\'re selling, who you\'re selling to, and how to price it before we build anything.',
              },
              {
                q: 'Do I need technical skills?',
                a: 'Zero. Whether you choose "Done With You" or "Done For You," I handle all the technical setup. You focus on your zone of genius — I handle the systems.',
              },
              {
                q: 'What platform do you build on?',
                a: 'Primarily Go High Level (GHL), but the system can be adapted to other platforms. We\'ll discuss what makes most sense for your business on the call.',
              },
              {
                q: 'How long does it take?',
                a: '7–14 days from kickoff to launch. The exact timeline depends on your tier and how quickly we get your content and assets.',
              },
              {
                q: 'What happens after Foundation OS?',
                a: 'Once your system is live and generating results, you can level up to Ascension — where we add advanced automation, AI integration, and scale your operations.',
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <details className="card-base group">
                  <summary className="flex items-center justify-between cursor-pointer p-6">
                    <span className="font-inter font-medium text-brown pr-4">
                      {item.q}
                    </span>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 -mt-2">
                    <p className="font-inter text-sm text-brown/60 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-display text-3xl md:text-5xl mb-6">
              Your first system.<br />
              <span className="italic text-gold">Built in days, not months.</span>
            </h2>
            <p className="font-inter text-lg text-brown/60 max-w-xl mx-auto mb-10">
              Stop overthinking. Start building. Book your Foundation Call and
              let&apos;s get your business running.
            </p>
            <Link href="/book" className="btn-primary">
              Book Your Foundation Call →
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
