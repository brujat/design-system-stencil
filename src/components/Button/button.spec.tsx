import { newSpecPage } from '@stencil/core/testing';
import { Button } from './button';
describe('wc-button', () => {
  const props = {
    label: 'click here',
    variant: 'primary',
    onClick: jest.fn,
  };

  let page;
  let elem;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [Button],
      html: `<wc-button label='${props.label}' variant='${props.variant}' onClick=${props.onClick}/>`,
    });

    elem = await page.doc.querySelector('button');
  });

  it('should render my component', async () => {
    expect(new Button()).toBeTruthy();
  });

  it('should have label', async () => {
    await page.waitForChanges();
    expect(elem.textContent).toEqual(props.label);
  });

  it('should have variant', async () => {
    expect(elem).toHaveClass('primary');
  });

  it('should trigger event on click', async () => {
    elem.click();
    await page.waitForChanges();
    expect(props.onClick).toBeCalled;
  });
});
