import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Landing Page Offer | Aligned Systems',
  description:
    'A single, conversion-ready landing page. Built and launched in 48 hours. Structured to turn visits into booked calls.',
}

const examples = [
  {
    url: 'https://en.aligned-her.com/',
    name: 'Aligned Her',
    description: 'Wellness coaching brand. Clean, empowering, conversion-focused.',
  },
  {
    url: 'https://atelier87.club/',
    name: 'Atelier 87',
    description: 'Creative studio. Bold aesthetic, editorial layout.',
  },
  {
    url: 'https://enovativ-site.vercel.app/',
    name: 'Enovativ',
    description: 'Tech-forward brand. Modern, structured, high-impact.',
  },
  {
    url: 'https://education-bienveillante.vercel.app/',
    name: 'Éducation Bienveillante',
    description: 'Education platform. Warm, trustworthy, community-driven.',
  },
]

const deliverables = [
  {
    num: '01',
    title: 'Landing Page',
    desc: 'One page. Every section load-bearing. Structured to turn visits into booked calls. Not bounces.',
    highlight: true,
  },
  {
    num: '02',
    title: 'Testimonial Section',
    desc: 'Proof beats promise. A dedicated section for client results, so prospects don\'t have to take your word for it.',
  },
  {
    num: '03',
    title: 'FAQ Section',
    desc: 'A clear FAQ that answers the questions your prospects are already asking. Eliminate objections before they stall the sale.',
  },
  {
    num: '04',
    title: 'Contact Page',
    desc: 'A contact page with working form, inbox delivery, and a thank-you confirmation. No broken forms, no missed leads.',
  },
]

const faqs = [
  {
    q: 'What do I need to provide?',
    a: 'Your logo (if you have one), brand colors (or we can suggest them), photos or imagery, and any copy you already have. We guide you through a simple intake process so nothing is missed.',
  },
  {
    q: 'How long does it take?',
    a: '48 hours from kickoff to delivery. Fast, professional, and built to last.',
  },
  {
    q: 'What platform do you build on?',
    a: 'We build on the platform that best fits your needs. Typically Next.js, Framer, or Go High Level, depending on your goals. We discuss this during your initial call.',
  },
  {
    q: 'Do I need to know how to code or design?',
    a: 'Not at all. You bring your business. We handle every technical and design detail. You just review and approve.',
  },
  {
    q: 'Can I update the page myself after delivery?',
    a: 'Yes. We hand over everything with documentation so you can make simple edits yourself. Need bigger changes later? We offer maintenance packages.',
  },
  {
    q: 'What if I want more pages down the road?',
    a: "The Landing Page Offer is your starting point. When you're ready to scale, you can move into Foundation OS or the 60-Day Revenue System for a full client acquisition engine.",
  },
]

