import './my-ejercicio2.ts';
import { expect } from '@open-wc/testing';
import { Login } from "./my-ejercicio2.ts";

describe('Pruebas Ejercicio 2 Login', () => {
    let newLogin: Login

  beforeEach(() => {
    newLogin = new Login()
  })

  it('Retornar falso si corr-contraseña no estan definidos', () => {
    expect(newLogin._validos()).to.eqls(false)
  });

  it('Retornar false si el correo no está definido', () => {
    newLogin.contraseña = 'password'
    expect(newLogin._validos()).to.eqls(false)
  });

  it('Retornar false si la contraseña no está definida', () => {
    newLogin.correo = 'test@example.com'
    expect(newLogin._validos()).to.eqls(false)
  });

  it('Retornar true si el correo y la contraseña son válidos', () => {
    newLogin.correo = 'test@example.com'
    newLogin.contraseña = 'password'
    expect(newLogin._validos()).to.eqls(true)
  })
})