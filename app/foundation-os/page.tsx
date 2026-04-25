import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { SearchIcon, TargetIcon, SettingsIcon } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Foundation OS',
  description:
    'Your first system that brings in clients, automatically. Capture leads, book clients, and get paid, without doing everything manually.',
}

const flowSteps = [
  'Lead',
  'Landing Page',
  'Booking / Payment',
  'Confirmation',
  'Automated Follow-Up',
]

const deliverables = [
  {
    num: '01',
    title: 'Offer Structuring',
    desc: 'We refine your offer, pricing, and positioning so it actually converts. Most businesses skip this step. It\'s the reason their funnel doesn\'t work.',
    highlight: true,
  },
  {
    num: '02',
    title: 'Conversion Funnel',
    desc: 'A complete funnel system: landing page, offer or booking page, and thank-you page. Built to convert, not just look good.',
  },
  {
    num: '03',
    title: 'Monetization Setup',
    desc: 'Stripe integration configured and ready. You can accept payments immediately.',
  },
  {
    num: '04',
    title: 'Booking System',
    desc: 'If you\'re service-based: calendar setup, automated confirmations, reminders, and rescheduling logic. Clients book themselves.',
  },
  {
    num: '05',
    title: 'Smart Automations',
    desc: 'Core automations that run your backend: lead capture, email confirmations, reminder sequences, and basic follow-ups. Your system works even when you\'re not.',
  },
]

const phases = [
  {
    Icon: SearchIcon,
    phase: 'Phase 1',
    title: 'Assess',
    desc: 'We audit your business, your offer, and your current setup. We identify gaps, friction points, and opportunities.',
  },
  {
    Icon: TargetIcon,
    phase: 'Phase 2',
    title: 'Align',
    desc: 'We design your system for conversion: funnel structure, integrations, automations. You review. We refine.',
  },
  {
    Icon: SettingsIcon,
    phase: 'Phase 3',
    title: 'Activate',
    desc: 'Your system goes live: fully tested, payments verified, booking flow confirmed. You\'re ready to receive leads and sign clients.',
  },
]

const tiers = [
  {
    tier: 'Foundation OS: Core System',
    price: 'Starting at $2,000',
    monthly: '$97/month',
    monthlyDesc: 'System hosting, maintenance, and basic automation support.',
    desc: 'Your first revenue system. Built to launch and convert.',
    features: [
      'Offer structuring',
      'Full funnel (landing + booking + thank you)',
      'Stripe setup',
      'Booking system',
      'Core automations',
    ],
    cta: 'Book a Call',
    featured: false,
  },
  {
    tier: 'Foundation OS: Ascension System',
    price: 'Starting at $5,000',
    monthly: '$297/month',
    monthlyDesc: 'Advanced automation support, optimization, and ongoing system management.',
    desc: 'For businesses ready to scale with automation, not just launch.',
    features: [
      'Everything in Core, plus:',
      'Advanced automations (lead nurturing, reactivation)',
      'Multi-step email and SMS sequences',
      'Conversion optimization layers',
      'Client journey automation (onboarding, follow-up, delivery)',
      'Priority build and deeper strategy integration',
    ],
    cta: 'Book a Call',
    featured: true,
  },
]

const faqs = [
  {
    q: 'What if I don\'t have my offer figured out yet?',
    a: 'We help you structure and position it during the process.',
  },
  {
    q: 'Do I need technical skills?',
    a: 'No. We handle the system. You focus on your business.',
  },
  {
    q: 'What platform do you build on?',
    a: 'We use reliable, scalable tools based on your needs.',
  },
  {
    q: 'How long does it take?',
    a: 'Typically 7–14 days from start to launch.',
  },
  {
    q: 'What happens after Foundation OS?',
    a: 'You can continue optimizing, scaling, and expanding your system with us.',
  },
]

