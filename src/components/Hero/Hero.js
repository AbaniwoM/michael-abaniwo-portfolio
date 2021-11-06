import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Meet <br />
        Michael Abaniwo
      </SectionTitle>
      <SectionText>
      Michael Abaniwo is a Software Engineer with experience in building highly performant websites. Michael is very excited and passionate about user experience and interfaces, making sure that these interfaces are properly implemented with frontend languages and frameworks in real-time.Michael also has passion for very fast and highly performant websites. He ensures that the implementation of these websites meets predefined expectation and that delivery is in good time.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/michael-abaniwo-521620193/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;