import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, ContentList, ContentList2 } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of Frontend and Backend technologies in the web development world.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ContentList>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            JavaScript, React.js, HTML5, CSS3, Next.js, Tailwind CSS, Material-ui.
          </ListParagraph>
          </ContentList>
          <ContentList2>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, Passport.js, ejs, MongoDB, Express.
          </ListParagraph>
          </ContentList2>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
