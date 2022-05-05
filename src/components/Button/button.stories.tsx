
import {Button} from "./button";


export default {
  title: 'Button',
  component: Button
};

const Template = (args) => `<my-component variant="${args.variant}">${args.label}</my-component>`;

export const Primary = Template.bind({});

Primary.args = {
    variant: "primary",
    label: "Primary Button"
}