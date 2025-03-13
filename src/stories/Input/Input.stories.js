import Input from "../../components/Storybook/Input/Input";

export default {
    title: 'form/Input',
    component: Input,
    // decorators: [story => <Center>{story()}</Center>]
}

export const Small = () => <Input size="small" placeholder="small size" />
export const Medium = () => <Input size="medium" placeholder="medium size" />
export const Large = () => <Input size="large" placeholder="large size" />

Small.storyName = 'Small Input'