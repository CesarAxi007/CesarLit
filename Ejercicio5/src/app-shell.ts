
import { LitElement, html, css } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import './login-form'
import './home-page'
import { authService } from './my-service.ts'

@customElement('app-shell')
export class AppShell extends LitElement {
  @state() private isLoggedIn = !!authService.getUser()

  //static styles = css`
    /* Estilos para el shell de la aplicación */
  //`

  render() {
    return html`
      ${this.isLoggedIn
        ? html`<home-page @logout=${this.handleLogout}></home-page>`
        : html`<login-form @login-success=${this.handleLogin}></login-form>`}
    `
  }

  private handleLogin() {
    this.isLoggedIn = true
  }

  private handleLogout() {
    this.isLoggedIn = false
  }
}