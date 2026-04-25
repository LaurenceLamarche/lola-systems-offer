import type { Metadata } from 'next'
import Script from 'next/script'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Book a Call',
  description:
    'Book your Foundation Call. 30 minutes to map out your system and see if we\'re a fit.',
}

export default function Book() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="label-caps mb-4">Let&apos;s Talk</p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="heading-display text-4xl md:text-5xl mb-6">
              Book your <span className="italic text-teal">Foundation Call.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="font-inter text-lg text-charcoal/70 max-w-xl mx-auto leading-relaxed">
              30 minutes. No pressure. We&apos;ll map out where you are, what
              you need, and whether Foundation OS or the 60-Day Revenue System is the right
              fit.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Booking Embed */}
      <section className="pb-12">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="bg-white rounded-2xl border border-sage/50 shadow-sm overflow-hidden">
              <div className="p-4 md:p-8">
                <iframe 
                  src="https://api.physicalsystems.ca/widget/booking/XjnVHjju2VBnb60JCyUC" 
                  style={{ width: '100%', border: 'none', minHeight: '600px' }} 
                  scrolling="no" 
                  id="XjnVHjju2VBnb60JCyUC_1775328356756"
                  title="Book Your Call"
                />
                <Script 
                  src="https://api.physicalsystems.ca/js/form_embed.js" 
                  strategy="lazyOnload"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-section-clay">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="label-caps mb-4">What to Expect</p>
            <h2 className="heading-display text-2xl md:text-3xl mb-12">
              Your Foundation Call in 3 steps.
            </h2>
          </AnimatedSection>

          <div className="space-y-8">
            {[
              {
                num: '01',
                title: 'Discovery',
                desc: 'We talk about where you are now. Your offer, your audience, your goals. No judgment, just clarity.',
              },
              {
                num: '02',
                title: 'Mapping',
                desc: 'We\'ll map out what your system needs to look like. The funnel flow, the automations, the key pieces.',
              },
              {
                num: '03',
                title: 'Decision',
                desc: 'We decide together if Foundation OS is the right move. If it is, we start immediately. If not, you walk away with a clear plan anyway.',
              },
            ].map((step, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="flex gap-6 items-start">
                  <span className="font-playfair text-3xl font-bold text-teal/30 flex-shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="font-playfair text-lg font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="font-inter text-charcoal/60 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="font-playfair italic text-2xl md:text-3xl text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
              &ldquo;This isn&apos;t a sales call. It&apos;s a strategy session.
              You&apos;ll leave with clarity whether we work together or not.&rdquo;
            </p>
            <p className="font-inter text-sm text-charcoal/40 mt-6">Lola</p>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
