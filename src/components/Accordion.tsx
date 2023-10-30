import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}
export const Accordion = (props: AccordionPropsType) => {
    console.log('Accordion rendered')
    if (props.collapsed === true) {
        return <>
            <AccordionTitle title={props.titleValue} />
        </>
    } else {
        return (
            <>
                <AccordionTitle title={props.titleValue} />
                <AccordionBody />
            </>
        )
    }
}
type AccordionTitleProps = {
    title: string
}
const AccordionTitle = (props: AccordionTitleProps) => {
    console.log('AccordionTitle rendered')
    return <h3>{props.title}</h3>
}
const AccordionBody = () => {
    console.log('AccordionBody rendered')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}