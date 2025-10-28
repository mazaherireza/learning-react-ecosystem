import { useState } from "react";
import Section from "../Section/Section";
import Tabs from "../Tabs/Tabs";
import TabButton from "../TabButton/TabButton";
import { EXAMPLES, TYPES } from "@/data";
import "./Examples.css";

const Examples = () => {
  const [selectedTab, setSelectedTab] = useState(TYPES.COMPONENTS);
  
  const titles = [TYPES.COMPONENTS, TYPES.JSX, TYPES.PROPS, TYPES.STATE];

  const handleClick = (title) => {
    setSelectedTab(title);
  };

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            {titles.map((title) => (
              <TabButton
                key={title}
                isSelected={selectedTab == title}
                onClick={() => handleClick(title)}
              >
                {title}
              </TabButton>
            ))}
          </>
        }
      >
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTab].title}</h3>
          <p>{EXAMPLES[selectedTab].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTab].code}</code>
          </pre>
        </div>
      </Tabs>
    </Section>
  );
};

export default Examples;