export default function LandingPageOffer() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="label-caps mb-4">Your Online Presence Starts Here</p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="heading-display text-3xl md:text-5xl leading-[1.15] mb-6">
              Right now, someone is looking for exactly what you offer.<br />
              <span className="italic text-teal">And choosing your competitor instead.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="font-inter text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              A complete, conversion-ready landing page with testimonials, FAQ, and contact. Built and launched in 48 hours.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="btn-primary">
                Get My Landing Page
                <span>→</span>
              </Link>
              <a href="#examples" className="btn-secondary">
                See Examples
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Problem */}
      <section className="section-padding bg-section-clay">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="label-caps mb-4">The Reality</p>
            <h2 className="heading-display text-3xl md:text-5xl mb-8">
              First impressions happen<br />
              <span className="italic text-sage">online now.</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              { pain: 'You have a great offer', gap: 'but nowhere to send people' },
              { pain: 'You share your link', gap: 'but it looks unprofessional' },
              { pain: "You're putting in the work", gap: 'but your page isn\'t converting' },
              { pain: "People visit your site", gap: 'but they leave without contacting you' },
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
              You don&apos;t need a complex site.<br />
              <span className="text-teal">You need one page that converts.</span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-padding">
        <div className="container-wide">
          <AnimatedSection>
            <p className="label-caps mb-4">What&apos;s Included</p>
            <h2 className="heading-display text-3xl md:text-4xl mb-16">
              Everything you need. Nothing you don&apos;t.
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
                          Core Deliverable
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

      {/* Timeline Banner */}
      <section className="py-16 bg-section-dark text-cream">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="label-caps text-teal/80 mb-4">Timeline</p>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-cream mb-4">
              48 hours.
            </h2>
            <p className="font-inter text-lg text-cream/50">
              From kickoff to a live, professional web presence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Examples */}
      <section id="examples" className="section-padding bg-section-clay">
        <div className="container-wide">
          <AnimatedSection>
            <p className="label-caps text-center mb-4">Portfolio</p>
            <h2 className="heading-display text-3xl md:text-4xl text-center mb-4">
              Sites I&apos;ve already built.
            </h2>
            <p className="font-inter text-charcoal/60 text-center max-w-xl mx-auto mb-16">
              Every site is custom-designed for the brand. Here are a few examples of what&apos;s possible.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {examples.map((site, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="card-base p-0 overflow-hidden hover-lift">
                    {/* iframe preview */}
                    <div className="relative w-full bg-charcoal/5" style={{ paddingBottom: '62%' }}>
                      <iframe
                        src={site.url}
                        title={site.name}
                        className="absolute inset-0 w-full h-full border-0 pointer-events-none"
                        loading="lazy"
                        style={{ transform: 'scale(1)', transformOrigin: 'top left' }}
                      />
                      {/* Overlay to prevent interaction, make the whole card clickable */}
                      <div className="absolute inset-0 bg-transparent group-hover:bg-teal/5 transition-colors duration-300" />
                    </div>
                    <div className="p-6 border-t border-sage/20">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-playfair text-lg font-semibold text-charcoal mb-1">
                            {site.name}
                          </h3>
                          <p className="font-inter text-sm text-charcoal/60">
                            {site.description}
                          </p>
                        </div>
                        <span className="flex-shrink-0 font-inter text-xs text-teal font-medium underline underline-offset-4 group-hover:text-charcoal transition-colors duration-200 whitespace-nowrap">
                          Visit site →
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="label-caps text-center mb-4">Investment</p>
            <h2 className="heading-display text-3xl md:text-4xl text-center mb-4">
              Simple, transparent pricing.
            </h2>
            <p className="font-inter text-charcoal/60 text-center max-w-xl mx-auto mb-16">
              One flat-rate package. No hidden fees, no revision debates. Just a clear scope and a defined finish line.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="relative rounded-2xl bg-charcoal text-cream p-10 md:p-14 text-center border-2 border-teal/30 max-w-2xl mx-auto">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal text-charcoal text-xs font-inter font-semibold px-5 py-1.5 rounded-full">
                Landing Page Package
              </span>
              <p className="label-caps text-teal/80 mb-4">Complete Package</p>
              <p className="font-playfair text-5xl md:text-6xl font-bold text-cream mb-3">
                $997
              </p>
              <p className="font-inter text-cream/50 mb-10">
                One-time investment. Delivered in 48 hours.
              </p>
              <hr className="border-cream/10 mb-10" />
              <ul className="space-y-4 mb-10 text-left max-w-sm mx-auto">
                {[
                  'Custom-designed landing page',
                  'Testimonial section',
                  'FAQ section',
                  'Contact page & form setup',
                  'Mobile-responsive design',
                  '2 rounds of revisions',
                  'Handover with documentation',
                ].map((f, i) => (
                  <li key={i} className="font-inter text-sm text-cream/70 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 bg-teal text-charcoal font-inter font-semibold px-10 py-4 rounded-[10px] hover:bg-cream transition-all duration-300"
              >
                Get My Landing Page →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials: hidden until real quotes are ready */}
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
      <section className="section-padding bg-section-clay">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-display text-3xl md:text-5xl mb-6">
              Your page.<br />
              <span className="italic text-teal">Live in 48 hours.</span>
            </h2>
            <p className="font-inter text-lg text-charcoal/60 max-w-xl mx-auto mb-10">
              Stop sending people nowhere. Book a call and let&apos;s build a page that actually converts.
            </p>
            <Link href="/book" className="btn-primary">
              Book Your Call
              <span>→</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
