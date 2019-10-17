import { LitElement } from 'lit-element'
import { html } from 'lit-html'

export class FooBar extends LitElement {
  heading: string

  static get properties() {
    return {heading: {type: String}}
  }

  constructor() {
    super()
    console.log('constructing')
    this.heading = 'HI Lit-Element!'

  }

  render() {
    return html`<h1>${this.heading}</h1>`
  }

}

customElements.define('foo-bar', FooBar)
