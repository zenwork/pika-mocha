import { FooBar } from './wc.js'

describe('wc', () => {
  describe('content', () => {
    let container: HTMLDivElement
    let wc: FooBar

    beforeEach(() => {
      wc = new FooBar()
      container = document.querySelector('#container')
      container.appendChild(wc)
    })

    afterEach(() => {
      container.innerHTML = null
    })

    function q() {
      return wc.querySelector('h1')
    }

    it('find h1 label', () => {
      const h1 = q()
      chai.expect(h1).to.not.be.null
      chai.expect(h1.innerHTML).to.equal('Default')

      wc.setAttribute('heading', 'boohoo')
      chai.expect(q().innerHTML).to.equal('boohoo')

      wc.heading = 'bing bing bing'
      chai.expect(q().innerHTML).to.equal('bing bing bing')

    })

    it('add component', () => {
      container.appendChild(new FooBar())
    })
  })
})
