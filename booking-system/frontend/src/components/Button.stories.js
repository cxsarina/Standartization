import Button from "./Button";

export default {
    title: "UI/Button",
    component: Button,
    argTypes: {
        label: { control: "text" },
        variant: { control: "radio", options: ["primary", "secondary"] },
    },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: "Primary Button",
    variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: "Secondary Button",
    variant: "secondary",
};
