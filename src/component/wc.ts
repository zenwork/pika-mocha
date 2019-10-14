
export class FooBar extends HTMLElement {

  static get observedAttributes() { return ['heading'] }

  constructor() {
    super()
  }

  connectedCallback() {
    this.heading = 'Default'
    this.render()
  }

  render() {
    this.innerHTML = `<h1>${this.getAttribute('heading')}</h1>`
  }

  get heading(): string | null {
    return this.getAttribute('heading')
  }

  set heading(val: string | null) {
    this.setAttribute('heading', val ? val : '')
  }

  attributeChangedCallback(name: any, oldValue: any, newValue: any) {
    this.render()
  }

}

customElements.define('foo-bar', FooBar)
