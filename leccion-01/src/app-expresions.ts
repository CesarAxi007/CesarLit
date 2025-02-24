import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

//El nombre de mi componente debe de constar de dos o mas elementos
//<Elemento1>-<Elemento2>
@customElement("app-extenssion")
export class Extenssion extends LitElement{
    [x: string]: unknown;

    @property()
    bodyText = "Text in child expression."

    @property()
    label = "Cerrar"

    @property()
    editing = "true"

    @property()
    value = 1

    eventClick(){
        alert("Click")
    }
    condition = false

    @property()
    animals = ["lion","cat","dog"]


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
        
        <div>Child expression: ${this.bodyText}</div>
        <button aria-label = ${this.label}>X</button>

        <div>
            Bolean expression.
            <input type="text" ?disable=${!this.editing}>
        </div>

        <div>
            Property
            <input type="number" .valueAsNumber=${this.value}>
        </div>

        <div>
            <button @click = "${this.eventClick}">Click me</button>
        </div>

        <div>
        Render
        ${this.condition
          ? html`<p>Condition is true</p>`
          : html`<p>Condition is false</p>`}
        </div>

        <div>
            Ejercicio resta-suma
            <button @click = "${this.restaClick}">-</button>
            <input type="number" style="text-align: center" .valueAsNumber=${this.valuee} disabled>
            <button @click = "${this.sumaClick}">+</button>
        </div>

        <p>Render list</p>

        <ul>
            ${this.animals.map((animal) => {
                return html`<li>${animal}</li>`
            })}
        </ul>
        `
    }
    
}