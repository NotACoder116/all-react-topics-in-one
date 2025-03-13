import { AccordionItemContext } from "./ParentAccordion";

const AccordionItem = ({ children, id }) => {
  return (
    <AccordionItemContext.Provider value={{id}}>
      <div className="my-3 border border-grey-100 p-4 w-full">{children}</div>
    </AccordionItemContext.Provider>
  );
};

export default AccordionItem;
