import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-8">
      <div className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Greenlodge. All rights reserved.
      </div>
    </Section>
  </Background>
);

export { Footer };
