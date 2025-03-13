import { useState } from "react";
import { AccordionContext } from "./ParentAccordion";

const Accordion = ({ children, defaultActive }) => {
  const [activePanel, setActive] = useState(defaultActive);

  const accordionValues = { activePanel, handleClick: setActive };

  return (
    <AccordionContext.Provider value={accordionValues}>
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  );
};

export default Accordion;
