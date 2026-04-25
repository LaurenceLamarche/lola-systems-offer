import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { SearchIcon, SettingsIcon, BotIcon, ChartIcon } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Ascension',
  description:
    'Turn your business into a machine. Advanced automation, AI integration, and scale. For businesses ready to grow.',
}

export default function Ascension() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-section-dark text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-10" />
        <div className="container-narrow text-center relative z-10">
          <AnimatedSection>
            <p className="label-caps text-teal mb-4">Level 2: Scale</p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="font-playfair font-bold text-4xl md:text-6xl text-cream mb-6">
              Ascension <span className="italic text-teal">Systems</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="font-inter text-lg md:text-xl text-cream/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Your business is running. Now it&apos;s time to make it powerful.
              Advanced automation, AI integration, and operational scale.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-teal text-charcoal font-inter font-semibold px-8 py-4 rounded-full hover:bg-cream transition-all duration-300"
            >
              Apply for Ascension →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* The Journey */}
      <section className="section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="label-caps mb-4">The Journey</p>
            <h2 className="heading-display text-3xl md:text-4xl mb-6">
              From foundation to <span className="italic text-teal">empire.</span>
            </h2>
            <p className="font-inter text-lg text-charcoal/60 max-w-2xl leading-relaxed mb-12">
              Ascension is for businesses that already have a working system.
              Now we optimize, automate, and scale it into something that runs
              without you.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="card-base p-8 md:p-10 bg-teal/5 border-teal/20">
              <p className="font-playfair italic text-xl text-charcoal/80 leading-relaxed">
                &ldquo;Now that your system is live, I can show you exactly
                where you&apos;re leaving money on the table.&rdquo;
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-padding bg-section-clay">
        <div className="container-wide">
          <AnimatedSection>
            <p className="label-caps mb-4">What You Get</p>
            <h2 className="heading-display text-3xl md:text-4xl mb-16">
              Enterprise-grade systems for growing businesses.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                Icon: SearchIcon,
                title: 'Full Business Audit',
                items: [
                  'Offer analysis & positioning',
                  'Funnel performance review',
                  'Client journey mapping',
                  'Revenue leak identification',
                ],
              },
              {
                Icon: SettingsIcon,
                title: 'Systems Build',
                items: [
                  'Advanced GHL workflows',
                  'CRM structure & pipeline',
                  'Sales automation sequences',
                  'Pipeline optimization',
                ],
              },
              {
                Icon: BotIcon,
                title: 'AI Integration',
                items: [
                  'AI-powered check-ins',
                  'Automated lead responses',
                  'Lead qualification bots',
                  'Content generation systems',
                ],
              },
              {
                Icon: ChartIcon,
                title: 'Optimization Layer',
                items: [
                  'Conversion tracking',
                  'KPI dashboards',
                  'A/B testing frameworks',
                  'Iteration & improvement cycles',
                ],
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="card-base p-8 h-full hover-lift">
                  <div className="mb-4">
                    <item.Icon className="w-8 h-8 text-teal" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-4">
                    {item.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {item.items.map((li, j) => (
                      <li
                        key={j}
                        className="font-inter text-sm text-charcoal/60 flex items-center gap-3"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding">
        <div className="container-wide">
          <AnimatedSection>
            <p className="label-caps text-center mb-4">Investment</p>
            <h2 className="heading-display text-3xl md:text-4xl text-center mb-16">
              Scale with precision.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tier: 'Audit Only',
                price: '$500–$1,500',
                desc: 'Deep-dive into your business. Find the gaps and opportunities.',
                features: [
                  'Full business audit',
                  'Revenue leak report',
                  'Priority recommendations',
                  'Action plan delivered',
                ],
              },
              {
                tier: 'Full Build',
                price: '$3,000–$10,000+',
                desc: 'Complete systems overhaul. Automation, AI, and optimization.',
                features: [
                  'Everything in Audit',
                  'Advanced automation build',
                  'AI integration',
                  'CRM & pipeline setup',
                  'KPI dashboards',
                  'Launch & testing',
                ],
                featured: true,
              },
              {
                tier: 'Monthly Optimization',
                price: '$500–$2,000/mo',
                desc: 'Ongoing support, iteration, and improvement every month.',
                features: [
                  'Monthly strategy call',
                  'Continuous optimization',
                  'A/B testing',
                  'Performance reports',
                  'Priority support',
                ],
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
                      Recommended
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
                    className={`text-center font-inter font-semibold px-6 py-3.5 rounded-full transition-all duration-300 ${
                      plan.featured
                        ? 'bg-teal text-charcoal hover:bg-cream'
                        : 'bg-charcoal text-cream hover:bg-teal hover:text-charcoal'
                    }`}
                  >
                    {plan.featured ? 'Apply Now' : 'Get Started'}
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-section-dark text-cream">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="font-playfair font-bold text-3xl md:text-5xl text-cream mb-6">
              Ready to ascend?
            </h2>
            <p className="font-inter text-lg text-cream/50 max-w-xl mx-auto mb-10">
              Your business is working. Let&apos;s make it unstoppable.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-teal text-charcoal font-inter font-semibold px-8 py-4 rounded-full hover:bg-cream transition-all duration-300"
            >
              Apply for Ascension →
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
