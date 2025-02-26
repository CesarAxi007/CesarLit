import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./app-header.ts";
import "./app-article.ts";
import "./app-footer.ts";
import { authService } from "./my-service.ts";

@customElement("home-page")
class AppPage extends LitElement {
  render() {
    return html`
      <app-header></app-header>
      <card-list></card-list>
      <button @click=${this.handleLogout}>Cerrar sesión</button>
      <app-footer></app-footer>
    `;
  }
  private handleLogout() {
    authService.logout();
    this.dispatchEvent(new CustomEvent('logout'));
  }
}