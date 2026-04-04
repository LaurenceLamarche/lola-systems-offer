import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: '60-Day Revenue System',
  description:
    'We build the system that gets you clients consistently — without you doing everything manually. Done-with-you in 4-6 weeks.',
}

export default function SixtyDayRevenueSystem() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="label-caps mb-4">Level 2 — Revenue Engine</p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="heading-display text-4xl md:text-6xl mb-6">
              60-Day <span className="italic text-teal">Revenue System</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="font-inter text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              We build the system that gets you clients consistently — without you doing everything manually.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <Link href="/book" className="btn-primary">
              Book Your Strategy Call →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* The Core Promise */}
      <section className="py-16 bg-section-dark text-cream">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-cream mb-6">
              You don't need more clients.<br />
              <span className="italic text-teal">You need a system.</span>
            </h2>
            <p className="font-inter text-lg text-cream/70 max-w-2xl mx-auto">
              Most coaches think they need more clients. But the real problem? You're doing everything manually. Leads fall through the cracks, follow-up is inconsistent, and your calendar is a mess.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-section-clay">
        <div className="container-wide">
          <AnimatedSection>
            <p className="label-caps mb-4">What We Build</p>
            <h2 className="heading-display text-3xl md:text-4xl mb-16">
              Everything to launch your client acquisition system.
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              {
                num: '01',
                title: 'Lead Capture System',
                desc: 'Landing page or embedded form (1 primary offer), lead magnet delivery automation, CRM contact tagging and segmentation, and lead source tracking.',
                highlight: false,
              },
              {
                num: '02',
                title: 'Follow-Up System',
                desc: 'Email nurture sequence (5-7 emails), SMS follow-up sequence (3-5 texts), abandoned booking reminders, and post-consult follow-up automation.',
                highlight: true,
              },
              {
                num: '03',
                title: 'Booking System',
                desc: 'Calendar integration (1-2 calendars max), automated booking confirmations, pre-call questionnaire/intake form, and reminder sequence (email + SMS).',
                highlight: false,
              },
              {
                num: '04',
                title: 'CRM Organization',
                desc: 'Pipeline setup (Lead → Qualified → Booked → Client → Closed), contact tagging system, basic reporting dashboard, and manual task triggers for things that need human touch.',
                highlight: false,
              },
              {
                num: '05',
                title: 'Optional Add-Ons',
                desc: 'Content assist (ChatGPT-style message drafts), basic outreach workflows, referral request automation, and payment/invoice reminders based on your needs.',
                highlight: false,
              },
            ].map((item, i) => (
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
                          High Impact
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
            <p className="label-caps text-center mb-4">The Process</p>
            <h2 className="heading-display text-3xl md:text-4xl text-center mb-16">
              How we build your revenue system.
            </h2>
          </AnimatedSection>

          <div className="space-y-12">
            {[
              {
                icon: '🔍',
                phase: 'Phase 1',
                title: 'Discovery & Strategy',
                subtitle: 'Week 1',
                desc: '90-min intake call (business audit), current state assessment (what's manual, what's broken, what's missing), client journey mapping (from lead → booking → client), and systems blueprint document.',
              },
              {
                icon: '⚙️',
                phase: 'Phase 2',
                title: 'System Build',
                subtitle: 'Weeks 2-4',
                desc: 'We build the core revenue engine in GoHighLevel. Lead capture, follow-up sequences, booking system, CRM organization, and optional add-ons. Weekly 60-min check-ins to keep you in the loop.',
              },
              {
                icon: '🚀',
                phase: 'Phase 3',
                title: 'Launch & Handoff',
                subtitle: 'Weeks 5-6',
                desc: 'Full system walkthrough (recorded), SOPs for common tasks, 30-day optimization roadmap, and final strategy call. We monitor your first 10-20 leads through the system to ensure everything works perfectly.',
              },
            ].map((step, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="flex gap-6 md:gap-10 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-teal/10 rounded-2xl flex items-center justify-center text-2xl">
                    {step.icon}
                  </div>
                  <div>
                    <p className="label-caps text-teal mb-2">{step.phase} · {step.subtitle}</p>
                    <h3 className="font-playfair text-2xl font-semibold mb-3">
                      {step.title}
                    </h3>
                    <p className="font-inter text-charcoal/60 leading-relaxed max-w-xl">
                      {step.desc}
                    </p>
                  </div>
                </div>
                {i < 2 && (
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
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-cream mb-4">
              4–6 weeks.
            </h2>
            <p className="font-inter text-lg text-cream/50">
              Built and launched. Consistent bookings.
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
              Choose your tier.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                tier: 'Standard',
                price: '$5,000',
                desc: 'Full system build in 4-6 weeks.',
                features: [
                  '4-6 week delivery',
                  'Weekly 60-min calls',
                  'Async support (business hours)',
                  'Core system build (lead capture → booking → CRM)',
                  'All automations tested and ready',
                ],
                cta: 'Book a Call',
                featured: false,
              },
              {
                tier: 'Premium',
                price: '$7,000',
                desc: 'Priority support + all optional add-ons.',
                features: [
                  'Same 4-6 week timeline',
                  'Weekly 90-min calls',
                  'Priority async support (same-day response)',
                  'All optional add-ons included',
                  '30-day post-launch support',
                  'Advanced integrations',
                ],
                cta: 'Book a Call',
                featured: true,
              },
            ].map((plan, i) => (
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
                        className={`font-inter text-sm flex items-center gap-3 ${
                          plan.featured ? 'text-cream/70' : 'text-charcoal/60'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
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

          <AnimatedSection delay={200}>
            <div className="text-center mt-8">
              <p className="font-inter text-sm text-charcoal/60">
                Payment plans available: Full upfront (save $500), 50/50 split, or 3 monthly payments
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="section-padding bg-section-clay">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="label-caps text-center mb-4">Perfect For</p>
            <h2 className="heading-display text-3xl md:text-4xl text-center mb-16">
              This system is built for you if...
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection delay={100}>
              <div className="card-base">
                <div className="w-12 h-12 bg-teal/10 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-3">Great Fit</h3>
                <ul className="space-y-2 font-inter text-sm text-charcoal/60">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0 mt-1.5" />
                    Female health/fitness/wellness coaches
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0 mt-1.5" />
                    1-2 calendar system (simple scheduling)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0 mt-1.5" />
                    Already getting leads (even just 5-10/month)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0 mt-1.5" />
                    Doing everything manually right now
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0 mt-1.5" />
                    Want to scale but feel overwhelmed
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="card-base">
                <div className="w-12 h-12 bg-charcoal/10 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl">❌</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-3">Not a Fit</h3>
                <ul className="space-y-2 font-inter text-sm text-charcoal/60">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-charcoal/40 flex-shrink-0 mt-1.5" />
                    Real estate agents (different sales cycle)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-charcoal/40 flex-shrink-0 mt-1.5" />
                    SaaS companies (different system needs)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-charcoal/40 flex-shrink-0 mt-1.5" />
                    Agencies with complex project management
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-charcoal/40 flex-shrink-0 mt-1.5" />
                    People who want "done-for-you" without any involvement
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-charcoal/40 flex-shrink-0 mt-1.5" />
                    People who just want templates/DIY courses
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
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
            {[
              {
                q: 'Do I need technical skills?',
                a: 'Zero. We handle all the technical setup. You focus on your zone of genius — we handle the systems.',
              },
              {
                q: 'What platform do you build on?',
                a: 'We build in GoHighLevel (GHL) because it\'s the best all-in-one platform for coaches. If you\'re not on it yet, we\'ll get you set up (included).',
              },
              {
                q: 'What if I tried automations before and they didn\'t work?',
                a: 'That\'s because they weren\'t built for YOUR business. We don\'t use templates. We map your client journey and build what actually fits.',
              },
              {
                q: 'What if I don\'t have enough leads to make this worth it?',
                a: 'This system makes your CURRENT leads convert better. Even if you\'re only getting 5-10 leads/month, we\'ll help more of them book. Then we scale from there.',
              },
              {
                q: 'Can I just do this myself in GoHighLevel?',
                a: 'You could. But it\'ll take you 3-6 months, and you\'ll make expensive mistakes. We\'ve done this 20+ times. We get it right in 4 weeks.',
              },
            ].map((item, i) => (
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

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-display text-3xl md:text-5xl mb-6">
              Your revenue system.<br />
              <span className="italic text-teal">Built in weeks, not months.</span>
            </h2>
            <p className="font-inter text-lg text-charcoal/60 max-w-xl mx-auto mb-10">
              Stop doing everything manually. Start booking clients consistently. Let&apos;s build your system together.
            </p>
            <Link href="/book" className="btn-primary">
              Book Your Strategy Call →
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
