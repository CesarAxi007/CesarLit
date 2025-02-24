import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-element")

export class MyElement extends LitElement{

  static styles = css`
    p{
    color:blue
    }
  `

  @property()
  name = "Cesar"

  render(){
    return html`<p>Hola, ${this.name}</p>`
  }
}