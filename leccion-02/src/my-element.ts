import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { localDateFromUTC } from "./date-utils";
import "./date-display.ts";

@customElement("my-element")
class MyElement extends LitElement {
  static styles = css`
    .title {
      color: blue;
      font-weight: bold;
      font-size: 32px;
    }
    .sub-title {
      color: blue;
      font-size: 28px;
    }
  `;

  @property()
  date?: Date;

  _detecChanged(e: Event) {
    const utcDate = (e.target as HTMLInputElement).valueAsDate;
    if (utcDate) {
      this.date = localDateFromUTC(utcDate);
    }
  }

  render() {
    return html`
      <p>Elige una fecha:</p>
      <input type="date" @change=${this._detecChanged} />
      <p><button @click=${this._chooseToday}>Selecciona hoy</button></p>
      <p>Fecha elegida: <date-display .date=${this.date}></date-display></p>

      <hr />

      <label class=${false ? "title" : "sub-title"}>Hola Lit</label>
    `;
  }

  _chooseToday() {
    this.date = new Date();
  }
}