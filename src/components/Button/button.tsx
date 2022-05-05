import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: 'wc-button',
    styleUrls: ['button.scss']
})

export class Button {
    @Prop() label: string;
    @Prop() eventHandler: () => void;
    @Prop() variant: 'primary' | 'secondary';

    render() {
        return (
            <button onClick={this.eventHandler} class={this.variant}>{this.label}</button>
        )
    }
}