import { LitElement } from 'lit-element'
import { html } from 'lit-html'

export class FooBar extends LitElement {
  heading: string;

  static get properties() {
    return {heading: {type: String}}
  }

  constructor() {
    super()
    console.log('constructing')

  }

  render() {
    return html`<h1>HI LIT!</h1>`
  }

}

customElements.define('foo-bar', FooBar)
