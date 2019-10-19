import { FooBar } from './wc'

describe('wc', () => {
  describe('content', () => {
    let wc: FooBar
    let container: Element | null

    beforeEach(async () => {
      // Use createElement to test it is registered correctly
      wc = (document.createElement('hello-world') as FooBar)

      // Connect to DOM in case there's any `connectedCallback` logic
      container = document.body.querySelector('#container')
      container.innerHTML = null
      container.appendChild(wc)

      // Wait for initial render
      await wc.updateComplete

    })

    function q(): HTMLHeadingElement {
      return wc.shadowRoot.querySelector('h1')
    }

    it('find h1 label', async () => {
      const h1 = q()
      chai.expect(h1).to.not.be.null
      chai.expect(h1.textContent).to.equal('HI Lit-Element!')

      wc.setAttribute('heading', 'boohoo')
      await wc.updateComplete
      chai.expect(q().textContent).to.equal('boohoo')

      wc.heading = 'bing bing bing'
      await wc.updateComplete
      chai.expect(q().textContent).to.equal('bing bing bing')

    })

    it('use the attribute', async () => {
      wc.setAttribute('heading', 'I used the heading')
      await wc.updateComplete
      chai.expect(q().textContent).to.equal('I used the heading')
    })

  })
})
