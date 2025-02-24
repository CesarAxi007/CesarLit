import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-element")
export class Login extends LitElement{
  
  @property()
  correo: string=""
  @property()
  contraseña: string=""

  private _newCorreo(e:Event){
    this.correo=(e.target as HTMLInputElement).value
  }

  private _newContraseña(e:Event){
    this.contraseña=(e.target as HTMLInputElement).value
  }

  private _validos(){
    if(!this.correo || !this.contraseña){
      return false
    }else{

    const formatoCorreo = /[^\s@]+@[^\s@]+\.com$/
    return formatoCorreo.test(this.correo)
    }
  }

  static styles =css`
    input{
      margin-bottom: 10px;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius:1px;
    }

    .error{
      border-color: red;
    }

    button:disable{
      background-color:red;
      cursor: crosshair;
    }
  `
  

  render(){
    return html`
    <input type="email" placeholder="Correo electronico aqui :P" .value=${this.correo} @input=${this._newCorreo}
    class=${this._validos()?``:`error`}/>
    <input type="password" placeholder="Contrseña" .value=${this.contraseña} @input=${this._newContraseña}
    class=${this._validos()?``:`error`}/>
    <button ?disabled=${!this._validos()}>Log in</button>
    `
  }
}