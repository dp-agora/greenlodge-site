import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-white">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="#mission" className="text-gray-600 hover:text-primary-500">
            Mission
          </Link>
        </li>
        <li>
          <Link href="#approach" className="text-gray-600 hover:text-primary-500">
            Approach
          </Link>
        </li>
        <li>
          <Link href="#about" className="text-gray-600 hover:text-primary-500">
            About
          </Link>
        </li>
        <li>
          <Link href="#contact" className="text-gray-600 hover:text-primary-500">
            Contact
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-24 pb-32">
      <div className="text-center">
        <h1 className="text-5xl font-light tracking-wide text-primary-500 sm:text-6xl">
          Greenlodge
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-600">
          Bridging the gap between Latino Capital and Latino Entrepreneurs.
        </p>
        <div className="mt-12">
          <Link
            href="mailto:admin@greenlodge.us"
            className="inline-block border border-primary-500 px-8 py-3 text-sm tracking-widest text-primary-500 transition hover:bg-primary-500 hover:text-white"
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </Section>
  </Background>
);

export { Hero };
