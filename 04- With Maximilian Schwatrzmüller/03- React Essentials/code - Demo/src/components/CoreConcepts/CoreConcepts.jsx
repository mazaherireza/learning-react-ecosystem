import Section from "../Section/Section";
import CoreConcept from "../CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from "@/data";
import "./CoreConepts.css";

const CoreConcepts = () => {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept} />
        ))}
      </ul>
    </Section>
  );
};

export default CoreConcepts;
