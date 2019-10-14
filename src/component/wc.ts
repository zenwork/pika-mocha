import { LitElement } from '../../web_modules/lit-element.js'
import { html } from '../../web_modules/lit-html.js'

export class FooBar extends LitElement {
  heading: string;

  static get properties() {
    return {heading: {type: String}}
  }

  constructor() {
    super()
    this.heading = 'Default'
  }

  connectedCallback() {
    this.render()
  }

  render() {
    return html`<h1>${this.heading}</h1>`
  }

}

customElements.define('foo-bar', FooBar)
