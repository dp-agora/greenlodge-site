import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import {
  About,
  Contact,
  Mission,
  OurApproach,
  WhyItMatters,
} from './ContentSections';
import { Footer } from './Footer';
import { Hero } from './Hero';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Mission />
    <WhyItMatters />
    <OurApproach />
    <About />
    <Contact />
    <Footer />
  </div>
);

export { Base };
