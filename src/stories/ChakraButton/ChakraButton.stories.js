import { Button } from "@chakra-ui/react";

export default {
    title: 'Chakra/button',
    component: Button,
    argTypes: {
        variantColor: { control: 'text' }
    }
}

const Template = (args) => <Button {...args} />

export const Success = Template.bind({});
Success.args = {
    variantColor: 'green',
    children: 'Success'
}

export const Danger = Template.bind({});
Success.args = {
    variantColor: 'red',
    children: 'Danger'
}