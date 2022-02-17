import {
  html,
  css,
  customElement,
  observable,
  FASTElement
} from '@microsoft/fast-element'

const template = html<MyCounter>`
  <button @click="${(x) => x.count--}">-</button>
  <span>${(x) => x.count}</span>
  <button @click="${(x) => x.count++}">+</button>
`

const styles = css`
  * {
    font-size: 200%;
  }

  span {
    width: 4rem;
    display: inline-block;
    text-align: center;
  }

  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: #c01754;
    color: white;
  }

  button:focus-visible {
    border 1px solid #000;
    box-shadow: #707070 0px 0px 0px 1px inset, #FFFFFF 0px 0px 0px 3px inset;
  }
`

@customElement({
  name: 'my-counter',
  template,
  styles
})
export class MyCounter extends FASTElement {
  @observable
  public count: number = 0
}
