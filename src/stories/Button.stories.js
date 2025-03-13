import Button from "../components/common/Button";

export default {
    title: "form/Button",
    component: Button,
    argTypes: { 
        handleClick: { action: 'handleClick' },
        children: { control: 'text' }
    }
}

const Template = args => <Button {...args} />

export const Red = Template.bind({});
Red.args = {
    backgroundColor: "red",
    label: "Press Me",
    size: "md"
}


export const Green = Template.bind({});
Green.args = {
    backgroundColor: "green",
    label: "Press Me",
    size: "md"
}