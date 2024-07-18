import Heading from './Heading.js';
import Section from './Section.js';
import './style.css'

export default function Page() {
  return (
    <Section>
      <Heading>use Context</Heading>
      <Section>
        <Heading>副标题</Heading>
        <Heading>副标题</Heading>
        <Section>
          <Heading>子标题</Heading>
          <Heading>子标题</Heading>
        </Section>
      </Section>
    </Section>
  );
}
