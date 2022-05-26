

export default {
  title: 'Components/Button'
};

const Template = (args) => `<wc-button label="${args.label}" variant="${args.variant}" />`;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Click Here',
  variant: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Click Here',
  variant: 'secondary'
};


