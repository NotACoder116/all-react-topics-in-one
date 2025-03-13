import React, { createContext } from 'react';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';
import AccordionPanel from './AccordionPanel';
import AccordionToggle from './AccordionToggle';

export const AccordionContext = createContext(null);
export const AccordionItemContext = createContext(null);

const accordionData = [
  {
    id: 1,
    title: 'Section 1',
    description: 'Section panel 1'
  },
  {
    id: 2,
    title: 'Section 2',
    description: 'Section panel 2'
  }
]

const ParentAccordion = () => {
  return (
    <Accordion>
        {accordionData.map(acordion => {
          return <AccordionItem key={acordion.id} id={acordion.id}>
          <AccordionPanel>{acordion.description}</AccordionPanel>
          <AccordionToggle>{acordion.title}</AccordionToggle>
        </AccordionItem>
        })}
      </Accordion>
  )
}

export default ParentAccordion