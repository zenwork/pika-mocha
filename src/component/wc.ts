import { customElement, LitElement } from 'lit-element'
import { html } from 'lit-html'

@customElement('hello-world')
export class FooBar extends LitElement {
  heading: string

  static get properties() {
    return {heading: {type: String}}
  }

  constructor() {
    super()
    this.heading = 'HI Lit-Element!'

  }

  render() {
    return html`<h1>${this.heading}</h1>`
  }

}
