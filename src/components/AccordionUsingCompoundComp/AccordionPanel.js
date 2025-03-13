import { useContext } from "react";
import { AccordionContext, AccordionItemContext } from "./ParentAccordion";

const AccordionPanel = ({children}) => {
    const { activePanel } = useContext(AccordionContext);
    const { id } = useContext(AccordionItemContext);

    if (id !== activePanel) return null;

    return <div className="accordion-panel">{children}</div>
}

export default AccordionPanel;