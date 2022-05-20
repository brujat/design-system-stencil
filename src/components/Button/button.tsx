import { Component, Prop, Listen, h } from '@stencil/core';

@Component({
  tag: 'wc-button',
  styleUrls: ['button.scss'],
})
export class Button {
  @Prop() label: string;
  @Prop() eventHandler: (ev: any) => void;
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
