import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

//El nombre de mi componente debe de constar de dos o mas elementos
//<Elemento1>-<Elemento2>
@customElement("app-extenssion")
export class Extenssion extends LitElement{

//Ejercicio1--------------------------------------------------
    @property()
    valuee = 0

    restaClick(){
        this.valuee = this.valuee - 1 
    }
    
    sumaClick(){
        this.valuee = this.valuee + 1 
    }
    //Fin Ejercicio 1-----------------------------------------
    
    render(){
        return html`
        <div>
            Ejercicio resta-suma
            <button @click = "${this.restaClick}">-</button>
            <input type="number" style="text-align: center" .valueAsNumber=${this.valuee} disabled>
            <button @click = "${this.sumaClick}">+</button>
        </div>
        `
    }
    
}