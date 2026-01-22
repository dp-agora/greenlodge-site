import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const Mission = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-20">
      <div id="mission" className="scroll-mt-20">
        <h2 className="text-center text-sm font-medium uppercase tracking-widest text-primary-500">
          Our Mission
        </h2>
        <div className="mx-auto mt-8 max-w-3xl text-center">
          <p className="text-xl leading-relaxed text-gray-700">
            Greenlodge exists to unlock the potential of Latino entrepreneurs by
            connecting them with capital that understands their vision, values,
            and communities. We believe that when Latino founders and Latino
            investors come together, we create lasting impact that transcends
            returns.
          </p>
        </div>
      </div>
    </Section>
  </Background>
);

const WhyItMatters = () => (
  <Background color="bg-white">
    <Section yPadding="py-20">
      <div className="scroll-mt-20">
        <h2 className="text-center text-sm font-medium uppercase tracking-widest text-primary-500">
          Why It Matters
        </h2>
        <div className="mx-auto mt-8 max-w-3xl">
          <p className="text-center text-xl leading-relaxed text-gray-700">
            Latino founders are building transformative companies, yet remain
            significantly underrepresented in venture capital funding. At the
            same time, Latino wealth is growing rapidly with limited avenues to
            invest in the community&apos;s entrepreneurial future.
          </p>
          <p className="mt-6 text-center text-xl leading-relaxed text-gray-700">
            This disconnect represents both an economic gap and a cultural
            opportunity. Greenlodge bridges this divide, creating pathways for
            capital to flow where it can make the greatest difference.
          </p>
        </div>
      </div>
    </Section>
  </Background>
);

const OurApproach = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-20">
      <div id="approach" className="scroll-mt-20">
        <h2 className="text-center text-sm font-medium uppercase tracking-widest text-primary-500">
          Our Approach
        </h2>
        <div className="mx-auto mt-12 grid max-w-4xl gap-12 md:grid-cols-3">
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-900">Founder-First</h3>
            <p className="mt-4 text-gray-600">
              We partner with exceptional founders, providing more than capital.
              We bring networks, experience, and unwavering support through
              every stage of growth.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-900">
              Long-Term Partnership
            </h3>
            <p className="mt-4 text-gray-600">
              Building enduring companies takes time. We commit to our founders
              for the long haul, standing beside them through challenges and
              triumphs alike.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-900">
              Community Rooted
            </h3>
            <p className="mt-4 text-gray-600">
              Our strength comes from deep ties to the Latino community. We
              leverage these connections to help our portfolio companies thrive
              in markets others overlook.
            </p>
          </div>
        </div>
      </div>
    </Section>
  </Background>
);

const About = () => (
  <Background color="bg-white">
    <Section yPadding="py-20">
      <div id="about" className="scroll-mt-20">
        <h2 className="text-center text-sm font-medium uppercase tracking-widest text-primary-500">
          About
        </h2>
        <div className="mx-auto mt-8 max-w-3xl text-center">
          <p className="text-xl leading-relaxed text-gray-700">
            Greenlodge is led by a team of investors and operators who have
            built careers at the intersection of finance, technology, and the
            Latino community. We bring decades of combined experience investing
            in and scaling high-growth companies.
          </p>
          <p className="mt-6 text-xl leading-relaxed text-gray-700">
            Our network spans founders, limited partners, and advisors who share
            our conviction that the next generation of category-defining
            companies will be built by and for Latino communities.
          </p>
        </div>
      </div>
    </Section>
  </Background>
);

const Contact = () => (
  <Background color="bg-primary-500">
    <Section yPadding="py-20">
      <div id="contact" className="scroll-mt-20 text-center">
        <h2 className="text-sm font-medium uppercase tracking-widest text-white/80">
          Contact
        </h2>
        <div className="mt-8">
          <a
            href="mailto:admin@greenlodge.us"
            className="text-2xl text-white hover:underline"
          >
            admin@greenlodge.us
          </a>
        </div>
        <p className="mt-6 text-white/80">New York, NY</p>
      </div>
    </Section>
  </Background>
);

export { Mission, WhyItMatters, OurApproach, About, Contact };
