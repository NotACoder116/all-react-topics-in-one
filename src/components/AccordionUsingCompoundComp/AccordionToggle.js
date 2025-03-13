import { useContext } from "react";
import { AccordionContext, AccordionItemContext } from "./ParentAccordion";

const AccordionToggle = ({children}) => {
    const { handleClick } = useContext(AccordionContext);
    const { id } = useContext(AccordionItemContext);

    return <button className="border border-blue-200 bg-blue-200 rounded-md px-2" onClick={() => handleClick(id)}>{children}</button>
}

export default AccordionToggle;