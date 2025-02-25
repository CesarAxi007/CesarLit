import './my-ejercicio1.ts';
import { expect, fixture } from '@open-wc/testing';
import { Extenssion } from "./my-ejercicio1";
import { html } from "lit";
import sinon from "sinon";

describe('Pruebas Ejercicio 1', () => {
    it('Restar 1 al valor de valuee', () => {
        let element = {
          valuee: 5,
          restaClick: function() {
            this.valuee = this.valuee - 1
          }
        }
        element.restaClick()
        expect(element.valuee).to.eqls(4)
    })

    it('Sumar 1 al valor de valuee', () => {
        let element = { 
            valuee: 5, restaClick: function() {
            this.valuee = this.valuee + 1
          }
        }
        element.restaClick();
        expect(element.valuee).to.eqls(6)
    })
  
    it('Incrementar valor con sumaClick', async () => {
        let element: Extenssion
        element = await fixture(html`<app-extenssion></app-extenssion>`)
        let sumaClickSpy = sinon.spy(element, 'sumaClick')
        element.sumaClick()
        expect(sumaClickSpy.calledOnce).to.be.true
        expect(element.valuee).to.eqls(1)
        sumaClickSpy.restore()
    });

    it('Disminuir valor con restaClick', async () => {
        let element: Extenssion
        element = await fixture(html`<app-extenssion></app-extenssion>`)
        let restaClickSpy = sinon.spy(element, 'restaClick')
        element.restaClick()
        expect(restaClickSpy.calledOnce).to.be.true
        expect(element.valuee).to.eqls(-1)
        restaClickSpy.restore()
    });
});