export default function FoundationOS() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="label-caps mb-4">Foundation OS</p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="heading-display text-3xl md:text-5xl leading-[1.15] mb-6">
              Your first system that brings in clients,<br />
              <span className="italic text-teal">automatically.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="font-inter text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              We turn your business into a streamlined, revenue-generating system. Capture leads, book clients, and get paid, without doing everything manually.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="btn-primary">
                Book Your Foundation Call
                <span>→</span>
              </Link>
              <a href="#how-it-works" className="btn-secondary">
                See How It Works ↓
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Positioning Strip */}
      <section className="py-12 bg-section-clay">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="font-playfair italic text-xl md:text-2xl text-charcoal/80 leading-relaxed">
              We help coaches and service-based business owners turn their chaos into a simple, scalable system that consistently brings in clients.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Outcome */}
      <section className="section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="label-caps mb-4">The Outcome</p>
            <h2 className="heading-display text-3xl md:text-5xl mb-8">
              What you <span className="italic text-teal">actually get.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="font-inter text-lg text-charcoal/70 mb-8 leading-relaxed">
              This isn&apos;t just a website. It&apos;s a complete system designed to:
            </p>
          </AnimatedSection>
          <div className="space-y-3 mb-10">
            {[
              'Capture leads',
              'Convert them into booked calls or purchases',
              'Automate follow-ups',
              'Deliver your service or next steps seamlessly',
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="flex items-center gap-4 card-base p-5">
                  <span className="w-2 h-2 rounded-full bg-teal flex-shrink-0" />
                  <p className="font-inter text-base md:text-lg">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={300}>
            <p className="font-playfair italic text-xl md:text-2xl text-charcoal/80 leading-relaxed">
              Your business stops relying on manual work, and starts running like a system.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* System Visual */}
      <section id="how-it-works" className="section-padding bg-section-dark text-cream">
        <div className="container-wide">
          <AnimatedSection>
            <p className="label-caps text-teal/80 text-center mb-4">The Flow</p>
            <h2 className="font-playfair font-bold text-3xl md:text-5xl text-cream text-center mb-16">
              Your system, <span className="italic text-teal">simplified.</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            {/* Desktop flow */}
            <div className="hidden md:flex items-stretch gap-2 max-w-5xl mx-auto">
              {flowSteps.map((step, i) => (
                <div key={i} className="flex items-stretch flex-1 gap-2">
                  <div className="flex-1 border border-cream/15 rounded-2xl p-6 text-center bg-cream/5">
                    <p className="label-caps text-teal/80 mb-2">Step {i + 1}</p>
                    <p className="font-playfair text-base font-semibold text-cream">{step}</p>
                  </div>
                  {i < flowSteps.length - 1 && (
                    <div className="flex items-center text-teal text-2xl flex-shrink-0">→</div>
                  )}
                </div>
              ))}
            </div>
            {/* Mobile flow */}
            <div className="md:hidden flex flex-col gap-3 max-w-md mx-auto">
              {flowSteps.map((step, i) => (
                <div key={i}>
                  <div className="border border-cream/15 rounded-2xl p-5 text-center bg-cream/5">
                    <p className="label-caps text-teal/80 mb-2">Step {i + 1}</p>
                    <p className="font-playfair text-base font-semibold text-cream">{step}</p>
                  </div>
                  {i < flowSteps.length - 1 && (
                    <div className="flex justify-center text-teal text-xl mt-2">↓</div>
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="font-inter text-center text-cream/60 mt-12 max-w-xl mx-auto">
              Every step is connected. No leaks. No missed opportunities.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-section-clay">
        <div className="container-wide">
          <AnimatedSection>
            <p className="label-caps mb-4">What&apos;s Included</p>
            <h2 className="heading-display text-3xl md:text-4xl mb-16">
              Everything you need to launch your system.
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {deliverables.map((item, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div
                  className={`rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-6 ${
                    item.highlight
                      ? 'bg-white border-2 border-teal/30'
                      : 'card-base'
                  }`}
                >
                  <div className="flex-shrink-0">
                    <span className="font-playfair text-4xl font-bold text-teal/30">
                      {item.num}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold mb-3">
                      {item.title}
                      {item.highlight && (
                        <span className="ml-3 text-xs bg-teal/10 text-teal px-3 py-1 rounded-full font-inter font-medium">
                          High Value
                        </span>
                      )}
                    </h3>
                    <p className="font-inter text-charcoal/60 leading-relaxed">
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
              How we build <span className="italic text-teal">your system.</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-12">
            {phases.map((step, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="flex gap-6 md:gap-10 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-teal/10 rounded-2xl flex items-center justify-center">
                    <step.Icon className="w-8 h-8 text-teal" />
                  </div>
                  <div>
                    <p className="label-caps text-teal mb-2">{step.phase}</p>
                    <h3 className="font-playfair text-2xl font-semibold mb-3">
                      {step.title}
                    </h3>
                    <p className="font-inter text-charcoal/60 leading-relaxed max-w-xl">
                      {step.desc}
                    </p>
                  </div>
                </div>
                {i < phases.length - 1 && (
                  <div className="ml-8 h-12 border-l-2 border-dashed border-teal/20" />
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-section-dark text-cream">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="label-caps text-teal/80 mb-4">Timeline</p>
            <h2 className="font-playfair font-bold text-3xl md:text-5xl text-cream mb-4">
              Built in days, <span className="italic text-teal">not months.</span>
            </h2>
            <p className="font-inter text-lg text-cream/70 mb-3">
              7–14 days from start to launch.
            </p>
            <p className="font-inter text-base text-cream/50 max-w-xl mx-auto">
              Most clients begin receiving inbound leads shortly after launch, depending on traffic and offer quality.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding">
        <div className="container-wide">
          <AnimatedSection>
            <p className="label-caps text-center mb-4">Investment</p>
            <h2 className="heading-display text-3xl md:text-4xl text-center mb-4">
              Choose your <span className="italic text-teal">system.</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-16">
            {tiers.map((plan, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div
                  className={`rounded-2xl p-8 h-full flex flex-col ${
                    plan.featured
                      ? 'bg-charcoal text-cream border-2 border-teal/30 relative'
                      : 'card-base'
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal text-charcoal text-xs font-inter font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <p
                    className={`label-caps mb-2 ${
                      plan.featured ? 'text-teal' : ''
                    }`}
                  >
                    {plan.tier}
                  </p>
                  <p
                    className={`font-playfair text-3xl font-bold mb-3 ${
                      plan.featured ? 'text-cream' : 'text-charcoal'
                    }`}
                  >
                    {plan.price}
                  </p>
                  <p
                    className={`font-inter text-sm mb-6 ${
                      plan.featured ? 'text-cream/60' : 'text-charcoal/60'
                    }`}
                  >
                    {plan.desc}
                  </p>
                  <hr
                    className={`mb-6 ${
                      plan.featured ? 'border-cream/10' : 'border-sage/50'
                    }`}
                  />
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((f, j) => (
                      <li
                        key={j}
                        className={`font-inter text-sm flex items-start gap-3 ${
                          plan.featured ? 'text-cream/70' : 'text-charcoal/60'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0 mt-2" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div
                    className={`p-4 rounded-xl mb-6 ${
                      plan.featured
                        ? 'bg-cream/5 border border-cream/10'
                        : 'bg-teal/5 border border-teal/20'
                    }`}
                  >
                    <p
                      className={`font-playfair text-base font-semibold mb-1 ${
                        plan.featured ? 'text-cream' : 'text-charcoal'
                      }`}
                    >
                      Monthly: {plan.monthly}
                    </p>
                    <p
                      className={`font-inter text-xs leading-relaxed ${
                        plan.featured ? 'text-cream/50' : 'text-charcoal/50'
                      }`}
                    >
                      {plan.monthlyDesc}
                    </p>
                  </div>
                  <Link
                    href="/book"
                    className={`text-center font-inter font-semibold px-6 py-3.5 rounded-[10px] transition-all duration-300 ${
                      plan.featured
                        ? 'bg-teal text-charcoal hover:bg-cream'
                        : 'bg-charcoal text-cream hover:bg-teal hover:text-charcoal'
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

      {/* Decision Support */}
      <section className="section-padding bg-section-clay">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="label-caps mb-4">Decision Support</p>
            <h2 className="heading-display text-3xl md:text-4xl mb-8">
              Not sure which one <span className="italic text-teal">you need?</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="font-inter text-lg text-charcoal/70 max-w-2xl mx-auto mb-4 leading-relaxed">
              If you&apos;re just getting started or need a clean system to begin, Core is enough.
            </p>
            <p className="font-inter text-lg text-charcoal/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              If you already have traction and want to automate and scale, Ascension is the right move.
            </p>
            <p className="font-playfair italic text-xl text-charcoal/80">
              We&apos;ll guide you on the call.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="label-caps text-center mb-4">FAQ</p>
            <h2 className="heading-display text-3xl md:text-4xl text-center mb-16">
              Common questions.
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((item, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <details className="card-base group">
                  <summary className="flex items-center justify-between cursor-pointer p-6">
                    <span className="font-inter font-medium text-charcoal pr-4">
                      {item.q}
                    </span>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center text-teal text-sm transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 -mt-2">
                    <p className="font-inter text-sm text-charcoal/60 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-section-dark text-cream">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="font-playfair font-bold text-3xl md:text-5xl text-cream mb-6">
              Stop overthinking.<br />
              <span className="italic text-teal">Start building.</span>
            </h2>
            <p className="font-inter text-lg text-cream/60 max-w-xl mx-auto mb-10 leading-relaxed">
              Your business doesn&apos;t need more ideas.<br />
              It needs a system that works.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-teal text-charcoal font-inter font-semibold px-8 py-4 rounded-[10px] hover:bg-cream transition-all duration-300"
            >
              Book Your Foundation Call →
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
