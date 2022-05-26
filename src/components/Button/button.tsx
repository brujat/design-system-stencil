import { Component, Prop, Listen, h } from '@stencil/core';

@Component({
  tag: 'wc-button',
  styleUrls: ['button.scss'],
})
export class Button {
  /** @property{string} - label for the button */
  @Prop() label: string;
  /** @property{function} - Button event handler */
  @Prop() eventHandler: (ev: any) => void;
  /** @property{string} - Button variant type */
  @Prop() variant: 'primary' | 'secondary';

  @Listen('click', { capture: true })
  handleClick(ev) {}

  render() {
    return (
      <button onClick={this.handleClick} class={this.variant}>
        {this.label}
      </button>
    );
  }
}
